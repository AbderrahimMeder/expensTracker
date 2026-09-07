export interface User {
  id?: string | number;
  name?: string;
  email?: string;
  avatar?: string;
  profile?: string;
  [key: string]: any;
}

export type TransactionType = 'income' | 'expense';

export interface Transaction {
  id: string;
  type: TransactionType;
  amount: number;
  category: string;
  title?: string;
  description?: string;
  date: string;
  time?: string;
  paymentMethod?: string;
  status?: string;
}

export interface Category {
  id: string;
  name: string;
  type: TransactionType;
  icon: string;
  color: string;
  bg: string;
}

export interface CategorySpending {
  id: string;
  name: string;
  amount: number;
  percentage: number;
  color: string;
  icon: string;
  bg: string;
}

export interface Budget {
  totalBudget: number;
  categoryBudgets: Record<string, number>;
}

export type CurrencyCode = 'USD' | 'EUR' | 'MAD' | 'GBP' | 'CAD' | string;

export interface CurrencyOption {
  code: string;
  symbol: string;
  name: string;
}

export type Currency = string;

export interface DashboardStats {
  totalBalance: number;
  totalIncome: number;
  totalExpenses: number;
  savings: number;
  savingsRate: string;
  transactionCount: number;
}

export interface ExpenseEvolutionPoint {
  label: string;
  date: string;
  amount: number;
  income?: number;
}
