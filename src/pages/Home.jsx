import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import {
  Wallet,
  ArrowRight,
  CheckCircle2,
  TrendingUp,
  TrendingDown,
  Building2,
  CreditCard,
  Banknote,
  Tag,
  Store,
  Calendar,
  BarChart2,
  PieChart,
  Target,
  Repeat,
  ShieldCheck,
  Lock,
  Eye,
  Sliders,
  ChevronLeft,
  ChevronRight,
  ChevronDown,
  Sparkles,
  Smartphone,
  Globe,
  Monitor,
  Coffee,
  Car,
  ShoppingBag,
  Home as HomeIcon,
  Tv,
  Zap,
  Check,
} from 'lucide-react';

export default function Home() {
  // Testimonial Carousel State
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  // FAQ Accordion State
  const [openFaq, setOpenFaq] = useState(null);

  // Interactive Report Period Filter
  const [activeReportTab, setActiveReportTab] = useState('monthly');

  // Testimonials Data
  const testimonials = [
    {
      quote: "Finora finally helped me understand where my money goes every month. No clutter, just instant clarity.",
      name: "Yassine E.",
      role: "Young Employee",
      city: "Casablanca",
    },
    {
      quote: "Managing my monthly allowance and cash expenses used to be a mess. Now I know my exact remaining budget.",
      name: "Salma K.",
      role: "University Student",
      city: "Rabat",
    },
    {
      quote: "Tracking multiple bank payouts and project expenses in MAD without bloated spreadsheets is a lifesaver.",
      name: "Amine B.",
      role: "Freelance Designer",
      city: "Marrakech",
    },
    {
      quote: "The subscription tracker alone saved me hundreds of dirhams on unused memberships I had completely forgotten.",
      name: "Noura T.",
      role: "Product Marketer",
      city: "Tangier",
    },
  ];

  // Auto-advance testimonials carousel gently
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  // FAQ Data
  const faqs = [
    {
      q: 'What is Finora?',
      a: 'Finora is a platform that helps you understand and manage your personal financial activity in one unified place.',
    },
    {
      q: 'Is Finora free?',
      a: 'Yes. Finora is currently completely free to use.',
    },
    {
      q: 'Can I manage multiple accounts?',
      a: 'Yes. You can manage multiple bank accounts and track physical cash in one combined view.',
    },
    {
      q: 'Can I track my expenses?',
      a: 'Yes. You can organize and understand your spending by different categories, merchants, and dates.',
    },
    {
      q: 'Can I track subscriptions?',
      a: 'Yes. Finora helps you keep track of recurring payments, renewal dates, and total subscription costs.',
    },
    {
      q: 'Can I create budgets?',
      a: 'Yes. You can set category spending limits and track your remaining amounts in real time.',
    },
    {
      q: 'Can I use Finora on mobile?',
      a: 'The first version is available on the Web with a responsive mobile-friendly interface. Native Android, iOS, and Windows apps are planned for the future.',
    },
    {
      q: 'Is my financial information private?',
      a: 'Finora is designed with privacy and security in mind, keeping you in full control of your personal information.',
    },
  ];

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', background: 'var(--bg-primary)' }}>
      {/* 01. Navbar */}
      <Navbar />

      <main style={{ flex: 1 }}>
        {/* =========================================================================
            02. HERO SECTION
        ========================================================================== */}
        <section
          style={{
            padding: '5rem 1.5rem 3.5rem 1.5rem',
            textAlign: 'center',
            maxWidth: '1150px',
            margin: '0 auto',
            position: 'relative',
          }}
        >
          {/* Ambient radial glow */}
          <div
            style={{
              position: 'absolute',
              top: '5%',
              left: '50%',
              transform: 'translateX(-50%)',
              width: '500px',
              height: '300px',
              background: 'radial-gradient(circle, rgba(16, 185, 129, 0.15) 0%, rgba(0,0,0,0) 70%)',
              filter: 'blur(60px)',
              pointerEvents: 'none',
              zIndex: 0,
            }}
          />

          <div style={{ position: 'relative', zIndex: 1 }}>
            {/* Pill Badge */}
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.45rem',
                background: 'var(--accent-light)',
                border: '1px solid var(--accent-border)',
                borderRadius: 'var(--radius-full)',
                padding: '0.35rem 1rem',
                marginBottom: '1.75rem',
                fontSize: '0.825rem',
                color: 'var(--accent-primary)',
                fontWeight: '700',
              }}
            >
              <Sparkles size={14} />
              <span>Personal Finance Clarity</span>
            </div>

            {/* Headline */}
            <h1
              style={{
                fontSize: 'clamp(2.5rem, 5.5vw, 4.2rem)',
                fontWeight: '800',
                lineHeight: 1.15,
                letterSpacing: '-0.03em',
                color: '#ffffff',
                marginBottom: '1.25rem',
              }}
            >
              Where is your <br />
              <span style={{ color: 'var(--accent-primary)' }}>money going?</span>
            </h1>

            {/* Supporting text */}
            <p
              style={{
                fontSize: '1.1rem',
                color: 'var(--text-secondary)',
                lineHeight: 1.6,
                maxWidth: '620px',
                margin: '0 auto 2.5rem auto',
              }}
            >
              Understand your spending, track your expenses, and see your financial life clearly — all in one place.
            </p>

            {/* CTA */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '1rem',
                flexWrap: 'wrap',
                marginBottom: '3.5rem',
              }}
            >
              <Link
                to="/register"
                className="btn btn-primary"
                style={{ fontSize: '1rem', padding: '0.8rem 2rem', textDecoration: 'none' }}
              >
                <span>Start for Free</span>
                <ArrowRight size={17} />
              </Link>
              <a
                href="#how-it-works"
                className="btn btn-secondary"
                style={{ fontSize: '1rem', padding: '0.8rem 1.6rem', textDecoration: 'none' }}
              >
                <span>See How It Works</span>
              </a>
            </div>

            {/* Visual: Polished Finora Dashboard */}
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
              {/* Window Bar */}
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
                  <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#ef4444' }} />
                  <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#f59e0b' }} />
                  <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#10b981' }} />
                  <span style={{ marginLeft: '0.75rem', fontSize: '0.8rem', color: 'var(--text-muted)', fontWeight: '600' }}>
                    finora.app/dashboard
                  </span>
                </div>
                <span className="badge badge-green">Live Financial View</span>
              </div>

              {/* 3 Dashboard Cards */}
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
                  gap: '1.25rem',
                }}
              >
                {/* Total Balance */}
                <div
                  style={{
                    background: '#141414',
                    padding: '1.25rem',
                    borderRadius: 'var(--radius-md)',
                    border: '1px solid var(--border-subtle)',
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', color: 'var(--text-secondary)', fontSize: '0.8rem', marginBottom: '0.4rem' }}>
                    <span>Total Balance</span>
                    <Wallet size={16} color="var(--accent-primary)" />
                  </div>
                  <div style={{ fontSize: '1.85rem', fontWeight: '800', color: '#ffffff', letterSpacing: '-0.02em' }}>
                    12,400 <span style={{ fontSize: '1rem', color: 'var(--accent-primary)', fontWeight: '700' }}>MAD</span>
                  </div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: '0.4rem' }}>
                    CIH Bank + Attijariwafa + Cash
                  </div>
                </div>

                {/* Monthly Spending Overview */}
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
                  <div style={{ fontSize: '1.85rem', fontWeight: '800', color: '#ffffff', letterSpacing: '-0.02em' }}>
                    3,120 <span style={{ fontSize: '1rem', color: 'var(--text-muted)' }}>/ 4,500 MAD</span>
                  </div>
                  <div style={{ marginTop: '0.5rem' }}>
                    <div style={{ height: '6px', background: '#222222', borderRadius: '4px', overflow: 'hidden' }}>
                      <div style={{ width: '69.3%', height: '100%', background: 'var(--accent-primary)' }} />
                    </div>
                  </div>
                </div>

                {/* Subscriptions */}
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
                  <div style={{ fontSize: '1.85rem', fontWeight: '800', color: '#ffffff', letterSpacing: '-0.02em' }}>
                    350 <span style={{ fontSize: '1rem', color: '#ec4899', fontWeight: '600' }}>MAD / mo</span>
                  </div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: '0.4rem' }}>
                    4 services monitored
                  </div>
                </div>
              </div>

              {/* Recent Expenses preview snippet */}
              <div style={{ marginTop: '1.25rem', background: '#111111', borderRadius: 'var(--radius-md)', padding: '1rem', border: '1px solid var(--border-subtle)' }}>
                <div style={{ fontSize: '0.78rem', fontWeight: '700', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.75rem' }}>
                  Recent Expenses
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '0.65rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', background: '#161616', padding: '0.6rem 0.85rem', borderRadius: '6px' }}>
                    <div>
                      <div style={{ fontSize: '0.85rem', fontWeight: '600', color: '#ffffff' }}>Restaurant La Table</div>
                      <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>Food · Bank</div>
                    </div>
                    <span style={{ fontSize: '0.85rem', fontWeight: '700', color: '#ef4444' }}>-120 MAD</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', background: '#161616', padding: '0.6rem 0.85rem', borderRadius: '6px' }}>
                    <div>
                      <div style={{ fontSize: '0.85rem', fontWeight: '600', color: '#ffffff' }}>Uber Ride</div>
                      <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>Transport · Card</div>
                    </div>
                    <span style={{ fontSize: '0.85rem', fontWeight: '700', color: '#ef4444' }}>-45 MAD</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', background: '#161616', padding: '0.6rem 0.85rem', borderRadius: '6px' }}>
                    <div>
                      <div style={{ fontSize: '0.85rem', fontWeight: '600', color: '#ffffff' }}>Amazon Store</div>
                      <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>Shopping · Online</div>
                    </div>
                    <span style={{ fontSize: '0.85rem', fontWeight: '700', color: '#ef4444' }}>-300 MAD</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            03. STATS STRIP
        ========================================================================== */}
        <section
          style={{
            borderTop: '1px solid var(--border-subtle)',
            borderBottom: '1px solid var(--border-subtle)',
            background: '#090909',
            padding: '1.25rem 1.5rem',
          }}
        >
          <div
            style={{
              maxWidth: '1000px',
              margin: '0 auto',
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
              gap: '1.5rem',
              textAlign: 'center',
            }}
          >
            <div>
              <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                Users
              </div>
              <div style={{ fontSize: '1.4rem', fontWeight: '800', color: '#ffffff', marginTop: '0.2rem' }}>
                —
              </div>
            </div>

            <div>
              <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                Expenses Tracked
              </div>
              <div style={{ fontSize: '1.4rem', fontWeight: '800', color: '#ffffff', marginTop: '0.2rem' }}>
                —
              </div>
            </div>

            <div>
              <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                Accounts Managed
              </div>
              <div style={{ fontSize: '1.4rem', fontWeight: '800', color: '#ffffff', marginTop: '0.2rem' }}>
                —
              </div>
            </div>

            <div>
              <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                Money Tracked
              </div>
              <div style={{ fontSize: '1.4rem', fontWeight: '800', color: '#ffffff', marginTop: '0.2rem' }}>
                —
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            04. MULTIPLE ACCOUNTS
        ========================================================================== */}
        <section id="accounts" style={{ padding: '5.5rem 1.5rem', maxWidth: '1100px', margin: '0 auto' }}>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '3rem',
              alignItems: 'center',
            }}
          >
            {/* Left Narrative */}
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
                <Building2 size={16} />
                <span>Multiple Accounts</span>
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
                All your money, <br />
                <span style={{ color: 'var(--accent-primary)' }}>in one place.</span>
              </h2>

              <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', lineHeight: '1.65', marginBottom: '1.5rem' }}>
                People often have money spread across different bank accounts and cash. Finora brings these sources together so you can understand your overall financial situation without logging into multiple bank portals.
              </p>

              <div
                style={{
                  background: '#111111',
                  padding: '1.25rem',
                  borderRadius: 'var(--radius-md)',
                  borderLeft: '3px solid var(--accent-primary)',
                }}
              >
                <div style={{ fontSize: '0.95rem', fontWeight: '700', color: '#ffffff', marginBottom: '0.2rem' }}>
                  One place. One clear view.
                </div>
                <div style={{ fontSize: '0.825rem', color: 'var(--text-muted)' }}>
                  You shouldn't have to check different places just to understand how much money you have.
                </div>
              </div>
            </div>

            {/* Right Visual: Accounts Breakdown Card */}
            <div
              className="glass-card"
              style={{
                padding: '2rem',
                background: '#0d0d0d',
                borderRadius: 'var(--radius-lg)',
                border: '1px solid var(--border-hover)',
              }}
            >
              <div style={{ fontSize: '0.8rem', fontWeight: '700', color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: '1.25rem' }}>
                Linked Financial Accounts
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '1.5rem' }}>
                {/* CIH Bank */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', background: '#141414', padding: '1rem 1.25rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-subtle)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <div style={{ width: '36px', height: '36px', borderRadius: '8px', background: 'rgba(16, 185, 129, 0.12)', color: 'var(--accent-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <Building2 size={18} />
                    </div>
                    <div>
                      <div style={{ fontSize: '0.95rem', fontWeight: '700', color: '#ffffff' }}>CIH Bank</div>
                      <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Primary Checking</div>
                    </div>
                  </div>
                  <span style={{ fontSize: '1.15rem', fontWeight: '800', color: '#ffffff' }}>8,500 MAD</span>
                </div>

                {/* Attijariwafa Bank */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', background: '#141414', padding: '1rem 1.25rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-subtle)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <div style={{ width: '36px', height: '36px', borderRadius: '8px', background: 'rgba(59, 130, 246, 0.12)', color: '#3b82f6', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <CreditCard size={18} />
                    </div>
                    <div>
                      <div style={{ fontSize: '0.95rem', fontWeight: '700', color: '#ffffff' }}>Attijariwafa Bank</div>
                      <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Savings Account</div>
                    </div>
                  </div>
                  <span style={{ fontSize: '1.15rem', fontWeight: '800', color: '#ffffff' }}>3,200 MAD</span>
                </div>

                {/* Cash */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', background: '#141414', padding: '1rem 1.25rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-subtle)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <div style={{ width: '36px', height: '36px', borderRadius: '8px', background: 'rgba(245, 158, 11, 0.12)', color: '#f59e0b', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <Banknote size={18} />
                    </div>
                    <div>
                      <div style={{ fontSize: '0.95rem', fontWeight: '700', color: '#ffffff' }}>Cash</div>
                      <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Physical Wallet</div>
                    </div>
                  </div>
                  <span style={{ fontSize: '1.15rem', fontWeight: '800', color: '#ffffff' }}>700 MAD</span>
                </div>
              </div>

              {/* Total Balance Banner */}
              <div
                style={{
                  background: 'var(--accent-light)',
                  border: '1px solid var(--accent-border)',
                  padding: '1.25rem',
                  borderRadius: 'var(--radius-md)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}
              >
                <span style={{ fontSize: '0.9rem', fontWeight: '700', color: '#ffffff' }}>Total Balance</span>
                <span style={{ fontSize: '1.4rem', fontWeight: '800', color: 'var(--accent-primary)' }}>12,400 MAD</span>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            05. EXPENSES
        ========================================================================== */}
        <section
          id="expenses"
          style={{
            padding: '5.5rem 1.5rem',
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
              {/* Left Visual: Expense Stream */}
              <div
                className="glass-card"
                style={{
                  padding: '2rem',
                  background: '#0d0d0d',
                  borderRadius: 'var(--radius-lg)',
                  border: '1px solid var(--border-hover)',
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem' }}>
                  <span style={{ fontSize: '0.8rem', fontWeight: '700', color: 'var(--text-muted)', textTransform: 'uppercase' }}>
                    Live Expense Feed
                  </span>
                  <span className="badge badge-green">Real-Time</span>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                  {[
                    { merchant: 'Restaurant La Table', category: 'Food', amount: '-120 MAD', account: 'CIH Bank', date: 'Today' },
                    { merchant: 'Uber Ride', category: 'Transport', amount: '-45 MAD', account: 'Attijariwafa', date: 'Yesterday' },
                    { merchant: 'Amazon Marketplace', category: 'Shopping', amount: '-300 MAD', account: 'CIH Bank', date: 'Aug 24' },
                    { merchant: 'Netflix Subscription', category: 'Subscription', amount: '-80 MAD', account: 'Auto-Debit', date: 'Aug 22' },
                  ].map((exp, idx) => (
                    <div
                      key={idx}
                      style={{
                        background: '#141414',
                        padding: '1rem 1.25rem',
                        borderRadius: 'var(--radius-md)',
                        border: '1px solid var(--border-subtle)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                      }}
                    >
                      <div>
                        <div style={{ fontSize: '0.95rem', fontWeight: '700', color: '#ffffff' }}>{exp.merchant}</div>
                        <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', display: 'flex', gap: '0.5rem', marginTop: '0.2rem' }}>
                          <span style={{ color: 'var(--accent-primary)', fontWeight: '600' }}>{exp.category}</span>
                          <span>•</span>
                          <span>{exp.account}</span>
                          <span>•</span>
                          <span>{exp.date}</span>
                        </div>
                      </div>
                      <span style={{ fontSize: '1.05rem', fontWeight: '800', color: '#ef4444' }}>{exp.amount}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Narrative */}
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
                  <span>Granular Spending</span>
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
                  See every expense. <br />
                  <span style={{ color: 'var(--accent-primary)' }}>Understand every habit.</span>
                </h2>

                <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', lineHeight: '1.65', marginBottom: '1.5rem' }}>
                  Finora isn’t simply recording numbers. It helps you see where money goes as it happens, capturing exact amounts, merchants, dates, and account sources.
                </p>

                <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: '1.6' }}>
                  Instead of wondering where your money went at the end of the month, Finora helps you see it clearly as it happens.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            06. CATEGORIES & MERCHANTS
        ========================================================================== */}
        <section style={{ padding: '5.5rem 1.5rem', maxWidth: '1100px', margin: '0 auto' }}>
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
              <Store size={16} />
              <span>Categorization & Venues</span>
            </div>

            <h2 style={{ fontSize: '2.2rem', fontWeight: '800', color: '#ffffff', letterSpacing: '-0.02em', marginBottom: '0.85rem' }}>
              Know what you're spending on — and where.
            </h2>

            <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', maxWidth: '640px', margin: '0 auto' }}>
              It's not just about how much you spend. It's about understanding which merchants and lifestyle areas receive your money.
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '1.5rem',
            }}
          >
            {/* Category: Food */}
            <div
              className="glass-card"
              style={{
                padding: '1.75rem',
                background: '#0d0d0d',
                borderRadius: 'var(--radius-lg)',
                border: '1px solid var(--border-hover)',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem', paddingBottom: '0.75rem', borderBottom: '1px solid var(--border-subtle)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                  <Coffee size={20} color="var(--accent-primary)" />
                  <span style={{ fontSize: '1.1rem', fontWeight: '800', color: '#ffffff' }}>Food</span>
                </div>
                <span style={{ fontSize: '0.85rem', fontWeight: '700', color: 'var(--accent-primary)' }}>700 MAD Total</span>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.9rem' }}>
                  <span style={{ color: 'var(--text-secondary)' }}>Restaurant A</span>
                  <span style={{ color: '#ffffff', fontWeight: '700' }}>420 MAD</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.9rem' }}>
                  <span style={{ color: 'var(--text-secondary)' }}>Restaurant B</span>
                  <span style={{ color: '#ffffff', fontWeight: '700' }}>280 MAD</span>
                </div>
              </div>
            </div>

            {/* Category: Shopping */}
            <div
              className="glass-card"
              style={{
                padding: '1.75rem',
                background: '#0d0d0d',
                borderRadius: 'var(--radius-lg)',
                border: '1px solid var(--border-hover)',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem', paddingBottom: '0.75rem', borderBottom: '1px solid var(--border-subtle)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                  <ShoppingBag size={20} color="#3b82f6" />
                  <span style={{ fontSize: '1.1rem', fontWeight: '800', color: '#ffffff' }}>Shopping</span>
                </div>
                <span style={{ fontSize: '0.85rem', fontWeight: '700', color: '#3b82f6' }}>850 MAD Total</span>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.9rem' }}>
                  <span style={{ color: 'var(--text-secondary)' }}>Amazon</span>
                  <span style={{ color: '#ffffff', fontWeight: '700' }}>600 MAD</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.9rem' }}>
                  <span style={{ color: 'var(--text-secondary)' }}>Local Store</span>
                  <span style={{ color: '#ffffff', fontWeight: '700' }}>250 MAD</span>
                </div>
              </div>
            </div>

            {/* Supported Categories list */}
            <div
              className="glass-card"
              style={{
                padding: '1.75rem',
                background: '#0d0d0d',
                borderRadius: 'var(--radius-lg)',
                border: '1px solid var(--border-hover)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
              }}
            >
              <div style={{ fontSize: '0.8rem', fontWeight: '700', color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: '1rem' }}>
                All Categories Supported
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                {['Food', 'Transport', 'Shopping', 'Bills', 'Entertainment', 'Health', 'Travel'].map((cat, i) => (
                  <span key={i} className="badge badge-dark" style={{ padding: '0.35rem 0.75rem', fontSize: '0.8rem' }}>
                    {cat}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            07. REPORTS
        ========================================================================== */}
        <section
          id="reports"
          style={{
            padding: '5.5rem 1.5rem',
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
                <BarChart2 size={16} />
                <span>Visual Analytics</span>
              </div>

              <h2 style={{ fontSize: '2.2rem', fontWeight: '800', color: '#ffffff', letterSpacing: '-0.02em', marginBottom: '0.85rem' }}>
                See the bigger picture.
              </h2>

              <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', maxWidth: '640px', margin: '0 auto' }}>
                Turn a month of transactions into a picture you can actually understand. Explore daily, weekly, monthly, and yearly trends.
              </p>
            </div>

            {/* Reports Chart Visual */}
            <div
              className="glass-card"
              style={{
                maxWidth: '850px',
                margin: '0 auto',
                padding: '2.5rem',
                background: '#0d0d0d',
                borderRadius: 'var(--radius-lg)',
                border: '1px solid var(--border-hover)',
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
                <h3 style={{ fontSize: '1.1rem', fontWeight: '800', color: '#ffffff' }}>Monthly Spending Trend</h3>
                <span className="badge badge-green">2026 Overview</span>
              </div>

              {/* Bar Chart Visualization */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                {[
                  { month: 'Jan', amount: '2,800 MAD', pct: 60 },
                  { month: 'Feb', amount: '3,400 MAD', pct: 75 },
                  { month: 'Mar', amount: '2,100 MAD', pct: 45 },
                  { month: 'Apr', amount: '3,900 MAD', pct: 85 },
                  { month: 'May', amount: '3,120 MAD', pct: 68 },
                ].map((item, idx) => (
                  <div key={idx}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem', marginBottom: '0.35rem' }}>
                      <span style={{ color: '#ffffff', fontWeight: '700' }}>{item.month}</span>
                      <span style={{ color: 'var(--accent-primary)', fontWeight: '700' }}>{item.amount}</span>
                    </div>
                    <div style={{ height: '8px', background: '#1c1c1c', borderRadius: '4px', overflow: 'hidden' }}>
                      <div
                        style={{
                          width: `${item.pct}%`,
                          height: '100%',
                          background: 'linear-gradient(90deg, #059669, #10b981)',
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              <div
                style={{
                  marginTop: '2rem',
                  paddingTop: '1.25rem',
                  borderTop: '1px solid var(--border-subtle)',
                  display: 'flex',
                  justifyContent: 'space-between',
                  flexWrap: 'wrap',
                  gap: '1rem',
                  fontSize: '0.8rem',
                  color: 'var(--text-muted)',
                }}
              >
                <span>Reports by: Category · Merchant · Account · Time</span>
                <span style={{ color: 'var(--accent-primary)' }}>100% Visual Clarity</span>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            08. BUDGETS
        ========================================================================== */}
        <section id="budgets" style={{ padding: '5.5rem 1.5rem', maxWidth: '1100px', margin: '0 auto' }}>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '3rem',
              alignItems: 'center',
            }}
          >
            {/* Left Narrative */}
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
                <span>Budgets & Goals</span>
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
                Stay on track with <br />
                <span style={{ color: 'var(--accent-primary)' }}>your spending.</span>
              </h2>

              <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', lineHeight: '1.65', marginBottom: '1.5rem' }}>
                Set a limit. Track your progress. Know when you're getting close. Finora helps you plan ahead in a way that feels empowering rather than restrictive.
              </p>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                {['Food', 'Transport', 'Shopping', 'Entertainment', 'Bills'].map((b, i) => (
                  <span key={i} className="badge badge-dark" style={{ padding: '0.4rem 0.8rem' }}>
                    {b} Budget
                  </span>
                ))}
              </div>
            </div>

            {/* Right Visual: Budget Progress Card */}
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
                  <span style={{ fontSize: '1.15rem', fontWeight: '800', color: '#ffffff' }}>Food Budget</span>
                </div>
                <span className="badge badge-green">74.6% Used</span>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '0.75rem', textAlign: 'center', marginBottom: '1.5rem' }}>
                <div style={{ background: '#141414', padding: '0.85rem', borderRadius: 'var(--radius-md)' }}>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Budget</div>
                  <div style={{ fontSize: '1.1rem', fontWeight: '800', color: '#ffffff', marginTop: '0.2rem' }}>1,500 MAD</div>
                </div>
                <div style={{ background: '#141414', padding: '0.85rem', borderRadius: 'var(--radius-md)' }}>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Spent</div>
                  <div style={{ fontSize: '1.1rem', fontWeight: '800', color: '#f59e0b', marginTop: '0.2rem' }}>1,120 MAD</div>
                </div>
                <div style={{ background: '#141414', padding: '0.85rem', borderRadius: 'var(--radius-md)' }}>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Remaining</div>
                  <div style={{ fontSize: '1.1rem', fontWeight: '800', color: 'var(--accent-primary)', marginTop: '0.2rem' }}>380 MAD</div>
                </div>
              </div>

              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.8rem', color: 'var(--text-secondary)', marginBottom: '0.4rem' }}>
                  <span>Monthly Allowance Used</span>
                  <span>74.6%</span>
                </div>
                <div style={{ height: '8px', background: '#1e1e1e', borderRadius: '4px', overflow: 'hidden' }}>
                  <div style={{ width: '74.6%', height: '100%', background: 'linear-gradient(90deg, #10b981, #f59e0b)' }} />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            09. SUBSCRIPTIONS
        ========================================================================== */}
        <section
          id="subscriptions"
          style={{
            padding: '5.5rem 1.5rem',
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
                  color: '#ec4899',
                  fontSize: '0.8rem',
                  fontWeight: '700',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em',
                  marginBottom: '0.65rem',
                }}
              >
                <Repeat size={16} />
                <span>Recurring Memberships</span>
              </div>

              <h2 style={{ fontSize: '2.2rem', fontWeight: '800', color: '#ffffff', letterSpacing: '-0.02em', marginBottom: '0.85rem' }}>
                Never lose track of what you're paying for.
              </h2>

              <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', maxWidth: '640px', margin: '0 auto' }}>
                Small recurring payments can become a big part of your spending. Finora puts them all in one place.
              </p>
            </div>

            {/* Subscriptions Grid */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
                gap: '1.25rem',
                marginBottom: '2rem',
              }}
            >
              {[
                { name: 'Netflix', price: '50 MAD', cycle: 'month' },
                { name: 'Spotify', price: '60 MAD', cycle: 'month' },
                { name: 'Gym', price: '200 MAD', cycle: 'month' },
                { name: 'Cloud Storage', price: '40 MAD', cycle: 'month' },
              ].map((sub, idx) => (
                <div
                  key={idx}
                  className="glass-card"
                  style={{
                    padding: '1.5rem',
                    background: '#0d0d0d',
                    borderRadius: 'var(--radius-md)',
                  }}
                >
                  <h4 style={{ fontSize: '1rem', fontWeight: '700', color: '#ffffff', marginBottom: '0.4rem' }}>{sub.name}</h4>
                  <div style={{ fontSize: '1.35rem', fontWeight: '800', color: 'var(--accent-primary)' }}>
                    {sub.price} <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>/ {sub.cycle}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Overview Strip */}
            <div
              className="glass-card"
              style={{
                padding: '1.5rem 2rem',
                background: '#111111',
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
                <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Monthly Subscriptions</div>
                <div style={{ fontSize: '1.6rem', fontWeight: '800', color: '#ec4899', marginTop: '0.2rem' }}>350 MAD</div>
              </div>
              <div style={{ width: '1px', height: '35px', background: 'var(--border-subtle)' }} />
              <div>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Yearly Cost</div>
                <div style={{ fontSize: '1.6rem', fontWeight: '800', color: '#ffffff', marginTop: '0.2rem' }}>4,200 MAD</div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            10. HOW FINORA WORKS
        ========================================================================== */}
        <section id="how-it-works" style={{ padding: '5.5rem 1.5rem', maxWidth: '1000px', margin: '0 auto' }}>
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
              <span>Simple Workflow</span>
            </div>

            <h2 style={{ fontSize: '2.2rem', fontWeight: '800', color: '#ffffff', letterSpacing: '-0.02em', marginBottom: '0.85rem' }}>
              Managing your money doesn't have to be complicated.
            </h2>

            <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', maxWidth: '600px', margin: '0 auto' }}>
              Four simple steps to total financial confidence.
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(210px, 1fr))',
              gap: '1.25rem',
            }}
          >
            {[
              { step: '01', title: 'Add your accounts', desc: 'Connect or list your bank accounts and cash in one dashboard.' },
              { step: '02', title: 'Track your spending', desc: 'Log expenses effortlessly with categories, merchants, and dates.' },
              { step: '03', title: 'Organize your expenses', desc: 'Group expenses and monitor monthly subscription costs.' },
              { step: '04', title: 'Understand your money', desc: 'Review clear visual reports and stay ahead of your financial goals.' },
            ].map((st, idx) => (
              <div
                key={idx}
                className="glass-card"
                style={{
                  padding: '1.75rem',
                  background: '#0d0d0d',
                  borderRadius: 'var(--radius-lg)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.75rem',
                  borderTop: '3px solid var(--accent-primary)',
                }}
              >
                <div style={{ fontSize: '1.5rem', fontWeight: '800', color: 'var(--accent-primary)' }}>{st.step}</div>
                <h3 style={{ fontSize: '1.05rem', fontWeight: '700', color: '#ffffff' }}>{st.title}</h3>
                <p style={{ fontSize: '0.825rem', color: 'var(--text-muted)', lineHeight: '1.45' }}>{st.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* =========================================================================
            11. SECURITY & PRIVACY
        ========================================================================== */}
        <section
          id="security"
          style={{
            padding: '5.5rem 1.5rem',
            background: '#090909',
            borderTop: '1px solid var(--border-subtle)',
            borderBottom: '1px solid var(--border-subtle)',
          }}
        >
          <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
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
              <ShieldCheck size={16} />
              <span>Trust & Privacy</span>
            </div>

            <h2
              style={{
                fontSize: 'clamp(2rem, 3.5vw, 2.75rem)',
                fontWeight: '800',
                color: '#ffffff',
                lineHeight: 1.2,
                letterSpacing: '-0.02em',
                marginBottom: '1rem',
              }}
            >
              Your money. Your data. Your privacy.
            </h2>

            <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', marginBottom: '2.5rem' }}>
              Manage your money with confidence.
            </p>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
                gap: '1.25rem',
                textAlign: 'left',
              }}
            >
              {[
                { title: 'Your financial information stays private.', desc: 'We never sell your data or share your financial records with advertisers.' },
                { title: 'Your data belongs to you.', desc: 'You retain complete ownership over all your accounts and logged expenses.' },
                { title: 'You stay in control.', desc: 'Manage, edit, or delete any record at any time with total autonomy.' },
                { title: 'Designed with security in mind.', desc: 'Built from the ground up to protect your financial workspace.' },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="glass-card"
                  style={{
                    padding: '1.5rem',
                    background: '#0e0e0e',
                    borderRadius: 'var(--radius-md)',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                    <CheckCircle2 size={18} color="var(--accent-primary)" />
                    <h4 style={{ fontSize: '0.95rem', fontWeight: '700', color: '#ffffff' }}>{item.title}</h4>
                  </div>
                  <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', lineHeight: '1.45' }}>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* =========================================================================
            12. TESTIMONIALS (Carousel)
        ========================================================================== */}
        <section style={{ padding: '5.5rem 1.5rem', maxWidth: '850px', margin: '0 auto', textAlign: 'center' }}>
          <div style={{ fontSize: '0.8rem', fontWeight: '700', color: 'var(--accent-primary)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.5rem' }}>
            User Experiences
          </div>

          <h2 style={{ fontSize: '2.2rem', fontWeight: '800', color: '#ffffff', letterSpacing: '-0.02em', marginBottom: '2.5rem' }}>
            What people experience using Finora
          </h2>

          <div
            className="glass-card"
            style={{
              padding: '3rem 2.5rem',
              background: '#0d0d0d',
              borderRadius: 'var(--radius-lg)',
              border: '1px solid var(--border-hover)',
              position: 'relative',
              minHeight: '220px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
            }}
          >
            <p style={{ fontSize: '1.25rem', color: '#ffffff', fontStyle: 'italic', lineHeight: '1.6', marginBottom: '1.5rem' }}>
              "{testimonials[currentTestimonial].quote}"
            </p>

            <div>
              <div style={{ fontSize: '1rem', fontWeight: '800', color: 'var(--accent-primary)' }}>
                {testimonials[currentTestimonial].name}
              </div>
              <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                {testimonials[currentTestimonial].role} · {testimonials[currentTestimonial].city}
              </div>
            </div>

            {/* Carousel Controls */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem', marginTop: '2rem' }}>
              <button
                onClick={prevTestimonial}
                className="btn-icon"
                style={{ width: '36px', height: '36px', borderRadius: '50%' }}
                aria-label="Previous testimonial"
              >
                <ChevronLeft size={18} />
              </button>

              {/* Dots */}
              <div style={{ display: 'flex', gap: '0.5rem' }}>
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentTestimonial(i)}
                    style={{
                      width: currentTestimonial === i ? '20px' : '8px',
                      height: '8px',
                      borderRadius: '4px',
                      background: currentTestimonial === i ? 'var(--accent-primary)' : '#333333',
                      border: 'none',
                      cursor: 'pointer',
                      transition: 'all 0.2s ease',
                    }}
                    aria-label={`Go to slide ${i + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={nextTestimonial}
                className="btn-icon"
                style={{ width: '36px', height: '36px', borderRadius: '50%' }}
                aria-label="Next testimonial"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
        </section>

        {/* =========================================================================
            13. PLATFORM AVAILABILITY
        ========================================================================== */}
        <section
          style={{
            padding: '5.5rem 1.5rem',
            background: '#090909',
            borderTop: '1px solid var(--border-subtle)',
            borderBottom: '1px solid var(--border-subtle)',
          }}
        >
          <div style={{ maxWidth: '1000px', margin: '0 auto', textAlign: 'center' }}>
            <div style={{ fontSize: '0.8rem', fontWeight: '700', color: 'var(--accent-primary)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.5rem' }}>
              Multi-Platform Ecosystem
            </div>

            <h2 style={{ fontSize: '2.2rem', fontWeight: '800', color: '#ffffff', letterSpacing: '-0.02em', marginBottom: '0.85rem' }}>
              Finora, wherever you manage your money.
            </h2>

            <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', maxWidth: '600px', margin: '0 auto 3rem auto' }}>
              Start on the Web today. More ways to use Finora are coming.
            </p>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                gap: '1.25rem',
              }}
            >
              {/* Web */}
              <div
                className="glass-card"
                style={{
                  padding: '2rem 1.5rem',
                  background: '#0e0e0e',
                  borderRadius: 'var(--radius-lg)',
                  border: '1px solid var(--accent-border)',
                }}
              >
                <Globe size={32} color="var(--accent-primary)" style={{ marginBottom: '1rem' }} />
                <h3 style={{ fontSize: '1.1rem', fontWeight: '800', color: '#ffffff', marginBottom: '0.4rem' }}>Web</h3>
                <span className="badge badge-green">Available</span>
              </div>

              {/* Android */}
              <div
                className="glass-card"
                style={{
                  padding: '2rem 1.5rem',
                  background: '#0e0e0e',
                  borderRadius: 'var(--radius-lg)',
                }}
              >
                <Smartphone size={32} color="#888888" style={{ marginBottom: '1rem' }} />
                <h3 style={{ fontSize: '1.1rem', fontWeight: '800', color: '#ffffff', marginBottom: '0.4rem' }}>Android</h3>
                <span className="badge badge-dark">Coming Soon</span>
              </div>

              {/* iOS */}
              <div
                className="glass-card"
                style={{
                  padding: '2rem 1.5rem',
                  background: '#0e0e0e',
                  borderRadius: 'var(--radius-lg)',
                }}
              >
                <Smartphone size={32} color="#888888" style={{ marginBottom: '1rem' }} />
                <h3 style={{ fontSize: '1.1rem', fontWeight: '800', color: '#ffffff', marginBottom: '0.4rem' }}>iOS</h3>
                <span className="badge badge-dark">Coming Soon</span>
              </div>

              {/* Windows */}
              <div
                className="glass-card"
                style={{
                  padding: '2rem 1.5rem',
                  background: '#0e0e0e',
                  borderRadius: 'var(--radius-lg)',
                }}
              >
                <Monitor size={32} color="#888888" style={{ marginBottom: '1rem' }} />
                <h3 style={{ fontSize: '1.1rem', fontWeight: '800', color: '#ffffff', marginBottom: '0.4rem' }}>Windows</h3>
                <span className="badge badge-dark">Coming Soon</span>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            14. FAQ
        ========================================================================== */}
        <section id="faq" style={{ padding: '5.5rem 1.5rem', maxWidth: '850px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <div style={{ fontSize: '0.8rem', fontWeight: '700', color: 'var(--accent-primary)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.5rem' }}>
              Got Questions?
            </div>

            <h2 style={{ fontSize: '2.2rem', fontWeight: '800', color: '#ffffff', letterSpacing: '-0.02em' }}>
              Frequently Asked Questions
            </h2>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="glass-card"
                style={{
                  background: '#0d0d0d',
                  borderRadius: 'var(--radius-md)',
                  overflow: 'hidden',
                  border: openFaq === idx ? '1px solid var(--border-hover)' : '1px solid var(--border-subtle)',
                }}
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  style={{
                    width: '100%',
                    padding: '1.25rem 1.5rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    background: 'transparent',
                    border: 'none',
                    color: '#ffffff',
                    fontSize: '1rem',
                    fontWeight: '700',
                    textAlign: 'left',
                    cursor: 'pointer',
                  }}
                >
                  <span>{faq.q}</span>
                  <ChevronDown
                    size={18}
                    style={{
                      transform: openFaq === idx ? 'rotate(180deg)' : 'rotate(0deg)',
                      transition: 'transform 0.2s ease',
                      color: openFaq === idx ? 'var(--accent-primary)' : 'var(--text-muted)',
                      flexShrink: 0,
                    }}
                  />
                </button>

                {openFaq === idx && (
                  <div
                    style={{
                      padding: '0 1.5rem 1.25rem 1.5rem',
                      color: 'var(--text-secondary)',
                      fontSize: '0.9rem',
                      lineHeight: '1.6',
                      borderTop: '1px solid #1a1a1a',
                      paddingTop: '1rem',
                    }}
                  >
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* =========================================================================
            15. FINAL CTA
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
            {/* Ambient glow */}
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
              <h2
                style={{
                  fontSize: 'clamp(2rem, 4vw, 3rem)',
                  fontWeight: '800',
                  color: '#ffffff',
                  letterSpacing: '-0.02em',
                  marginBottom: '1rem',
                  lineHeight: 1.15,
                }}
              >
                Know your money. <br />
                <span style={{ color: 'var(--accent-primary)' }}>Own your decisions.</span>
              </h2>

              <p
                style={{
                  color: 'var(--text-secondary)',
                  fontSize: '1.05rem',
                  maxWidth: '520px',
                  margin: '0 auto 2.5rem auto',
                  lineHeight: '1.6',
                }}
              >
                Start understanding where your money goes and take control of your financial life.
              </p>

              <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
                <Link
                  to="/register"
                  className="btn btn-primary"
                  style={{ fontSize: '1rem', padding: '0.85rem 2.2rem', textDecoration: 'none' }}
                >
                  <span>Start Using Finora — Free</span>
                  <ArrowRight size={18} />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* 16. Footer */}
      <Footer />
    </div>
  );
}
