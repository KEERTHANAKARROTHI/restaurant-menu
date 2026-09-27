import React from 'react';

export default function Navbar({ cartCount, onOpenCart, onOpenReservation, onScrollToMenu }) {
  return (
    <header className="navbar-container">
      <div className="navbar-inner">
        {/* Brand */}
        <div className="brand" onClick={onScrollToMenu} role="button" tabIndex={0}>
          <div className="brand-crest">
            <span className="crest-letter">L</span>
          </div>
          <div className="brand-text">
            <span className="brand-name">L'AURA</span>
            <span className="brand-sub">FINE DINING & BISTRO</span>
          </div>
        </div>

        {/* Center Nav Links */}
        <nav className="nav-links">
          <button className="nav-link active" onClick={onScrollToMenu}>
            Artisanal Menu
          </button>
          <a href="#about-chef" className="nav-link">
            Chef’s Craft
          </a>
          <a href="#pairing-guide" className="nav-link">
            Cellar & Pairings
          </a>
          <button className="nav-link" onClick={onOpenReservation}>
            Reservations
          </button>
        </nav>

        {/* Actions */}
        <div className="nav-actions">
          <button 
            className="btn-reserve" 
            onClick={onOpenReservation}
            title="Book a table for lunch or dinner"
          >
            <span className="btn-icon">📅</span>
            <span>Reserve Table</span>
          </button>

          <button 
            className={`btn-cart ${cartCount > 0 ? 'has-items' : ''}`}
            onClick={onOpenCart}
            aria-label={`View order cart with ${cartCount} items`}
          >
            <span className="cart-icon">🛒</span>
            <span className="cart-label">My Order</span>
            {cartCount > 0 && (
              <span className="cart-badge" key={cartCount}>
                {cartCount}
              </span>
            )}
          </button>
        </div>
      </div>
    </header>
  );
}
