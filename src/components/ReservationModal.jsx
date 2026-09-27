import React, { useState } from 'react';

export default function ReservationModal({ isOpen, onClose, onConfirm }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '2026-09-28',
    time: '19:30',
    guests: '2 Guests',
    seating: 'Main Dining Room',
    notes: '',
  });

  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;
    setSubmitted(true);
    if (onConfirm) onConfirm(formData);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="reservation-modal-card" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={onClose} aria-label="Close modal">
          ✕
        </button>

        {!submitted ? (
          <>
            <div className="reservation-header">
              <span className="res-crest">✦</span>
              <h2>Table Reservation</h2>
              <p>Reserve an unforgettable dining experience at L'AURA</p>
            </div>

            <form onSubmit={handleSubmit} className="reservation-form">
              <div className="form-row">
                <div className="form-group">
                  <label>Full Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Keerthi Rao"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>
                <div className="form-group">
                  <label>Contact Phone</label>
                  <input
                    type="tel"
                    placeholder="+1 (555) 000-0000"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  />
                </div>
              </div>

              <div className="form-group">
                <label>Email Address *</label>
                <input
                  type="email"
                  required
                  placeholder="name@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>

              <div className="form-row three-col">
                <div className="form-group">
                  <label>Date</label>
                  <input
                    type="date"
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                  />
                </div>
                <div className="form-group">
                  <label>Time</label>
                  <select
                    value={formData.time}
                    onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                  >
                    <option value="17:00">5:00 PM</option>
                    <option value="18:00">6:00 PM</option>
                    <option value="19:00">7:00 PM</option>
                    <option value="19:30">7:30 PM (Peak)</option>
                    <option value="20:00">8:00 PM</option>
                    <option value="21:00">9:00 PM</option>
                    <option value="22:00">10:00 PM</option>
                  </select>
                </div>
                <div className="form-group">
                  <label>Party Size</label>
                  <select
                    value={formData.guests}
                    onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                  >
                    <option value="1 Guest">1 Guest</option>
                    <option value="2 Guests">2 Guests (Couple)</option>
                    <option value="3-4 Guests">3-4 Guests</option>
                    <option value="5-6 Guests">5-6 Guests</option>
                    <option value="7+ Private Suite">7+ Private Room</option>
                  </select>
                </div>
              </div>

              <div className="form-group">
                <label>Preferred Ambiance / Seating Area</label>
                <div className="seating-options">
                  {['Main Dining Room', "Chef's Counter", 'Glass Veranda & Garden'].map((area) => (
                    <button
                      type="button"
                      key={area}
                      className={`seating-chip ${formData.seating === area ? 'selected' : ''}`}
                      onClick={() => setFormData({ ...formData, seating: area })}
                    >
                      {area}
                    </button>
                  ))}
                </div>
              </div>

              <div className="form-group">
                <label>Special Requests or Dietary Requirements</label>
                <textarea
                  rows="2"
                  placeholder="Anniversary, birthday champagne, quiet corner table, allergies..."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                />
              </div>

              <button type="submit" className="btn-confirm-reservation">
                Confirm Reservation Request
              </button>
            </form>
          </>
        ) : (
          <div className="reservation-confirmed-view">
            <div className="confirmed-icon">✨</div>
            <h3>Table Confirmed!</h3>
            <p className="confirmed-p">
              We look forward to hosting you, <strong>{formData.name}</strong>. A confirmation concierge email
              has been dispatched to <em>{formData.email}</em>.
            </p>

            <div className="res-summary-box">
              <div><strong>Date & Time:</strong> {formData.date} at {formData.time}</div>
              <div><strong>Party Size:</strong> {formData.guests}</div>
              <div><strong>Seating:</strong> {formData.seating}</div>
              {formData.notes && <div><strong>Special Request:</strong> {formData.notes}</div>}
            </div>

            <button className="btn-modal-add" onClick={handleReset}>
              Done & Return to Menu
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
