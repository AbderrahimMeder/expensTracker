import { CurrencyOption, Category, Transaction } from '../types';

export const CURRENCIES: CurrencyOption[] = [
  { code: 'USD', symbol: '$', name: 'US Dollar (USD)' },
  { code: 'EUR', symbol: '€', name: 'Euro (EUR)' },
  { code: 'MAD', symbol: 'DH', name: 'Moroccan Dirham (MAD)' },
  { code: 'GBP', symbol: '£', name: 'British Pound (GBP)' },
  { code: 'CAD', symbol: 'CA$', name: 'Canadian Dollar (CAD)' },
];

// Helper to format currency
export const formatCurrency = (amount: number | string, currencyCode: string = 'USD'): string => {
  const currency = CURRENCIES.find(c => c.code === currencyCode) || CURRENCIES[0];
  const formattedNumber = Number(amount || 0).toLocaleString('en-US', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  if (currency.code === 'MAD') {
    return `${formattedNumber} ${currency.symbol}`;
  }
  return `${currency.symbol}${formattedNumber}`;
};

export const DEFAULT_CATEGORIES: Category[] = [
  // Expense Categories
  { id: 'cat-food', name: 'Food & Dining', type: 'EXPENSE', icon: 'Utensils', color: '#f97316', bg: 'rgba(249, 115, 22, 0.15)' },
  { id: 'cat-housing', name: 'Housing & Rent', type: 'EXPENSE', icon: 'Home', color: '#8b5cf6', bg: 'rgba(139, 92, 246, 0.15)' },
  { id: 'cat-transport', name: 'Transportation', type: 'EXPENSE', icon: 'Car', color: '#3b82f6', bg: 'rgba(59, 130, 246, 0.15)' },
  { id: 'cat-shopping', name: 'Shopping & Groceries', type: 'EXPENSE', icon: 'ShoppingBag', color: '#ec4899', bg: 'rgba(236, 72, 153, 0.15)' },
  { id: 'cat-entertainment', name: 'Entertainment & Subs', type: 'EXPENSE', icon: 'Film', color: '#06b6d4', bg: 'rgba(6, 182, 212, 0.15)' },
  { id: 'cat-health', name: 'Health & Medical', type: 'EXPENSE', icon: 'HeartPulse', color: '#ef4444', bg: 'rgba(239, 68, 68, 0.15)' },
  { id: 'cat-utilities', name: 'Utilities & Bills', type: 'EXPENSE', icon: 'Zap', color: '#eab308', bg: 'rgba(234, 179, 8, 0.15)' },
  { id: 'cat-education', name: 'Education & Courses', type: 'EXPENSE', icon: 'GraduationCap', color: '#10b981', bg: 'rgba(16, 185, 129, 0.15)' },
  { id: 'cat-other-exp', name: 'Other Expenses', type: 'EXPENSE', icon: 'CircleEllipsis', color: '#64748b', bg: 'rgba(100, 116, 139, 0.15)' },

  // Income Categories
  { id: 'cat-salary', name: 'Primary Salary', type: 'INCOME', icon: 'Briefcase', color: '#10b981', bg: 'rgba(16, 185, 129, 0.15)' },
  { id: 'cat-freelance', name: 'Freelance & Projects', type: 'INCOME', icon: 'Laptop', color: '#3b82f6', bg: 'rgba(59, 130, 246, 0.15)' },
  { id: 'cat-investments', name: 'Investments & Dividends', type: 'INCOME', icon: 'TrendingUp', color: '#8b5cf6', bg: 'rgba(139, 92, 246, 0.15)' },
  { id: 'cat-other-inc', name: 'Bonus & Other Income', type: 'INCOME', icon: 'Coins', color: '#f59e0b', bg: 'rgba(245, 158, 11, 0.15)' },
];

export const INITIAL_TRANSACTIONS: Transaction[] = [
  {
    id: 'tx-1',
    type: 'INCOME',
    amount: 3800.00,
    category: 'cat-salary',
    date: '2026-08-01',
    description: 'Monthly Tech Lead Salary',
    paymentMethod: 'Bank Transfer',
    status: 'Completed',
  },
  {
    id: 'tx-2',
    type: 'EXPENSE',
    amount: 850.00,
    category: 'cat-housing',
    date: '2026-08-02',
    description: 'Apartment Monthly Rent',
    paymentMethod: 'Bank Transfer',
    status: 'Completed',
  },
  {
    id: 'tx-3',
    type: 'INCOME',
    amount: 1050.00,
    category: 'cat-freelance',
    date: '2026-08-05',
    description: 'Laravel & React UI Consultation',
    paymentMethod: 'PayPal',
    status: 'Completed',
  },
  {
    id: 'tx-4',
    type: 'EXPENSE',
    amount: 160.00,
    category: 'cat-food',
    date: '2026-08-08',
    description: 'Weekly Groceries & Organic Food',
    paymentMethod: 'Credit Card',
    status: 'Completed',
  },
];
