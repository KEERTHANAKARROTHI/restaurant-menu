import React from 'react';

export default function Hero({ onExploreMenu, onOpenReservation, searchQuery, onSearchChange }) {
  return (
    <section className="hero-section">
      <div className="hero-glow-orb hero-orb-left" />
      <div className="hero-glow-orb hero-orb-right" />

      <div className="hero-content">
        <div className="hero-badge">
          <span className="badge-sparkle">✦</span>
          <span>MICHELIN GUIDE RECOMMENDED 2026</span>
          <span className="badge-sparkle">✦</span>
        </div>

        <h1 className="hero-title">
          Culinary Alchemy, <br />
          <span className="hero-title-highlight">Crafted for the Senses</span>
        </h1>

        <p className="hero-subtitle">
          Experience seasonal haute cuisine infused with modern Mediterranean & French artisanal techniques.
          From 45-day dry-aged cuts to hand-pulled black truffle pasta.
        </p>

        {/* Quick Search */}
        <div className="hero-search-wrapper">
          <div className="hero-search-bar">
            <span className="search-icon">🔍</span>
            <input 
              type="text" 
              placeholder="Search dishes, ingredients (e.g. Truffle, Wagyu, Sea Bass, Vegan)..."
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              className="search-input"
            />
            {searchQuery && (
              <button 
                className="search-clear-btn" 
                onClick={() => onSearchChange('')}
                title="Clear search"
              >
                ✕
              </button>
            )}
          </div>
        </div>

        <div className="hero-actions">
          <button className="btn-hero-primary" onClick={onExploreMenu}>
            <span>Browse Full Menu</span>
            <span className="btn-arrow">↓</span>
          </button>
          <button className="btn-hero-secondary" onClick={onOpenReservation}>
            <span>Reserve Table</span>
            <span className="btn-arrow">→</span>
          </button>
        </div>

        {/* Highlight Metrics */}
        <div className="hero-metrics">
          <div className="metric-item">
            <span className="metric-value">4.9 ★</span>
            <span className="metric-label">1,400+ Gourmet Reviews</span>
          </div>
          <div className="metric-divider" />
          <div className="metric-item">
            <span className="metric-value">100%</span>
            <span className="metric-label">Farm-to-Fork Organic</span>
          </div>
          <div className="metric-divider" />
          <div className="metric-item">
            <span className="metric-value">45 Days</span>
            <span className="metric-label">Dry-Aging Curing Cellar</span>
          </div>
        </div>
      </div>
    </section>
  );
}
