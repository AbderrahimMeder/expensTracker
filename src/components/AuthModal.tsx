import React, { useState } from 'react';
import { X } from 'lucide-react';
import { Login, Register, ForgotPassword } from '../pages/(auth)';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  onLogin?: (data: any) => void;
  initialView?: 'login' | 'register' | 'forgot';
}

export default function AuthModal({ isOpen, onClose, onLogin, initialView = 'login' }: AuthModalProps) {
  const [currentView, setCurrentView] = useState<'login' | 'register' | 'forgot'>(initialView);

  if (!isOpen) return null;

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div
        className="modal-content"
        onClick={(e) => e.stopPropagation()}
        style={{
          background: 'transparent',
          border: 'none',
          boxShadow: 'none',
          maxWidth: '460px',
          padding: 0,
        }}
      >
        <div style={{ position: 'relative' }}>
          <button
            onClick={onClose}
            className="btn-icon"
            style={{
              position: 'absolute',
              top: '1rem',
              right: '1rem',
              zIndex: 10,
              background: '#181818',
            }}
          >
            <X size={16} />
          </button>

          {currentView === 'login' && (
            <Login
              onSwitchToRegister={() => setCurrentView('register')}
              onSwitchToForgotPassword={() => setCurrentView('forgot')}
              onLoginSuccess={(data) => {
                if (onLogin) onLogin(data);
                onClose();
              }}
            />
          )}

          {currentView === 'register' && (
            <Register
              onSwitchToLogin={() => setCurrentView('login')}
              onRegisterSuccess={(data) => {
                if (onLogin) onLogin(data);
                onClose();
              }}
            />
          )}

          {currentView === 'forgot' && (
            <ForgotPassword
              onSwitchToLogin={() => setCurrentView('login')}
            />
          )}
        </div>
      </div>
    </div>
  );
}
