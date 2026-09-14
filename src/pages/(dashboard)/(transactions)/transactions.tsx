import React, { useEffect, useMemo, useRef, useState } from 'react';
import DashboardLayout from '@/components/dashboard/DashboardLayout';
import Transactions from '@/components/dashboard/transactions';
import { Transaction, Currency } from '@/types';
import { Plus, ArrowUpRight, ArrowDownLeft, Wallet, Receipt, RefreshCw } from 'lucide-react';
import { useNavigate, Link } from 'react-router-dom';
import { getExchangeRate } from '@/utils/exchange';
import { useAuth } from '@/context/authContext';
import { LoadingTransaction } from '@/components/ui/loading';
import toast from 'react-hot-toast';

export default function TransactionsPage() {
  const navigate = useNavigate();
  const APP_URL = 'http://localhost:8000';
  const { user,loading } = useAuth();

  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [rate, setRate] = useState<number>(1);
  const [loadingPage,setLoadingPage] = useState<boolean>(false);
  const [isRefreshing, setIsRefreshing] = useState<boolean>(false);
  const [fetchagain,setFetchagain] = useState<boolean>(false);
  const time = useRef(0);
  const interval = useRef<ReturnType<typeof setInterval> | null>(null);
  const timeElement = useRef<HTMLSpanElement>(null);
  const buttonElement = useRef<HTMLButtonElement>(null);
  const fetchTransactions = async (isManualRefresh = false) => {
    console.log('fetch');
    time.current=0
    setFetchagain(true)
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/login');
      return;
    }

    if (isManualRefresh) {
      setIsRefreshing(true);
    }

    try {
      const response = await fetch(`${APP_URL}/api/transactions`, {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          Authorization: `Bearer ${token}`,
        },
      });
      const data = await response.json();
      if (response.ok && data.status === 200 && data.transactions) {
        setTransactions(data.transactions);
        if (isManualRefresh) {
          toast.success('Ledger updated with latest transactions!');
        }
      } else if (data.transactions) {
        setTransactions(data.transactions);
      }
    } catch (error) {
      navigate('/error',{state:{code:500}})
      if (isManualRefresh) {
        toast.error('Could not refresh transactions');
      }
    } finally {
      setIsRefreshing(false);
      setLoadingPage(false);
      setFetchagain(false)
    }
  };

  useEffect(() => {
    if(!loading){
      setLoadingPage(true);
    }
    if(user&&!loading){
      if(!user) navigate('/login')
      else fetchTransactions();
      
    }
  }, [user, loading, navigate]);

  // Fetch exchange rate for user currency
  useEffect(() => {
    let isMounted = true;
    const fetchRate = async () => {
      try {
        const r = await getExchangeRate(user?.currency || 'USD');
        if (isMounted) setRate(r || 1);
      } catch (err) {
        console.error('Exchange rate error:', err);
      }
    };
    fetchRate();
    return () => {
      isMounted = false;
    };
  }, [user]);

const startTimer = () => {
  if (interval.current) return;

  time.current = 1;

  if (timeElement.current) {
    timeElement.current.textContent = `${time.current}s`;
  }

  if (buttonElement.current) {
    buttonElement.current.disabled = true;
    buttonElement.current.style.cursor = 'not-allowed';
    buttonElement.current.style.opacity = '0.5';
  }

  interval.current = setInterval(() => {
    time.current += 1;

    if (timeElement.current) {
      timeElement.current.textContent = `${time.current}s`;
    }

    if (time.current >= 30) {
      clearInterval(interval.current!);
      interval.current = null;
      time.current = 0;

      if (timeElement.current) {
        timeElement.current.textContent = 'Refresh';
      }

      if (buttonElement.current) {
        buttonElement.current.disabled = false;
        buttonElement.current.style.cursor = 'pointer';
        buttonElement.current.style.opacity = '1';
      }
    }
  }, 1000);
};
  // Financial Stats calculation
  const stats = useMemo(() => {
    const totalIncome = transactions
      .filter((t) => (t.type || '').toUpperCase() === 'INCOME')
      .reduce((acc, t) => acc + Number(t.amount || 0), 0);

    const totalExpenses = transactions
      .filter((t) => (t.type || '').toUpperCase() === 'EXPENSE')
      .reduce((acc, t) => acc + Number(t.amount || 0), 0);

    const netCashflow = totalIncome - totalExpenses;

    return {
      totalIncome: totalIncome * rate,
      totalExpenses: totalExpenses * rate,
      netCashflow: netCashflow * rate,
      count: transactions.length,
      incomeCount: transactions.filter((t) => (t.type || '').toUpperCase() === 'INCOME').length,
      expenseCount: transactions.filter((t) => (t.type || '').toUpperCase() === 'EXPENSE').length,
    };
  }, [transactions, rate]);

  const userCurrency = user?.currency || 'USD';

  if (loadingPage) return <LoadingTransaction hight={150} />;

  return (
    <DashboardLayout>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', paddingBottom: '3rem' }}>
        {/* Page Header */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '1.25rem',
            paddingBottom: '1.25rem',
            borderBottom: '1px solid var(--border-subtle)',
          }}
        >
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.35rem' }}>
              <h1
                style={{
                  fontSize: '1.85rem',
                  fontWeight: '800',
                  color: '#ffffff',
                  letterSpacing: '-0.02em',
                  margin: 0,
                }}
              >
                Transactions
              </h1>
              <span
                style={{
                  fontSize: '0.75rem',
                  padding: '2px 8px',
                  borderRadius: '12px',
                  background: 'rgba(16, 185, 129, 0.1)',
                  color: '#10b981',
                  border: '1px solid rgba(16, 185, 129, 0.25)',
                  fontWeight: '700',
                }}
              >
                {stats.count} Records
              </span>
            </div>
            <p
              style={{
                fontSize: '0.875rem',
                color: 'var(--text-secondary)',
                margin: 0,
              }}
            >
              Real-time audit log of inflows, expense vouchers, category classification, and statements.
            </p>
          </div>

          {/* Action Buttons */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <button
              onClick={() => {fetchTransactions(true);startTimer()}}
              ref={buttonElement}
              className="btn btn-secondary"
              style={{ padding: '0.65rem 0.85rem', gap: '0.4rem' }}
              title="Refresh ledger"
            >
              <RefreshCw
                size={15}
                style={{
                  animation: isRefreshing ? 'spin 0.8s linear infinite' : 'none',
                }}
              />
              <span ref={timeElement}>Refresh</span>
            </button>

            <Link
              to="/transactions/new"
              className="btn btn-primary"
              style={{
                gap: '0.5rem',
                padding: '0.65rem 1.25rem',
                fontSize: '0.9rem',
                boxShadow: 'var(--accent-glow)',
              }}
            >
              <Plus size={16} />
              <span>Create Transaction</span>
            </Link>
          </div>
        </div>

        {/* 4 Top Metric Highlight Cards */}

        {/* Full Interactive Transactions Table Component */}
        <Transactions
          transactions={transactions}
          currency={userCurrency}
          rate={rate}
          fetchagain={fetchagain}
        />
      </div>
    </DashboardLayout>
  );
}
