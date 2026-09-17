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
