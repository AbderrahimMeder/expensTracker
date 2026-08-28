import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Wallet,
  ArrowRight,
  Sparkles,
  TrendingDown,
  TrendingUp,
  AlertCircle,
  HelpCircle,
  BookOpen,
  PieChart,
  DollarSign,
  CreditCard,
  Banknote,
  Repeat,
  Target,
  BarChart2,
  Layers,
  Shield,
  Lock,
  Eye,
  Sliders,
  CheckCircle2,
  Zap,
  Smartphone,
  Cpu,
  Compass,
  Building2,
  Calendar,
  Tag,
  Store,
  ChevronRight,
  Flame,
  Coffee,
  ShoppingBag,
  Car,
  Home as HomeIcon,
  Tv,
  Activity,
  Award,
} from 'lucide-react';

export function AboutUs() {
  // State for interactive widgets
  const [activeReportPeriod, setActiveReportPeriod] = useState('monthly');
  const [activeTabWhatIs, setActiveTabWhatIs] = useState('accounts');
  const [activePrinciple, setActivePrinciple] = useState(0);
  const [interactiveBudgetSpent, setInteractiveBudgetSpent] = useState(1120);

  // Subscriptions dataset in MAD
  const sampleSubscriptions = [
    { name: 'Netflix 4K', price: 50, cycle: 'Monthly', status: 'Active', nextPay: 'Sep 02', icon: '🎬' },
    { name: 'Spotify Premium', price: 60, cycle: 'Monthly', status: 'Active', nextPay: 'Sep 10', icon: '🎵' },
    { name: 'Gym & Fitness Pro', price: 200, cycle: 'Monthly', status: 'Active', nextPay: 'Sep 01', icon: '💪' },
    { name: 'Cloud Storage 2TB', price: 40, cycle: 'Monthly', status: 'Active', nextPay: 'Sep 18', icon: '☁️' },
  ];

  const totalMonthlySubs = sampleSubscriptions.reduce((acc, curr) => acc + curr.price, 0);
  const totalYearlySubs = totalMonthlySubs * 12;

  // Categories list
  const defaultCategories = [
    { name: 'Food & Dining', icon: Coffee, color: '#10b981', sample: '800 MAD' },
    { name: 'Transport & Fuel', icon: Car, color: '#3b82f6', sample: '400 MAD' },
    { name: 'Shopping & Clothes', icon: ShoppingBag, color: '#ec4899', sample: '650 MAD' },
    { name: 'Housing & Rent', icon: HomeIcon, color: '#8b5cf6', sample: '2,800 MAD' },
    { name: 'Bills & Utilities', icon: Zap, color: '#f59e0b', sample: '350 MAD' },
    { name: 'Entertainment', icon: Tv, color: '#06b6d4', sample: '250 MAD' },
    { name: 'Health & Fitness', icon: Activity, color: '#14b8a6', sample: '200 MAD' },
    { name: 'Work & Side-Project', icon: Building2, color: '#6366f1', sample: '150 MAD' },
  ];

  // 6 Principles
  const principles = [
    {
      title: 'Simplicity',
      quote: 'Money management shouldn’t feel complicated.',
      desc: 'We strip away clutter, endless menus, and bloated spreadsheets so you can log an expense in under 5 seconds.',
      icon: Sparkles,
    },
    {
      title: 'Transparency',
      quote: 'Know exactly where your money goes.',
      desc: 'Crystal-clear breakdown of every dirham spent across merchants, accounts, and categories with zero guesswork.',
      icon: Eye,
    },
    {
      title: 'Privacy',
      quote: 'Your financial information belongs to you.',
      desc: 'We never sell your data, run third-party advertising trackers, or compromise on your confidential records.',
      icon: Shield,
    },
    {
      title: 'Security',
      quote: 'Your money deserves strong protection.',
      desc: 'Engineered with encrypted session tokens, strict API route policies, and hardened backend standards.',
      icon: Lock,
    },
    {
      title: 'Control',
      quote: 'Your money. Your decisions.',
      desc: 'Set custom category limits, organize cash wallets alongside bank balances, and control your own budget pace.',
      icon: Sliders,
    },
    {
      title: 'Clarity',
      quote: 'Turn financial activity into something you can understand.',
      desc: 'Transform raw, cryptic bank transactions into beautiful visual reports that show real spending behavior.',
      icon: PieChart,
    },
  ];

  // Roadmap
  const roadmapSteps = [
    {
      phase: 'Current Phase',
      title: 'Core Tracking & Intelligence',
      status: 'Live Now',
      items: ['Multi-Bank & Cash Tracking', 'Category Budgets & Alerts', 'Subscription Monitor', 'Time-based Financial Reports'],
      active: true,
    },
    {
      phase: 'Phase 2',
      title: 'Automated Bank Integrations',
      status: 'In Development',
      items: ['Open Banking Sync', 'Automated Transaction Ingestion', 'Instant Balance Reconciliations'],
      active: false,
    },
    {
      phase: 'Phase 3',
      title: 'Mobile Applications (iOS & Android)',
      status: 'Upcoming',
      items: ['Native Push Budget Alerts', 'Receipt OCR Scanning', 'Biometric Login (FaceID / TouchID)'],
      active: false,
    },
    {
      phase: 'Phase 4',
      title: 'AI Financial Insights & Automation',
      status: 'Vision',
      items: ['AI Spending Habit Forecaster', 'Subscription Cancellation Assistance', 'Automated Savings Goals'],
      active: false,
    },
  ];

  return (
    <div style={{ color: 'var(--text-primary)', overflowX: 'hidden' }}>

      {/* =========================================================================
          SECTION 01: HERO SECTION
      ========================================================================== */}
      <section
        style={{
          padding: '5rem 1.5rem 4rem 1.5rem',
          maxWidth: '1150px',
          margin: '0 auto',
          textAlign: 'center',
          position: 'relative',
        }}
      >
        {/* Glow ambient decoration */}
        <div
          style={{
            position: 'absolute',
            top: '10%',
            left: '50%',
            transform: 'translateX(-50%)',
            width: '450px',
            height: '250px',
            background: 'radial-gradient(circle, rgba(16, 185, 129, 0.15) 0%, rgba(0,0,0,0) 70%)',
            filter: 'blur(50px)',
            pointerEvents: 'none',
            zIndex: 0,
          }}
        />

        <div style={{ position: 'relative', zIndex: 1 }}>
          {/* Badge */}
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              background: 'var(--accent-light)',
              border: '1px solid var(--accent-border)',
              borderRadius: 'var(--radius-full)',
              padding: '0.4rem 1.1rem',
              marginBottom: '1.75rem',
              fontSize: '0.825rem',
              color: 'var(--accent-primary)',
              fontWeight: '700',
              letterSpacing: '0.02em',
            }}
          >
            <Sparkles size={15} />
            <span>Welcome to Finora · Financial Clarity</span>
          </div>

          {/* Headline */}
          <h1
            style={{
              fontSize: 'clamp(2.4rem, 5.2vw, 4rem)',
              fontWeight: '800',
              lineHeight: 1.15,
              letterSpacing: '-0.03em',
              color: '#ffffff',
              marginBottom: '1.4rem',
            }}
          >
            Welcome to Finora. <br />
            <span style={{ color: 'var(--accent-primary)' }}>
              A clearer way to understand your money.
            </span>
          </h1>

          {/* Description */}
          <p
            style={{
              fontSize: '1.1rem',
              color: 'var(--text-secondary)',
              lineHeight: 1.65,
              maxWidth: '680px',
              margin: '0 auto 2.5rem auto',
            }}
          >
            Finora helps you understand where your money goes, track your spending, manage your accounts and subscriptions,
            and get a clear view of your financial activity.
          </p>

          {/* CTA Buttons */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '1rem',
              flexWrap: 'wrap',
              marginBottom: '4rem',
            }}
          >
            <Link
              to="/register"
              className="btn btn-primary"
              style={{ fontSize: '0.95rem', padding: '0.8rem 1.8rem', textDecoration: 'none' }}
            >
              <span>Get Started</span>
              <ArrowRight size={17} />
            </Link>

            <a
              href="#the-problem"
              className="btn btn-secondary"
              style={{ fontSize: '0.95rem', padding: '0.8rem 1.6rem', textDecoration: 'none' }}
            >
              <span>Explore Finora</span>
            </a>
          </div>

          {/* Dashboard Preview Visual */}
          <div
            className="glass-card"
            style={{
              maxWidth: '960px',
              margin: '0 auto',
              padding: '1.75rem',
              background: '#0d0d0d',
              border: '1px solid var(--border-hover)',
              borderRadius: 'var(--radius-lg)',
              boxShadow: '0 25px 60px -15px rgba(0, 0, 0, 0.9), 0 0 35px rgba(16, 185, 129, 0.08)',
              textAlign: 'left',
            }}
          >
            {/* Window bar */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                paddingBottom: '1.25rem',
                marginBottom: '1.25rem',
                borderBottom: '1px solid var(--border-subtle)',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <span style={{ width: '11px', height: '11px', borderRadius: '50%', background: '#ef4444' }} />
                <span style={{ width: '11px', height: '11px', borderRadius: '50%', background: '#f59e0b' }} />
                <span style={{ width: '11px', height: '11px', borderRadius: '50%', background: '#10b981' }} />
                <span style={{ marginLeft: '0.75rem', fontSize: '0.8rem', color: 'var(--text-muted)', fontWeight: '600' }}>
                  finora.app/overview
                </span>
              </div>
              <span className="badge badge-green">Live Financial Workspace</span>
            </div>

            {/* Dashboard Mockup Grid */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
                gap: '1.25rem',
              }}
            >
              {/* Card 1: Total Balance */}
              <div
                style={{
                  background: '#141414',
                  padding: '1.25rem',
                  borderRadius: 'var(--radius-md)',
                  border: '1px solid var(--border-subtle)',
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', color: 'var(--text-secondary)', fontSize: '0.8rem', marginBottom: '0.4rem' }}>
                  <span>Total Net Balance</span>
                  <Wallet size={16} color="var(--accent-primary)" />
                </div>
                <div style={{ fontSize: '1.8rem', fontWeight: '800', color: '#ffffff', letterSpacing: '-0.02em' }}>
                  12,400 <span style={{ fontSize: '1rem', color: 'var(--accent-primary)', fontWeight: '600' }}>MAD</span>
                </div>
                <div style={{ fontSize: '0.75rem', color: 'var(--accent-primary)', marginTop: '0.4rem', display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                  <TrendingUp size={13} />
                  <span>Bank (11,700 MAD) + Cash (700 MAD)</span>
                </div>
              </div>

              {/* Card 2: Monthly Spending */}
              <div
                style={{
                  background: '#141414',
                  padding: '1.25rem',
                  borderRadius: 'var(--radius-md)',
                  border: '1px solid var(--border-subtle)',
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', color: 'var(--text-secondary)', fontSize: '0.8rem', marginBottom: '0.4rem' }}>
                  <span>Monthly Spending</span>
                  <BarChart2 size={16} color="#3b82f6" />
                </div>
                <div style={{ fontSize: '1.8rem', fontWeight: '800', color: '#ffffff', letterSpacing: '-0.02em' }}>
                  3,120 <span style={{ fontSize: '1rem', color: 'var(--text-muted)', fontWeight: '600' }}>/ 4,500 MAD</span>
                </div>
                <div style={{ marginTop: '0.6rem' }}>
                  <div style={{ height: '6px', background: '#222222', borderRadius: '4px', overflow: 'hidden' }}>
                    <div style={{ width: '69.3%', height: '100%', background: 'var(--accent-primary)' }} />
                  </div>
                  <span style={{ fontSize: '0.72rem', color: 'var(--text-muted)', marginTop: '0.3rem', display: 'block' }}>
                    69.3% of monthly budget utilized
                  </span>
                </div>
              </div>

              {/* Card 3: Active Subscriptions */}
              <div
                style={{
                  background: '#141414',
                  padding: '1.25rem',
                  borderRadius: 'var(--radius-md)',
                  border: '1px solid var(--border-subtle)',
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', color: 'var(--text-secondary)', fontSize: '0.8rem', marginBottom: '0.4rem' }}>
                  <span>Active Subscriptions</span>
                  <Repeat size={16} color="#ec4899" />
                </div>
                <div style={{ fontSize: '1.8rem', fontWeight: '800', color: '#ffffff', letterSpacing: '-0.02em' }}>
                  350 <span style={{ fontSize: '1rem', color: '#ec4899', fontWeight: '600' }}>MAD / mo</span>
                </div>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', marginTop: '0.4rem' }}>
                  4 services (Netflix, Spotify, Gym, Cloud)
                </div>
              </div>
            </div>

            {/* Recent Transactions Mini Stream */}
            <div style={{ marginTop: '1.5rem', background: '#111111', borderRadius: 'var(--radius-md)', padding: '1rem', border: '1px solid var(--border-subtle)' }}>
              <div style={{ fontSize: '0.8rem', fontWeight: '700', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.75rem' }}>
                Recent Transactions & Live Categorization
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '0.75rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', background: '#161616', padding: '0.65rem 0.85rem', borderRadius: '6px' }}>
                  <div>
                    <div style={{ fontSize: '0.85rem', fontWeight: '600', color: '#ffffff' }}>Restaurant La Table</div>
                    <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>Food & Dining · Bank</div>
                  </div>
                  <span style={{ fontSize: '0.85rem', fontWeight: '700', color: '#ef4444' }}>-120 MAD</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', background: '#161616', padding: '0.65rem 0.85rem', borderRadius: '6px' }}>
                  <div>
                    <div style={{ fontSize: '0.85rem', fontWeight: '600', color: '#ffffff' }}>Marjane Supermarket</div>
                    <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>Groceries · Cash</div>
                  </div>
                  <span style={{ fontSize: '0.85rem', fontWeight: '700', color: '#ef4444' }}>-450 MAD</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', background: '#161616', padding: '0.65rem 0.85rem', borderRadius: '6px' }}>
                  <div>
                    <div style={{ fontSize: '0.85rem', fontWeight: '600', color: '#ffffff' }}>Tech Corp Salary</div>
                    <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>Income · Primary Bank</div>
                  </div>
                  <span style={{ fontSize: '0.85rem', fontWeight: '700', color: 'var(--accent-primary)' }}>+14,500 MAD</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 02: THE PROBLEM
      ========================================================================== */}
      <section
        id="the-problem"
        style={{
          padding: '5rem 1.5rem',
          background: '#090909',
          borderTop: '1px solid var(--border-subtle)',
          borderBottom: '1px solid var(--border-subtle)',
        }}
      >
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.4rem',
                color: '#f59e0b',
                fontSize: '0.8rem',
                fontWeight: '700',
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
                marginBottom: '0.65rem',
              }}
            >
              <AlertCircle size={15} />
              <span>The Problem We Solve</span>
            </div>

            <h2
              style={{
                fontSize: 'clamp(1.9rem, 3.5vw, 2.75rem)',
                fontWeight: '800',
                color: '#ffffff',
                letterSpacing: '-0.02em',
                lineHeight: 1.2,
                maxWidth: '750px',
                margin: '0 auto 1rem auto',
              }}
            >
              You know how much you have. <br />
              <span style={{ color: 'var(--accent-primary)' }}>But do you know where it goes?</span>
            </h2>

            <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', maxWidth: '600px', margin: '0 auto' }}>
              Most people check their banking app daily, but bank balances only show the remaining total—never the story behind your lifestyle spending.
            </p>
          </div>

          {/* Problem Breakdown vs Finora Visual */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '2rem',
              alignItems: 'center',
            }}
          >
            {/* The Confusing Bank Reality */}
            <div
              className="glass-card"
              style={{
                padding: '2rem',
                background: '#0e0e0e',
                borderRadius: 'var(--radius-lg)',
                border: '1px solid rgba(239, 68, 68, 0.25)',
                position: 'relative',
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem' }}>
                <span style={{ fontSize: '0.85rem', fontWeight: '700', color: '#ef4444' }}>Traditional Bank Statement</span>
                <span className="badge" style={{ background: 'rgba(239, 68, 68, 0.12)', color: '#ef4444', border: '1px solid rgba(239, 68, 68, 0.3)' }}>
                  Unstructured Data
                </span>
              </div>

              <div style={{ background: '#151515', padding: '1.25rem', borderRadius: 'var(--radius-md)', marginBottom: '1.25rem' }}>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Bank Account Balance</div>
                <div style={{ fontSize: '1.75rem', fontWeight: '800', color: '#ffffff' }}>8,500 MAD</div>
              </div>

              <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', fontWeight: '600', marginBottom: '0.5rem' }}>
                Cryptic Transaction Stream:
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', fontFamily: 'monospace' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', background: '#121212', padding: '0.5rem 0.75rem', borderRadius: '4px', fontSize: '0.85rem' }}>
                  <span style={{ color: '#a3a3a3' }}>POS TXN 49182 REST</span>
                  <span style={{ color: '#ef4444', fontWeight: '700' }}>-80 MAD</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', background: '#121212', padding: '0.5rem 0.75rem', borderRadius: '4px', fontSize: '0.85rem' }}>
                  <span style={{ color: '#a3a3a3' }}>ONLINE PAYMENT ECOM</span>
                  <span style={{ color: '#ef4444', fontWeight: '700' }}>-250 MAD</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', background: '#121212', padding: '0.5rem 0.75rem', borderRadius: '4px', fontSize: '0.85rem' }}>
                  <span style={{ color: '#a3a3a3' }}>GAB RETRAIT CASH</span>
                  <span style={{ color: '#ef4444', fontWeight: '700' }}>-120 MAD</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', background: '#121212', padding: '0.5rem 0.75rem', borderRadius: '4px', fontSize: '0.85rem' }}>
                  <span style={{ color: '#a3a3a3' }}>AUTOMATIC RECURRING REC</span>
                  <span style={{ color: '#ef4444', fontWeight: '700' }}>-450 MAD</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', background: '#121212', padding: '0.5rem 0.75rem', borderRadius: '4px', fontSize: '0.85rem' }}>
                  <span style={{ color: '#a3a3a3' }}>TRANSFER INTER-ACC</span>
                  <span style={{ color: '#ef4444', fontWeight: '700' }}>-300 MAD</span>
                </div>
              </div>

              <div
                style={{
                  marginTop: '1.25rem',
                  padding: '0.85rem',
                  background: 'rgba(239, 68, 68, 0.08)',
                  border: '1px dashed rgba(239, 68, 68, 0.3)',
                  borderRadius: 'var(--radius-md)',
                  textAlign: 'center',
                  color: '#f87171',
                  fontWeight: '700',
                  fontSize: '0.9rem',
                }}
              >
                ❓ "Where did my money actually go?"
              </div>
            </div>

            {/* The Specific Roadblocks Highlighted */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {[
                { title: 'Daily Expenses Escape Memory', desc: 'Coffee, snacks, fuel, and small cash disbursements vanish without being recorded.' },
                { title: 'Scattered Across Multiple Accounts', desc: 'Having accounts across different banks makes calculating total wealth a manual headache.' },
                { title: 'Physical Cash Spending is Forgotten', desc: 'Bank apps only show the ATM withdrawal, not what the cash was actually spent on.' },
                { title: 'Silent Subscriptions Drain Budgets', desc: 'Recurring streaming, cloud, and gym memberships quietly compound unnoticed every month.' },
                { title: 'Zero Actionable Insights', desc: 'A standard statement lists transactions, but never tells you if you are overspending on dining or shopping.' },
              ].map((item, idx) => (
                <div
                  key={idx}
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '0.85rem',
                    background: '#121212',
                    padding: '1rem',
                    borderRadius: 'var(--radius-md)',
                    border: '1px solid var(--border-subtle)',
                  }}
                >
                  <div
                    style={{
                      width: '24px',
                      height: '24px',
                      borderRadius: '50%',
                      background: 'rgba(239, 68, 68, 0.15)',
                      color: '#ef4444',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '0.75rem',
                      fontWeight: '800',
                      flexShrink: 0,
                      marginTop: '0.1rem',
                    }}
                  >
                    ✕
                  </div>
                  <div>
                    <h4 style={{ fontSize: '0.9rem', fontWeight: '700', color: '#ffffff', marginBottom: '0.2rem' }}>
                      {item.title}
                    </h4>
                    <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', lineHeight: '1.4' }}>
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 03: OUR STORY
      ========================================================================== */}
      <section style={{ padding: '5rem 1.5rem', maxWidth: '1000px', margin: '0 auto' }}>
        <div
          className="glass-card"
          style={{
            padding: '3rem 2.5rem',
            background: 'linear-gradient(180deg, #111111 0%, #0c0c0c 100%)',
            border: '1px solid var(--border-hover)',
            borderRadius: 'var(--radius-lg)',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          <div
            style={{
              position: 'absolute',
              top: '-60px',
              right: '-60px',
              width: '200px',
              height: '200px',
              background: 'rgba(16, 185, 129, 0.08)',
              borderRadius: '50%',
              filter: 'blur(50px)',
              pointerEvents: 'none',
            }}
          />

          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.4rem',
              color: 'var(--accent-primary)',
              fontSize: '0.8rem',
              fontWeight: '700',
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
              marginBottom: '1rem',
            }}
          >
            <BookOpen size={16} />
            <span>Our Story</span>
          </div>

          <h2
            style={{
              fontSize: 'clamp(1.8rem, 3.2vw, 2.5rem)',
              fontWeight: '800',
              color: '#ffffff',
              letterSpacing: '-0.02em',
              marginBottom: '1.5rem',
              lineHeight: 1.2,
            }}
          >
            Finora started with a simple problem.
          </h2>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.1rem', fontSize: '1rem', color: 'var(--text-secondary)', lineHeight: '1.7' }}>
            <p>
              Finora was born from a personal experience: reaching the end of the month and not always knowing exactly where our hard-earned money went.
            </p>
            <p>
              The same frustration was repeated everywhere around us. Friends, colleagues, and young professionals were constantly checking their bank apps, seeing their balances dwindle, yet lacking a clear, cohesive understanding of their overall spending habits.
            </p>
            <p>
              Traditional personal finance software was either too complicated—requiring hours of spreadsheet maintenance—or cluttered with predatory credit card ads and financial products we never asked for.
            </p>
            <p>
              This led to the creation of <strong>Finora</strong>: a sleek, minimal, and lightning-fast platform designed to bring all your financial activity together into one unified workspace.
            </p>
          </div>

          {/* Quote Callout Banner */}
          <div
            style={{
              marginTop: '2rem',
              padding: '1.25rem 1.75rem',
              background: 'var(--accent-light)',
              borderLeft: '4px solid var(--accent-primary)',
              borderRadius: '0 var(--radius-md) var(--radius-md) 0',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '1rem',
            }}
          >
            <div style={{ fontSize: '1.15rem', fontWeight: '800', color: '#ffffff' }}>
              "One place to understand your money."
            </div>
            <span style={{ fontSize: '0.8rem', color: 'var(--accent-primary)', fontWeight: '700' }}>
              The Finora Founding Principle
            </span>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 04: WHAT IS FINORA? (The 5 Pillars)
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
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.4rem',
                color: 'var(--accent-primary)',
                fontSize: '0.8rem',
                fontWeight: '700',
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
                marginBottom: '0.65rem',
              }}
            >
              <Layers size={16} />
              <span>The Finora Platform</span>
            </div>

            <h2 style={{ fontSize: '2.2rem', fontWeight: '800', color: '#ffffff', letterSpacing: '-0.02em', marginBottom: '0.85rem' }}>
              What Is Finora?
            </h2>

            <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', maxWidth: '640px', margin: '0 auto' }}>
              Finora is a dedicated SaaS platform engineered to help users effortlessly manage, track, and deeply understand their personal financial activity.
            </p>
          </div>

          {/* 5 Core Feature Cards */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '1.5rem',
            }}
          >
            {/* 1. Accounts */}
            <div
              className="glass-card"
              style={{
                padding: '1.75rem',
                background: '#0e0e0e',
                borderRadius: 'var(--radius-lg)',
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <div style={{ width: '40px', height: '40px', borderRadius: '8px', background: 'rgba(16, 185, 129, 0.12)', color: 'var(--accent-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Building2 size={20} />
                </div>
                <span className="badge badge-green">Pillar 01</span>
              </div>
              <div>
                <h3 style={{ fontSize: '1.15rem', fontWeight: '800', color: '#ffffff', marginBottom: '0.4rem' }}>Accounts</h3>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', lineHeight: '1.5' }}>
                  Unify multiple bank accounts and physical cash wallets into one real-time aggregated balance with account-specific history.
                </p>
              </div>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.4rem', fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
                <li>✓ Multiple bank accounts</li>
                <li>✓ Cash wallet balance</li>
                <li>✓ Individual account balances</li>
                <li>✓ Filtered transactions per account</li>
              </ul>
            </div>

            {/* 2. Expenses */}
            <div
              className="glass-card"
              style={{
                padding: '1.75rem',
                background: '#0e0e0e',
                borderRadius: 'var(--radius-lg)',
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <div style={{ width: '40px', height: '40px', borderRadius: '8px', background: 'rgba(59, 130, 246, 0.12)', color: '#3b82f6', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Tag size={20} />
                </div>
                <span className="badge badge-dark">Pillar 02</span>
              </div>
              <div>
                <h3 style={{ fontSize: '1.15rem', fontWeight: '800', color: '#ffffff', marginBottom: '0.4rem' }}>Expenses</h3>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', lineHeight: '1.5' }}>
                  Log granular expenses with structured metadata including merchant names, categories, exact timestamps, and notes.
                </p>
              </div>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.4rem', fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
                <li>✓ Exact amount in MAD</li>
                <li>✓ Category & custom tags</li>
                <li>✓ Merchant / Store identification</li>
                <li>✓ Date, source account & descriptions</li>
              </ul>
            </div>

            {/* 3. Subscriptions */}
            <div
              className="glass-card"
              style={{
                padding: '1.75rem',
                background: '#0e0e0e',
                borderRadius: 'var(--radius-lg)',
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <div style={{ width: '40px', height: '40px', borderRadius: '8px', background: 'rgba(236, 72, 153, 0.12)', color: '#ec4899', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Repeat size={20} />
                </div>
                <span className="badge badge-dark">Pillar 03</span>
              </div>
              <div>
                <h3 style={{ fontSize: '1.15rem', fontWeight: '800', color: '#ffffff', marginBottom: '0.4rem' }}>Subscriptions</h3>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', lineHeight: '1.5' }}>
                  Never let recurring costs slip through. Track monthly and annual service renewals, payment status, and upcoming billing dates.
                </p>
              </div>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.4rem', fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
                <li>✓ Service name & recurring price</li>
                <li>✓ Monthly / Yearly billing cycle</li>
                <li>✓ Active payment status</li>
                <li>✓ Next payment forecast</li>
              </ul>
            </div>

            {/* 4. Budgets */}
            <div
              className="glass-card"
              style={{
                padding: '1.75rem',
                background: '#0e0e0e',
                borderRadius: 'var(--radius-lg)',
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <div style={{ width: '40px', height: '40px', borderRadius: '8px', background: 'rgba(245, 158, 11, 0.12)', color: '#f59e0b', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Target size={20} />
                </div>
                <span className="badge badge-dark">Pillar 04</span>
              </div>
              <div>
                <h3 style={{ fontSize: '1.15rem', fontWeight: '800', color: '#ffffff', marginBottom: '0.4rem' }}>Budgets</h3>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', lineHeight: '1.5' }}>
                  Set flexible spending thresholds for individual categories and get notified before exceeding your monthly targets.
                </p>
              </div>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.4rem', fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
                <li>✓ Category-specific limits</li>
                <li>✓ Live spent vs remaining balance</li>
                <li>✓ Dynamic percentage usage gauges</li>
                <li>✓ Prevent lifestyle overspending</li>
              </ul>
            </div>

            {/* 5. Reports */}
            <div
              className="glass-card"
              style={{
                padding: '1.75rem',
                background: '#0e0e0e',
                borderRadius: 'var(--radius-lg)',
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <div style={{ width: '40px', height: '40px', borderRadius: '8px', background: 'rgba(139, 92, 246, 0.12)', color: '#8b5cf6', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <BarChart2 size={20} />
                </div>
                <span className="badge badge-dark">Pillar 05</span>
              </div>
              <div>
                <h3 style={{ fontSize: '1.15rem', fontWeight: '800', color: '#ffffff', marginBottom: '0.4rem' }}>Reports</h3>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', lineHeight: '1.5' }}>
                  Convert thousands of individual transactions into clear visual breakdowns by period, merchant, category, and source.
                </p>
              </div>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.4rem', fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
                <li>✓ Daily, weekly, monthly, & yearly filters</li>
                <li>✓ Category distribution charts</li>
                <li>✓ Top merchant spending rankings</li>
                <li>✓ Clear historical progress trends</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 05: MORE THAN A BALANCE
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
          {/* Left Text */}
          <div>
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.4rem',
                color: 'var(--accent-primary)',
                fontSize: '0.8rem',
                fontWeight: '700',
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
                marginBottom: '0.75rem',
              }}
            >
              <PieChart size={16} />
              <span>Deep Financial Understanding</span>
            </div>

            <h2
              style={{
                fontSize: 'clamp(2rem, 3.5vw, 2.75rem)',
                fontWeight: '800',
                color: '#ffffff',
                lineHeight: 1.2,
                letterSpacing: '-0.02em',
                marginBottom: '1.25rem',
              }}
            >
              Your balance is only <br />
              <span style={{ color: 'var(--accent-primary)' }}>the beginning.</span>
            </h2>

            <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: '1.65', marginBottom: '1.25rem' }}>
              A bank balance only tells you how much money remains in your account today. It doesn’t tell you if you spent more on dining out than last month, or how much is already committed to subscriptions.
            </p>

            <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: '1.65', marginBottom: '1.75rem' }}>
              Finora aims to help you understand what is actually happening to your wealth by turning raw transactions into a crystal-clear picture of your spending habits.
            </p>

            <div
              style={{
                background: '#111111',
                padding: '1.25rem',
                borderRadius: 'var(--radius-md)',
                border: '1px solid var(--border-subtle)',
              }}
            >
              <div style={{ fontSize: '0.9rem', fontWeight: '700', color: '#ffffff', marginBottom: '0.35rem' }}>
                Finora Core Message
              </div>
              <p style={{ fontSize: '0.85rem', color: 'var(--accent-primary)', fontWeight: '600' }}>
                "Finora turns financial activity into a clearer picture of your spending."
              </p>
            </div>
          </div>

          {/* Right Visual: Bank balance vs Finora Categorized breakdown */}
          <div
            className="glass-card"
            style={{
              padding: '2rem',
              background: '#0d0d0d',
              borderRadius: 'var(--radius-lg)',
              border: '1px solid var(--border-hover)',
            }}
          >
            {/* Top Bank View */}
            <div style={{ background: '#141414', padding: '1.25rem', borderRadius: 'var(--radius-md)', marginBottom: '1.5rem', border: '1px solid var(--border-subtle)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.4rem' }}>
                <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Bank Account Balance</span>
                <span style={{ fontSize: '0.75rem', color: 'var(--accent-primary)', fontWeight: '700' }}>Active Checking</span>
              </div>
              <div style={{ fontSize: '2rem', fontWeight: '800', color: '#ffffff' }}>
                8,500 <span style={{ fontSize: '1rem', color: 'var(--accent-primary)' }}>MAD</span>
              </div>
            </div>

            {/* Categorized Breakdown this month */}
            <div style={{ fontSize: '0.85rem', fontWeight: '700', color: '#ffffff', marginBottom: '1rem' }}>
              Where did this month's spending go?
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
              {[
                { name: 'Food & Dining', amount: '800 MAD', pct: 29.6, color: '#10b981' },
                { name: 'Transport & Fuel', amount: '400 MAD', pct: 14.8, color: '#3b82f6' },
                { name: 'Shopping & Apparel', amount: '650 MAD', pct: 24.1, color: '#ec4899' },
                { name: 'Subscriptions', amount: '350 MAD', pct: 13.0, color: '#f59e0b' },
                { name: 'Other Discretionary', amount: '500 MAD', pct: 18.5, color: '#8b5cf6' },
              ].map((item, idx) => (
                <div key={idx}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.8rem', marginBottom: '0.3rem' }}>
                    <span style={{ color: '#ffffff', fontWeight: '600' }}>{item.name}</span>
                    <span style={{ color: 'var(--text-secondary)', fontWeight: '700' }}>{item.amount} ({item.pct}%)</span>
                  </div>
                  <div style={{ height: '6px', background: '#1c1c1c', borderRadius: '4px', overflow: 'hidden' }}>
                    <div style={{ width: `${item.pct}%`, height: '100%', background: item.color }} />
                  </div>
                </div>
              ))}
            </div>

            <div style={{ marginTop: '1.5rem', paddingTop: '1rem', borderTop: '1px solid var(--border-subtle)', display: 'flex', justifyContent: 'space-between', fontSize: '0.8rem' }}>
              <span style={{ color: 'var(--text-muted)' }}>Total Monthly Spend</span>
              <span style={{ color: '#ffffff', fontWeight: '700' }}>2,700 MAD</span>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 06: BUILT FOR YOUNG PROFESSIONALS
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
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.4rem',
                color: 'var(--accent-primary)',
                fontSize: '0.8rem',
                fontWeight: '700',
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
                marginBottom: '0.65rem',
              }}
            >
              <Award size={16} />
              <span>Target Audience</span>
            </div>

            <h2
              style={{
                fontSize: 'clamp(1.9rem, 3.5vw, 2.75rem)',
                fontWeight: '800',
                color: '#ffffff',
                letterSpacing: '-0.02em',
                maxWidth: '780px',
                margin: '0 auto 1rem auto',
                lineHeight: 1.2,
              }}
            >
              Built for the way young professionals manage money today.
            </h2>

            <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', maxWidth: '650px', margin: '0 auto' }}>
              When someone starts working or building their career, financial management suddenly becomes multifaceted. Finora makes managing every financial aspect simple and accessible.
            </p>
          </div>

          {/* Grid of Young Professional Realities */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
              gap: '1.25rem',
            }}
          >
            {[
              { icon: '💼', title: 'Salary & Income Allocation', desc: 'Manage your monthly paycheck, track bonus payouts, and allocate funds directly to savings.' },
              { icon: '🏠', title: 'Rent & Living Expenses', desc: 'Keep recurring housing payments and utility bills segregated from lifestyle allowances.' },
              { icon: '☕', title: 'Daily Coffee & Food', desc: 'Quickly log social lunches, grocery trips, and takeout orders with zero friction.' },
              { icon: '🚗', title: 'Commute & Travel', desc: 'Keep track of gas, taxi fares, tramway passes, and weekend road trips in one category.' },
              { icon: '🛍️', title: 'Shopping & Lifestyle', desc: 'Avoid lifestyle creep by knowing how much budget remains for clothes, gadgets, and hobbies.' },
              { icon: '🔄', title: 'Digital Subscriptions', desc: 'Monitor Netflix, Spotify, Gym memberships, and SaaS tools without billing surprises.' },
            ].map((card, idx) => (
              <div
                key={idx}
                className="glass-card"
                style={{
                  padding: '1.5rem',
                  background: '#0d0d0d',
                  borderRadius: 'var(--radius-md)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.6rem',
                }}
              >
                <div style={{ fontSize: '1.8rem', marginBottom: '0.2rem' }}>{card.icon}</div>
                <h3 style={{ fontSize: '1rem', fontWeight: '700', color: '#ffffff' }}>{card.title}</h3>
                <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', lineHeight: '1.45' }}>{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 07: ONE PLACE FOR YOUR MONEY (Bank Accounts & Cash)
      ========================================================================== */}
      <section style={{ padding: '5rem 1.5rem', maxWidth: '1100px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.4rem',
              color: 'var(--accent-primary)',
              fontSize: '0.8rem',
              fontWeight: '700',
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
              marginBottom: '0.65rem',
            }}
          >
            <Banknote size={16} />
            <span>Multi-Account Aggregation</span>
          </div>

          <h2 style={{ fontSize: '2.2rem', fontWeight: '800', color: '#ffffff', letterSpacing: '-0.02em', marginBottom: '0.85rem' }}>
            One Place for Your Money
          </h2>

          <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', maxWidth: '640px', margin: '0 auto' }}>
            Money is rarely kept in just one spot. Finora enables you to seamlessly manage multiple bank accounts along with physical cash.
          </p>
        </div>

        {/* Multi-Account Cards Showcase */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '1.5rem',
            marginBottom: '2.5rem',
          }}
        >
          {/* Account 1 */}
          <div
            className="glass-card"
            style={{
              padding: '1.75rem',
              background: '#0e0e0e',
              borderRadius: 'var(--radius-lg)',
              borderLeft: '4px solid #10b981',
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                <Building2 size={20} color="#10b981" />
                <span style={{ fontWeight: '700', color: '#ffffff' }}>Bank Account 1</span>
              </div>
              <span className="badge badge-green">Primary</span>
            </div>
            <div style={{ fontSize: '1.8rem', fontWeight: '800', color: '#ffffff', marginBottom: '0.4rem' }}>
              8,500 <span style={{ fontSize: '1rem', color: '#10b981' }}>MAD</span>
            </div>
            <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>
              Salary deposits, card expenses, online bills
            </div>
          </div>

          {/* Account 2 */}
          <div
            className="glass-card"
            style={{
              padding: '1.75rem',
              background: '#0e0e0e',
              borderRadius: 'var(--radius-lg)',
              borderLeft: '4px solid #3b82f6',
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                <CreditCard size={20} color="#3b82f6" />
                <span style={{ fontWeight: '700', color: '#ffffff' }}>Bank Account 2</span>
              </div>
              <span className="badge badge-dark">Savings</span>
            </div>
            <div style={{ fontSize: '1.8rem', fontWeight: '800', color: '#ffffff', marginBottom: '0.4rem' }}>
              3,200 <span style={{ fontSize: '1rem', color: '#3b82f6' }}>MAD</span>
            </div>
            <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>
              Emergency reserve & long-term goals
            </div>
          </div>

          {/* Account 3 - Physical Cash */}
          <div
            className="glass-card"
            style={{
              padding: '1.75rem',
              background: '#0e0e0e',
              borderRadius: 'var(--radius-lg)',
              borderLeft: '4px solid #f59e0b',
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                <Banknote size={20} color="#f59e0b" />
                <span style={{ fontWeight: '700', color: '#ffffff' }}>Physical Cash</span>
              </div>
              <span className="badge badge-dark">Wallet</span>
            </div>
            <div style={{ fontSize: '1.8rem', fontWeight: '800', color: '#ffffff', marginBottom: '0.4rem' }}>
              700 <span style={{ fontSize: '1rem', color: '#f59e0b' }}>MAD</span>
            </div>
            <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>
              Pocket cash, tips, local souk & small vendor expenses
            </div>
          </div>
        </div>

        {/* Unified Total Feature bar */}
        <div
          style={{
            background: '#111111',
            padding: '1.5rem 2rem',
            borderRadius: 'var(--radius-lg)',
            border: '1px solid var(--border-subtle)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '1.5rem',
          }}
        >
          <div>
            <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              Aggregated Net Worth
            </div>
            <div style={{ fontSize: '1.75rem', fontWeight: '800', color: '#ffffff' }}>
              12,400 <span style={{ color: 'var(--accent-primary)' }}>MAD</span>
            </div>
          </div>

          <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap', fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
            <div>✓ Individual account view</div>
            <div>✓ Unified net balance</div>
            <div>✓ Spending breakdown by account</div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 08: UNDERSTAND EVERY EXPENSE
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
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '3rem',
              alignItems: 'center',
            }}
          >
            {/* Left Content */}
            <div>
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  color: 'var(--accent-primary)',
                  fontSize: '0.8rem',
                  fontWeight: '700',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em',
                  marginBottom: '0.75rem',
                }}
              >
                <Tag size={16} />
                <span>Granular Transaction Detail</span>
              </div>

              <h2
                style={{
                  fontSize: 'clamp(2rem, 3.5vw, 2.75rem)',
                  fontWeight: '800',
                  color: '#ffffff',
                  lineHeight: 1.2,
                  letterSpacing: '-0.02em',
                  marginBottom: '1.25rem',
                }}
              >
                Know where every <br />
                <span style={{ color: 'var(--accent-primary)' }}>expense goes.</span>
              </h2>

              <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: '1.65', marginBottom: '1.5rem' }}>
                Every transaction logged in Finora contains detailed attributes that allow you to analyze spending by day, week, month, year, category, merchant, and source account.
              </p>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
                {[
                  'Exact Amount in MAD',
                  'Category Allocation',
                  'Merchant / Store',
                  'Exact Date & Time',
                  'Source Account (Bank/Cash)',
                  'Custom Description Notes',
                ].map((tag, idx) => (
                  <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.825rem', color: '#ffffff' }}>
                    <CheckCircle2 size={16} color="var(--accent-primary)" />
                    <span>{tag}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Visual: Interactive Expense Detail Card */}
            <div
              className="glass-card"
              style={{
                padding: '2rem',
                background: '#0d0d0d',
                borderRadius: 'var(--radius-lg)',
                border: '1px solid var(--border-hover)',
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
                <span style={{ fontSize: '0.8rem', fontWeight: '700', color: 'var(--text-muted)', textTransform: 'uppercase' }}>
                  Transaction Receipt Details
                </span>
                <span className="badge badge-green">Verified Log</span>
              </div>

              {/* Amount Display */}
              <div
                style={{
                  background: '#141414',
                  padding: '1.25rem',
                  borderRadius: 'var(--radius-md)',
                  textAlign: 'center',
                  marginBottom: '1.5rem',
                  border: '1px solid var(--border-subtle)',
                }}
              >
                <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '0.2rem' }}>Total Amount Charged</div>
                <div style={{ fontSize: '2.4rem', fontWeight: '800', color: '#ef4444', letterSpacing: '-0.02em' }}>
                  -120 <span style={{ fontSize: '1.2rem' }}>MAD</span>
                </div>
              </div>

              {/* Attributes Table */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem', fontSize: '0.85rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', paddingBottom: '0.5rem', borderBottom: '1px solid var(--border-subtle)' }}>
                  <span style={{ color: 'var(--text-muted)' }}>Merchant</span>
                  <span style={{ color: '#ffffff', fontWeight: '700' }}>Restaurant La Table</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', paddingBottom: '0.5rem', borderBottom: '1px solid var(--border-subtle)' }}>
                  <span style={{ color: 'var(--text-muted)' }}>Category</span>
                  <span style={{ color: '#10b981', fontWeight: '700' }}>Food & Dining</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', paddingBottom: '0.5rem', borderBottom: '1px solid var(--border-subtle)' }}>
                  <span style={{ color: 'var(--text-muted)' }}>Payment Account</span>
                  <span style={{ color: '#ffffff', fontWeight: '700' }}>Bank Account 1</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', paddingBottom: '0.5rem', borderBottom: '1px solid var(--border-subtle)' }}>
                  <span style={{ color: 'var(--text-muted)' }}>Date</span>
                  <span style={{ color: '#ffffff', fontWeight: '700' }}>August 26, 2026</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span style={{ color: 'var(--text-muted)' }}>Notes</span>
                  <span style={{ color: 'var(--text-secondary)' }}>Lunch meeting with client</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 09: SUBSCRIPTIONS
      ========================================================================== */}
      <section style={{ padding: '5rem 1.5rem', maxWidth: '1100px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.4rem',
              color: '#ec4899',
              fontSize: '0.8rem',
              fontWeight: '700',
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
              marginBottom: '0.65rem',
            }}
          >
            <Repeat size={16} />
            <span>Recurring Expenses</span>
          </div>

          <h2 style={{ fontSize: '2.2rem', fontWeight: '800', color: '#ffffff', letterSpacing: '-0.02em', marginBottom: '0.85rem' }}>
            Never lose track of what you're paying for.
          </h2>

          <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', maxWidth: '640px', margin: '0 auto' }}>
            Subscriptions compound quietly. Finora gives you total transparency over recurring software, streaming, gym, and cloud memberships.
          </p>
        </div>

        {/* Subscriptions Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '1.25rem',
            marginBottom: '2rem',
          }}
        >
          {sampleSubscriptions.map((sub, idx) => (
            <div
              key={idx}
              className="glass-card"
              style={{
                padding: '1.5rem',
                background: '#0e0e0e',
                borderRadius: 'var(--radius-md)',
                display: 'flex',
                flexDirection: 'column',
                gap: '0.75rem',
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontSize: '1.5rem' }}>{sub.icon}</span>
                <span className="badge badge-green">{sub.status}</span>
              </div>
              <div>
                <h4 style={{ fontSize: '1rem', fontWeight: '700', color: '#ffffff' }}>{sub.name}</h4>
                <div style={{ fontSize: '1.4rem', fontWeight: '800', color: 'var(--accent-primary)', marginTop: '0.2rem' }}>
                  {sub.price} <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>MAD / {sub.cycle.toLowerCase()}</span>
                </div>
              </div>
              <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', paddingTop: '0.5rem', borderTop: '1px solid var(--border-subtle)' }}>
                Next billing: {sub.nextPay}
              </div>
            </div>
          ))}
        </div>

        {/* Subscription Totals summary banner */}
        <div
          className="glass-card"
          style={{
            padding: '1.5rem 2rem',
            background: 'linear-gradient(90deg, #111111 0%, #151515 100%)',
            borderRadius: 'var(--radius-lg)',
            border: '1px solid var(--border-hover)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-around',
            flexWrap: 'wrap',
            gap: '1.5rem',
            textAlign: 'center',
          }}
        >
          <div>
            <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Monthly Subscriptions Total</div>
            <div style={{ fontSize: '1.75rem', fontWeight: '800', color: '#ec4899' }}>
              {totalMonthlySubs} MAD <span style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>/ month</span>
            </div>
          </div>

          <div style={{ width: '1px', height: '40px', background: 'var(--border-subtle)' }} />

          <div>
            <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Annualized Committed Cost</div>
            <div style={{ fontSize: '1.75rem', fontWeight: '800', color: '#ffffff' }}>
              {totalYearlySubs.toLocaleString()} MAD <span style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>/ year</span>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 10: BUDGETS
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
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '3rem',
              alignItems: 'center',
            }}
          >
            {/* Left Content */}
            <div>
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  color: '#f59e0b',
                  fontSize: '0.8rem',
                  fontWeight: '700',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em',
                  marginBottom: '0.75rem',
                }}
              >
                <Target size={16} />
                <span>Budget Management</span>
              </div>

              <h2
                style={{
                  fontSize: 'clamp(2rem, 3.5vw, 2.75rem)',
                  fontWeight: '800',
                  color: '#ffffff',
                  lineHeight: 1.2,
                  letterSpacing: '-0.02em',
                  marginBottom: '1.25rem',
                }}
              >
                Know when you're spending <br />
                <span style={{ color: 'var(--accent-primary)' }}>more than you planned.</span>
              </h2>

              <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: '1.65', marginBottom: '1.5rem' }}>
                Set realistic category limits and compare planned spending against actual expenditures throughout the month. Stay well within your financial safety zone without anxiety.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                  <CheckCircle2 size={18} color="var(--accent-primary)" />
                  <span style={{ fontSize: '0.875rem', color: '#ffffff' }}>Automatic visual alerts as you approach 80% usage</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                  <CheckCircle2 size={18} color="var(--accent-primary)" />
                  <span style={{ fontSize: '0.875rem', color: '#ffffff' }}>Custom budgets for Food, Transport, Shopping & Bills</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                  <CheckCircle2 size={18} color="var(--accent-primary)" />
                  <span style={{ fontSize: '0.875rem', color: '#ffffff' }}>Monthly reset and roll-over balance tracking</span>
                </div>
              </div>
            </div>

            {/* Right Visual: Interactive Budget Gauge */}
            <div
              className="glass-card"
              style={{
                padding: '2rem',
                background: '#0d0d0d',
                borderRadius: 'var(--radius-lg)',
                border: '1px solid var(--border-hover)',
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                  <Coffee size={20} color="var(--accent-primary)" />
                  <span style={{ fontWeight: '800', color: '#ffffff', fontSize: '1.1rem' }}>Food & Dining Budget</span>
                </div>
                <span className="badge badge-green">August 2026</span>
              </div>

              {/* Numbers preview */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '0.75rem', textAlign: 'center', marginBottom: '1.5rem' }}>
                <div style={{ background: '#141414', padding: '0.85rem', borderRadius: 'var(--radius-md)' }}>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Budget Limit</div>
                  <div style={{ fontSize: '1.1rem', fontWeight: '800', color: '#ffffff', marginTop: '0.2rem' }}>1,500 MAD</div>
                </div>
                <div style={{ background: '#141414', padding: '0.85rem', borderRadius: 'var(--radius-md)' }}>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Spent So Far</div>
                  <div style={{ fontSize: '1.1rem', fontWeight: '800', color: '#f59e0b', marginTop: '0.2rem' }}>{interactiveBudgetSpent} MAD</div>
                </div>
                <div style={{ background: '#141414', padding: '0.85rem', borderRadius: 'var(--radius-md)' }}>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Remaining</div>
                  <div style={{ fontSize: '1.1rem', fontWeight: '800', color: 'var(--accent-primary)', marginTop: '0.2rem' }}>
                    {1500 - interactiveBudgetSpent} MAD
                  </div>
                </div>
              </div>

              {/* Progress Bar & Percentage */}
              <div style={{ marginBottom: '1.5rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem', marginBottom: '0.5rem' }}>
                  <span style={{ color: 'var(--text-secondary)' }}>Budget Utilization</span>
                  <span style={{ color: '#f59e0b', fontWeight: '700' }}>
                    {((interactiveBudgetSpent / 1500) * 100).toFixed(1)}%
                  </span>
                </div>
                <div style={{ height: '8px', background: '#1f1f1f', borderRadius: '6px', overflow: 'hidden' }}>
                  <div
                    style={{
                      width: `${(interactiveBudgetSpent / 1500) * 100}%`,
                      height: '100%',
                      background: 'linear-gradient(90deg, #10b981, #f59e0b)',
                      transition: 'width 0.3s ease',
                    }}
                  />
                </div>
              </div>

              {/* Interactive Slider simulation */}
              <div style={{ background: '#121212', padding: '1rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-subtle)' }}>
                <label style={{ fontSize: '0.75rem', color: 'var(--text-muted)', display: 'block', marginBottom: '0.5rem' }}>
                  Simulate Spending: {interactiveBudgetSpent} MAD
                </label>
                <input
                  type="range"
                  min="500"
                  max="1500"
                  value={interactiveBudgetSpent}
                  onChange={(e) => setInteractiveBudgetSpent(Number(e.target.value))}
                  style={{ width: '100%', accentColor: 'var(--accent-primary)', cursor: 'pointer' }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 11: REPORTS & FINANCIAL OVERVIEW
      ========================================================================== */}
      <section style={{ padding: '5rem 1.5rem', maxWidth: '1100px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.4rem',
              color: 'var(--accent-primary)',
              fontSize: '0.8rem',
              fontWeight: '700',
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
              marginBottom: '0.65rem',
            }}
          >
            <BarChart2 size={16} />
            <span>Visual Analytics</span>
          </div>

          <h2 style={{ fontSize: '2.2rem', fontWeight: '800', color: '#ffffff', letterSpacing: '-0.02em', marginBottom: '0.85rem' }}>
            Turn your transactions into a clear picture.
          </h2>

          <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', maxWidth: '640px', margin: '0 auto' }}>
            Answer the vital financial questions effortlessly: How much did I spend? Where did I spend it? Which category costs me the most?
          </p>

          {/* Time Period Filter Tabs */}
          <div
            style={{
              display: 'inline-flex',
              background: '#111111',
              padding: '0.35rem',
              borderRadius: 'var(--radius-md)',
              border: '1px solid var(--border-subtle)',
              marginTop: '1.75rem',
              gap: '0.35rem',
            }}
          >
            {['today', 'weekly', 'monthly', 'yearly'].map((period) => (
              <button
                key={period}
                onClick={() => setActiveReportPeriod(period)}
                style={{
                  padding: '0.5rem 1.25rem',
                  borderRadius: 'var(--radius-sm)',
                  fontSize: '0.85rem',
                  fontWeight: '700',
                  border: 'none',
                  cursor: 'pointer',
                  background: activeReportPeriod === period ? 'var(--accent-primary)' : 'transparent',
                  color: activeReportPeriod === period ? '#000000' : 'var(--text-secondary)',
                  textTransform: 'capitalize',
                  transition: 'all 0.15s ease',
                }}
              >
                {period === 'today' ? 'Today' : `This ${period.replace('ly', '')}`}
              </button>
            ))}
          </div>
        </div>

        {/* Visual Report Grid */}
        <div
          className="glass-card"
          style={{
            padding: '2.5rem',
            background: '#0d0d0d',
            borderRadius: 'var(--radius-lg)',
            border: '1px solid var(--border-hover)',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '2.5rem',
          }}
        >
          {/* Top Categories Report */}
          <div>
            <h3 style={{ fontSize: '1.1rem', fontWeight: '800', color: '#ffffff', marginBottom: '1.25rem' }}>
              Spending by Category ({activeReportPeriod})
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {[
                { name: 'Food & Dining', amount: '800 MAD', pct: 35, color: '#10b981' },
                { name: 'Shopping', amount: '650 MAD', pct: 28, color: '#ec4899' },
                { name: 'Transport', amount: '400 MAD', pct: 18, color: '#3b82f6' },
                { name: 'Subscriptions', amount: '350 MAD', pct: 15, color: '#f59e0b' },
              ].map((item, idx) => (
                <div key={idx}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem', marginBottom: '0.35rem' }}>
                    <span style={{ color: '#ffffff', fontWeight: '600' }}>{item.name}</span>
                    <span style={{ color: item.color, fontWeight: '700' }}>{item.amount}</span>
                  </div>
                  <div style={{ height: '6px', background: '#1c1c1c', borderRadius: '4px', overflow: 'hidden' }}>
                    <div style={{ width: `${item.pct}%`, height: '100%', background: item.color }} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Top Merchants Report */}
          <div>
            <h3 style={{ fontSize: '1.1rem', fontWeight: '800', color: '#ffffff', marginBottom: '1.25rem' }}>
              Top Merchants & Venues
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {[
                { merchant: 'Marjane Market', category: 'Groceries', total: '920 MAD' },
                { merchant: 'Total Energies / Shell', category: 'Fuel & Transport', total: '400 MAD' },
                { merchant: 'Restaurant La Table', category: 'Food & Dining', total: '240 MAD' },
                { merchant: 'Zara & Fashion Brands', category: 'Shopping', total: '650 MAD' },
              ].map((m, idx) => (
                <div
                  key={idx}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    background: '#141414',
                    padding: '0.75rem 1rem',
                    borderRadius: 'var(--radius-md)',
                    border: '1px solid var(--border-subtle)',
                  }}
                >
                  <div>
                    <div style={{ fontSize: '0.875rem', fontWeight: '700', color: '#ffffff' }}>{m.merchant}</div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>{m.category}</div>
                  </div>
                  <span style={{ fontSize: '0.9rem', fontWeight: '800', color: 'var(--accent-primary)' }}>{m.total}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 12: CATEGORIES (Default + Custom)
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
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.4rem',
                color: 'var(--accent-primary)',
                fontSize: '0.8rem',
                fontWeight: '700',
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
                marginBottom: '0.65rem',
              }}
            >
              <Tag size={16} />
              <span>Smart Categorization</span>
            </div>

            <h2 style={{ fontSize: '2.2rem', fontWeight: '800', color: '#ffffff', letterSpacing: '-0.02em', marginBottom: '0.85rem' }}>
              Organize Expenses Your Way
            </h2>

            <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', maxWidth: '640px', margin: '0 auto' }}>
              Finora provides comprehensive default categories and full support for unlimited custom categories tailored to your unique lifestyle.
            </p>
          </div>

          {/* Categories Grid */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
              gap: '1rem',
              marginBottom: '2rem',
            }}
          >
            {defaultCategories.map((cat, idx) => {
              const Icon = cat.icon;
              return (
                <div
                  key={idx}
                  className="glass-card"
                  style={{
                    padding: '1.25rem',
                    background: '#0e0e0e',
                    borderRadius: 'var(--radius-md)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '1rem',
                  }}
                >
                  <div
                    style={{
                      width: '38px',
                      height: '38px',
                      borderRadius: '8px',
                      background: `${cat.color}15`,
                      color: cat.color,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                    }}
                  >
                    <Icon size={18} />
                  </div>
                  <div>
                    <h4 style={{ fontSize: '0.9rem', fontWeight: '700', color: '#ffffff' }}>{cat.name}</h4>
                    <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>e.g. {cat.sample}</span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Custom Category Creation Card */}
          <div
            style={{
              background: '#121212',
              padding: '1.5rem 2rem',
              borderRadius: 'var(--radius-lg)',
              border: '1px dashed var(--accent-border)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '1rem',
            }}
          >
            <div>
              <h4 style={{ fontSize: '1rem', fontWeight: '700', color: '#ffffff', marginBottom: '0.2rem' }}>
                Need custom categories?
              </h4>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                Create tags for Gaming, Gym, Side-Projects, Freelancing, or Family support in one click.
              </p>
            </div>
            <span className="badge badge-green">+ Custom Categories Supported</span>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 13: OUR PRINCIPLES (6 Core Tenets)
      ========================================================================== */}
      <section style={{ padding: '5rem 1.5rem', maxWidth: '1100px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.4rem',
              color: 'var(--accent-primary)',
              fontSize: '0.8rem',
              fontWeight: '700',
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
              marginBottom: '0.65rem',
            }}
          >
            <Compass size={16} />
            <span>Philosophy & Ethics</span>
          </div>

          <h2 style={{ fontSize: '2.2rem', fontWeight: '800', color: '#ffffff', letterSpacing: '-0.02em', marginBottom: '0.85rem' }}>
            Our 6 Principles
          </h2>

          <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', maxWidth: '640px', margin: '0 auto' }}>
            Finora is built around uncompromising core values that guide our architecture, user experience, and privacy ethics.
          </p>
        </div>

        {/* 6 Principles Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(310px, 1fr))',
            gap: '1.5rem',
          }}
        >
          {principles.map((p, idx) => {
            const Icon = p.icon;
            return (
              <div
                key={idx}
                className="glass-card"
                style={{
                  padding: '1.75rem',
                  background: '#0d0d0d',
                  borderRadius: 'var(--radius-lg)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.85rem',
                  borderTop: idx === 0 ? '3px solid var(--accent-primary)' : '1px solid var(--border-subtle)',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <div
                    style={{
                      width: '38px',
                      height: '38px',
                      borderRadius: '8px',
                      background: 'rgba(16, 185, 129, 0.12)',
                      color: 'var(--accent-primary)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <Icon size={20} />
                  </div>
                  <span className="badge badge-dark">Principle 0{idx + 1}</span>
                </div>

                <div>
                  <h3 style={{ fontSize: '1.15rem', fontWeight: '800', color: '#ffffff', marginBottom: '0.3rem' }}>
                    {p.title}
                  </h3>
                  <div style={{ fontSize: '0.85rem', color: 'var(--accent-primary)', fontWeight: '600', marginBottom: '0.5rem', fontStyle: 'italic' }}>
                    "{p.quote}"
                  </div>
                  <p style={{ fontSize: '0.825rem', color: 'var(--text-muted)', lineHeight: '1.5' }}>
                    {p.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* =========================================================================
          SECTION 14: THE FINORA EXPERIENCE (User Flow)
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
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.4rem',
                color: 'var(--accent-primary)',
                fontSize: '0.8rem',
                fontWeight: '700',
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
                marginBottom: '0.65rem',
              }}
            >
              <Zap size={16} />
              <span>User Journey</span>
            </div>

            <h2 style={{ fontSize: '2.2rem', fontWeight: '800', color: '#ffffff', letterSpacing: '-0.02em', marginBottom: '0.85rem' }}>
              The Finora Experience
            </h2>

            <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', maxWidth: '640px', margin: '0 auto' }}>
              A seamless, low-friction flow designed to bring your financial life from chaotic numbers to effortless clarity.
            </p>
          </div>

          {/* Stepper Pipeline */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {[
              { step: '01', title: 'Add / Connect Accounts', desc: 'Configure your primary bank accounts, secondary savings, and physical cash wallet.' },
              { step: '02', title: 'Track Your Expenses', desc: 'Record daily purchases with amounts, dates, accounts, and merchant details.' },
              { step: '03', title: 'Organize Your Spending', desc: 'Group expenses under intuitive categories to see where the majority of your cash flows.' },
              { step: '04', title: 'Monitor Subscriptions', desc: 'Register recurring monthly services and track exact annual commitments.' },
              { step: '05', title: 'Set Your Budgets', desc: 'Define category caps and receive real-time threshold progress indicators.' },
              { step: '06', title: 'Review Your Reports', desc: 'Inspect daily, monthly, and annual charts to discover key spending habits.' },
              { step: '07', title: 'Understand Your Money', desc: 'Enjoy complete financial confidence, zero unexpected shortfalls, and disciplined growth.' },
            ].map((item, idx) => (
              <div
                key={idx}
                className="glass-card"
                style={{
                  padding: '1.25rem 1.75rem',
                  background: '#0d0d0d',
                  borderRadius: 'var(--radius-md)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1.5rem',
                }}
              >
                <div
                  style={{
                    background: 'var(--accent-light)',
                    color: 'var(--accent-primary)',
                    padding: '0.4rem 0.75rem',
                    borderRadius: 'var(--radius-sm)',
                    fontSize: '0.85rem',
                    fontWeight: '800',
                    flexShrink: 0,
                  }}
                >
                  {item.step}
                </div>
                <div style={{ flex: 1 }}>
                  <h4 style={{ fontSize: '1rem', fontWeight: '700', color: '#ffffff', marginBottom: '0.2rem' }}>
                    {item.title}
                  </h4>
                  <p style={{ fontSize: '0.825rem', color: 'var(--text-muted)', lineHeight: '1.4' }}>
                    {item.desc}
                  </p>
                </div>
                <ChevronRight size={18} color="var(--text-muted)" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 15: PRIVACY & SECURITY
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
          {/* Left Text */}
          <div>
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.4rem',
                color: 'var(--accent-primary)',
                fontSize: '0.8rem',
                fontWeight: '700',
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
                marginBottom: '0.75rem',
              }}
            >
              <Shield size={16} />
              <span>Trust & Data Protection</span>
            </div>

            <h2
              style={{
                fontSize: 'clamp(2rem, 3.5vw, 2.75rem)',
                fontWeight: '800',
                color: '#ffffff',
                lineHeight: 1.2,
                letterSpacing: '-0.02em',
                marginBottom: '1.25rem',
              }}
            >
              Your financial data <br />
              <span style={{ color: 'var(--accent-primary)' }}>is yours.</span>
            </h2>

            <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: '1.65', marginBottom: '1.5rem' }}>
              Handling financial transactions demands total security integrity. We engineer our backend with hardened authentication, data isolation, and strict policies.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
              {[
                { title: 'Secure Authentication & Bearer Tokens', desc: 'Encrypted sessions and token-based protection on every API request.' },
                { title: 'Protected API Endpoints', desc: 'Granular user authorization ensures you only access your own records.' },
                { title: 'Zero Third-Party Advertising Scripts', desc: 'We do not sell user transaction behavior to advertisers or data brokers.' },
                { title: 'Strict Data Isolation', desc: 'PostgreSQL relational integrity with verified encryption at rest.' },
              ].map((item, idx) => (
                <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.65rem' }}>
                  <CheckCircle2 size={18} color="var(--accent-primary)" style={{ marginTop: '0.15rem', flexShrink: 0 }} />
                  <div>
                    <strong style={{ color: '#ffffff', fontSize: '0.875rem' }}>{item.title}: </strong>
                    <span style={{ color: 'var(--text-muted)', fontSize: '0.825rem' }}>{item.desc}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Security Badge Card */}
          <div
            className="glass-card"
            style={{
              padding: '2.5rem',
              background: '#0d0d0d',
              borderRadius: 'var(--radius-lg)',
              border: '1px solid var(--border-hover)',
              textAlign: 'center',
            }}
          >
            <div
              style={{
                width: '64px',
                height: '64px',
                borderRadius: '50%',
                background: 'rgba(16, 185, 129, 0.12)',
                color: 'var(--accent-primary)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 1.5rem auto',
              }}
            >
              <Lock size={32} />
            </div>

            <h3 style={{ fontSize: '1.3rem', fontWeight: '800', color: '#ffffff', marginBottom: '0.5rem' }}>
              Encrypted & Protected
            </h3>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', lineHeight: '1.5', maxWidth: '340px', margin: '0 auto 1.5rem auto' }}>
              Only security features that are strictly implemented in our codebase are advertised. Zero marketing fluff.
            </p>

            <div style={{ background: '#141414', padding: '1rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-subtle)', fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
              🔒 100% Private Financial Data & Encrypted Tokens
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 16 & 17: OUR VISION & THE FUTURE OF FINORA
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
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.4rem',
                color: 'var(--accent-primary)',
                fontSize: '0.8rem',
                fontWeight: '700',
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
                marginBottom: '0.65rem',
              }}
            >
              <Sparkles size={16} />
              <span>Future Roadmap</span>
            </div>

            <h2
              style={{
                fontSize: 'clamp(2rem, 3.5vw, 2.75rem)',
                fontWeight: '800',
                color: '#ffffff',
                letterSpacing: '-0.02em',
                marginBottom: '1rem',
                lineHeight: 1.2,
              }}
            >
              We're building more than an expense tracker.
            </h2>

            <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', maxWidth: '680px', margin: '0 auto' }}>
              <strong>Current Finora:</strong> Understanding and managing financial activity. <br />
              <strong>Future Finora:</strong> A complete platform where users manage every important part of their financial life from one place.
            </p>
          </div>

          {/* Today vs Future Split comparison */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '1.5rem',
              marginBottom: '3.5rem',
            }}
          >
            {/* Today */}
            <div
              className="glass-card"
              style={{
                padding: '2rem',
                background: '#0e0e0e',
                borderRadius: 'var(--radius-lg)',
                borderTop: '3px solid var(--accent-primary)',
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                <h3 style={{ fontSize: '1.2rem', fontWeight: '800', color: '#ffffff' }}>Finora Today</h3>
                <span className="badge badge-green">Operational</span>
              </div>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '1.25rem' }}>
                Focusing on speed, precision tracking, and deep spending visibility:
              </p>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.6rem', fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                <li>✓ Multi-bank accounts & physical cash</li>
                <li>✓ Granular expense logging & tags</li>
                <li>✓ Category budget thresholds</li>
                <li>✓ Subscription cost monitors</li>
                <li>✓ Time-based visual reports</li>
              </ul>
            </div>

            {/* Future Vision */}
            <div
              className="glass-card"
              style={{
                padding: '2rem',
                background: '#0e0e0e',
                borderRadius: 'var(--radius-lg)',
                borderTop: '3px solid #3b82f6',
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                <h3 style={{ fontSize: '1.2rem', fontWeight: '800', color: '#ffffff' }}>Finora Future</h3>
                <span className="badge badge-dark">Vision</span>
              </div>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '1.25rem' }}>
                Expanding toward full financial autonomy and intelligent automation:
              </p>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.6rem', fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                <li>🚀 Direct Open Banking sync & instant imports</li>
                <li>🚀 Native iOS & Android applications with OCR</li>
                <li>🚀 AI-driven spending recommendations</li>
                <li>🚀 Subscription cancellation assistance</li>
                <li>🚀 Shared family wallets & savings goals</li>
              </ul>
            </div>
          </div>

          {/* Stepper Roadmap Visualizer */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
              gap: '1rem',
            }}
          >
            {roadmapSteps.map((step, idx) => (
              <div
                key={idx}
                className="glass-card"
                style={{
                  padding: '1.5rem',
                  background: step.active ? '#121212' : '#0a0a0a',
                  border: step.active ? '1px solid var(--accent-border)' : '1px solid var(--border-subtle)',
                  borderRadius: 'var(--radius-md)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.75rem',
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontWeight: '700' }}>{step.phase}</span>
                  <span className={`badge ${step.active ? 'badge-green' : 'badge-dark'}`}>{step.status}</span>
                </div>
                <h4 style={{ fontSize: '0.95rem', fontWeight: '700', color: '#ffffff' }}>{step.title}</h4>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.35rem', fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                  {step.items.map((it, i) => (
                    <li key={i}>• {it}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 18: FINAL CTA
      ========================================================================== */}
      <section style={{ padding: '6rem 1.5rem 2rem 1.5rem', maxWidth: '1100px', margin: '0 auto' }}>
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
          {/* Radial glow background */}
          <div
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: '400px',
              height: '400px',
              background: 'radial-gradient(circle, rgba(16, 185, 129, 0.12) 0%, rgba(0,0,0,0) 70%)',
              filter: 'blur(70px)',
              pointerEvents: 'none',
            }}
          />

          <div style={{ position: 'relative', zIndex: 1 }}>
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.4rem',
                color: 'var(--accent-primary)',
                fontSize: '0.8rem',
                fontWeight: '700',
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
                marginBottom: '1rem',
              }}
            >
              <Sparkles size={16} />
              <span>Start Your Journey</span>
            </div>

            <h2
              style={{
                fontSize: 'clamp(2rem, 4vw, 3rem)',
                fontWeight: '800',
                color: '#ffffff',
                letterSpacing: '-0.02em',
                marginBottom: '1.25rem',
                lineHeight: 1.15,
              }}
            >
              Your money has a story. <br />
              <span style={{ color: 'var(--accent-primary)' }}>It's time to understand it.</span>
            </h2>

            <p
              style={{
                color: 'var(--text-secondary)',
                fontSize: '1.05rem',
                maxWidth: '540px',
                margin: '0 auto 2.5rem auto',
                lineHeight: '1.6',
              }}
            >
              Know where your money goes. Understand how you spend. Take complete control of your financial life today.
            </p>

            <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap', marginBottom: '2.5rem' }}>
              <Link
                to="/register"
                className="btn btn-primary"
                style={{ fontSize: '1rem', padding: '0.85rem 2rem', textDecoration: 'none' }}
              >
                <span>Enter Finora</span>
                <ArrowRight size={18} />
              </Link>
              <Link
                to="/login"
                className="btn btn-secondary"
                style={{ fontSize: '1rem', padding: '0.85rem 1.75rem', textDecoration: 'none' }}
              >
                <span>Sign In</span>
              </Link>
            </div>

            <div style={{ fontSize: '0.9rem', color: 'var(--text-muted)', fontWeight: '600' }}>
              Welcome to <span style={{ color: '#ffffff', fontWeight: '800' }}>Finora</span>.
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AboutUs;
