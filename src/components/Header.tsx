import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Cat, Calendar, Heart, Users, BookOpen, Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { path: '/', label: 'Dashboard', icon: Cat },
    { path: '/cats', label: 'My Cats', icon: Cat },
    { path: '/schedule', label: 'Schedule', icon: Calendar },
    { path: '/health', label: 'Health', icon: Heart },
    { path: '/community', label: 'Community', icon: Users },
    { path: '/resources', label: 'Resources', icon: BookOpen }
  ];

  return (
    <header style={{
      background: '#FF005C',
      borderBottom: '4px solid #000000',
      position: 'sticky',
      top: 0,
      zIndex: 1000
    }}>
      <div style={{
        maxWidth: '1400px',
        margin: '0 auto',
        padding: '16px 20px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <Link to="/" style={{
          display: 'flex',
          alignItems: 'center',
          gap: '12px',
          textDecoration: 'none',
          color: '#FFFFFF'
        }}>
          <div style={{
            width: '48px',
            height: '48px',
            background: '#000000',
            border: '3px solid #FFFFFF',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <Cat size={28} color="#FFFFFF" />
          </div>
          <div>
            <h1 style={{
              fontSize: '24px',
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '1px'
            }}>
              CAT CARE
            </h1>
            <p style={{ fontSize: '12px', opacity: 0.9 }}>PLATFORM</p>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav style={{
          display: 'flex',
          gap: '8px',
          alignItems: 'center'
        }} className="desktop-nav">
          {navItems.map(item => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.path}
                to={item.path}
                style={{
                  padding: '10px 16px',
                  background: isActive ? '#000000' : 'transparent',
                  color: '#FFFFFF',
                  textDecoration: 'none',
                  border: '3px solid #000000',
                  fontWeight: 700,
                  fontSize: '14px',
                  textTransform: 'uppercase',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  transition: 'all 0.1s ease'
                }}
                onMouseEnter={(e) => {
                  if (!isActive) {
                    e.currentTarget.style.background = '#00F0FF';
                    e.currentTarget.style.color = '#000000';
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isActive) {
                    e.currentTarget.style.background = 'transparent';
                    e.currentTarget.style.color = '#FFFFFF';
                  }
                }}
              >
                <Icon size={18} />
                <span className="nav-label">{item.label}</span>
              </Link>
            );
          })}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="mobile-menu-btn"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          style={{
            display: 'none',
            background: '#000000',
            border: '3px solid #FFFFFF',
            padding: '8px',
            cursor: 'pointer'
          }}
        >
          {mobileMenuOpen ? <X size={24} color="#FFFFFF" /> : <Menu size={24} color="#FFFFFF" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <nav style={{
          background: '#000000',
          borderTop: '3px solid #FFFFFF',
          padding: '16px'
        }} className="mobile-nav">
          {navItems.map(item => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setMobileMenuOpen(false)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  padding: '12px',
                  background: isActive ? '#FF005C' : 'transparent',
                  color: '#FFFFFF',
                  textDecoration: 'none',
                  border: '3px solid #FFFFFF',
                  marginBottom: '8px',
                  fontWeight: 700,
                  fontSize: '14px',
                  textTransform: 'uppercase'
                }}
              >
                <Icon size={20} />
                {item.label}
              </Link>
            );
          })}
        </nav>
      )}

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav {
            display: none !important;
          }
          .mobile-menu-btn {
            display: block !important;
          }
          .nav-label {
            display: none;
          }
        }
        @media (min-width: 769px) and (max-width: 1024px) {
          .nav-label {
            display: none;
          }
        }
      `}</style>
    </header>
  );
};

export default Header;
