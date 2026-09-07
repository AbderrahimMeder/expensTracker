import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { useAuth } from '@/context/authContext';
import DashboardLayout from '@/components/dashboard/DashboardLayout';
import OverviewHeader from '@/components/dashboard/OverviewHeader';
import StatCards from '@/components/dashboard/StatCards';
import ExpenseChart from '@/components/dashboard/ExpenseChart';
import CategoryBreakdown from '@/components/dashboard/CategoryBreakdown';
import RecentTransactions from '@/components/dashboard/RecentTransactions';
import BudgetProgress from '@/components/dashboard/BudgetProgress';
import BudgetModal from '@/components/dashboard/BudgetModal';;
import { Transaction, Budget, Currency } from '@/types';

export default function Dashboard() {
  const APP_URL = 'http://localhost:8000'
  const navigate = useNavigate();
  const { user } = useAuth();
  useEffect(() => {
    const token = localStorage.getItem('token')
    if (!token) {
      navigate('/login')
    }
    const fetchdata = async () => {
      const response = await fetch(`${APP_URL}/api/transactions`, {
        method: "GET",
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
      });
      const data = await response.json();
      if (data.status == 200) {
        setTransactions(data.transactions);
      }
    }
    fetchdata();
  }, [user])

  // Local storage state with initial fallbacks
  const [transactions, setTransactions] = useState<Transaction[]>([])

  const [budget, setBudget] = useState<Budget>();
  const [stats,setstate]=useState(
    {
      totalBalance:0,
      totalIncome:0,
      totalExpenses:0,
      savings:0,
      savingsRate:"0%",
      transactionCount:0,
    }
  )
  const [currency, setCurrency] = useState<Currency>();

  const [selectedPeriod, setSelectedPeriod] = useState<string>('this-month');
  const [isBudgetModalOpen, setIsBudgetModalOpen] = useState<boolean>(false);
  const [isRefreshing, setIsRefreshing] = useState<boolean>(false);

  // Refresh handler
  const handleRefresh = () => {
    setIsRefreshing(true);
    setTimeout(() => {
      setIsRefreshing(false);
      toast.success('Dashboard metrics refreshed successfully!');
    }, 600);
  };

  // Computed financial stats
  const categorySpending = [];

  const userName = user?.name || '';

  return (
    <DashboardLayout>
      {/* 1. Overview Header with live controls */}
      <OverviewHeader
        userName={userName}
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
      {/* 9. Monthly Budget Configuration Modal */}
      <BudgetModal
        isOpen={isBudgetModalOpen}
        onClose={() => setIsBudgetModalOpen(false)}
        currentBudget={budget}
        currency={currency}
        onSave={() => { }}
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
