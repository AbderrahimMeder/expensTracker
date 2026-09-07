import React from 'react';
import { Calendar, RefreshCw, TrendingUp, TrendingDown } from 'lucide-react';
import { CURRENCIES } from '../../data/initialData';

interface OverviewHeaderProps {
  userName?: string;
  selectedPeriod?: string;
  setSelectedPeriod?: (period: string) => void;
  currency?: string;
  setCurrency?: (currency: string) => void;
  onAddExpense?: () => void;
  onAddIncome?: () => void;
  onRefresh?: () => void;
  isRefreshing?: boolean;
}

export default function OverviewHeader({
  userName,
  selectedPeriod,
  setSelectedPeriod,
  currency = 'USD',
  setCurrency,
  onAddExpense,
  onAddIncome,
  onRefresh,
  isRefreshing
}: OverviewHeaderProps) {
  const currentDateFormatted = new Intl.DateTimeFormat('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  }).format(new Date());

  const periods = [
    { value: 'this-month', label: 'August 2026' },
    { value: 'last-month', label: 'July 2026' },
    { value: 'q3-2026', label: 'Q3 2026' },
    { value: 'ytd', label: 'Year 2026' },
  ];

  return (
    <div style={{
      display: 'flex',
      flexWrap: 'wrap',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: '1.25rem',
      marginBottom: '2rem',
      paddingBottom: '1.25rem',
      borderBottom: '1px solid var(--border-subtle)',
    }}>
      {/* Left: Greeting */}
      <div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.35rem' }}>
          <h1 style={{
            fontSize: '1.65rem',
            fontWeight: '800',
            color: '#ffffff',
            letterSpacing: '-0.03em',
            margin: 0,
          }}>
            Welcome back <span style={{ color: 'var(--accent-primary)', marginLeft: '5px' }}>{userName || 'User'}</span>
          </h1>
        </div>
      </div>

      {/* Right Controls */}
      <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '0.75rem' }}>
        {/* Refresh button */}
        {onRefresh && (
          <button
            onClick={onRefresh}
            className="btn-icon"
            style={{
              padding: '0.5rem',
              borderRadius: 'var(--radius-md)',
              background: '#141414',
              border: '1px solid var(--border-subtle)',
              color: 'var(--text-secondary)',
              cursor: 'pointer',
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
            title="Refresh statistics"
          >
            <RefreshCw
              size={15}
              style={{
                animation: isRefreshing ? 'spin 0.8s linear infinite' : 'none',
              }}
            />
          </button>
        )}

        {/* Quick Add Buttons */}
        {onAddExpense && (
          <button
            onClick={onAddExpense}
            className="btn btn-secondary"
            style={{
              fontSize: '0.8rem',
              padding: '0.45rem 0.85rem',
              color: '#f87171',
              borderColor: 'rgba(239, 68, 68, 0.3)',
              background: 'rgba(239, 68, 68, 0.08)',
              gap: '0.35rem',
            }}
          >
            <TrendingDown size={14} />
            <span>Add Expense</span>
          </button>
        )}

        {onAddIncome && (
          <button
            onClick={onAddIncome}
            className="btn btn-primary"
            style={{
              fontSize: '0.8rem',
              padding: '0.45rem 0.85rem',
              gap: '0.35rem',
            }}
          >
            <TrendingUp size={14} />
            <span>Add Income</span>
          </button>
        )}
      </div>
    </div>
  );
}
