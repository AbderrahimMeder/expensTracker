import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  BarChart3,
  PieChart,
  TrendingUp,
  TrendingDown,
  ArrowRight,
  Sparkles,
  Calendar,
  Layers,
  Zap,
  ArrowUpRight,
  ArrowDownRight,
  Clock,
  CheckCircle2,
  DollarSign,
  CreditCard,
  Building2,
  Banknote,
  Sliders,
  Eye,
  Filter,
  Flame,
  Coffee,
  ShoppingBag,
  Car,
  Home as HomeIcon,
  Tv,
  ChevronRight,
  AlertCircle,
  HelpCircle,
  Activity,
  Award,
} from 'lucide-react';

export function ReportsUI() {
  // Interactive Controls State
  const [selectedTimeframe, setSelectedTimeframe] = useState('monthly');
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [activeComparisonPeriod, setActiveComparisonPeriod] = useState('month-over-month');

  // Time-series mock data
  const monthlyData = [
    { label: 'Jan', spend: 3200, income: 14000, savings: 10800 },
    { label: 'Feb', spend: 3850, income: 14000, savings: 10150 },
    { label: 'Mar', spend: 2900, income: 14500, savings: 11600 },
    { label: 'Apr', spend: 4100, income: 14500, savings: 10400 },
    { label: 'May', spend: 3450, income: 14500, savings: 11050 },
    { label: 'Jun', spend: 3700, income: 15000, savings: 11300 },
    { label: 'Jul', spend: 3850, income: 15000, savings: 11150 },
    { label: 'Aug', spend: 3120, income: 15000, savings: 11880 },
  ];

  const maxSpend = Math.max(...monthlyData.map((d) => d.spend));

  // Category distribution data
  const categoryBreakdown = [
    { name: 'Food & Dining', amount: 980, pct: 31.4, color: '#10b981', icon: Coffee, trend: '-12% vs July' },
    { name: 'Housing & Utilities', amount: 850, pct: 27.2, color: '#8b5cf6', icon: HomeIcon, trend: 'Stable' },
    { name: 'Transport & Fuel', amount: 440, pct: 14.1, color: '#3b82f6', icon: Car, trend: '+5% vs July' },
    { name: 'Shopping & Retail', amount: 400, pct: 12.8, color: '#ec4899', icon: ShoppingBag, trend: '-24% vs July' },
    { name: 'Subscriptions', amount: 350, pct: 11.2, color: '#f59e0b', icon: Tv, trend: 'Unchanged' },
    { name: 'Other Discretionary', amount: 100, pct: 3.3, color: '#06b6d4', icon: Activity, trend: '-8% vs July' },
  ];

  // Biggest expenses list
  const biggestExpenses = [
    { merchant: 'Housing Management', category: 'Housing', date: 'Aug 01', account: 'CIH Bank', amount: 2800, tag: 'Fixed' },
    { merchant: 'Marjane Hypermarket', category: 'Food & Groceries', date: 'Aug 14', account: 'Attijariwafa', amount: 950, tag: 'Essential' },
    { merchant: 'Apple Authorized Service', category: 'Tech & Maintenance', date: 'Aug 19', account: 'CIH Bank', amount: 650, tag: 'Outlier' },
    { merchant: 'Restaurant La Table', category: 'Dining Out', date: 'Aug 26', account: 'Cash Wallet', amount: 320, tag: 'Social' },
    { merchant: 'Total Energies Station', category: 'Transport', date: 'Aug 22', account: 'CIH Bank', amount: 280, tag: 'Fuel' },
  ];

  return (
    <div style={{ color: 'var(--text-primary)', overflowX: 'hidden', background: '#070707' }}>

      {/* =========================================================================
          01. HERO SECTION: See the bigger picture
      ========================================================================== */}
      <section
        style={{
          padding: '5rem 1.5rem 4rem 1.5rem',
          maxWidth: '1200px',
          margin: '0 auto',
          position: 'relative',
        }}
      >
        {/* Luminous cyan/emerald backdrop glow */}
        <div
          style={{
            position: 'absolute',
            top: '8%',
            left: '50%',
            transform: 'translateX(-50%)',
            width: '600px',
            height: '300px',
            background: 'radial-gradient(circle, rgba(16, 185, 129, 0.14) 0%, rgba(6, 182, 212, 0.08) 50%, rgba(0,0,0,0) 80%)',
            filter: 'blur(70px)',
            pointerEvents: 'none',
            zIndex: 0,
          }}
        />

        <div style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
          {/* Header pill badge */}
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              background: 'rgba(6, 182, 212, 0.1)',
              border: '1px solid rgba(6, 182, 212, 0.25)',
              borderRadius: 'var(--radius-full)',
              padding: '0.4rem 1.1rem',
              marginBottom: '1.75rem',
              fontSize: '0.825rem',
              color: '#38bdf8',
              fontWeight: '700',
              letterSpacing: '0.02em',
            }}
          >
            <BarChart3 size={15} />
            <span>Finora Financial Intelligence & Reports</span>
          </div>

          {/* Headline */}
          <h1
            style={{
              fontSize: 'clamp(2.5rem, 5.5vw, 4.2rem)',
              fontWeight: '800',
              lineHeight: 1.12,
              letterSpacing: '-0.03em',
              color: '#ffffff',
              marginBottom: '1.35rem',
            }}
          >
            See the <span style={{ background: 'linear-gradient(135deg, #34d399 0%, #38bdf8 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>bigger picture.</span>
          </h1>

          {/* Subtitle */}
          <p
            style={{
              fontSize: '1.1rem',
              color: 'var(--text-secondary)',
              lineHeight: 1.65,
              maxWidth: '680px',
              margin: '0 auto 2.75rem auto',
            }}
          >
            Turn hundreds of transactions into clear, visual financial intelligence. Discover spending patterns, compare timelines, and understand where your money moves.
          </p>

          {/* Live Interactive Analytics Preview Workbench */}
          <div
            className="glass-card"
            style={{
              maxWidth: '1050px',
              margin: '0 auto',
              padding: '2rem',
              background: 'linear-gradient(180deg, #0e0e0e 0%, #090909 100%)',
              border: '1px solid #1f1f1f',
              borderRadius: 'var(--radius-lg)',
              boxShadow: '0 30px 70px -15px rgba(0, 0, 0, 0.95), 0 0 40px rgba(16, 185, 129, 0.06)',
              textAlign: 'left',
            }}
          >
            {/* Top Toolbar */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
                gap: '1rem',
                paddingBottom: '1.5rem',
                marginBottom: '1.5rem',
                borderBottom: '1px solid #1a1a1a',
              }}
            >
              <div>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                  Analytics Studio
                </div>
                <div style={{ fontSize: '1.15rem', fontWeight: '800', color: '#ffffff' }}>
                  Financial Velocity & Trajectory
                </div>
              </div>

              {/* Timeframe selector */}
              <div
                style={{
                  display: 'inline-flex',
                  background: '#141414',
                  padding: '0.3rem',
                  borderRadius: 'var(--radius-md)',
                  border: '1px solid #222222',
                  gap: '0.25rem',
                }}
              >
                {['daily', 'weekly', 'monthly', 'quarterly', 'yearly'].map((tf) => (
                  <button
                    key={tf}
                    onClick={() => setSelectedTimeframe(tf)}
                    style={{
                      padding: '0.45rem 0.9rem',
                      borderRadius: 'var(--radius-sm)',
                      fontSize: '0.8rem',
                      fontWeight: '700',
                      border: 'none',
                      cursor: 'pointer',
                      background: selectedTimeframe === tf ? 'var(--accent-primary)' : 'transparent',
                      color: selectedTimeframe === tf ? '#000000' : 'var(--text-secondary)',
                      textTransform: 'capitalize',
                      transition: 'all 0.15s ease',
                    }}
                  >
                    {tf}
                  </button>
                ))}
              </div>
            </div>

            {/* 4 Core Summary Counters */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                gap: '1.25rem',
                marginBottom: '2rem',
              }}
            >
              <div style={{ background: '#121212', padding: '1.25rem', borderRadius: 'var(--radius-md)', border: '1px solid #1a1a1a' }}>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Total Cash Inflow</div>
                <div style={{ fontSize: '1.65rem', fontWeight: '800', color: 'var(--accent-primary)', marginTop: '0.2rem' }}>
                  +15,000 <span style={{ fontSize: '0.85rem' }}>MAD</span>
                </div>
                <div style={{ fontSize: '0.75rem', color: 'var(--accent-primary)', marginTop: '0.25rem', display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                  <ArrowUpRight size={13} /> +3.4% vs last month
                </div>
              </div>

              <div style={{ background: '#121212', padding: '1.25rem', borderRadius: 'var(--radius-md)', border: '1px solid #1a1a1a' }}>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Total Monthly Spend</div>
                <div style={{ fontSize: '1.65rem', fontWeight: '800', color: '#ffffff', marginTop: '0.2rem' }}>
                  3,120 <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>MAD</span>
                </div>
                <div style={{ fontSize: '0.75rem', color: 'var(--accent-primary)', marginTop: '0.25rem', display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                  <ArrowDownRight size={13} /> -18.9% less than July
                </div>
              </div>

              <div style={{ background: '#121212', padding: '1.25rem', borderRadius: 'var(--radius-md)', border: '1px solid #1a1a1a' }}>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Net Savings Rate</div>
                <div style={{ fontSize: '1.65rem', fontWeight: '800', color: '#38bdf8', marginTop: '0.2rem' }}>
                  79.2% <span style={{ fontSize: '0.85rem' }}>(+11,880 MAD)</span>
                </div>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: '0.25rem' }}>
                  Above 65% monthly goal
                </div>
              </div>

              <div style={{ background: '#121212', padding: '1.25rem', borderRadius: 'var(--radius-md)', border: '1px solid #1a1a1a' }}>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Average Daily Burn</div>
                <div style={{ fontSize: '1.65rem', fontWeight: '800', color: '#f59e0b', marginTop: '0.2rem' }}>
                  104 <span style={{ fontSize: '0.85rem' }}>MAD / day</span>
                </div>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: '0.25rem' }}>
                  Safe budget zone
                </div>
              </div>
            </div>

            {/* Interactive Multi-Bar Chart Visualizer */}
            <div style={{ background: '#111111', padding: '1.5rem', borderRadius: 'var(--radius-md)', border: '1px solid #1a1a1a' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem' }}>
                <span style={{ fontSize: '0.85rem', fontWeight: '700', color: '#ffffff' }}>
                  Cash-Flow Evolution & Monthly Trend (MAD)
                </span>
                <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                  🟢 Savings Flow &nbsp;|&nbsp; ⚪ Spend Outflow
                </span>
              </div>

              {/* Bars container */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(8, 1fr)', gap: '0.75rem', alignItems: 'flex-end', height: '180px', paddingBottom: '1.5rem', borderBottom: '1px solid #222222' }}>
                {monthlyData.map((d, idx) => {
                  const spendHeight = (d.spend / maxSpend) * 100;
                  const isCurrent = idx === monthlyData.length - 1;
                  return (
                    <div key={idx} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', height: '100%', justifyContent: 'flex-end', gap: '0.4rem' }}>
                      <span style={{ fontSize: '0.7rem', color: isCurrent ? 'var(--accent-primary)' : 'var(--text-muted)', fontWeight: '700' }}>
                        {d.spend}
                      </span>
                      <div
                        style={{
                          width: '100%',
                          maxWidth: '32px',
                          height: `${spendHeight}%`,
                          background: isCurrent ? 'linear-gradient(180deg, #10b981 0%, #059669 100%)' : '#262626',
                          borderRadius: '4px 4px 0 0',
                          transition: 'height 0.3s ease',
                          boxShadow: isCurrent ? '0 0 15px rgba(16, 185, 129, 0.4)' : 'none',
                        }}
                      />
                      <span style={{ fontSize: '0.75rem', color: isCurrent ? '#ffffff' : 'var(--text-muted)', fontWeight: isCurrent ? '800' : '600' }}>
                        {d.label}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          02. FROM TRANSACTIONS TO UNDERSTANDING
      ========================================================================== */}
      <section
        style={{
          padding: '5rem 1.5rem',
          background: '#090909',
          borderTop: '1px solid var(--border-subtle)',
          borderBottom: '1px solid var(--border-subtle)',
        }}
      >
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', color: 'var(--accent-primary)', fontSize: '0.8rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.65rem' }}>
              <Zap size={16} />
              <span>Data Transformation Pipeline</span>
            </div>

            <h2 style={{ fontSize: '2.2rem', fontWeight: '800', color: '#ffffff', letterSpacing: '-0.02em', marginBottom: '0.85rem' }}>
              From Transactions to Understanding
            </h2>

            <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', maxWidth: '640px', margin: '0 auto' }}>
              Raw bank statements give you noise. Finora transforms messy, unorganized debit lines into structured behavioral clarity.
            </p>
          </div>

          {/* Side by side pipeline visualization */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '2rem',
              alignItems: 'center',
            }}
          >
            {/* Raw transactions */}
            <div className="glass-card" style={{ padding: '2rem', background: '#0e0e0e', borderRadius: 'var(--radius-lg)', border: '1px solid #222222' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                <span style={{ fontSize: '0.8rem', fontWeight: '700', color: '#ef4444', textTransform: 'uppercase' }}>Before: Raw Cryptic Data</span>
                <span className="badge badge-dark">Unfiltered Noise</span>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem', fontFamily: 'monospace', fontSize: '0.825rem' }}>
                <div style={{ background: '#141414', padding: '0.65rem 0.85rem', borderRadius: '4px', color: '#888888', display: 'flex', justifyContent: 'space-between' }}>
                  <span>POS TXN 49182 REST CLT</span>
                  <span style={{ color: '#ef4444' }}>-120 MAD</span>
                </div>
                <div style={{ background: '#141414', padding: '0.65rem 0.85rem', borderRadius: '4px', color: '#888888', display: 'flex', justifyContent: 'space-between' }}>
                  <span>ONLINE PAY 9012 ECOM MRKT</span>
                  <span style={{ color: '#ef4444' }}>-950 MAD</span>
                </div>
                <div style={{ background: '#141414', padding: '0.65rem 0.85rem', borderRadius: '4px', color: '#888888', display: 'flex', justifyContent: 'space-between' }}>
                  <span>AUTODEBIT REC SUB SC01</span>
                  <span style={{ color: '#ef4444' }}>-350 MAD</span>
                </div>
                <div style={{ background: '#141414', padding: '0.65rem 0.85rem', borderRadius: '4px', color: '#888888', display: 'flex', justifyContent: 'space-between' }}>
                  <span>GAB CASH WDL BR 04</span>
                  <span style={{ color: '#ef4444' }}>-700 MAD</span>
                </div>
              </div>
            </div>

            {/* Clear insight */}
            <div className="glass-card" style={{ padding: '2rem', background: '#0e0e0e', borderRadius: 'var(--radius-lg)', border: '1px solid var(--accent-border)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                <span style={{ fontSize: '0.8rem', fontWeight: '700', color: 'var(--accent-primary)', textTransform: 'uppercase' }}>After: Finora Intelligence</span>
                <span className="badge badge-green">Meaningful Clarity</span>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                <div style={{ background: '#141414', padding: '0.75rem 1rem', borderRadius: '6px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div>
                    <div style={{ fontWeight: '700', color: '#ffffff', fontSize: '0.9rem' }}>Restaurant La Table</div>
                    <div style={{ fontSize: '0.72rem', color: 'var(--accent-primary)' }}>Food & Dining · CIH Bank</div>
                  </div>
                  <span style={{ fontWeight: '800', color: '#ffffff' }}>120 MAD</span>
                </div>
                <div style={{ background: '#141414', padding: '0.75rem 1rem', borderRadius: '6px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div>
                    <div style={{ fontWeight: '700', color: '#ffffff', fontSize: '0.9rem' }}>Marjane Groceries</div>
                    <div style={{ fontSize: '0.72rem', color: '#3b82f6' }}>Essential Household · Attijariwafa</div>
                  </div>
                  <span style={{ fontWeight: '800', color: '#ffffff' }}>950 MAD</span>
                </div>
                <div style={{ background: '#141414', padding: '0.75rem 1rem', borderRadius: '6px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div>
                    <div style={{ fontWeight: '700', color: '#ffffff', fontSize: '0.9rem' }}>4 Active Subscriptions</div>
                    <div style={{ fontSize: '0.72rem', color: '#f59e0b' }}>Recurring Tech & Media</div>
                  </div>
                  <span style={{ fontWeight: '800', color: '#ffffff' }}>350 MAD</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          03. SPENDING OVER TIME
      ========================================================================== */}
      <section style={{ padding: '5rem 1.5rem', maxWidth: '1100px', margin: '0 auto' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '3rem',
            alignItems: 'center',
          }}
        >
          <div>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', color: 'var(--accent-primary)', fontSize: '0.8rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.75rem' }}>
              <Clock size={16} />
              <span>Historical Trajectory</span>
            </div>

            <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.75rem)', fontWeight: '800', color: '#ffffff', lineHeight: 1.2, letterSpacing: '-0.02em', marginBottom: '1.25rem' }}>
              Spending Over Time
            </h2>

            <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', lineHeight: '1.65', marginBottom: '1.5rem' }}>
              Track spending peaks, identify costly weekends, and monitor month-over-month reductions. Know whether you are spending faster or slower than previous periods.
            </p>

            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.6rem', fontSize: '0.875rem', color: '#ffffff' }}>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><CheckCircle2 size={16} color="var(--accent-primary)" /> Daily burn velocity monitoring</li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><CheckCircle2 size={16} color="var(--accent-primary)" /> Week-by-week aggregate comparisons</li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><CheckCircle2 size={16} color="var(--accent-primary)" /> Historical month-to-date trajectory</li>
            </ul>
          </div>

          <div className="glass-card" style={{ padding: '2rem', background: '#0e0e0e', borderRadius: 'var(--radius-lg)', border: '1px solid #222222' }}>
            <div style={{ fontSize: '0.9rem', fontWeight: '700', color: '#ffffff', marginBottom: '1.25rem' }}>
              August 2026 Daily Burn Heatmap
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: '0.4rem', textAlign: 'center', fontSize: '0.75rem', color: 'var(--text-muted)', marginBottom: '0.5rem' }}>
              <span>M</span><span>T</span><span>W</span><span>T</span><span>F</span><span style={{ color: '#f59e0b' }}>S</span><span style={{ color: '#f59e0b' }}>S</span>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: '0.4rem' }}>
              {Array.from({ length: 28 }).map((_, i) => {
                const isHeavy = [5, 6, 12, 13, 19, 20, 26].includes(i);
                const isZero = [1, 8, 15, 22].includes(i);
                const color = isHeavy ? '#f59e0b' : isZero ? '#1c1c1c' : 'rgba(16, 185, 129, 0.4)';
                return (
                  <div
                    key={i}
                    style={{
                      height: '28px',
                      borderRadius: '4px',
                      background: color,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '0.65rem',
                      fontWeight: '700',
                      color: isZero ? '#555555' : '#ffffff',
                    }}
                  >
                    {i + 1}
                  </div>
                );
              })}
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '1.25rem', fontSize: '0.75rem', color: 'var(--text-muted)' }}>
              <span>Low spend days</span>
              <span style={{ color: '#f59e0b', fontWeight: '600' }}>Weekend activity spikes</span>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          04. SPENDING BY CATEGORY
      ========================================================================== */}
      <section
        style={{
          padding: '5rem 1.5rem',
          background: '#090909',
          borderTop: '1px solid var(--border-subtle)',
          borderBottom: '1px solid var(--border-subtle)',
        }}
      >
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', color: 'var(--accent-primary)', fontSize: '0.8rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.65rem' }}>
              <PieChart size={16} />
              <span>Categorical Distribution</span>
            </div>

            <h2 style={{ fontSize: '2.2rem', fontWeight: '800', color: '#ffffff', letterSpacing: '-0.02em', marginBottom: '0.85rem' }}>
              Spending by Category
            </h2>

            <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', maxWidth: '640px', margin: '0 auto' }}>
              See the exact percentage distribution of your lifestyle. Know which areas take the largest cut and where you can trim without sacrifice.
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '2rem',
              alignItems: 'center',
            }}
          >
            {/* Visual breakdown list */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
              {categoryBreakdown.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div
                    key={idx}
                    className="glass-card"
                    style={{
                      padding: '1rem 1.25rem',
                      background: '#0e0e0e',
                      borderRadius: 'var(--radius-md)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      borderLeft: `4px solid ${item.color}`,
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
                      <div style={{ width: '34px', height: '34px', borderRadius: '6px', background: `${item.color}15`, color: item.color, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <Icon size={18} />
                      </div>
                      <div>
                        <div style={{ fontSize: '0.95rem', fontWeight: '700', color: '#ffffff' }}>{item.name}</div>
                        <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>{item.trend}</div>
                      </div>
                    </div>

                    <div style={{ textAlign: 'right' }}>
                      <div style={{ fontSize: '1rem', fontWeight: '800', color: '#ffffff' }}>{item.amount} MAD</div>
                      <div style={{ fontSize: '0.75rem', fontWeight: '700', color: item.color }}>{item.pct}%</div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Donut / Visual Summary */}
            <div className="glass-card" style={{ padding: '2.5rem', background: '#0e0e0e', borderRadius: 'var(--radius-lg)', textAlign: 'center', border: '1px solid #222222' }}>
              <div style={{ width: '160px', height: '160px', borderRadius: '50%', border: '14px solid #10b981', borderTopColor: '#8b5cf6', borderRightColor: '#3b82f6', borderBottomColor: '#ec4899', margin: '0 auto 1.5rem auto', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
                <span style={{ fontSize: '1.5rem', fontWeight: '800', color: '#ffffff' }}>3,120</span>
                <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>MAD Total</span>
              </div>
              <h3 style={{ fontSize: '1.1rem', fontWeight: '800', color: '#ffffff', marginBottom: '0.35rem' }}>
                6 Active Categories
              </h3>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', maxWidth: '280px', margin: '0 auto' }}>
                Food & Housing represent 58.6% of your monthly expenditure.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          05. COMPARE YOUR SPENDING
      ========================================================================== */}
      <section style={{ padding: '5rem 1.5rem', maxWidth: '1000px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', color: 'var(--accent-primary)', fontSize: '0.8rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.65rem' }}>
            <Activity size={16} />
            <span>Comparative Analysis</span>
          </div>

          <h2 style={{ fontSize: '2.2rem', fontWeight: '800', color: '#ffffff', letterSpacing: '-0.02em', marginBottom: '0.85rem' }}>
            Compare Your Spending
          </h2>

          <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
            Measure your progress against previous months and discover tangible financial improvement.
          </p>
        </div>

        <div className="glass-card" style={{ padding: '2.5rem', background: '#0e0e0e', borderRadius: 'var(--radius-lg)', border: '1px solid var(--border-hover)' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '2rem', alignItems: 'center' }}>
            {/* Last Month */}
            <div style={{ background: '#141414', padding: '1.5rem', borderRadius: 'var(--radius-md)' }}>
              <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>July 2026</span>
              <div style={{ fontSize: '1.75rem', fontWeight: '800', color: 'var(--text-secondary)', marginTop: '0.25rem' }}>
                3,850 MAD
              </div>
              <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: '0.4rem' }}>
                Prior monthly baseline
              </div>
            </div>

            {/* This Month */}
            <div style={{ background: '#141414', padding: '1.5rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--accent-border)' }}>
              <span style={{ fontSize: '0.8rem', color: 'var(--accent-primary)', textTransform: 'uppercase', fontWeight: '700' }}>August 2026 (Current)</span>
              <div style={{ fontSize: '1.75rem', fontWeight: '800', color: '#ffffff', marginTop: '0.25rem' }}>
                3,120 MAD
              </div>
              <div style={{ fontSize: '0.8rem', color: 'var(--accent-primary)', fontWeight: '700', marginTop: '0.4rem', display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                <ArrowDownRight size={14} /> -730 MAD (-18.9%) Saved
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          06. INCOME VS SPENDING
      ========================================================================== */}
      <section
        style={{
          padding: '5rem 1.5rem',
          background: '#090909',
          borderTop: '1px solid var(--border-subtle)',
          borderBottom: '1px solid var(--border-subtle)',
        }}
      >
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', color: 'var(--accent-primary)', fontSize: '0.8rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.65rem' }}>
              <TrendingUp size={16} />
              <span>Cash-Flow Matrix</span>
            </div>

            <h2 style={{ fontSize: '2.2rem', fontWeight: '800', color: '#ffffff', letterSpacing: '-0.02em', marginBottom: '0.85rem' }}>
              Income vs Spending
            </h2>

            <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
              Total clarity over your income streams versus lifestyle outflows.
            </p>
          </div>

          <div className="glass-card" style={{ padding: '2.5rem', background: '#0e0e0e', borderRadius: 'var(--radius-lg)' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.5rem', marginBottom: '2rem' }}>
              <div>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Total Monthly Inflow</div>
                <div style={{ fontSize: '1.75rem', fontWeight: '800', color: 'var(--accent-primary)', marginTop: '0.2rem' }}>
                  +15,000 MAD
                </div>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Salary + Extra Income</div>
              </div>

              <div>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Total Monthly Outflow</div>
                <div style={{ fontSize: '1.75rem', fontWeight: '800', color: '#ef4444', marginTop: '0.2rem' }}>
                  -3,120 MAD
                </div>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Fixed Bills + Discretionary</div>
              </div>

              <div>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Retained Wealth</div>
                <div style={{ fontSize: '1.75rem', fontWeight: '800', color: '#38bdf8', marginTop: '0.2rem' }}>
                  +11,880 MAD
                </div>
                <div style={{ fontSize: '0.75rem', color: '#38bdf8', fontWeight: '600' }}>79.2% Positive Margin</div>
              </div>
            </div>

            {/* Balance gauge */}
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.8rem', marginBottom: '0.4rem' }}>
                <span style={{ color: 'var(--text-muted)' }}>Inflow vs Outflow Ratio</span>
                <span style={{ color: 'var(--accent-primary)', fontWeight: '700' }}>79.2% Saved</span>
              </div>
              <div style={{ height: '8px', background: '#1c1c1c', borderRadius: '4px', overflow: 'hidden', display: 'flex' }}>
                <div style={{ width: '20.8%', background: '#ef4444' }} />
                <div style={{ width: '79.2%', background: 'var(--accent-primary)' }} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          07. BIGGEST EXPENSES
      ========================================================================== */}
      <section style={{ padding: '5rem 1.5rem', maxWidth: '1100px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', color: '#f59e0b', fontSize: '0.8rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.65rem' }}>
            <Flame size={16} />
            <span>Outlier & Top Outflows</span>
          </div>

          <h2 style={{ fontSize: '2.2rem', fontWeight: '800', color: '#ffffff', letterSpacing: '-0.02em', marginBottom: '0.85rem' }}>
            Biggest Expenses
          </h2>

          <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', maxWidth: '640px', margin: '0 auto' }}>
            Spot where 80% of your money goes. Finora automatically isolates high-ticket purchases so you always stay aware.
          </p>
        </div>

        <div className="glass-card" style={{ padding: '1.5rem', background: '#0e0e0e', borderRadius: 'var(--radius-lg)' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            {biggestExpenses.map((exp, idx) => (
              <div
                key={idx}
                style={{
                  background: '#141414',
                  padding: '1rem 1.25rem',
                  borderRadius: 'var(--radius-md)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  flexWrap: 'wrap',
                  gap: '0.75rem',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <div style={{ fontSize: '1rem', fontWeight: '800', color: 'var(--text-muted)', width: '24px' }}>
                    0{idx + 1}
                  </div>
                  <div>
                    <div style={{ fontSize: '0.95rem', fontWeight: '700', color: '#ffffff' }}>{exp.merchant}</div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                      {exp.category} · {exp.account} · {exp.date}
                    </div>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <span className="badge badge-dark">{exp.tag}</span>
                  <span style={{ fontSize: '1.1rem', fontWeight: '800', color: '#ef4444' }}>-{exp.amount} MAD</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          08. ALL YOUR ACCOUNTS
      ========================================================================== */}
      <section
        style={{
          padding: '5rem 1.5rem',
          background: '#090909',
          borderTop: '1px solid var(--border-subtle)',
          borderBottom: '1px solid var(--border-subtle)',
        }}
      >
        <div style={{ maxWidth: '1000px', margin: '0 auto', textAlign: 'center' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', color: 'var(--accent-primary)', fontSize: '0.8rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.65rem' }}>
            <Building2 size={16} />
            <span>Unified Distribution</span>
          </div>

          <h2 style={{ fontSize: '2.2rem', fontWeight: '800', color: '#ffffff', letterSpacing: '-0.02em', marginBottom: '0.85rem' }}>
            All Your Accounts
          </h2>

          <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', maxWidth: '600px', margin: '0 auto 2.5rem auto' }}>
            Cross-account reporting that aggregates activity across checking, savings, and physical cash.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.25rem' }}>
            <div className="glass-card" style={{ padding: '1.75rem', background: '#0e0e0e', borderRadius: 'var(--radius-md)', textAlign: 'left' }}>
              <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>CIH Bank Account</div>
              <div style={{ fontSize: '1.5rem', fontWeight: '800', color: '#ffffff', marginTop: '0.2rem' }}>8,500 MAD</div>
              <div style={{ fontSize: '0.75rem', color: 'var(--accent-primary)', marginTop: '0.4rem' }}>68.5% of total wealth</div>
            </div>

            <div className="glass-card" style={{ padding: '1.75rem', background: '#0e0e0e', borderRadius: 'var(--radius-md)', textAlign: 'left' }}>
              <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Attijariwafa Bank</div>
              <div style={{ fontSize: '1.5rem', fontWeight: '800', color: '#ffffff', marginTop: '0.2rem' }}>3,200 MAD</div>
              <div style={{ fontSize: '0.75rem', color: '#3b82f6', marginTop: '0.4rem' }}>25.8% of total wealth</div>
            </div>

            <div className="glass-card" style={{ padding: '1.75rem', background: '#0e0e0e', borderRadius: 'var(--radius-md)', textAlign: 'left' }}>
              <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Physical Cash</div>
              <div style={{ fontSize: '1.5rem', fontWeight: '800', color: '#ffffff', marginTop: '0.2rem' }}>700 MAD</div>
              <div style={{ fontSize: '0.75rem', color: '#f59e0b', marginTop: '0.4rem' }}>5.7% of total wealth</div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          09. UNDERSTAND YOUR HABITS
      ========================================================================== */}
      <section style={{ padding: '5rem 1.5rem', maxWidth: '1100px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', color: 'var(--accent-primary)', fontSize: '0.8rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.65rem' }}>
            <Eye size={16} />
            <span>Behavioral Insights</span>
          </div>

          <h2 style={{ fontSize: '2.2rem', fontWeight: '800', color: '#ffffff', letterSpacing: '-0.02em', marginBottom: '0.85rem' }}>
            Understand Your Habits
          </h2>

          <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', maxWidth: '640px', margin: '0 auto' }}>
            Finora translates cold transaction rows into real psychological and behavioral patterns.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
          <div className="glass-card" style={{ padding: '1.75rem', background: '#0e0e0e', borderRadius: 'var(--radius-md)' }}>
            <div style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>☕</div>
            <h3 style={{ fontSize: '1.05rem', fontWeight: '700', color: '#ffffff', marginBottom: '0.4rem' }}>Morning Micro-Expenses</h3>
            <p style={{ fontSize: '0.825rem', color: 'var(--text-muted)', lineHeight: '1.5' }}>
              Daily coffee and quick snacks amount to approximately 420 MAD each month. Small daily tweaks make big annual savings.
            </p>
          </div>

          <div className="glass-card" style={{ padding: '1.75rem', background: '#0e0e0e', borderRadius: 'var(--radius-md)' }}>
            <div style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>🍕</div>
            <h3 style={{ fontSize: '1.05rem', fontWeight: '700', color: '#ffffff', marginBottom: '0.4rem' }}>Weekend Social Outings</h3>
            <p style={{ fontSize: '0.825rem', color: 'var(--text-muted)', lineHeight: '1.5' }}>
              Friday and Saturday dinners account for 64% of total dining expenses. Scheduled budgeting prevents surprises.
            </p>
          </div>

          <div className="glass-card" style={{ padding: '1.75rem', background: '#0e0e0e', borderRadius: 'var(--radius-md)' }}>
            <div style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>💳</div>
            <h3 style={{ fontSize: '1.05rem', fontWeight: '700', color: '#ffffff', marginBottom: '0.4rem' }}>Silent Subscriptions</h3>
            <p style={{ fontSize: '0.825rem', color: 'var(--text-muted)', lineHeight: '1.5' }}>
              Cloud tools and streaming media deduct 350 MAD silently on the 1st and 15th of each month.
            </p>
          </div>
        </div>
      </section>

      {/* =========================================================================
          10. SIMPLE, NOT OVERWHELMING
      ========================================================================== */}
      <section
        style={{
          padding: '5rem 1.5rem',
          background: '#090909',
          borderTop: '1px solid var(--border-subtle)',
          borderBottom: '1px solid var(--border-subtle)',
        }}
      >
        <div style={{ maxWidth: '850px', margin: '0 auto', textAlign: 'center' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', color: 'var(--accent-primary)', fontSize: '0.8rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.65rem' }}>
            <Sliders size={16} />
            <span>Effortless Clarity</span>
          </div>

          <h2 style={{ fontSize: '2.2rem', fontWeight: '800', color: '#ffffff', letterSpacing: '-0.02em', marginBottom: '1rem' }}>
            Simple, Not Overwhelming
          </h2>

          <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', lineHeight: '1.65', marginBottom: '2rem' }}>
            You shouldn't need a finance degree or hours of complex spreadsheet configuration to understand where your money goes. Finora is designed for immediate comprehension at a glance.
          </p>

          <div style={{ display: 'inline-flex', gap: '1.5rem', flexWrap: 'wrap', justifyContent: 'center', color: '#ffffff', fontSize: '0.9rem' }}>
            <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}><CheckCircle2 size={16} color="var(--accent-primary)" /> Zero accounting jargon</span>
            <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}><CheckCircle2 size={16} color="var(--accent-primary)" /> Instant visual graphs</span>
            <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}><CheckCircle2 size={16} color="var(--accent-primary)" /> Beautiful dark mode</span>
          </div>
        </div>
      </section>

      {/* =========================================================================
          11. SMARTER INSIGHTS [FUTURE]
      ========================================================================== */}
      <section style={{ padding: '5rem 1.5rem', maxWidth: '1000px', margin: '0 auto', textAlign: 'center' }}>
        <span className="badge badge-dark" style={{ marginBottom: '0.75rem' }}>Future Roadmap</span>
        <h2 style={{ fontSize: '2.2rem', fontWeight: '800', color: '#ffffff', letterSpacing: '-0.02em', marginBottom: '0.85rem' }}>
          Smarter Insights
        </h2>

        <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', maxWidth: '600px', margin: '0 auto 2.5rem auto' }}>
          Future AI intelligence will automatically forecast end-of-month balances and alert you to unusual spending anomalies before they impact your savings.
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.25rem', textAlign: 'left' }}>
          <div className="glass-card" style={{ padding: '1.5rem', background: '#0e0e0e', borderRadius: 'var(--radius-md)' }}>
            <div style={{ fontSize: '0.8rem', color: 'var(--accent-primary)', fontWeight: '700', marginBottom: '0.35rem' }}>🔮 Predictive Balance</div>
            <p style={{ fontSize: '0.9rem', color: '#ffffff' }}>"At current spending speed, your projected end-of-month balance will be 12,100 MAD."</p>
          </div>

          <div className="glass-card" style={{ padding: '1.5rem', background: '#0e0e0e', borderRadius: 'var(--radius-md)' }}>
            <div style={{ fontSize: '0.8rem', color: '#f59e0b', fontWeight: '700', marginBottom: '0.35rem' }}>⚠️ Anomaly Detection</div>
            <p style={{ fontSize: '0.9rem', color: '#ffffff' }}>"Online shopping is 40% higher than your standard weekly average."</p>
          </div>
        </div>
      </section>

      {/* =========================================================================
          12. FINAL CTA: See your money differently
      ========================================================================== */}
      <section style={{ padding: '5rem 1.5rem 3rem 1.5rem', maxWidth: '1000px', margin: '0 auto' }}>
        <div
          className="glass-card"
          style={{
            padding: '4rem 2rem',
            background: 'linear-gradient(180deg, #121212 0%, #080808 100%)',
            border: '1px solid var(--border-hover)',
            borderRadius: 'var(--radius-lg)',
            textAlign: 'center',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          <div
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: '400px',
              height: '400px',
              background: 'radial-gradient(circle, rgba(16, 185, 129, 0.12) 0%, rgba(56, 189, 248, 0.08) 50%, rgba(0,0,0,0) 70%)',
              filter: 'blur(70px)',
              pointerEvents: 'none',
            }}
          />

          <div style={{ position: 'relative', zIndex: 1 }}>
            <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: '800', color: '#ffffff', letterSpacing: '-0.02em', marginBottom: '1rem', lineHeight: 1.15 }}>
              See your money <span style={{ color: 'var(--accent-primary)' }}>differently.</span>
            </h2>

            <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', maxWidth: '520px', margin: '0 auto 2.5rem auto', lineHeight: '1.6' }}>
              Gain the financial clarity and confidence you've always wanted. Start exploring your reports today.
            </p>

            <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap', marginBottom: '2rem' }}>
              <Link to="/register" className="btn btn-primary" style={{ fontSize: '1rem', padding: '0.85rem 2.2rem', textDecoration: 'none' }}>
                <span>Start for Free — Enter Finora</span>
                <ArrowRight size={18} />
              </Link>
            </div>

            <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
              100% Free · No Credit Card Required
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ReportsUI;
