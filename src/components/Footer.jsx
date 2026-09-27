import React from 'react';
import { RESTAURANT_INFO } from '../data/menuData';

export default function Footer({ onOpenReservation }) {
  return (
    <footer className="footer-container" id="about-chef">
      <div className="footer-inner">
        <div className="footer-brand-section">
          <div className="footer-brand">
            <span className="footer-crest">L</span>
            <span className="footer-title">{RESTAURANT_INFO.name}</span>
          </div>
          <p className="footer-quote">
            "Artisanal cooking is not merely an assemblage of ingredients; it is poetry forged in heat,
            memory, and respect for nature."
          </p>
          <span className="chef-signature">— Executive Chef Alexandre Rossi</span>
        </div>

        <div className="footer-cols-grid">
          <div className="footer-col">
            <h4>Hours & Dining</h4>
            <p><strong>Dinner Service:</strong></p>
            <p>Tuesday – Thursday: 5:00 PM – 10:30 PM</p>
            <p>Friday – Saturday: 5:00 PM – 11:30 PM</p>
            <p>Sunday: 4:30 PM – 10:00 PM</p>
            <p className="footer-dim">Closed Mondays for kitchen curing & prep</p>
          </div>

          <div className="footer-col">
            <h4>Location & Contact</h4>
            <p>{RESTAURANT_INFO.address}</p>
            <p>Concierge: {RESTAURANT_INFO.phone}</p>
            <p>Inquiries: concierge@laura-bistro.com</p>
            <button className="footer-res-link" onClick={onOpenReservation}>
              Reserve a Table Online →
            </button>
          </div>

          <div className="footer-col" id="pairing-guide">
            <h4>Cellar & Private Dining</h4>
            <p>Over 350 biodynamic wines & rare vintage champagnes curated by Master Sommelier Hélène Duval.</p>
            <div className="footer-badges-row">
              <span className="footer-pill">Michelin 2026</span>
              <span className="footer-pill">Wine Spectator Grand Award</span>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} L'AURA Bistro & Gastronomy. All rights reserved.</p>
          <div className="footer-sub-links">
            <a href="#privacy">Privacy</a>
            <span>•</span>
            <a href="#terms">Terms</a>
            <span>•</span>
            <a href="#press">Press Room</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
