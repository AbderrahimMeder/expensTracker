import React from 'react';
import { Wallet } from 'lucide-react';

export default function Footer() {
  return (
    <footer style={{
      background: '#050505',
      borderTop: '1px solid var(--border-subtle)',
      padding: '3rem 1.5rem 2rem 1.5rem',
      color: 'var(--text-secondary)',
    }}>
      <div style={{
        maxWidth: '1100px',
        margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
        gap: '2rem',
        marginBottom: '2rem',
      }}>
        {/* Brand */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
            <div style={{
              width: '30px',
              height: '30px',
              borderRadius: '6px',
              background: '#10b981',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#000000',
            }}>
              <Wallet size={16} strokeWidth={2.5} />
            </div>
            <span style={{ fontSize: '1.1rem', fontWeight: '800', color: '#ffffff' }}>
              Expense<span style={{ color: '#10b981' }}>Flow</span>
            </span>
          </div>
          <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', lineHeight: '1.4' }}>
            Personal Finance & Expense Tracker built with Laravel, React, Inertia.js, PostgreSQL and Redis.
          </p>
        </div>

        {/* Product Links */}
        <div>
          <h4 style={{ color: '#ffffff', fontSize: '0.85rem', fontWeight: '700', marginBottom: '0.85rem' }}>Navigation</h4>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.8rem' }}>
            <li><a href="#features" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>Features</a></li>
            <li><a href="#demo" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>Live Demo</a></li>
            <li><a href="#tech-stack" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>Tech Stack</a></li>
            <li><a href="#how-it-works" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>How It Works</a></li>
          </ul>
        </div>

        {/* Tech Stack Info */}
        <div>
          <h4 style={{ color: '#ffffff', fontSize: '0.85rem', fontWeight: '700', marginBottom: '0.85rem' }}>Stack</h4>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.8rem', color: 'var(--text-muted)' }}>
            <li>Laravel Backend</li>
            <li>React Frontend</li>
            <li>Inertia.js Monolith</li>
            <li>PostgreSQL & Redis</li>
          </ul>
        </div>
      </div>

      <div style={{
        maxWidth: '1100px',
        margin: '0 auto',
        paddingTop: '1.25rem',
        borderTop: '1px solid var(--border-subtle)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: '1rem',
        fontSize: '0.75rem',
        color: 'var(--text-muted)',
      }}>
        <div>
          © {new Date().getFullYear()} ExpenseFlow. All rights reserved.
        </div>
        <div style={{ color: '#10b981', fontWeight: '600' }}>
          Minimalist & Clean
        </div>
      </div>
    </footer>
  );
}
