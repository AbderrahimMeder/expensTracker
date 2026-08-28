import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  PlusCircle,
  TrendingUp,
  Target,
  FileText,
  ArrowRight,
  Zap,
  Download
} from 'lucide-react';
import toast from 'react-hot-toast';

export default function QuickActions({
  onAddExpense,
  onAddIncome,
  onOpenBudgetModal,
  transactions = [],
  currency = 'USD'
}) {
  const navigate = useNavigate();

  const handleExportCSV = () => {
    if (!transactions.length) {
      toast.error('No transactions available to export');
      return;
    }
    const headers = ['ID', 'Type', 'Title', 'Category', 'Amount', 'Currency', 'Date', 'PaymentMethod', 'Status'];
    const rows = transactions.map(t => [
      t.id,
      t.type,
      `"${t.title || t.description || ''}"`,
      t.category,
      t.amount,
      currency,
      t.date,
      t.paymentMethod || 'N/A',
      t.status || 'Completed'
    ]);

    const csvContent = 'data:text/csv;charset=utf-8,' + [headers.join(','), ...rows.map(e => e.join(','))].join('\n');
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', `finora_expenses_overview_${new Date().toISOString().slice(0, 10)}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    toast.success('Overview CSV report exported successfully!');
  };

  const actions = [
    {
      id: 'add-expense',
      title: 'Add Expense',
      description: 'Record an outgoing payment or bill',
      icon: PlusCircle,
      color: '#ef4444',
      bg: 'rgba(239, 68, 68, 0.12)',
      border: 'rgba(239, 68, 68, 0.25)',
      onClick: onAddExpense,
      cta: 'Record Outflow',
    },
    {
      id: 'add-income',
      title: 'Add Income',
      description: 'Log new earnings, salary, or payouts',
      icon: TrendingUp,
      color: '#10b981',
      bg: 'rgba(16, 185, 129, 0.12)',
      border: 'rgba(16, 185, 129, 0.25)',
      onClick: onAddIncome,
      cta: 'Deposit Inflow',
    },
    {
      id: 'create-budget',
      title: 'Create & Set Budget',
      description: 'Set monthly limits for categories',
      icon: Target,
      color: '#8b5cf6',
      bg: 'rgba(139, 92, 246, 0.12)',
      border: 'rgba(139, 92, 246, 0.25)',
      onClick: onOpenBudgetModal,
      cta: 'Configure Limit',
    },
    {
      id: 'view-reports',
      title: 'View Reports & Export',
      description: 'Generate financial audits and export CSV',
      icon: FileText,
      color: '#3b82f6',
      bg: 'rgba(59, 130, 246, 0.12)',
      border: 'rgba(59, 130, 246, 0.25)',
      onClick: () => {
        handleExportCSV();
        navigate('/reports');
      },
      cta: 'Analytics & CSV',
    },
  ];

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
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <Zap size={18} color="var(--accent-primary)" />
          <h2 style={{ fontSize: '1.1rem', fontWeight: '700', color: '#ffffff', margin: 0 }}>
            Quick Actions
          </h2>
        </div>
        <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
          Instant Management
        </span>
      </div>

      {/* Grid of Action Cards */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
        gap: '1rem',
      }}>
        {actions.map((action) => {
          const Icon = action.icon;
          return (
            <div
              key={action.id}
              onClick={action.onClick}
              style={{
                padding: '1.15rem',
                borderRadius: 'var(--radius-md)',
                background: '#0d0d0d',
                border: `1px solid ${action.border}`,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = '#171717';
                e.currentTarget.style.borderColor = action.color;
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = '#0d0d0d';
                e.currentTarget.style.borderColor = action.border;
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
                <div style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '8px',
                  background: action.bg,
                  color: action.color,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                }}>
                  <Icon size={18} strokeWidth={2.2} />
                </div>
                <div>
                  <div style={{ fontSize: '0.9rem', fontWeight: '700', color: '#ffffff' }}>
                    {action.title}
                  </div>
                  <div style={{ fontSize: '0.72rem', color: 'var(--text-secondary)', marginTop: '2px' }}>
                    {action.description}
                  </div>
                </div>
              </div>

              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                fontSize: '0.775rem',
                fontWeight: '700',
                color: action.color,
                paddingTop: '0.5rem',
                borderTop: '1px solid rgba(255, 255, 255, 0.05)',
              }}>
                <span>{action.cta}</span>
                <ArrowRight size={13} />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
