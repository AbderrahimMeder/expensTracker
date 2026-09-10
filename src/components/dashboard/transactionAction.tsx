



    import React, { useState, useEffect, useMemo } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '@/context/authContext';
import DashboardLayout from '@/components/dashboard/DashboardLayout';
import { DEFAULT_CATEGORIES, CURRENCIES } from '@/data/initialData';
import { getExchangeRate } from '@/utils/exchange';
import toast from 'react-hot-toast';
import {
  ArrowLeft,
  ArrowDownLeft,
  ArrowUpRight,
  Calendar,
  Clock,
  CreditCard,
  Building2,
  Wallet,
  Coins,
  DollarSign,
  Tag,
  FileText,
  CheckCircle2,
  Sparkles,
  ShieldCheck,
  Receipt,
  Utensils,
  Home,
  Car,
  ShoppingBag,
  Film,
  HeartPulse,
  Zap,
  GraduationCap,
  Briefcase,
  Laptop,
  TrendingUp,
  CircleEllipsis,
  Info,
  ChevronRight,
  Check,
  Loader2
} from 'lucide-react';

const CATEGORY_ICON_MAP: Record<string, React.ComponentType<{ size?: number; className?: string; style?: React.CSSProperties }>> = {
  Utensils,
  Home,
  Car,
  ShoppingBag,
  Film,
  HeartPulse,
  Zap,
  GraduationCap,
  Briefcase,
  Laptop,
  TrendingUp,
  Coins,
  CircleEllipsis,
};

const PAYMENT_METHODS = [
  { id: 'Credit Card', name: 'Credit Card', icon: CreditCard, desc: 'Visa / Mastercard / Amex' },
  { id: 'Debit Card', name: 'Debit Card', icon: CreditCard, desc: 'Direct checking card' },
  { id: 'Bank Transfer', name: 'Bank Transfer', icon: Building2, desc: 'ACH / Wire Transfer' },
  { id: 'Cash', name: 'Cash', icon: DollarSign, desc: 'Physical currency' },
  { id: 'PayPal', name: 'PayPal', icon: Wallet, desc: 'Digital wallet balance' },
  { id: 'Crypto', name: 'Crypto', icon: Coins, desc: 'USDT / BTC / ETH' },
];

const QUICK_AMOUNTS = [10, 25, 50, 100, 250, 500, 1000];

const EXPENSE_SUGGESTIONS = [
  'Grocery Supermarket',
  'Restaurant & Dining',
  'Monthly Apartment Rent',
  'Uber & Taxi Ride',
  'Electricity & Water Bill',
  'Coffee & Bakery',
  'Gym Membership',
  'Software Subscription',
];

const INCOME_SUGGESTIONS = [
  'Monthly Salary',
  'Freelance Client Project',
  'Consulting Fee',
  'Stock Dividend',
  'Investment Return',
  'Crypto Yield',
  'Performance Bonus',
  'Gift / Reimbursement',
];

export default function transactionAction() {
  const navigate = useNavigate();
  const { user } = useAuth();
  const APP_URL = 'http://localhost:8000';

  // Form State
  const [type, setType] = useState<'EXPENSE' | 'INCOME'>('EXPENSE');
  const [amount, setAmount] = useState<string>('');
  const [title, setTitle] = useState<string>('');
  const [category, setCategory] = useState<string>('cat-food');
  const [currency, setCurrency] = useState<string>(user?.currency || 'USD');
  const [date, setDate] = useState<string>(new Date().toISOString().split('T')[0]);
  const [time, setTime] = useState<string>(
    new Date().toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit' })
  );
  const [paymentMethod, setPaymentMethod] = useState<string>('Credit Card');
  const [description, setDescription] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [rate, setRate] = useState<number>(1);

  // Sync default category when switching type
  useEffect(() => {
    if (type === 'EXPENSE') {
      setCategory('cat-food');
    } else {
      setCategory('cat-salary');
    }
  }, [type]);

  // Fetch exchange rate
  useEffect(() => {
    let isMounted = true;
    const fetchRate = async () => {
      try {
        const r = await getExchangeRate(currency);
        if (isMounted) setRate(r || 1);
      } catch (err) {
        console.error('Failed to get exchange rate:', err);
      }
    };
    fetchRate();
    return () => {
      isMounted = false;
    };
  }, [currency]);

  // Filter available categories for current type
  const availableCategories = useMemo(() => {
    return DEFAULT_CATEGORIES.filter((c) =>
      type === 'EXPENSE' ? c.type === 'EXPENSE' : c.type === 'INCOME'
    );
  }, [type]);

  // Selected category metadata
  const selectedCategoryMeta = useMemo(() => {
    const found = DEFAULT_CATEGORIES.find(
      (c) => c.id === category || c.name.toLowerCase() === category.toLowerCase()
    );
    if (found) {
      const IconComp = CATEGORY_ICON_MAP[found.icon] || Tag;
      return {
        id: found.id,
        name: found.name,
        color: found.color,
        bg: found.bg,
        icon: IconComp,
      };
    }
    return {
      id: category,
      name: category || (type === 'EXPENSE' ? 'General Expense' : 'General Income'),
      color: type === 'EXPENSE' ? '#ef4444' : '#10b981',
      bg: type === 'EXPENSE' ? 'rgba(239, 68, 68, 0.15)' : 'rgba(16, 185, 129, 0.15)',
      icon: Tag,
    };
  }, [category, type]);

  // Handle Quick Amount addition
  const handleAddQuickAmount = (val: number) => {
    const current = parseFloat(amount) || 0;
    setAmount((current + val).toString());
  };

  // Set today / yesterday
  const setQuickDate = (daysAgo: number) => {
    const d = new Date();
    d.setDate(d.getDate() - daysAgo);
    setDate(d.toISOString().split('T')[0]);
  };

  // Submit Handler
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!amount || isNaN(parseFloat(amount)) || parseFloat(amount) <= 0) {
      toast.error('Please enter a valid amount greater than 0');
      return;
    }

    if (!title.trim()) {
      toast.error('Please provide a title or merchant for this transaction');
      return;
    }

    const token = localStorage.getItem('token');
    if (!token) {
      toast.error('Session expired. Please log in again.');
      navigate('/login');
      return;
    }

    setLoading(true);
    try {
      const payload = {
        user_id: user?.id,
        amount: parseFloat(amount),
        type: type,
        category: selectedCategoryMeta.name,
        payment_method: paymentMethod,
        description: description.trim() || title.trim(),
        title: title.trim(),
        currency: currency,
        date: date,
        time: time,
      };

      const response = await fetch(`${APP_URL}/api/transactions`, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      if (response.ok || data.status === 200 || data.status === 201) {
        toast.success(
          `${type === 'INCOME' ? 'Income' : 'Expense'} record added successfully!`
        );
        navigate('/transactions');
      } else {
        toast.error(data.message || 'Failed to save transaction');
      }
    } catch (error) {
      console.error('Transaction creation error:', error);
      toast.error('Network error. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const currentSuggestions = type === 'EXPENSE' ? EXPENSE_SUGGESTIONS : INCOME_SUGGESTIONS;
  const currencySymbol = CURRENCIES.find((c) => c.code === currency)?.symbol || '$';

  return (
    <DashboardLayout>
      <div style={{ maxWidth: '1240px', margin: '0 auto', paddingBottom: '3rem' }}>
        {/* Top Breadcrumbs & Header */}
        <div style={{ marginBottom: '2rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
            <Link
              to="/transactions"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.4rem',
                color: 'var(--text-secondary)',
                textDecoration: 'none',
                fontSize: '0.85rem',
                fontWeight: '600',
                padding: '0.35rem 0.75rem',
                borderRadius: 'var(--radius-md)',
                background: '#121212',
                border: '1px solid var(--border-subtle)',
                transition: 'all 0.15s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = '#ffffff';
                e.currentTarget.style.borderColor = 'var(--border-hover)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = 'var(--text-secondary)';
                e.currentTarget.style.borderColor = 'var(--border-subtle)';
              }}
            >
              <ArrowLeft size={15} />
              <span>Back to Ledger</span>
            </Link>

            <span style={{ color: 'var(--text-muted)' }}>/</span>

            <span
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.35rem',
                fontSize: '0.75rem',
                fontWeight: '700',
                padding: '0.2rem 0.6rem',
                borderRadius: '20px',
                background: 'rgba(16, 185, 129, 0.1)',
                color: '#10b981',
                border: '1px solid rgba(16, 185, 129, 0.25)',
              }}
            >
              <span
                style={{
                  width: '6px',
                  height: '6px',
                  borderRadius: '50%',
                  background: '#10b981',
                  boxShadow: '0 0 8px #10b981',
                }}
              />
              New Record Entry
            </span>
          </div>

          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '1rem',
            }}
          >
            <div>
              <h1
                style={{
                  fontSize: '1.85rem',
                  fontWeight: '800',
                  color: '#ffffff',
                  letterSpacing: '-0.02em',
                  margin: 0,
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.6rem',
                }}
              >
                Create Transaction
              </h1>
              <p
                style={{
                  fontSize: '0.875rem',
                  color: 'var(--text-secondary)',
                  margin: '0.35rem 0 0',
                }}
              >
                Log a financial flow with verified metadata, categorized accounting, and receipt generation.
              </p>
            </div>
          </div>
        </div>

        {/* Main Grid: Form (Left) & Live Receipt Preview (Right) */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'minmax(0, 1.35fr) minmax(320px, 0.9fr)',
            gap: '2rem',
            alignItems: 'start',
          }}
          className="create-tx-grid"
        >
          {/* Left Column: Form */}
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {/* 1. Transaction Type Selector */}
            <div
              className="glass-card"
              style={{
                padding: '1.5rem',
                background: '#121212',
                border: '1px solid var(--border-subtle)',
                borderRadius: 'var(--radius-lg)',
              }}
            >
              <label
                style={{
                  display: 'block',
                  fontSize: '0.8rem',
                  fontWeight: '700',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em',
                  color: 'var(--text-secondary)',
                  marginBottom: '0.85rem',
                }}
              >
                1. Select Cash Flow Type
              </label>

              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  gap: '1rem',
                }}
              >
                {/* Expense Option */}
                <button
                  type="button"
                  onClick={() => setType('EXPENSE')}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '1rem',
                    padding: '1rem 1.25rem',
                    borderRadius: 'var(--radius-md)',
                    border:
                      type === 'EXPENSE'
                        ? '2px solid #ef4444'
                        : '1px solid var(--border-subtle)',
                    background:
                      type === 'EXPENSE'
                        ? 'linear-gradient(135deg, rgba(239, 68, 68, 0.15) 0%, rgba(20, 20, 20, 0.95) 100%)'
                        : '#0e0e0e',
                    color: '#ffffff',
                    cursor: 'pointer',
                    textAlign: 'left',
                    transition: 'all 0.2s ease',
                    boxShadow:
                      type === 'EXPENSE' ? '0 0 20px rgba(239, 68, 68, 0.18)' : 'none',
                  }}
                >
                  <div
                    style={{
                      width: '42px',
                      height: '42px',
                      borderRadius: '10px',
                      background:
                        type === 'EXPENSE' ? '#ef4444' : 'rgba(239, 68, 68, 0.15)',
                      color: type === 'EXPENSE' ? '#ffffff' : '#f87171',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                    }}
                  >
                    <ArrowDownLeft size={22} />
                  </div>
                  <div style={{ flex: 1 }}>
                    <div
                      style={{
                        fontSize: '0.95rem',
                        fontWeight: '800',
                        color: type === 'EXPENSE' ? '#ffffff' : 'var(--text-secondary)',
                      }}
                    >
                      Expense (Outflow)
                    </div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: '2px' }}>
                      Bills, purchases, rent, dining
                    </div>
                  </div>
                  {type === 'EXPENSE' && <Check size={18} color="#ef4444" />}
                </button>

                {/* Income Option */}
                <button
                  type="button"
                  onClick={() => setType('INCOME')}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '1rem',
                    padding: '1rem 1.25rem',
                    borderRadius: 'var(--radius-md)',
                    border:
                      type === 'INCOME'
                        ? '2px solid #10b981'
                        : '1px solid var(--border-subtle)',
                    background:
                      type === 'INCOME'
                        ? 'linear-gradient(135deg, rgba(16, 185, 129, 0.15) 0%, rgba(20, 20, 20, 0.95) 100%)'
                        : '#0e0e0e',
                    color: '#ffffff',
                    cursor: 'pointer',
                    textAlign: 'left',
                    transition: 'all 0.2s ease',
                    boxShadow:
                      type === 'INCOME' ? '0 0 20px rgba(16, 185, 129, 0.18)' : 'none',
                  }}
                >
                  <div
                    style={{
                      width: '42px',
                      height: '42px',
                      borderRadius: '10px',
                      background:
                        type === 'INCOME' ? '#10b981' : 'rgba(16, 185, 129, 0.15)',
                      color: type === 'INCOME' ? '#000000' : '#10b981',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                    }}
                  >
                    <ArrowUpRight size={22} />
                  </div>
                  <div style={{ flex: 1 }}>
                    <div
                      style={{
                        fontSize: '0.95rem',
                        fontWeight: '800',
                        color: type === 'INCOME' ? '#ffffff' : 'var(--text-secondary)',
                      }}
                    >
                      Income (Inflow)
                    </div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: '2px' }}>
                      Salary, freelancing, dividends
                    </div>
                  </div>
                  {type === 'INCOME' && <Check size={18} color="#10b981" />}
                </button>
              </div>
            </div>

            {/* 2. Amount & Currency */}
            <div
              className="glass-card"
              style={{
                padding: '1.5rem',
                background: '#121212',
                border: '1px solid var(--border-subtle)',
                borderRadius: 'var(--radius-lg)',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginBottom: '0.85rem',
                }}
              >
                <label
                  style={{
                    fontSize: '0.8rem',
                    fontWeight: '700',
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em',
                    color: 'var(--text-secondary)',
                  }}
                >
                  2. Transaction Amount
                </label>
                <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                  Base rate: 1 {currency} ≈ {(1 * rate).toFixed(2)} {user?.currency || 'USD'}
                </span>
              </div>

              {/* Amount Input Row */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                  background: '#090909',
                  border: '1px solid var(--border-subtle)',
                  borderRadius: 'var(--radius-md)',
                  padding: '0.5rem 1rem',
                  transition: 'border-color 0.15s ease',
                }}
                onFocus={(e) => (e.currentTarget.style.borderColor = 'var(--accent-primary)')}
                onBlur={(e) => (e.currentTarget.style.borderColor = 'var(--border-subtle)')}
              >
                <div
                  style={{
                    fontSize: '1.75rem',
                    fontWeight: '800',
                    color: type === 'INCOME' ? '#10b981' : '#f87171',
                    userSelect: 'none',
                  }}
                >
                  {currencySymbol}
                </div>

                <input
                  type="number"
                  step="0.01"
                  min="0"
                  placeholder="0.00"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  style={{
                    width: '100%',
                    background: 'transparent',
                    border: 'none',
                    outline: 'none',
                    fontSize: '2rem',
                    fontWeight: '800',
                    color: '#ffffff',
                    fontFamily: 'var(--font-main)',
                  }}
                  required
                />

                {/* Currency Selector */}
                <select
                  value={currency}
                  onChange={(e) => setCurrency(e.target.value)}
                  style={{
                    background: '#181818',
                    border: '1px solid var(--border-subtle)',
                    borderRadius: 'var(--radius-sm)',
                    padding: '0.45rem 0.75rem',
                    color: '#ffffff',
                    fontWeight: '700',
                    fontSize: '0.85rem',
                    outline: 'none',
                    cursor: 'pointer',
                  }}
                >
                  {CURRENCIES.map((c) => (
                    <option key={c.code} value={c.code}>
                      {c.code} ({c.symbol})
                    </option>
                  ))}
                </select>
              </div>

              {/* Quick Amount Chips */}
              <div
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  alignItems: 'center',
                  gap: '0.5rem',
                  marginTop: '1rem',
                }}
              >
                <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Quick add:</span>
                {QUICK_AMOUNTS.map((val) => (
                  <button
                    key={val}
                    type="button"
                    onClick={() => handleAddQuickAmount(val)}
                    style={{
                      padding: '0.25rem 0.6rem',
                      background: '#161616',
                      border: '1px solid var(--border-subtle)',
                      borderRadius: '6px',
                      color: 'var(--text-secondary)',
                      fontSize: '0.75rem',
                      fontWeight: '600',
                      cursor: 'pointer',
                      transition: 'all 0.15s ease',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = '#222222';
                      e.currentTarget.style.color = '#ffffff';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = '#161616';
                      e.currentTarget.style.color = 'var(--text-secondary)';
                    }}
                  >
                    +{val}
                  </button>
                ))}
              </div>
            </div>

            {/* 3. Title & Payee with Suggestions */}
            <div
              className="glass-card"
              style={{
                padding: '1.5rem',
                background: '#121212',
                border: '1px solid var(--border-subtle)',
                borderRadius: 'var(--radius-lg)',
              }}
            >
              <label
                style={{
                  display: 'block',
                  fontSize: '0.8rem',
                  fontWeight: '700',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em',
                  color: 'var(--text-secondary)',
                  marginBottom: '0.65rem',
                }}
              >
                3. Title & Entity / Merchant
              </label>

              <div style={{ position: 'relative' }}>
                <input
                  type="text"
                  placeholder={
                    type === 'EXPENSE'
                      ? 'e.g. Whole Foods Market, Apple Store, Landlord...'
                      : 'e.g. Acme Corp Tech Salary, Stripe Payout, Upwork...'
                  }
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  style={{
                    width: '100%',
                    background: '#090909',
                    border: '1px solid var(--border-subtle)',
                    borderRadius: 'var(--radius-md)',
                    padding: '0.75rem 1rem',
                    color: '#ffffff',
                    fontSize: '0.925rem',
                    outline: 'none',
                    transition: 'border-color 0.15s ease',
                  }}
                  onFocus={(e) => (e.target.style.borderColor = 'var(--accent-primary)')}
                  onBlur={(e) => (e.target.style.borderColor = 'var(--border-subtle)')}
                  required
                />
              </div>

              {/* Suggestions */}
              <div style={{ marginTop: '0.85rem' }}>
                <div style={{ fontSize: '0.725rem', color: 'var(--text-muted)', marginBottom: '0.4rem' }}>
                  Quick presets:
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                  {currentSuggestions.slice(0, 5).map((sug) => (
                    <button
                      key={sug}
                      type="button"
                      onClick={() => setTitle(sug)}
                      style={{
                        padding: '0.25rem 0.65rem',
                        background: '#161616',
                        border: '1px solid var(--border-subtle)',
                        borderRadius: '5px',
                        color: 'var(--text-secondary)',
                        fontSize: '0.725rem',
                        cursor: 'pointer',
                        transition: 'all 0.15s ease',
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.color = '#ffffff';
                        e.currentTarget.style.borderColor = 'var(--border-hover)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.color = 'var(--text-secondary)';
                        e.currentTarget.style.borderColor = 'var(--border-subtle)';
                      }}
                    >
                      {sug}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* 4. Category Grid Picker */}
            <div
              className="glass-card"
              style={{
                padding: '1.5rem',
                background: '#121212',
                border: '1px solid var(--border-subtle)',
                borderRadius: 'var(--radius-lg)',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginBottom: '0.85rem',
                }}
              >
                <label
                  style={{
                    fontSize: '0.8rem',
                    fontWeight: '700',
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em',
                    color: 'var(--text-secondary)',
                  }}
                >
                  4. Accounting Category
                </label>
                <span
                  style={{
                    fontSize: '0.75rem',
                    padding: '2px 8px',
                    borderRadius: '12px',
                    background: selectedCategoryMeta.bg,
                    color: selectedCategoryMeta.color,
                    fontWeight: '700',
                  }}
                >
                  Selected: {selectedCategoryMeta.name}
                </span>
              </div>

              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fill, minmax(130px, 1fr))',
                  gap: '0.65rem',
                }}
              >
                {availableCategories.map((cat) => {
                  const IconComp = CATEGORY_ICON_MAP[cat.icon] || Tag;
                  const isSelected =
                    category === cat.id ||
                    category === cat.name ||
                    selectedCategoryMeta.name === cat.name;

                  return (
                    <button
                      key={cat.id}
                      type="button"
                      onClick={() => setCategory(cat.id)}
                      style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '0.5rem',
                        padding: '0.85rem 0.5rem',
                        borderRadius: 'var(--radius-md)',
                        border: isSelected
                          ? `1.5px solid ${cat.color}`
                          : '1px solid var(--border-subtle)',
                        background: isSelected ? cat.bg : '#0e0e0e',
                        cursor: 'pointer',
                        transition: 'all 0.15s ease',
                      }}
                      onMouseEnter={(e) => {
                        if (!isSelected) {
                          e.currentTarget.style.borderColor = 'var(--border-hover)';
                          e.currentTarget.style.background = '#151515';
                        }
                      }}
                      onMouseLeave={(e) => {
                        if (!isSelected) {
                          e.currentTarget.style.borderColor = 'var(--border-subtle)';
                          e.currentTarget.style.background = '#0e0e0e';
                        }
                      }}
                    >
                      <div
                        style={{
                          width: '32px',
                          height: '32px',
                          borderRadius: '8px',
                          background: isSelected ? cat.color : '#1c1c1c',
                          color: isSelected ? '#000000' : cat.color,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                        }}
                      >
                        <IconComp size={16} />
                      </div>
                      <span
                        style={{
                          fontSize: '0.75rem',
                          fontWeight: isSelected ? '700' : '500',
                          color: isSelected ? '#ffffff' : 'var(--text-secondary)',
                          textAlign: 'center',
                          lineHeight: '1.2',
                        }}
                      >
                        {cat.name}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* 5. Date, Time & Payment Method */}
            <div
              className="glass-card"
              style={{
                padding: '1.5rem',
                background: '#121212',
                border: '1px solid var(--border-subtle)',
                borderRadius: 'var(--radius-lg)',
              }}
            >
              <label
                style={{
                  display: 'block',
                  fontSize: '0.8rem',
                  fontWeight: '700',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em',
                  color: 'var(--text-secondary)',
                  marginBottom: '1rem',
                }}
              >
                5. Date, Time & Payment Method
              </label>

              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                  gap: '1rem',
                  marginBottom: '1.25rem',
                }}
              >
                {/* Date Input */}
                <div>
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      marginBottom: '0.4rem',
                    }}
                  >
                    <label style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>
                      Transaction Date
                    </label>
                    <div style={{ display: 'flex', gap: '0.3rem' }}>
                      <button
                        type="button"
                        onClick={() => setQuickDate(0)}
                        style={{
                          background: 'none',
                          border: 'none',
                          color: 'var(--accent-primary)',
                          fontSize: '0.675rem',
                          fontWeight: '700',
                          cursor: 'pointer',
                          padding: '0 2px',
                        }}
                      >
                        Today
                      </button>
                      <span style={{ color: 'var(--text-muted)', fontSize: '0.675rem' }}>•</span>
                      <button
                        type="button"
                        onClick={() => setQuickDate(1)}
                        style={{
                          background: 'none',
                          border: 'none',
                          color: 'var(--text-secondary)',
                          fontSize: '0.675rem',
                          cursor: 'pointer',
                          padding: '0 2px',
                        }}
                      >
                        Yesterday
                      </button>
                    </div>
                  </div>
                  <div style={{ position: 'relative' }}>
                    <Calendar
                      size={15}
                      color="var(--text-muted)"
                      style={{
                        position: 'absolute',
                        left: '0.75rem',
                        top: '50%',
                        transform: 'translateY(-50%)',
                      }}
                    />
                    <input
                      type="date"
                      value={date}
                      onChange={(e) => setDate(e.target.value)}
                      style={{
                        width: '100%',
                        background: '#090909',
                        border: '1px solid var(--border-subtle)',
                        borderRadius: 'var(--radius-md)',
                        padding: '0.65rem 0.75rem 0.65rem 2.2rem',
                        color: '#ffffff',
                        fontSize: '0.85rem',
                        outline: 'none',
                        colorScheme: 'dark',
                      }}
                      required
                    />
                  </div>
                </div>

                {/* Time Input */}
                <div>
                  <label
                    style={{
                      display: 'block',
                      fontSize: '0.75rem',
                      color: 'var(--text-secondary)',
                      marginBottom: '0.4rem',
                    }}
                  >
                    Time of Transaction
                  </label>
                  <div style={{ position: 'relative' }}>
                    <Clock
                      size={15}
                      color="var(--text-muted)"
                      style={{
                        position: 'absolute',
                        left: '0.75rem',
                        top: '50%',
                        transform: 'translateY(-50%)',
                      }}
                    />
                    <input
                      type="time"
                      value={time}
                      onChange={(e) => setTime(e.target.value)}
                      style={{
                        width: '100%',
                        background: '#090909',
                        border: '1px solid var(--border-subtle)',
                        borderRadius: 'var(--radius-md)',
                        padding: '0.65rem 0.75rem 0.65rem 2.2rem',
                        color: '#ffffff',
                        fontSize: '0.85rem',
                        outline: 'none',
                        colorScheme: 'dark',
                      }}
                    />
                  </div>
                </div>
              </div>

              {/* Payment Methods Grid */}
              <div>
                <label
                  style={{
                    display: 'block',
                    fontSize: '0.75rem',
                    color: 'var(--text-secondary)',
                    marginBottom: '0.6rem',
                  }}
                >
                  Payment Method
                </label>
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fill, minmax(140px, 1fr))',
                    gap: '0.6rem',
                  }}
                >
                  {PAYMENT_METHODS.map((pm) => {
                    const MethodIcon = pm.icon;
                    const isSelected = paymentMethod === pm.id;
                    return (
                      <button
                        key={pm.id}
                        type="button"
                        onClick={() => setPaymentMethod(pm.id)}
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '0.6rem',
                          padding: '0.65rem 0.85rem',
                          borderRadius: 'var(--radius-md)',
                          border: isSelected
                            ? '1px solid var(--accent-primary)'
                            : '1px solid var(--border-subtle)',
                          background: isSelected ? 'rgba(16, 185, 129, 0.08)' : '#0e0e0e',
                          color: isSelected ? '#ffffff' : 'var(--text-secondary)',
                          cursor: 'pointer',
                          textAlign: 'left',
                          transition: 'all 0.15s ease',
                        }}
                      >
                        <MethodIcon
                          size={16}
                          color={isSelected ? 'var(--accent-primary)' : 'var(--text-muted)'}
                        />
                        <span style={{ fontSize: '0.8rem', fontWeight: isSelected ? '700' : '500' }}>
                          {pm.name}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* 6. Description & Receipt Notes */}
            <div
              className="glass-card"
              style={{
                padding: '1.5rem',
                background: '#121212',
                border: '1px solid var(--border-subtle)',
                borderRadius: 'var(--radius-lg)',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginBottom: '0.65rem',
                }}
              >
                <label
                  style={{
                    fontSize: '0.8rem',
                    fontWeight: '700',
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em',
                    color: 'var(--text-secondary)',
                  }}
                >
                  6. Notes / Memo (Optional)
                </label>
                <span style={{ fontSize: '0.725rem', color: 'var(--text-muted)' }}>
                  {description.length}/250 chars
                </span>
              </div>

              <textarea
                rows={3}
                maxLength={250}
                placeholder="Add any extra notes, tax deduction tags, or receipt reference details..."
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                style={{
                  width: '100%',
                  background: '#090909',
                  border: '1px solid var(--border-subtle)',
                  borderRadius: 'var(--radius-md)',
                  padding: '0.75rem 1rem',
                  color: '#ffffff',
                  fontSize: '0.85rem',
                  outline: 'none',
                  resize: 'vertical',
                  fontFamily: 'var(--font-main)',
                  transition: 'border-color 0.15s ease',
                }}
                onFocus={(e) => (e.target.style.borderColor = 'var(--accent-primary)')}
                onBlur={(e) => (e.target.style.borderColor = 'var(--border-subtle)')}
              />
            </div>

            {/* Submit & Cancel Buttons */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginTop: '0.5rem' }}>
              <button
                type="submit"
                disabled={loading}
                className="btn btn-primary"
                style={{
                  flex: 1,
                  padding: '0.85rem 1.5rem',
                  fontSize: '0.95rem',
                  fontWeight: '700',
                  gap: '0.5rem',
                  opacity: loading ? 0.7 : 1,
                  cursor: loading ? 'not-allowed' : 'pointer',
                }}
              >
                {loading ? (
                  <>
                    <Loader2 size={18} className="animate-spin" />
                    <span>Recording Transaction...</span>
                  </>
                ) : (
                  <>
                    <CheckCircle2 size={18} />
                    <span>Record {type === 'INCOME' ? 'Income' : 'Expense'}</span>
                  </>
                )}
              </button>

              <button
                type="button"
                onClick={() => navigate('/transactions')}
                className="btn btn-secondary"
                style={{
                  padding: '0.85rem 1.25rem',
                  fontSize: '0.95rem',
                  fontWeight: '600',
                }}
              >
                Cancel
              </button>
            </div>
          </form>

          {/* Right Column: Live Digital Receipt Voucher & Guidance */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {/* Live Voucher Card */}
            <div
              className="glass-card"
              style={{
                padding: '1.75rem',
                background: 'linear-gradient(180deg, #141414 0%, #0a0a0a 100%)',
                border: '1px solid var(--border-subtle)',
                borderRadius: 'var(--radius-lg)',
                position: 'relative',
                overflow: 'hidden',
                boxShadow: '0 20px 40px rgba(0, 0, 0, 0.4)',
              }}
            >
              {/* Top Accent Strip */}
              <div
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  height: '4px',
                  background:
                    type === 'INCOME'
                      ? 'linear-gradient(90deg, #10b981 0%, #059669 100%)'
                      : 'linear-gradient(90deg, #ef4444 0%, #dc2626 100%)',
                }}
              />

              {/* Header */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginBottom: '1.5rem',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <Receipt size={18} color="var(--accent-primary)" />
                  <span
                    style={{
                      fontSize: '0.85rem',
                      fontWeight: '800',
                      color: '#ffffff',
                      letterSpacing: '0.04em',
                      textTransform: 'uppercase',
                    }}
                  >
                    Digital Voucher
                  </span>
                </div>

                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px',
                    fontSize: '0.675rem',
                    fontWeight: '700',
                    color: '#10b981',
                    background: 'rgba(16, 185, 129, 0.1)',
                    padding: '2px 8px',
                    borderRadius: '12px',
                    border: '1px solid rgba(16, 185, 129, 0.25)',
                  }}
                >
                  <ShieldCheck size={12} />
                  <span>Live Preview</span>
                </div>
              </div>

              {/* Amount Center */}
              <div
                style={{
                  textAlign: 'center',
                  padding: '1.5rem 1rem',
                  background: '#0a0a0a',
                  borderRadius: 'var(--radius-md)',
                  border: '1px dashed var(--border-subtle)',
                  marginBottom: '1.5rem',
                }}
              >
                <div
                  style={{
                    fontSize: '0.75rem',
                    color: 'var(--text-muted)',
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em',
                    marginBottom: '0.35rem',
                  }}
                >
                  {type === 'INCOME' ? 'Credit Flow (Inflow)' : 'Debit Flow (Outflow)'}
                </div>

                <div
                  style={{
                    fontSize: '2.4rem',
                    fontWeight: '800',
                    color: type === 'INCOME' ? '#10b981' : '#f87171',
                    letterSpacing: '-0.03em',
                    lineHeight: 1.1,
                  }}
                >
                  {type === 'INCOME' ? '+' : '-'} {currencySymbol}
                  {amount ? parseFloat(amount).toFixed(2) : '0.00'}
                </div>

                {currency !== (user?.currency || 'USD') && amount && (
                  <div
                    style={{
                      fontSize: '0.775rem',
                      color: 'var(--text-secondary)',
                      marginTop: '0.4rem',
                    }}
                  >
                    ≈ {(parseFloat(amount) * rate).toFixed(2)} {user?.currency || 'USD'}
                  </div>
                )}
              </div>

              {/* Voucher Meta Rows */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    fontSize: '0.8rem',
                  }}
                >
                  <span style={{ color: 'var(--text-muted)' }}>Title / Entity:</span>
                  <span style={{ fontWeight: '700', color: '#ffffff' }}>
                    {title.trim() || 'Untitled Transaction'}
                  </span>
                </div>

                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    fontSize: '0.8rem',
                  }}
                >
                  <span style={{ color: 'var(--text-muted)' }}>Category:</span>
                  <span
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.35rem',
                      fontWeight: '700',
                      color: selectedCategoryMeta.color,
                      background: selectedCategoryMeta.bg,
                      padding: '2px 8px',
                      borderRadius: '6px',
                      fontSize: '0.75rem',
                    }}
                  >
                    {selectedCategoryMeta.name}
                  </span>
                </div>

                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    fontSize: '0.8rem',
                  }}
                >
                  <span style={{ color: 'var(--text-muted)' }}>Payment Method:</span>
                  <span style={{ fontWeight: '600', color: 'var(--text-secondary)' }}>
                    {paymentMethod}
                  </span>
                </div>

                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    fontSize: '0.8rem',
                  }}
                >
                  <span style={{ color: 'var(--text-muted)' }}>Date & Time:</span>
                  <span style={{ fontWeight: '600', color: 'var(--text-secondary)' }}>
                    {date} • {time}
                  </span>
                </div>

                {description.trim() && (
                  <div
                    style={{
                      fontSize: '0.775rem',
                      color: 'var(--text-muted)',
                      borderTop: '1px solid var(--border-subtle)',
                      paddingTop: '0.75rem',
                      fontStyle: 'italic',
                    }}
                  >
                    "{description}"
                  </div>
                )}
              </div>

              {/* Decorative Barcode Bottom */}
              <div
                style={{
                  marginTop: '1.5rem',
                  paddingTop: '1rem',
                  borderTop: '1px dashed var(--border-subtle)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}
              >
                <div style={{ display: 'flex', gap: '2px', alignItems: 'center' }}>
                  {[12, 24, 8, 18, 14, 28, 6, 20, 16, 10, 22, 12, 18, 14, 26, 8, 16].map((h, i) => (
                    <div
                      key={i}
                      style={{
                        width: i % 2 === 0 ? '2px' : '3px',
                        height: `${h}px`,
                        background: '#333333',
                        borderRadius: '1px',
                      }}
                    />
                  ))}
                </div>
                <span
                  style={{
                    fontSize: '0.7rem',
                    fontFamily: 'monospace',
                    color: 'var(--text-muted)',
                  }}
                >
                  FIN-{Date.now().toString().slice(-6)}
                </span>
              </div>
            </div>

            {/* Helper Guidance Card */}
            <div
              className="glass-card"
              style={{
                padding: '1.25rem',
                background: '#101010',
                border: '1px solid var(--border-subtle)',
                borderRadius: 'var(--radius-lg)',
                display: 'flex',
                gap: '0.75rem',
                alignItems: 'flex-start',
              }}
            >
              <Info size={18} color="var(--accent-primary)" style={{ flexShrink: 0, marginTop: '2px' }} />
              <div>
                <div style={{ fontSize: '0.825rem', fontWeight: '700', color: '#ffffff' }}>
                  Automated Category Analytics
                </div>
                <p
                  style={{
                    fontSize: '0.775rem',
                    color: 'var(--text-secondary)',
                    margin: '0.25rem 0 0',
                    lineHeight: '1.4',
                  }}
                >
                  Transactions added here immediately update your monthly budget tracking, category breakdowns, and exportable statements.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};
