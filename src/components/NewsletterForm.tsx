'use client';

import { useState } from 'react';

interface NewsletterFormProps {
  compact?: boolean;
  className?: string;
}

export default function NewsletterForm({ compact = false, className = '' }: NewsletterFormProps) {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || isLoading) return;

    setIsLoading(true);
    setError('');

    try {
      const response = await fetch('https://api.convertkit.com/v3/forms/8427807/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          api_key: 'A3zTqGQW_wK873nI070CyA',
          email: email,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to subscribe');
      }

      setIsSuccess(true);
      setEmail('');
    } catch (err) {
      setError('Something went wrong. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  if (isSuccess) {
    return (
      <div className={`newsletter-success ${className}`} style={{
        textAlign: 'center',
        padding: compact ? '1rem' : '2rem',
        background: 'rgba(139, 92, 246, 0.1)',
        borderRadius: '1rem',
        border: '1px solid rgba(139, 92, 246, 0.3)',
        boxShadow: '0 0 20px rgba(139, 92, 246, 0.2)',
        animation: 'glow 2s ease-in-out'
      }}>
        <div style={{ fontSize: compact ? '1.5rem' : '2rem', marginBottom: '0.5rem' }}>✓</div>
        <h3 style={{ 
          color: 'white', 
          fontSize: compact ? '1rem' : '1.25rem', 
          fontWeight: 600, 
          marginBottom: '0.5rem' 
        }}>
          Check your inbox 🌙
        </h3>
        <p style={{ 
          color: '#a78bfa', 
          fontSize: compact ? '0.8rem' : '0.9rem',
          margin: 0
        }}>
          Your first insight is on its way
        </p>
      </div>
    );
  }

  return (
    <div className={`newsletter-form ${className}`}>
      <form onSubmit={handleSubmit} style={{
        display: 'flex',
        gap: '0.75rem',
        justifyContent: 'center',
        flexWrap: 'wrap',
        maxWidth: compact ? '320px' : '480px',
        margin: '0 auto'
      }}>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          disabled={isLoading}
          style={{
            flex: 1,
            minWidth: compact ? '180px' : '220px',
            padding: compact ? '0.5rem 1rem' : '0.75rem 1.25rem',
            borderRadius: '9999px',
            border: '1px solid rgba(139,92,246,0.3)',
            background: 'rgba(139,92,246,0.08)',
            color: 'white',
            outline: 'none',
            fontSize: compact ? '0.85rem' : '0.95rem',
            transition: 'all 0.2s ease',
          }}
          onFocus={(e) => {
            e.target.style.borderColor = 'rgba(139,92,246,0.6)';
            e.target.style.boxShadow = '0 0 0 3px rgba(139,92,246,0.1)';
          }}
          onBlur={(e) => {
            e.target.style.borderColor = 'rgba(139,92,246,0.3)';
            e.target.style.boxShadow = 'none';
          }}
        />
        <button
          type="submit"
          disabled={isLoading || !email}
          className="btn-primary"
          style={{
            padding: compact ? '0.5rem 1.5rem' : '0.75rem 1.75rem',
            fontSize: compact ? '0.85rem' : '0.95rem',
            minWidth: compact ? '80px' : '120px',
            position: 'relative',
            opacity: isLoading ? 0.7 : 1,
            cursor: isLoading ? 'not-allowed' : 'pointer'
          }}
        >
          {isLoading ? (
            <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <div className="spinner" />
              {compact ? '...' : 'Subscribing...'}
            </span>
          ) : (
            'Subscribe'
          )}
        </button>
      </form>
      
      {error && (
        <p style={{
          color: '#ef4444',
          fontSize: '0.8rem',
          textAlign: 'center',
          marginTop: '0.75rem',
          margin: '0.75rem 0 0 0'
        }}>
          {error}
        </p>
      )}
      
      {!compact && !error && (
        <p style={{ 
          color: '#64748b', 
          fontSize: '0.8rem', 
          textAlign: 'center',
          margin: '0.75rem 0 0 0'
        }}>
          No spam, ever. Unsubscribe anytime.
        </p>
      )}
    </div>
  );
}