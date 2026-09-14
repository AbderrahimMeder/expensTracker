import React, { useState, useEffect, useMemo } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '@/context/authContext';
import { , CURRENCIES } from '@/data/initialData';
import toast from 'react-hot-toast';
import {
  ArrowLeft,
  ArrowDownLeft,
  ArrowUpRight,
  Calendar,
  Clock,
  CheckCircle2,
  Loader2,
  DollarSign,
  Tag,
  CreditCard,
  FileText
} from 'lucide-react';
import type { Category,Transaction } from '@/types';
const PAYMENT_METHODS = [
  'Credit Card',
  'Debit Card',
  'Bank Transfer',
  'Cash',
  'PayPal',
  'Crypto',
];

const QUICK_AMOUNTS = [10, 25, 50, 100, 250];

interface TransactionProps {
  categories: Category[];
  paymentMethodProps:Transaction[];
}
export default function TransactionAction(
  {categories,paymentMethodProps}:TransactionProps
) {
  const navigate = useNavigate();
  const { user } = useAuth();
  const APP_URL = 'http://localhost:8000';

  // Form State
  const [type, setType] = useState<'EXPENSE' | 'INCOME'>('EXPENSE');
  const [title, setTitle] = useState<string>('');
  const [amount, setAmount] = useState<string>('');
  const [currency, setCurrency] = useState<string>(user?.currency || 'USD');
  const [category, setCategory] = useState<string>('cat-food');
  const [date, setDate] = useState<string>(new Date().toISOString().split('T')[0]);
  const [time, setTime] = useState<string>(
    new Date().toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit' })
  );
  const [paymentMethod, setPaymentMethod] = useState<string>('Credit Card');
  const [description, setDescription] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const fetchCategories =async () => {
    const token = localStorage.getItem('token');
    if (!token) {
      toast.error('Session expired. Please log in again.');
      navigate('/login');
      return;
    }
    const response = await fetch(`${APP_URL}/api/categories`, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    });
    const data = await response.json();
    
  }
  useEffect(() => {
    fetchCategories();
  }, []);
  // Sync category default when changing type
  useEffect(() => {
    if (type === 'EXPENSE') {
      setCategory('cat-food');
    } else {
      setCategory('cat-salary');
    }
  }, [type]);

  // Find category name for API
  const categoryName = useMemo(() => {
    const found = DEFAULT_CATEGORIES.find(
      (c) => c.id === category || c.name.toLowerCase() === category.toLowerCase()
    );
    return found ? found.name : category;
  }, [category]);

  const handleAddQuickAmount = (val: number) => {
    const current = parseFloat(amount) || 0;
    setAmount((current + val).toString());
  };

  const setQuickDate = (daysAgo: number) => {
    const d = new Date();
    d.setDate(d.getDate() - daysAgo);
    setDate(d.toISOString().split('T')[0]);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!amount || isNaN(parseFloat(amount)) || parseFloat(amount) <= 0) {
      toast.error('Please enter a valid amount greater than 0');
      return;
    }

    if (!title.trim()) {
      toast.error('Please enter a title');
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
        category: categoryName,
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
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      if (response.ok || data.status === 200 || data.status === 201) {
        toast.success(
          `${type === 'INCOME' ? 'Income' : 'Expense'} recorded successfully`
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

  const currencySymbol = CURRENCIES.find((c) => c.code === currency)?.symbol || '$';

  return (
    <div style={{ maxWidth: '640px', margin: '0 auto', paddingBottom: '3rem' }}>
      {/* Top Header */}
      <div style={{ marginBottom: '1.5rem' }}>
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
            borderRadius: 'var(--radius-sm)',
            background: '#121212',
            border: '1px solid var(--border-subtle)',
            marginBottom: '1rem',
            transition: 'all 0.15s ease',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.color = '#ffffff';
            e.currentTarget.style.borderColor = 'var(--border-hover)';
            e.currentTarget.style.background = '#1a1a1a';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.color = 'var(--text-secondary)';
            e.currentTarget.style.borderColor = 'var(--border-subtle)';
            e.currentTarget.style.background = '#121212';
          }}
        >
          <ArrowLeft size={14} />
          <span>Back to Transactions</span>
        </Link>
        <h1 style={{ fontSize: '1.5rem', fontWeight: '700', color: '#ffffff', margin: 0 }}>
          New Transaction
        </h1>
        <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', margin: '0.25rem 0 0' }}>
          Fill in the fields below to record a new transaction.
        </p>
      </div>

      {/* Form Container */}
      <form
        onSubmit={handleSubmit}
        style={{
          background: '#121212',
          border: '1px solid var(--border-subtle)',
          borderRadius: 'var(--radius-lg)',
          padding: '1.75rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '1.25rem',
          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)',
        }}
      >
        {/* 1. Styled Type Toggle Buttons */}
        <div>
          <label
            style={{
              display: 'block',
              fontSize: '0.775rem',
              fontWeight: '700',
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
              color: 'var(--text-secondary)',
              marginBottom: '0.5rem',
            }}
          >
            Transaction Type
          </label>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '0.75rem',
            }}
          >
            {/* Expense Button */}
            <button
              type="button"
              onClick={() => setType('EXPENSE')}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.5rem',
                padding: '0.75rem 1rem',
                borderRadius: 'var(--radius-md)',
                border:
                  type === 'EXPENSE'
                    ? '1.5px solid #ef4444'
                    : '1px solid var(--border-subtle)',
                background:
                  type === 'EXPENSE'
                    ? 'rgba(239, 68, 68, 0.12)'
                    : '#0a0a0a',
                color: type === 'EXPENSE' ? '#ef4444' : 'var(--text-secondary)',
                fontSize: '0.9rem',
                fontWeight: '700',
                cursor: 'pointer',
                transition: 'all 0.15s ease',
              }}
            >
              <ArrowDownLeft size={18} />
              <span>Expense</span>
            </button>

            {/* Income Button */}
            <button
              type="button"
              onClick={() => setType('INCOME')}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.5rem',
                padding: '0.75rem 1rem',
                borderRadius: 'var(--radius-md)',
                border:
                  type === 'INCOME'
                    ? '1.5px solid #10b981'
                    : '1px solid var(--border-subtle)',
                background:
                  type === 'INCOME'
                    ? 'rgba(16, 185, 129, 0.12)'
                    : '#0a0a0a',
                color: type === 'INCOME' ? '#10b981' : 'var(--text-secondary)',
                fontSize: '0.9rem',
                fontWeight: '700',
                cursor: 'pointer',
                transition: 'all 0.15s ease',
              }}
            >
              <ArrowUpRight size={18} />
              <span>Income</span>
            </button>
          </div>
        </div>

        {/* 2. Title / Merchant */}
        <div>
          <label
            style={{
              display: 'block',
              fontSize: '0.775rem',
              fontWeight: '700',
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
              color: 'var(--text-secondary)',
              marginBottom: '0.4rem',
            }}
          >
            Title / Merchant
          </label>
          <input
            type="text"
            placeholder={
              type === 'EXPENSE'
                ? 'e.g. Supermarket, Netflix, Electricity'
                : 'e.g. Tech Salary, Freelance project'
            }
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            style={{
              width: '100%',
              padding: '0.75rem 1rem',
              background: '#090909',
              border: '1px solid var(--border-subtle)',
              borderRadius: 'var(--radius-md)',
              color: '#ffffff',
              fontSize: '0.9rem',
              outline: 'none',
              boxSizing: 'border-box',
              fontFamily: 'inherit',
              transition: 'border-color 0.15s ease',
            }}
            onFocus={(e) => (e.target.style.borderColor = 'var(--accent-primary)')}
            onBlur={(e) => (e.target.style.borderColor = 'var(--border-subtle)')}
            required
          />
        </div>

        {/* 3. Amount & Currency with Quick-Add Buttons */}
        <div>
          <label
            style={{
              display: 'block',
              fontSize: '0.775rem',
              fontWeight: '700',
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
              color: 'var(--text-secondary)',
              marginBottom: '0.4rem',
            }}
          >
            Amount & Currency
          </label>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 120px', gap: '0.75rem' }}>
            {/* Amount Input */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                background: '#090909',
                border: '1px solid var(--border-subtle)',
                borderRadius: 'var(--radius-md)',
                padding: '0 0.85rem',
                transition: 'border-color 0.15s ease',
              }}
              id="amount-box"
            >
              <span
                style={{
                  fontSize: '1.1rem',
                  fontWeight: '700',
                  color: 'var(--text-muted)',
                  marginRight: '0.5rem',
                }}
              >
                {currencySymbol}
              </span>
              <input
                type="number"
                step="any"
                min="0.01"
                placeholder="0.00"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                onFocus={() => {
                  const el = document.getElementById('amount-box');
                  if (el) el.style.borderColor = 'var(--accent-primary)';
                }}
                onBlur={() => {
                  const el = document.getElementById('amount-box');
                  if (el) el.style.borderColor = 'var(--border-subtle)';
                }}
                style={{
                  width: '100%',
                  padding: '0.75rem 0',
                  background: 'transparent',
                  border: 'none',
                  color: '#ffffff',
                  fontSize: '1.1rem',
                  fontWeight: '700',
                  outline: 'none',
                  fontFamily: 'inherit',
                }}
                required
              />
            </div>

            {/* Currency Select */}
            <select
              value={currency}
              onChange={(e) => setCurrency(e.target.value)}
              style={{
                width: '100%',
                padding: '0.75rem 0.85rem',
                background: '#090909',
                border: '1px solid var(--border-subtle)',
                borderRadius: 'var(--radius-md)',
                color: '#ffffff',
                fontSize: '0.85rem',
                fontWeight: '600',
                outline: 'none',
                cursor: 'pointer',
                boxSizing: 'border-box',
                fontFamily: 'inherit',
                transition: 'border-color 0.15s ease',
              }}
              onFocus={(e) => (e.target.style.borderColor = 'var(--accent-primary)')}
              onBlur={(e) => (e.target.style.borderColor = 'var(--border-subtle)')}
            >
              {CURRENCIES.map((c) => (
                <option key={c.code} value={c.code} style={{ background: '#111', color: '#fff' }}>
                  {c.code} ({c.symbol})
                </option>
              ))}
            </select>
          </div>

          {/* Quick Amount Pill Buttons */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', marginTop: '0.5rem', flexWrap: 'wrap' }}>
            <span style={{ fontSize: '0.725rem', color: 'var(--text-muted)' }}>Add:</span>
            {QUICK_AMOUNTS.map((val) => (
              <button
                key={val}
                type="button"
                onClick={() => handleAddQuickAmount(val)}
                style={{
                  padding: '0.25rem 0.6rem',
                  borderRadius: 'var(--radius-sm)',
                  background: '#181818',
                  border: '1px solid var(--border-subtle)',
                  color: 'var(--text-secondary)',
                  fontSize: '0.75rem',
                  fontWeight: '600',
                  cursor: 'pointer',
                  transition: 'all 0.15s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = '#ffffff';
                  e.currentTarget.style.borderColor = 'var(--border-hover)';
                  e.currentTarget.style.background = '#222222';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = 'var(--text-secondary)';
                  e.currentTarget.style.borderColor = 'var(--border-subtle)';
                  e.currentTarget.style.background = '#181818';
                }}
              >
                +{val}
              </button>
            ))}
            {amount && (
              <button
                type="button"
                onClick={() => setAmount('')}
                style={{
                  padding: '0.25rem 0.5rem',
                  background: 'transparent',
                  border: 'none',
                  color: '#ef4444',
                  fontSize: '0.725rem',
                  fontWeight: '600',
                  cursor: 'pointer',
                  marginLeft: 'auto',
                }}
              >
                Clear
              </button>
            )}
          </div>
        </div>

        {/* 4. Category & Payment Method */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
          <div>
            <label
              style={{
                display: 'block',
                fontSize: '0.775rem',
                fontWeight: '700',
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
                color: 'var(--text-secondary)',
                marginBottom: '0.4rem',
              }}
            >
              Category
            </label>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              style={{
                width: '100%',
                padding: '0.75rem 0.85rem',
                background: '#090909',
                border: '1px solid var(--border-subtle)',
                borderRadius: 'var(--radius-md)',
                color: '#ffffff',
                fontSize: '0.85rem',
                outline: 'none',
                boxSizing: 'border-box',
                fontFamily: 'inherit',
                transition: 'border-color 0.15s ease',
                cursor: 'pointer',
              }}
              onFocus={(e) => (e.target.style.borderColor = 'var(--accent-primary)')}
              onBlur={(e) => (e.target.style.borderColor = 'var(--border-subtle)')}
            >
              {categories.map((cat) => (
                <option key={cat.id} value={cat.slug} style={{ background: '#111', color: '#fff' }}>
                  {cat.name}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label
              style={{
                display: 'block',
                fontSize: '0.775rem',
                fontWeight: '700',
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
                color: 'var(--text-secondary)',
                marginBottom: '0.4rem',
              }}
            >
              Payment Method
            </label>
            <select
              value={paymentMethod}
              onChange={(e) => setPaymentMethod(e.target.value)}
              style={{
                width: '100%',
                padding: '0.75rem 0.85rem',
                background: '#090909',
                border: '1px solid var(--border-subtle)',
                borderRadius: 'var(--radius-md)',
                color: '#ffffff',
                fontSize: '0.85rem',
                outline: 'none',
                boxSizing: 'border-box',
                fontFamily: 'inherit',
                transition: 'border-color 0.15s ease',
                cursor: 'pointer',
              }}
              onFocus={(e) => (e.target.style.borderColor = 'var(--accent-primary)')}
              onBlur={(e) => (e.target.style.borderColor = 'var(--border-subtle)')}
            >
              {PAYMENT_METHODS.map((pm) => (
                <option key={pm} value={pm} style={{ background: '#111', color: '#fff' }}>
                  {pm}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* 5. Date & Time */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.4rem' }}>
              <label
                style={{
                  fontSize: '0.775rem',
                  fontWeight: '700',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em',
                  color: 'var(--text-secondary)',
                }}
              >
                Date
              </label>
              <div style={{ display: 'flex', gap: '0.35rem' }}>
                <button
                  type="button"
                  onClick={() => setQuickDate(0)}
                  style={{
                    background: 'none',
                    border: 'none',
                    color: 'var(--accent-primary)',
                    fontSize: '0.7rem',
                    fontWeight: '700',
                    cursor: 'pointer',
                    padding: 0,
                  }}
                >
                  Today
                </button>
                <span style={{ color: 'var(--text-muted)', fontSize: '0.7rem' }}>•</span>
                <button
                  type="button"
                  onClick={() => setQuickDate(1)}
                  style={{
                    background: 'none',
                    border: 'none',
                    color: 'var(--text-secondary)',
                    fontSize: '0.7rem',
                    cursor: 'pointer',
                    padding: 0,
                  }}
                >
                  Yesterday
                </button>
              </div>
            </div>
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              style={{
                width: '100%',
                padding: '0.75rem 0.85rem',
                background: '#090909',
                border: '1px solid var(--border-subtle)',
                borderRadius: 'var(--radius-md)',
                color: '#ffffff',
                fontSize: '0.85rem',
                outline: 'none',
                boxSizing: 'border-box',
                fontFamily: 'inherit',
                colorScheme: 'dark',
              }}
              required
            />
          </div>

          <div>
            <label
              style={{
                display: 'block',
                fontSize: '0.775rem',
                fontWeight: '700',
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
                color: 'var(--text-secondary)',
                marginBottom: '0.4rem',
              }}
            >
              Time
            </label>
            <input
              type="time"
              value={time}
              onChange={(e) => setTime(e.target.value)}
              style={{
                width: '100%',
                padding: '0.75rem 0.85rem',
                background: '#090909',
                border: '1px solid var(--border-subtle)',
                borderRadius: 'var(--radius-md)',
                color: '#ffffff',
                fontSize: '0.85rem',
                outline: 'none',
                boxSizing: 'border-box',
                fontFamily: 'inherit',
                colorScheme: 'dark',
              }}
            />
          </div>
        </div>

        {/* 6. Notes (Optional) */}
        <div>
          <label
            style={{
              display: 'block',
              fontSize: '0.775rem',
              fontWeight: '700',
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
              color: 'var(--text-secondary)',
              marginBottom: '0.4rem',
            }}
          >
            Notes / Memo (Optional)
          </label>
          <textarea
            rows={3}
            placeholder="Add any extra notes or reference..."
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            style={{
              width: '100%',
              padding: '0.75rem 0.85rem',
              background: '#090909',
              border: '1px solid var(--border-subtle)',
              borderRadius: 'var(--radius-md)',
              color: '#ffffff',
              fontSize: '0.85rem',
              outline: 'none',
              resize: 'vertical',
              boxSizing: 'border-box',
              fontFamily: 'inherit',
              transition: 'border-color 0.15s ease',
            }}
            onFocus={(e) => (e.target.style.borderColor = 'var(--accent-primary)')}
            onBlur={(e) => (e.target.style.borderColor = 'var(--border-subtle)')}
          />
        </div>

        {/* 7. Action Buttons */}
        <div style={{ display: 'flex', gap: '0.75rem', marginTop: '0.5rem' }}>
          <button
            type="submit"
            disabled={loading}
            style={{
              flex: 1,
              padding: '0.8rem 1.5rem',
              background: type === 'EXPENSE' ? '#ef4444' : 'var(--accent-primary)',
              color: type === 'EXPENSE' ? '#ffffff' : '#000000',
              border: 'none',
              borderRadius: 'var(--radius-md)',
              fontSize: '0.9rem',
              fontWeight: '700',
              cursor: loading ? 'not-allowed' : 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.5rem',
              transition: 'all 0.15s ease',
              boxShadow:
                type === 'EXPENSE'
                  ? '0 0 16px rgba(239, 68, 68, 0.25)'
                  : 'var(--accent-glow)',
            }}
          >
            {loading ? (
              <>
                <Loader2 size={16} className="animate-spin" />
                <span>Saving...</span>
              </>
            ) : (
              <>
                <CheckCircle2 size={16} />
                <span>Save {type === 'INCOME' ? 'Income' : 'Expense'}</span>
              </>
            )}
          </button>

          <button
            type="button"
            onClick={() => navigate('/transactions')}
            style={{
              padding: '0.8rem 1.5rem',
              background: '#181818',
              color: 'var(--text-secondary)',
              border: '1px solid var(--border-subtle)',
              borderRadius: 'var(--radius-md)',
              fontSize: '0.9rem',
              fontWeight: '600',
              cursor: 'pointer',
              transition: 'all 0.15s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = '#ffffff';
              e.currentTarget.style.borderColor = 'var(--border-hover)';
              e.currentTarget.style.background = '#222222';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = 'var(--text-secondary)';
              e.currentTarget.style.borderColor = 'var(--border-subtle)';
              e.currentTarget.style.background = '#181818';
            }}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}
