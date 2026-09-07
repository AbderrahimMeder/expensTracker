import React, { useState } from 'react';
import {
  ArrowUpDown,
  Search,
  ExternalLink,
  Plus,
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
  CheckCircle2,
  Clock,
  LucideIcon
} from 'lucide-react';
import { getCategoryDetails, formatCurrency } from '../../utils/dashboardUtils';
import { Transaction } from '../../types';

const ICON_MAP: Record<string, LucideIcon> = {
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

interface RecentTransactionsProps {
  transactions?: Transaction[];
  currency?: string;
  onAddTransaction?: (type: 'expense' | 'income') => void;
  onViewAll?: () => void;
}

export default function RecentTransactions({
  transactions = [],
  currency = 'USD',
  onAddTransaction,
}: RecentTransactionsProps) {
  const [filterType, setFilterType] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [showAllModal, setShowAllModal] = useState<boolean>(false);

  const filtered = transactions.filter((tx) => {
    const matchesType = filterType === 'all' || tx.type === filterType;
    const matchesSearch =
      (tx.title || '').toLowerCase().includes(searchQuery.toLowerCase()) ||
      (tx.description || '').toLowerCase().includes(searchQuery.toLowerCase()) ||
      (tx.paymentMethod || '').toLowerCase().includes(searchQuery.toLowerCase());
    return matchesType && matchesSearch;
  });

  const displayedTransactions = filtered.slice(0, 6);

  return (
    <div className="glass-card" style={{
      padding: '1.5rem',
      background: '#121212',
      border: '1px solid var(--border-subtle)',
      borderRadius: 'var(--radius-lg)',
      display: 'flex',
      flexDirection: 'column',
      gap: '1.25rem',
    }}>
      {/* Header */}
      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: '1rem',
      }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem' }}>
            <ArrowUpDown size={18} color="var(--accent-primary)" />
            <h2 style={{ fontSize: '1.1rem', fontWeight: '700', color: '#ffffff', margin: 0 }}>
              Recent Transactions
            </h2>
          </div>
          <p style={{ fontSize: '0.775rem', color: 'var(--text-secondary)', margin: 0 }}>
            Real-time financial activity and cash flows
          </p>
        </div>

        {/* Filter Pills and View All */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <div style={{
            display: 'flex',
            background: '#0a0a0a',
            padding: '0.2rem',
            borderRadius: 'var(--radius-md)',
            border: '1px solid var(--border-subtle)',
          }}>
            {(['all', 'expense', 'income'] as const).map((t) => (
              <button
                key={t}
                onClick={() => setFilterType(t)}
                style={{
                  background: filterType === t ? 'var(--accent-primary)' : 'transparent',
                  color: filterType === t ? '#000000' : 'var(--text-secondary)',
                  fontWeight: filterType === t ? '700' : '500',
                  fontSize: '0.725rem',
                  padding: '0.35rem 0.7rem',
                  borderRadius: '5px',
                  border: 'none',
                  cursor: 'pointer',
                  textTransform: 'capitalize',
                  transition: 'all 0.15s ease',
                }}
              >
                {t}
              </button>
            ))}
          </div>

          <button
            onClick={() => setShowAllModal(true)}
            className="btn btn-secondary"
            style={{
              padding: '0.4rem 0.75rem',
              fontSize: '0.75rem',
              gap: '0.3rem',
            }}
          >
            <span>View All</span>
            <ExternalLink size={13} />
          </button>
        </div>
      </div>

      {/* Mini Search Bar */}
      <div style={{ position: 'relative' }}>
        <Search
          size={14}
          color="var(--text-muted)"
          style={{ position: 'absolute', left: '0.75rem', top: '50%', transform: 'translateY(-50%)' }}
        />
        <input
          type="text"
          placeholder="Filter recent transactions by title, note, or payment method..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          style={{
            width: '100%',
            background: '#0d0d0d',
            border: '1px solid var(--border-subtle)',
            borderRadius: 'var(--radius-md)',
            padding: '0.5rem 0.75rem 0.5rem 2.2rem',
            color: '#ffffff',
            fontSize: '0.8rem',
            outline: 'none',
          }}
        />
      </div>

      {/* Transactions List */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
        {displayedTransactions.length === 0 ? (
          <div style={{
            textAlign: 'center',
            padding: '2.5rem 1rem',
            background: '#0d0d0d',
            borderRadius: 'var(--radius-md)',
            border: '1px dashed var(--border-subtle)',
          }}>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', marginBottom: '0.75rem' }}>
              No transactions match your search or filter.
            </p>
            {onAddTransaction && (
              <button
                onClick={() => onAddTransaction('expense')}
                className="btn btn-secondary"
                style={{ fontSize: '0.75rem', padding: '0.4rem 0.85rem' }}
              >
                <Plus size={14} />
                <span>Add First Transaction</span>
              </button>
            )}
          </div>
        ) : (
          displayedTransactions.map((tx) => {
            const cat = getCategoryDetails(tx.category);
            const IconComponent = ICON_MAP[cat.icon] || CircleEllipsis;
            const isIncome = tx.type === 'income';

            return (
              <div
                key={tx.id}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '0.75rem 1rem',
                  borderRadius: 'var(--radius-md)',
                  background: '#0e0e0e',
                  border: '1px solid var(--border-subtle)',
                  transition: 'border-color 0.15s ease, background 0.15s ease, transform 0.15s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = '#151515';
                  e.currentTarget.style.borderColor = 'var(--border-hover)';
                  e.currentTarget.style.transform = 'translateX(2px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = '#0e0e0e';
                  e.currentTarget.style.borderColor = 'var(--border-subtle)';
                  e.currentTarget.style.transform = 'translateX(0)';
                }}
              >
                {/* Left: Icon & Meta */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
                  <div style={{
                    width: '38px',
                    height: '38px',
                    borderRadius: '9px',
                    background: cat.bg,
                    color: cat.color,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                    border: `1px solid ${cat.color}33`,
                  }}>
                    <IconComponent size={18} />
                  </div>

                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <span style={{ fontSize: '0.875rem', fontWeight: '700', color: '#ffffff' }}>
                        {tx.title || tx.description || 'Transaction'}
                      </span>
                      <span style={{
                        fontSize: '0.675rem',
                        padding: '1px 6px',
                        borderRadius: '4px',
                        background: isIncome ? 'rgba(16, 185, 129, 0.15)' : 'rgba(239, 68, 68, 0.15)',
                        color: isIncome ? '#10b981' : '#f87171',
                        fontWeight: '700',
                        textTransform: 'uppercase',
                      }}>
                        {isIncome ? 'Income' : 'Expense'}
                      </span>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginTop: '2px', fontSize: '0.725rem', color: 'var(--text-muted)' }}>
                      <span>{tx.date}</span>
                      {tx.time && (
                        <>
                          <span>•</span>
                          <span>{tx.time}</span>
                        </>
                      )}
                      <span>•</span>
                      <span style={{ color: 'var(--text-secondary)' }}>{cat.name}</span>
                      {tx.paymentMethod && (
                        <>
                          <span>•</span>
                          <span style={{ color: '#999999' }}>{tx.paymentMethod}</span>
                        </>
                      )}
                    </div>
                  </div>
                </div>

                {/* Right: Amount & Status */}
                <div style={{ textAlign: 'right', display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '2px' }}>
                  <div style={{
                    fontSize: '0.95rem',
                    fontWeight: '800',
                    color: isIncome ? '#10b981' : '#ffffff',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '2px',
                  }}>
                    {isIncome ? '+' : '-'} {formatCurrency(tx.amount, currency)}
                  </div>
                  <div style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '3px',
                    fontSize: '0.675rem',
                    color: tx.status === 'Pending' ? '#eab308' : '#10b981',
                  }}>
                    {tx.status === 'Pending' ? <Clock size={10} /> : <CheckCircle2 size={10} />}
                    <span>{tx.status || 'Completed'}</span>
                  </div>
                </div>
              </div>
            );
          })
        )}
      </div>

      {/* Full Modal for "View All" */}
      {showAllModal && (
        <div className="modal-backdrop" onClick={() => setShowAllModal(false)}>
          <div
            className="modal-content"
            style={{ maxWidth: '640px' }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="modal-header">
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <ArrowUpDown size={18} color="var(--accent-primary)" />
                <h3 style={{ fontSize: '1.1rem', fontWeight: '700', color: '#ffffff', margin: 0 }}>
                  All Transactions ({transactions.length})
                </h3>
              </div>
              <button
                onClick={() => setShowAllModal(false)}
                className="btn-icon"
                style={{ padding: '0.4rem' }}
              >
                ✕
              </button>
            </div>

            <div className="modal-body" style={{ maxHeight: '60vh', overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
              {transactions.map((tx) => {
                const cat = getCategoryDetails(tx.category);
                const IconComponent = ICON_MAP[cat.icon] || CircleEllipsis;
                const isIncome = tx.type === 'income';

                return (
                  <div
                    key={tx.id}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      padding: '0.75rem 1rem',
                      borderRadius: 'var(--radius-md)',
                      background: '#161616',
                      border: '1px solid var(--border-subtle)',
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                      <div style={{
                        width: '34px',
                        height: '34px',
                        borderRadius: '8px',
                        background: cat.bg,
                        color: cat.color,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}>
                        <IconComponent size={16} />
                      </div>
                      <div>
                        <div style={{ fontWeight: '700', fontSize: '0.85rem', color: '#ffffff' }}>
                          {tx.title || tx.description}
                        </div>
                        <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>
                          {tx.date} • {cat.name} • {tx.paymentMethod}
                        </div>
                      </div>
                    </div>

                    <div style={{ textAlign: 'right' }}>
                      <div style={{
                        fontSize: '0.9rem',
                        fontWeight: '800',
                        color: isIncome ? '#10b981' : '#ffffff',
                      }}>
                        {isIncome ? '+' : '-'} {formatCurrency(tx.amount, currency)}
                      </div>
                      <span style={{ fontSize: '0.65rem', color: 'var(--text-muted)' }}>
                        {tx.status || 'Completed'}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="modal-footer">
              <button
                onClick={() => setShowAllModal(false)}
                className="btn btn-secondary"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
