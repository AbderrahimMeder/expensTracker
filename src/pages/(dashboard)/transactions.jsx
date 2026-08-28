import React, { useState } from 'react';
import DashboardLayout from '../../components/dashboard/DashboardLayout';
import RecentTransactions from '../../components/dashboard/RecentTransactions';
import AddTransactionModal from '../../components/dashboard/AddTransactionModal';
import {
  MOCK_TRANSACTIONS,
  formatCurrency,
  computeDashboardStats
} from '../../utils/dashboardUtils';
import { ArrowUpDown, Plus } from 'lucide-react';

export default function TransactionsPage() {
  const [transactions, setTransactions] = useState(() => {
    try {
      const saved = localStorage.getItem('finora_transactions');
      return saved ? JSON.parse(saved) : MOCK_TRANSACTIONS;
    } catch {
      return MOCK_TRANSACTIONS;
    }
  });

  const [currency] = useState(() => {
    return localStorage.getItem('finora_currency') || 'USD';
  });

  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [modalType, setModalType] = useState('expense');

  const handleAddTransaction = (newTx) => {
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

  const openAddModal = (type = 'expense') => {
    setModalType(type);
    setIsAddModalOpen(true);
  };

  return (
    <DashboardLayout onOpenAddModal={(type) => openAddModal(type || 'expense')}>
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
            onClick={() => openAddModal('expense')}
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
        onAddTransaction={(type) => openAddModal(type)}
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
