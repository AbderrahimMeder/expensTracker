import React, { useEffect, useMemo, useState } from 'react';
import DashboardLayout from '@/components/dashboard/DashboardLayout';
import Transactions from '@/components/dashboard/transactions';
import { Transaction, Currency } from '@/types';
import { Plus } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { getExchangeRate } from '@/utils/exchange';
import { useAuth } from '@/context/authContext';
import Loading from '@/components/ui/loading';
export default function TransactionsPage() {
  const navigate = useNavigate();
  const APP_URL='http://localhost:8000'
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [rate,setrate]=useState<number>(1)
  const {user} = useAuth();
  const [currency] = useState<Currency>(() => {
    return (localStorage.getItem('finora_currency') as Currency) || 'USD';
  });

  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [loading,setLoading]=useState(false)
  const [modalType, setModalType] = useState<'INCOME' | 'EXPENSE'>('EXPENSE');
  useEffect(()=>{
    const token = localStorage.getItem('token')
    if (!token) {
      navigate('/login')
    }
    const fetchdata = async () => {
      setLoading(true)
      const response = await fetch(`${APP_URL}/api/transactions`, {
        method: "GET",
        headers: {
          'Accept': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
      });
      const data = await response.json();
      if (data.status == 200) {
        setTransactions(data.transactions);
      
      }
      setLoading(false)
    }
    fetchdata();
  },[])
  useMemo(async()=>{
    const rate = await getExchangeRate(user?.currency??'USD');
    setrate(rate)
  },[user])
  const openAddModal = (type: 'INCOME' | 'EXPENSE' = 'EXPENSE') => {
    setModalType(type);
    setIsAddModalOpen(true);
  };
  if(loading) return <Loading/>
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

      <Transactions
        transactions={transactions}
        currency={currency}
        onAddTransaction={(type) => openAddModal(type as 'INCOME' | 'EXPENSE')}
        rate={rate}
      />

    </DashboardLayout>
  );
}
