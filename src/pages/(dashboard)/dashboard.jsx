import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { useAuth } from '@/context/authContext';
import DashboardLayout from '../../components/dashboard/DashboardLayout';
import OverviewHeader from '../../components/dashboard/OverviewHeader';
import StatCards from '../../components/dashboard/StatCards';
import ExpenseChart from '../../components/dashboard/ExpenseChart';
import CategoryBreakdown from '../../components/dashboard/CategoryBreakdown';
import RecentTransactions from '../../components/dashboard/RecentTransactions';
import BudgetProgress from '../../components/dashboard/BudgetProgress';
import QuickActions from '../../components/dashboard/QuickActions';
import AddTransactionModal from '../../components/dashboard/AddTransactionModal';
import BudgetModal from '../../components/dashboard/BudgetModal';
import {
  MOCK_TRANSACTIONS,
  DEFAULT_BUDGET,
  computeDashboardStats,
  computeCategorySpending
} from '../../utils/dashboardUtils';

export default function Dashboard() {
  const navigate = useNavigate();
  const { user, logout } = useAuth();

  // Local storage state with initial fallbacks
  const [transactions, setTransactions] = useState(() => {
    try {
      const saved = localStorage.getItem('finora_transactions');
      return saved ? JSON.parse(saved) : MOCK_TRANSACTIONS;
    } catch {
      return MOCK_TRANSACTIONS;
    }
  });

  const [budget, setBudget] = useState(() => {
    try {
      const saved = localStorage.getItem('finora_budget');
      return saved ? JSON.parse(saved) : DEFAULT_BUDGET;
    } catch {
      return DEFAULT_BUDGET;
    }
  });

  const [currency, setCurrency] = useState(() => {
    return localStorage.getItem('finora_currency') || 'USD';
  });

  const [selectedPeriod, setSelectedPeriod] = useState('this-month');
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [addModalType, setAddModalType] = useState('expense');
  const [isBudgetModalOpen, setIsBudgetModalOpen] = useState(false);
  const [isRefreshing, setIsRefreshing] = useState(false);

  // Authentication check
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      const isDev = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1';
      if (!isDev) {
        navigate('/login');
        return;
      }
    }

    if (token) {
      fetch('http://localhost:8000/api/current-user', {
        headers: {
          Authorization: `Bearer ${token}`,
          Accept: 'application/json',
        },
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.status && data.status !== 200) {
            navigate('/login');
          }
        })
        .catch(() => {
          // Token verification failed or API offline
        });
    }
  }, [navigate]);

  // Persist transactions
  const handleAddTransaction = (newTx) => {
    setTransactions((prev) => {
      const updated = [newTx, ...prev];
      try {
        localStorage.setItem('finora_transactions', JSON.stringify(updated));
      } catch (err) {
        console.error('Failed to save transaction to localStorage:', err);
      }
      return updated;
    });
  };

  // Persist budget
  const handleSaveBudget = (newBudget) => {
    setBudget(newBudget);
    try {
      localStorage.setItem('finora_budget', JSON.stringify(newBudget));
    } catch (err) {
      console.error('Failed to save budget to localStorage:', err);
    }
  };

  // Persist currency
  const handleCurrencyChange = (newCurr) => {
    setCurrency(newCurr);
    localStorage.setItem('finora_currency', newCurr);
  };

  // Refresh handler
  const handleRefresh = () => {
    setIsRefreshing(true);
    setTimeout(() => {
      setIsRefreshing(false);
      toast.success('Dashboard metrics refreshed successfully!');
    }, 600);
  };

  // Modal open helper
  const openAddModal = (type = 'expense') => {
    setAddModalType(type);
    setIsAddModalOpen(true);
  };

  // Computed financial stats
  const stats = computeDashboardStats(transactions);
  const categorySpending = computeCategorySpending(transactions);

  const userName = user?.name || 'Alexander Wright';

  return (
    <DashboardLayout onOpenAddModal={(type) => openAddModal(type || 'expense')}>
      {/* 1. Overview Header with live controls */}
      <OverviewHeader
        userName={userName}
        selectedPeriod={selectedPeriod}
        setSelectedPeriod={setSelectedPeriod}
        currency={currency}
        setCurrency={handleCurrencyChange}
        onAddExpense={() => openAddModal('expense')}
        onAddIncome={() => openAddModal('income')}
        onRefresh={handleRefresh}
        isRefreshing={isRefreshing}
      />

      {/* 2. Top Metric Cards: Balance, Income, Expense, Savings */}
      <StatCards stats={stats} currency={currency} />

      {/* 3. Main Dashboard Grid Layout */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(12, 1fr)',
        gap: '1.5rem',
        marginBottom: '2rem',
      }}>
        {/* Left Column (Primary Visuals & Recent Activity) - 7 of 12 columns */}
        <div
          style={{
            gridColumn: 'span 7',
            display: 'flex',
            flexDirection: 'column',
            gap: '1.5rem',
          }}
          className="dashboard-col-left"
        >
          {/* 3. Expense Evolution Line/Area Chart */}
          <ExpenseChart transactions={transactions} currency={currency} />

          {/* 4. Real-time Recent Transactions with Search and Filter */}
          <RecentTransactions
            transactions={transactions}
            currency={currency}
            onAddTransaction={(type) => openAddModal(type)}
          />
        </div>

        {/* Right Column (Budgets, Breakdown, & Quick Actions) - 5 of 12 columns */}
        <div
          style={{
            gridColumn: 'span 5',
            display: 'flex',
            flexDirection: 'column',
            gap: '1.5rem',
          }}
          className="dashboard-col-right"
        >
          {/* 5. Monthly Budget Progress and Category Caps */}
          <BudgetProgress
            budget={budget}
            totalExpenses={stats.totalExpenses}
            categorySpending={categorySpending}
            currency={currency}
            onOpenBudgetModal={() => setIsBudgetModalOpen(true)}
          />

          {/* 6. Donut Chart & Category Spending Breakdown */}
          <CategoryBreakdown transactions={transactions} currency={currency} />

        </div>
      </div>

      {/* 8. Add Transaction Modal (Expense / Income) */}
      <AddTransactionModal
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
        initialType={addModalType}
        currency={currency}
        onSave={handleAddTransaction}
      />

      {/* 9. Monthly Budget Configuration Modal */}
      <BudgetModal
        isOpen={isBudgetModalOpen}
        onClose={() => setIsBudgetModalOpen(false)}
        currentBudget={budget}
        currency={currency}
        onSave={handleSaveBudget}
      />

      {/* Page Responsive Styles */}
      <style>{`
        @media (max-width: 1024px) {
          .dashboard-col-left,
          .dashboard-col-right {
            grid-column: span 12 !important;
          }
        }
      `}</style>
    </DashboardLayout>
  );
}