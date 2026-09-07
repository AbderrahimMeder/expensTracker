import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, ArrowLeft, ArrowRight, CheckCircle2, Wallet } from 'lucide-react';

interface ForgotPasswordProps {
  onSwitchToLogin?: () => void;
}

export default function ForgotPassword({ onSwitchToLogin }: ForgotPasswordProps) {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!email) {
      setError('Please enter your email address.');
      return;
    }

    setIsLoading(true);
    // Simulating password reset request to backend
    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);
    }, 600);
  };

  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '2rem 1.5rem',
      background: 'var(--bg-primary)',
    }}>
      <div style={{
        width: '100%',
        maxWidth: '420px',
        background: '#111111',
        border: '1px solid var(--border-subtle)',
        borderRadius: 'var(--radius-lg)',
        padding: '2.25rem 2rem',
        boxShadow: '0 15px 35px rgba(0, 0, 0, 0.6)',
      }}>
        <div style={{
          position: 'relative', 
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginBottom: '1.5rem',
        }}>
          {onSwitchToLogin ? (
            <button
              type="button"
              onClick={onSwitchToLogin}
              style={{
                position: 'absolute',
                top: '50%',
                transform: 'translateY(-50%)', 
                left: '-20px',
                display: 'flex', 
                alignItems: 'center',
                gap: '0.4rem',
                color: 'var(--text-secondary)',
                background: 'none',
                border: 'none',
                fontSize: '0.825rem',
                fontWeight: '500',
                cursor: 'pointer',
              }}
            >
              <ArrowLeft size={16} />
              <span style={{ marginTop: '-2px', marginRight: '-20px' }}>Back</span>
            </button>
          ) : (
            <Link
              to="/login"
              style={{
                position: 'absolute',
                top: '50%',
                transform: 'translateY(-50%)', 
                left: '-20px',
                display: 'flex', 
                alignItems: 'center',
                gap: '0.4rem',
                color: 'var(--text-secondary)',
                textDecoration: 'none',
                fontSize: '0.825rem',
                fontWeight: '500',
                transition: 'color 0.15s ease',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#10b981')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-secondary)')}
            >
              <ArrowLeft size={16} />
              <span style={{ marginTop: '-2px', marginRight: '-20px' }}>Back</span>
            </Link>
          )}

          <Link
            to="/"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              textDecoration: 'none',
            }}
          >
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
            <span style={{ fontSize: '1.05rem', fontWeight: '800', color: '#ffffff' }}>
              Expense<span style={{ color: '#10b981' }}>Tracker</span>
            </span>
          </Link>
        </div>

        {/* Title & Subtitle */}
        <div style={{ textAlign: 'center', marginBottom: '1.75rem' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: '800', color: '#ffffff', letterSpacing: '-0.02em', marginBottom: '0.35rem' }}>
            Reset Password
          </h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem' }}>
            Enter your email to receive recovery instructions
          </p>
        </div>

        {/* Success Confirmation */}
        {isSubmitted ? (
          <div style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            <div style={{
              background: 'rgba(16, 185, 129, 0.1)',
              border: '1px solid rgba(16, 185, 129, 0.25)',
              borderRadius: 'var(--radius-md)',
              padding: '1.25rem',
              color: '#ffffff',
            }}>
              <CheckCircle2 size={32} color="#10b981" style={{ margin: '0 auto 0.5rem auto' }} />
              <div style={{ fontWeight: '700', fontSize: '0.95rem', marginBottom: '0.35rem' }}>
                Reset Link Sent!
              </div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.8rem', lineHeight: '1.5' }}>
                We've sent password reset instructions to <strong style={{ color: '#10b981' }}>{email}</strong>. Please check your inbox.
              </p>
            </div>

            {onSwitchToLogin ? (
              <button
                type="button"
                onClick={onSwitchToLogin}
                className="btn btn-secondary"
                style={{ width: '100%', padding: '0.75rem' }}
              >
                <ArrowLeft size={16} />
                <span>Back to Sign In</span>
              </button>
            ) : (
              <Link
                to="/login"
                className="btn btn-secondary"
                style={{ width: '100%', padding: '0.75rem', textDecoration: 'none' }}
              >
                <ArrowLeft size={16} />
                <span>Back to Sign In</span>
              </Link>
            )}
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            {/* Error Alert */}
            {error && (
              <div style={{
                background: 'rgba(239, 68, 68, 0.1)',
                border: '1px solid rgba(239, 68, 68, 0.25)',
                color: '#f87171',
                padding: '0.65rem 0.85rem',
                borderRadius: 'var(--radius-md)',
                fontSize: '0.8rem',
                marginBottom: '1.25rem',
              }}>
                {error}
              </div>
            )}

            {/* Email Input */}
            <div className="form-group" style={{ marginBottom: '1.5rem' }}>
              <label className="form-label">Account Email</label>
              <div style={{ position: 'relative' }}>
                <input
                  type="email"
                  required
                  placeholder="name@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="form-input"
                  style={{ paddingLeft: '2.5rem' }}
                />
                <Mail
                  size={16}
                  color="var(--text-muted)"
                  style={{ position: 'absolute', left: '0.85rem', top: '50%', transform: 'translateY(-50%)' }}
                />
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isLoading}
              className="btn btn-primary"
              style={{ width: '100%', padding: '0.75rem', fontSize: '0.95rem' }}
            >
              <span>{isLoading ? 'Sending Link...' : 'Send Reset Link'}</span>
              {!isLoading && <ArrowRight size={16} />}
            </button>

            {/* Back to Login Link */}
            <div style={{ textAlign: 'center', marginTop: '1.5rem', paddingTop: '1.25rem', borderTop: '1px solid var(--border-subtle)' }}>
              {onSwitchToLogin ? (
                <button
                  type="button"
                  onClick={onSwitchToLogin}
                  style={{
                    color: 'var(--text-secondary)',
                    fontSize: '0.825rem',
                    background: 'none',
                    border: 'none',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.35rem',
                    cursor: 'pointer',
                  }}
                >
                  <ArrowLeft size={14} />
                  <span>Return to Sign In</span>
                </button>
              ) : (
                <Link
                  to="/login"
                  style={{
                    color: 'var(--text-secondary)',
                    fontSize: '0.825rem',
                    textDecoration: 'none',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.35rem',
                  }}
                >
                  <ArrowLeft size={14} />
                  <span>Return to Sign In</span>
                </Link>
              )}
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
