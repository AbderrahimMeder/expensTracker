import React, { useState } from 'react';
import {
  X,
  Plus,
  TrendingDown,
  TrendingUp,
  DollarSign,
  Tag,
  Calendar,
  CreditCard,
  FileText,
  Check
} from 'lucide-react';
import { DEFAULT_CATEGORIES, CURRENCIES } from '../../data/initialData';
import toast from 'react-hot-toast';

export default function AddTransactionModal({
  isOpen,
  onClose,
  initialType = 'expense',
  currency = 'USD',
  onSave
}) {
  if (!isOpen) return null;

  const [type, setType] = useState(initialType);
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState(type === 'expense' ? 'cat-food' : 'cat-salary');
  const [date, setDate] = useState(new Date().toISOString().slice(0, 10));
  const [paymentMethod, setPaymentMethod] = useState('Credit Card');
  const [notes, setNotes] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const availableCategories = DEFAULT_CATEGORIES.filter(c => c.type === type);

  const handleTypeChange = (newType) => {
    setType(newType);
    const firstCat = DEFAULT_CATEGORIES.find(c => c.type === newType);
    if (firstCat) setCategory(firstCat.id);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) {
      toast.error('Please provide a title or description');
      return;
    }
    const numAmount = parseFloat(amount);
    if (isNaN(numAmount) || numAmount <= 0) {
      toast.error('Please provide a valid positive amount');
      return;
    }

    setIsSubmitting(true);

    const newTx = {
      id: `tx-${Date.now()}`,
      type,
      title: title.trim(),
      description: notes.trim() || title.trim(),
      amount: numAmount,
      category,
      date,
      time: new Intl.DateTimeFormat('en-US', { hour: 'numeric', minute: 'numeric', hour12: true }).format(new Date()),
      paymentMethod,
      status: 'Completed',
    };

    setTimeout(() => {
      onSave(newTx);
      setIsSubmitting(false);
      toast.success(`${type === 'income' ? 'Income' : 'Expense'} recorded successfully!`);
      onClose();
    }, 200);
  };

  const currencyObj = CURRENCIES.find(c => c.code === currency) || CURRENCIES[0];

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div
        className="modal-content"
        style={{ maxWidth: '480px' }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="modal-header">
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
            <div style={{
              width: '32px',
              height: '32px',
              borderRadius: '8px',
              background: type === 'income' ? 'rgba(16, 185, 129, 0.15)' : 'rgba(239, 68, 68, 0.15)',
              color: type === 'income' ? '#10b981' : '#ef4444',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
              {type === 'income' ? <TrendingUp size={18} /> : <TrendingDown size={18} />}
            </div>
            <div>
              <h3 style={{ fontSize: '1.05rem', fontWeight: '800', color: '#ffffff', margin: 0 }}>
                {type === 'income' ? 'Add New Income' : 'Add New Expense'}
              </h3>
              <p style={{ fontSize: '0.725rem', color: 'var(--text-muted)', margin: 0 }}>
                Track your financial records with full categorization
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="btn-icon"
            style={{ padding: '0.4rem', border: 'none', background: 'transparent' }}
          >
            <X size={18} />
          </button>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="modal-body" style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {/* Type Toggle Tabs */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              background: '#0a0a0a',
              padding: '0.3rem',
              borderRadius: 'var(--radius-md)',
              border: '1px solid var(--border-subtle)',
              gap: '0.35rem',
            }}>
              <button
                type="button"
                onClick={() => handleTypeChange('expense')}
                style={{
                  padding: '0.55rem',
                  borderRadius: 'var(--radius-sm)',
                  border: 'none',
                  background: type === 'expense' ? 'rgba(239, 68, 68, 0.2)' : 'transparent',
                  color: type === 'expense' ? '#f87171' : 'var(--text-secondary)',
                  fontWeight: '700',
                  fontSize: '0.825rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.4rem',
                  cursor: 'pointer',
                  transition: 'all 0.15s ease',
                  border: type === 'expense' ? '1px solid rgba(239, 68, 68, 0.4)' : '1px solid transparent',
                }}
              >
                <TrendingDown size={15} />
                <span>Expense</span>
              </button>

              <button
                type="button"
                onClick={() => handleTypeChange('income')}
                style={{
                  padding: '0.55rem',
                  borderRadius: 'var(--radius-sm)',
                  border: 'none',
                  background: type === 'income' ? 'rgba(16, 185, 129, 0.2)' : 'transparent',
                  color: type === 'income' ? '#10b981' : 'var(--text-secondary)',
                  fontWeight: '700',
                  fontSize: '0.825rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.4rem',
                  cursor: 'pointer',
                  transition: 'all 0.15s ease',
                  border: type === 'income' ? '1px solid rgba(16, 185, 129, 0.4)' : '1px solid transparent',
                }}
              >
                <TrendingUp size={15} />
                <span>Income</span>
              </button>
            </div>

            {/* Amount & Title in Grid */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
              <div className="form-group" style={{ margin: 0 }}>
                <label className="form-label">Amount ({currencyObj.symbol})</label>
                <div style={{ position: 'relative' }}>
                  <input
                    type="number"
                    step="0.01"
                    min="0.01"
                    required
                    placeholder="0.00"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    className="form-input"
                    style={{ fontSize: '1rem', fontWeight: '700' }}
                    autoFocus
                  />
                </div>
              </div>

              <div className="form-group" style={{ margin: 0 }}>
                <label className="form-label">Date</label>
                <input
                  type="date"
                  required
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="form-input"
                />
              </div>
            </div>

            {/* Title / Description */}
            <div className="form-group" style={{ margin: 0 }}>
              <label className="form-label">Title / Merchant</label>
              <input
                type="text"
                required
                placeholder={type === 'expense' ? 'e.g. Grocery store, Netflix subscription' : 'e.g. Monthly salary, Freelance client'}
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="form-input"
              />
            </div>

            {/* Category Dropdown */}
            <div className="form-group" style={{ margin: 0 }}>
              <label className="form-label">Category</label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="form-select"
              >
                {availableCategories.map((cat) => (
                  <option key={cat.id} value={cat.id}>
                    {cat.name}
                  </option>
                ))}
              </select>
            </div>

            {/* Payment Method */}
            <div className="form-group" style={{ margin: 0 }}>
              <label className="form-label">Payment Method</label>
              <select
                value={paymentMethod}
                onChange={(e) => setPaymentMethod(e.target.value)}
                className="form-select"
              >
                <option value="Credit Card">Credit Card</option>
                <option value="Debit Card">Debit Card</option>
                <option value="Bank Transfer">Bank Transfer</option>
                <option value="PayPal">PayPal</option>
                <option value="Cash">Cash</option>
                <option value="Crypto">Crypto (USDT/BTC)</option>
              </select>
            </div>

            {/* Notes / Tag */}
            <div className="form-group" style={{ margin: 0 }}>
              <label className="form-label">Notes (Optional)</label>
              <input
                type="text"
                placeholder="Additional memo or tags..."
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                className="form-input"
              />
            </div>
          </div>

          <div className="modal-footer">
            <button
              type="button"
              onClick={onClose}
              className="btn btn-secondary"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={isSubmitting}
              className="btn btn-primary"
              style={{
                background: type === 'income' ? '#10b981' : '#10b981',
                gap: '0.4rem',
              }}
            >
              <Check size={16} />
              <span>{isSubmitting ? 'Saving...' : 'Save Record'}</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
