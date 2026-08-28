import { CURRENCIES } from '../data/initialData';
import { Transaction, Budget, DashboardStats, CategorySpending, ExpenseEvolutionPoint } from '../types';

export const formatCurrency = (amount: number | string, currencyCode: string = 'USD'): string => {
  const currency = CURRENCIES.find(c => c.code === currencyCode) || CURRENCIES[0];
  const num = Number(amount || 0);
  const formattedNumber = num.toLocaleString('en-US', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  if (currency.code === 'MAD') {
    return `${formattedNumber} ${currency.symbol}`;
  }
  return `${currency.symbol}${formattedNumber}`;
};

export const DEFAULT_BUDGET: Budget = {
  totalBudget: 4500,
  categoryBudgets: {
    'cat-food': 600,
    'cat-housing': 1200,
    'cat-transport': 350,
    'cat-shopping': 400,
    'cat-entertainment': 250,
    'cat-utilities': 300,
    'cat-health': 200,
    'cat-other-exp': 200,
  }
};

export const MOCK_TRANSACTIONS: Transaction[] = [
  {
    id: 'tx-1',
    type: 'income',
    amount: 4850.00,
    category: 'cat-salary',
    title: 'Monthly Salary',
    description: 'Tech Lead compensation',
    date: '2026-08-01',
    time: '09:00 AM',
    paymentMethod: 'Bank Transfer',
    status: 'Completed',
  },
  {
    id: 'tx-2',
    type: 'expense',
    amount: 1100.00,
    category: 'cat-housing',
    title: 'Apartment Rent',
    description: 'Downtown studio rent for August',
    date: '2026-08-02',
    time: '11:30 AM',
    paymentMethod: 'Bank Transfer',
    status: 'Completed',
  },
  {
    id: 'tx-3',
    type: 'income',
    amount: 1200.00,
    category: 'cat-freelance',
    title: 'Design & Dev Consultation',
    description: 'Fintech UI & API Integration',
    date: '2026-08-07',
    time: '04:15 PM',
    paymentMethod: 'PayPal',
    status: 'Completed',
  },
  {
    id: 'tx-4',
    type: 'expense',
    amount: 245.50,
    category: 'cat-food',
    title: 'Whole Foods Market',
    description: 'Weekly organic groceries',
    date: '2026-08-11',
    time: '06:40 PM',
    paymentMethod: 'Credit Card',
    status: 'Completed',
  },
  {
    id: 'tx-5',
    type: 'expense',
    amount: 79.99,
    category: 'cat-entertainment',
    title: 'Digital Subscriptions',
    description: 'Netflix, Spotify, GitHub Pro',
    date: '2026-08-14',
    time: '08:00 AM',
    paymentMethod: 'Credit Card',
    status: 'Completed',
  },
  {
    id: 'tx-6',
    type: 'expense',
    amount: 120.00,
    category: 'cat-transport',
    title: 'Fuel & Highway Tolls',
    description: 'City commute expenses',
    date: '2026-08-18',
    time: '02:20 PM',
    paymentMethod: 'Credit Card',
    status: 'Completed',
  },
  {
    id: 'tx-7',
    type: 'expense',
    amount: 185.00,
    category: 'cat-shopping',
    title: 'Tech Accessories',
    description: 'Mechanical keyboard & cable',
    date: '2026-08-21',
    time: '05:55 PM',
    paymentMethod: 'Credit Card',
    status: 'Completed',
  },
  {
    id: 'tx-8',
    type: 'expense',
    amount: 95.00,
    category: 'cat-utilities',
    title: 'High-speed Fiber Internet',
    description: 'Monthly broadband bill',
    date: '2026-08-24',
    time: '10:10 AM',
    paymentMethod: 'Bank Transfer',
    status: 'Completed',
  },
  {
    id: 'tx-9',
    type: 'income',
    amount: 450.00,
    category: 'cat-investments',
    title: 'Dividend Payout',
    description: 'Q2 Tech ETF Distribution',
    date: '2026-08-25',
    time: '01:45 PM',
    paymentMethod: 'Bank Transfer',
    status: 'Completed',
  },
  {
    id: 'tx-10',
    type: 'expense',
    amount: 65.00,
    category: 'cat-food',
    title: 'Bistro Dinner',
    description: 'Dinner with colleagues',
    date: '2026-08-26',
    time: '08:30 PM',
    paymentMethod: 'Cash',
    status: 'Completed',
  }
];

export const CATEGORY_MAP: Record<string, { name: string; color: string; icon: string; bg: string }> = {
  'cat-food': { name: 'Food & Dining', color: '#f97316', icon: 'Utensils', bg: 'rgba(249, 115, 22, 0.15)' },
  'cat-housing': { name: 'Housing & Rent', color: '#8b5cf6', icon: 'Home', bg: 'rgba(139, 92, 246, 0.15)' },
  'cat-transport': { name: 'Transportation', color: '#3b82f6', icon: 'Car', bg: 'rgba(59, 130, 246, 0.15)' },
  'cat-shopping': { name: 'Shopping', color: '#ec4899', icon: 'ShoppingBag', bg: 'rgba(236, 72, 153, 0.15)' },
  'cat-entertainment': { name: 'Entertainment', color: '#06b6d4', icon: 'Film', bg: 'rgba(6, 182, 212, 0.15)' },
  'cat-health': { name: 'Health & Care', color: '#ef4444', icon: 'HeartPulse', bg: 'rgba(239, 68, 68, 0.15)' },
  'cat-utilities': { name: 'Bills & Utilities', color: '#eab308', icon: 'Zap', bg: 'rgba(234, 179, 8, 0.15)' },
  'cat-education': { name: 'Education', color: '#10b981', icon: 'GraduationCap', bg: 'rgba(16, 185, 129, 0.15)' },
  'cat-other-exp': { name: 'Other Expenses', color: '#64748b', icon: 'CircleEllipsis', bg: 'rgba(100, 116, 139, 0.15)' },
  // Income
  'cat-salary': { name: 'Primary Salary', color: '#10b981', icon: 'Briefcase', bg: 'rgba(16, 185, 129, 0.15)' },
  'cat-freelance': { name: 'Freelance & Projects', color: '#3b82f6', icon: 'Laptop', bg: 'rgba(59, 130, 246, 0.15)' },
  'cat-investments': { name: 'Investments', color: '#8b5cf6', icon: 'TrendingUp', bg: 'rgba(139, 92, 246, 0.15)' },
  'cat-other-inc': { name: 'Other Income', color: '#f59e0b', icon: 'Coins', bg: 'rgba(245, 158, 11, 0.15)' },
};

export const getCategoryDetails = (catId: string) => {
  return CATEGORY_MAP[catId] || { name: 'General', color: '#94a3b8', icon: 'CircleEllipsis', bg: 'rgba(148, 163, 184, 0.15)' };
};

export const computeDashboardStats = (transactions: Transaction[]): DashboardStats => {
  let totalIncome = 0;
  let totalExpenses = 0;

  transactions.forEach((tx) => {
    const amt = Number(tx.amount) || 0;
    if (tx.type === 'income') {
      totalIncome += amt;
    } else {
      totalExpenses += amt;
    }
  });

  const totalBalance = totalIncome - totalExpenses;
  const savings = Math.max(0, totalIncome - totalExpenses);
  const savingsRate = totalIncome > 0 ? ((savings / totalIncome) * 100).toFixed(1) : '0.0';

  return {
    totalBalance,
    totalIncome,
    totalExpenses,
    savings,
    savingsRate,
    transactionCount: transactions.length,
  };
};

export const computeCategorySpending = (transactions: Transaction[]): CategorySpending[] => {
  const expenseTransactions = transactions.filter(t => t.type === 'expense');
  const totalExpense = expenseTransactions.reduce((acc, t) => acc + Number(t.amount || 0), 0);

  const categoryTotals: Record<string, number> = {};
  expenseTransactions.forEach(t => {
    const cat = t.category || 'cat-other-exp';
    categoryTotals[cat] = (categoryTotals[cat] || 0) + Number(t.amount || 0);
  });

  const breakdown = Object.entries(categoryTotals).map(([catId, amount]) => {
    const details = getCategoryDetails(catId);
    const percentage = totalExpense > 0 ? ((amount / totalExpense) * 100).toFixed(1) : '0.0';
    return {
      id: catId,
      name: details.name,
      amount,
      percentage: Number(percentage),
      color: details.color,
      icon: details.icon,
      bg: details.bg,
    };
  });

  // Sort descending by amount
  return breakdown.sort((a, b) => b.amount - a.amount);
};

export const generateExpenseEvolution = (transactions: Transaction[], timeframe: string = '30d'): ExpenseEvolutionPoint[] => {
  if (timeframe === '7d') {
    const days = ['Thu', 'Fri', 'Sat', 'Sun', 'Mon', 'Tue', 'Today'];
    const mockValues = [65, 120, 45, 185, 95, 45, 65];
    return days.map((label, i) => ({
      label,
      date: `Aug ${21 + i}`,
      amount: mockValues[i],
      income: i === 4 ? 450 : 0
    }));
  }

  if (timeframe === '30d') {
    const points: ExpenseEvolutionPoint[] = [
      { label: 'Aug 01-05', date: 'Aug 01', amount: 1100, income: 4850 },
      { label: 'Aug 06-10', date: 'Aug 07', amount: 210, income: 1200 },
      { label: 'Aug 11-15', date: 'Aug 12', amount: 325, income: 0 },
      { label: 'Aug 16-20', date: 'Aug 17', amount: 190, income: 0 },
      { label: 'Aug 21-25', date: 'Aug 22', amount: 280, income: 450 },
      { label: 'Aug 26-30', date: 'Aug 27', amount: 120, income: 0 },
    ];
    return points;
  }

  if (timeframe === '3m') {
    return [
      { label: 'June', date: 'Jun 2026', amount: 1980, income: 5800 },
      { label: 'July', date: 'Jul 2026', amount: 2450, income: 6200 },
      { label: 'August', date: 'Aug 2026', amount: 2225, income: 6500 },
    ];
  }

  // 1 Year
  return [
    { label: 'Sep', date: 'Sep 2025', amount: 1750, income: 5200 },
    { label: 'Oct', date: 'Oct 2025', amount: 2100, income: 5300 },
    { label: 'Nov', date: 'Nov 2025', amount: 1900, income: 5400 },
    { label: 'Dec', date: 'Dec 2025', amount: 3100, income: 6800 },
    { label: 'Jan', date: 'Jan 2026', amount: 1850, income: 5500 },
    { label: 'Feb', date: 'Feb 2026', amount: 1650, income: 5500 },
    { label: 'Mar', date: 'Mar 2026', amount: 2200, income: 5900 },
    { label: 'Apr', date: 'Apr 2026', amount: 1950, income: 5700 },
    { label: 'May', date: 'May 2026', amount: 2300, income: 6100 },
    { label: 'Jun', date: 'Jun 2026', amount: 1980, income: 5800 },
    { label: 'Jul', date: 'Jul 2026', amount: 2450, income: 6200 },
    { label: 'Aug', date: 'Aug 2026', amount: 2225, income: 6500 },
  ];
};
