import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Mail, Lock, User, ArrowLeft, ArrowRight, Eye, EyeOff, Wallet } from 'lucide-react';
import toast from 'react-hot-toast';
import { useAuth } from '@/hooks/auth';

interface RegisterProps {
  onSwitchToLogin?: () => void;
  onRegisterSuccess?: (data: any) => void;
}

export default function Register({ onSwitchToLogin, onRegisterSuccess }: RegisterProps) {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [agreeTerms, setAgreeTerms] = useState(false);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!name || !email || !password || !passwordConfirmation) {
      setError('Please fill in all fields.');
      return;
    }

    if (password !== passwordConfirmation) {
      setError('Passwords do not match.');
      return;
    }

    if (password.length < 8) {
      setError('Password must be at least 8 characters.');
      return;
    }

    if (!agreeTerms) {
      setError('You must agree to the Terms and Privacy Policy.');
      return;
    }

    setIsLoading(true);
    try {
      const res = await fetch("http://localhost:8000/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          name: name,
          email: email,
          password: password
        })
      });
      const data = await res.json();
      if (data.status === "success" || data.status === 200) {
        if (data.token) {
          localStorage.setItem('token', data.token);
        }
        if (data.user) {
          login(data.user);
        }
        toast.success(data.message || 'Registration successful!');
        if (onRegisterSuccess) {
          onRegisterSuccess(data);
        } else {
          navigate('/dashboard/overview');
        }
        return;
      } else {
        setError(data.message || 'Registration failed');
      }
    } catch (err) {
      // Offline fallback simulation
      localStorage.setItem('expense_auth_user', JSON.stringify({
        name: name.trim(),
        email: email.trim(),
      }));
      toast.success('Account created successfully!');
      if (onRegisterSuccess) {
        onRegisterSuccess({ user: { name, email } });
      } else {
        navigate('/dashboard/overview');
      }
    } finally {
      setIsLoading(false);
    }
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
        maxWidth: '440px',
        background: '#111111',
        border: '1px solid var(--border-subtle)',
        borderRadius: 'var(--radius-lg)',
        padding: '2.25rem 2rem',
        boxShadow: '0 15px 35px rgba(0, 0, 0, 0.6)',
      }}>
        {/* Top Bar: Back Link & Logo */}
        <div style={{
          position: 'relative',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginBottom: '1.5rem',
        }}>
          <Link
            to="/"
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
            Create Your Account
          </h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem' }}>
            Get started with Finora in seconds
          </p>
        </div>

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

        <form onSubmit={handleSubmit}>
          {/* Full Name */}
          <div className="form-group">
            <label className="form-label">Full Name</label>
            <div style={{ position: 'relative' }}>
              <input
                type="text"
                required
                placeholder="John Doe"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="form-input"
                style={{ paddingLeft: '2.5rem' }}
              />
              <User
                size={16}
                color="var(--text-muted)"
                style={{ position: 'absolute', left: '0.85rem', top: '50%', transform: 'translateY(-50%)' }}
              />
            </div>
          </div>

          {/* Email */}
          <div className="form-group">
            <label className="form-label">Email Address</label>
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

          {/* Password */}
          <div className="form-group">
            <label className="form-label">Password</label>
            <div style={{ position: 'relative' }}>
              <input
                type={showPassword ? 'text' : 'password'}
                required
                placeholder="At least 8 characters"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="form-input"
                style={{ paddingLeft: '2.5rem', paddingRight: '2.5rem' }}
              />
              <Lock
                size={16}
                color="var(--text-muted)"
                style={{ position: 'absolute', left: '0.85rem', top: '50%', transform: 'translateY(-50%)' }}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                style={{
                  position: 'absolute',
                  right: '0.85rem',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  background: 'none',
                  border: 'none',
                  color: 'var(--text-muted)',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                }}
              >
                {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
              </button>
            </div>
          </div>

          {/* Confirm Password */}
          <div className="form-group">
            <label className="form-label">Confirm Password</label>
            <div style={{ position: 'relative' }}>
              <input
                type={showPassword ? 'text' : 'password'}
                required
                placeholder="Re-enter password"
                value={passwordConfirmation}
                onChange={(e) => setPasswordConfirmation(e.target.value)}
                className="form-input"
                style={{ paddingLeft: '2.5rem' }}
              />
              <Lock
                size={16}
                color="var(--text-muted)"
                style={{ position: 'absolute', left: '0.85rem', top: '50%', transform: 'translateY(-50%)' }}
              />
            </div>
          </div>

          {/* Agree Terms */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.5rem' }}>
            <input
              type="checkbox"
              id="terms"
              checked={agreeTerms}
              onChange={(e) => setAgreeTerms(e.target.checked)}
              style={{
                accentColor: '#10b981',
                cursor: 'pointer',
                width: '15px',
                height: '15px',
              }}
            />
            <label htmlFor="terms" style={{ color: 'var(--text-secondary)', fontSize: '0.8rem', cursor: 'pointer' }}>
              I agree to the Terms of Service and Privacy Policy
            </label>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isLoading}
            className="btn btn-primary"
            style={{ width: '100%', padding: '0.75rem', fontSize: '0.95rem' }}
          >
            <span>{isLoading ? 'Creating Account...' : 'Register'}</span>
            {!isLoading && <ArrowRight size={16} />}
          </button>
        </form>

        {/* Footer Link */}
        <div style={{ textAlign: 'center', marginTop: '1.5rem', paddingTop: '1.25rem', borderTop: '1px solid var(--border-subtle)' }}>
          <span style={{ color: 'var(--text-muted)', fontSize: '0.825rem' }}>
            Already have an account?{' '}
          </span>
          {onSwitchToLogin ? (
            <button
              type="button"
              onClick={onSwitchToLogin}
              style={{
                background: 'none',
                border: 'none',
                color: '#10b981',
                fontSize: '0.825rem',
                fontWeight: '700',
                textDecoration: 'underline',
                cursor: 'pointer',
              }}
            >
              Sign In
            </button>
          ) : (
            <Link
              to="/login"
              style={{
                color: '#10b981',
                fontSize: '0.825rem',
                fontWeight: '700',
                textDecoration: 'underline',
              }}
            >
              Sign In
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
