import React, { useState } from 'react';
import DashboardLayout from '@/components/dashboard/DashboardLayout';
import RecentTransactions from '@/components/dashboard/RecentTransactions';
import AddTransactionModal from '@/components/dashboard/AddTransactionModal';
import { Transaction, Currency } from '@/types';
import { Plus } from 'lucide-react';

export default function TransactionsPage() {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [currency] = useState<Currency>(() => {
    return (localStorage.getItem('finora_currency') as Currency) || 'USD';
  });

  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [modalType, setModalType] = useState<'INCOME' | 'EXPENSE'>('EXPENSE');

  const handleAddTransaction = (newTx: Transaction) => {
    setTransactions((prev) => {
      const updated = [newTx, ...prev];
      try {
        localStorage.setItem('finora_transactions', JSON.stringify(updated));
      } catch (err) {
        console.error(err);
      }
      return updated;
    });
  };

  const openAddModal = (type: 'INCOME' | 'EXPENSE' = 'EXPENSE') => {
    setModalType(type);
    setIsAddModalOpen(true);
  };

  return (
    <DashboardLayout onOpenAddModal={(type) => openAddModal(type as 'INCOME' | 'EXPENSE')}>
      <div style={{ marginBottom: '2rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
          <div>
            <h1 style={{ fontSize: '1.75rem', fontWeight: '800', color: '#ffffff', margin: 0 }}>
              Transactions Ledger
            </h1>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', margin: '0.25rem 0 0' }}>
              Full transaction history, category classification, and statements
            </p>
          </div>
          <button
            onClick={() => openAddModal('EXPENSE')}
            className="btn btn-primary"
            style={{ gap: '0.4rem' }}
          >
            <Plus size={16} />
            <span>Add Record</span>
          </button>
        </div>
      </div>

      <RecentTransactions
        transactions={transactions}
        currency={currency}
        onAddTransaction={(type) => openAddModal(type as 'INCOME' | 'EXPENSE')}
      />

      <AddTransactionModal
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
        initialType={modalType}
        currency={currency}
        onSave={handleAddTransaction}
      />
    </DashboardLayout>
  );
}
