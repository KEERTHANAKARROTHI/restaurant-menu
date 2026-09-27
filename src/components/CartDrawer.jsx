import React, { useState } from 'react';

export default function CartDrawer({
  isOpen,
  onClose,
  cartItems,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart,
  onCheckout,
}) {
  const [tipPercent, setTipPercent] = useState(15);
  const [kitchenNotes, setKitchenNotes] = useState('');

  if (!isOpen) return null;

  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const tax = subtotal * 0.0825; // 8.25%
  const tipAmount = (subtotal * tipPercent) / 100;
  const grandTotal = subtotal + tax + tipAmount;

  return (
    <div className="cart-backdrop" onClick={onClose}>
      <aside className="cart-drawer" onClick={(e) => e.stopPropagation()}>
        {/* Header */}
        <div className="cart-header">
          <div className="cart-header-title">
            <span className="cart-icon-title">🍽️</span>
            <div>
              <h3>Your Culinary Order</h3>
              <p className="cart-subtitle">{cartItems.length} unique {cartItems.length === 1 ? 'dish' : 'dishes'} selected</p>
            </div>
          </div>
          <button className="cart-close-btn" onClick={onClose} aria-label="Close cart">
            ✕
          </button>
        </div>

        {/* Content */}
        <div className="cart-body">
          {cartItems.length === 0 ? (
            <div className="empty-cart-state">
              <span className="empty-cart-icon">🥂</span>
              <h4>Your table order is empty</h4>
              <p>Explore our seasonal menu and add your favorite artisanal dishes and botanical pairings.</p>
              <button className="btn-explore-empty" onClick={onClose}>
                Browse Dishes
              </button>
            </div>
          ) : (
            <>
              <div className="cart-items-list">
                {cartItems.map((item) => (
                  <div key={item.id} className="cart-item-row">
                    <img src={item.image} alt={item.name} className="cart-item-thumb" />
                    <div className="cart-item-info">
                      <h4 className="cart-item-name">{item.name}</h4>
                      <span className="cart-item-unit-price">${item.price.toFixed(2)} each</span>
                      <div className="cart-qty-controls">
                        <button
                          className="qty-btn"
                          onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                          aria-label="Decrease quantity"
                        >
                          -
                        </button>
                        <span className="qty-number">{item.quantity}</span>
                        <button
                          className="qty-btn"
                          onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                          aria-label="Increase quantity"
                        >
                          +
                        </button>
                        <button
                          className="qty-remove"
                          onClick={() => onRemoveItem(item.id)}
                          title="Remove item"
                        >
                          🗑️
                        </button>
                      </div>
                    </div>
                    <div className="cart-item-total">
                      ${(item.price * item.quantity).toFixed(2)}
                    </div>
                  </div>
                ))}
              </div>

              {/* Kitchen Notes */}
              <div className="cart-kitchen-notes">
                <label htmlFor="kitchen-notes" className="notes-label">
                  Special Kitchen Request / Dietary Note:
                </label>
                <textarea
                  id="kitchen-notes"
                  rows="2"
                  placeholder="e.g. Dressing on the side, extra crispy, gluten allergy..."
                  value={kitchenNotes}
                  onChange={(e) => setKitchenNotes(e.target.value)}
                  className="notes-textarea"
                />
              </div>

              {/* Tip Selection */}
              <div className="cart-tip-section">
                <span className="tip-title">Gratuity for Service Staff</span>
                <div className="tip-buttons">
                  {[10, 15, 18, 20].map((pct) => (
                    <button
                      key={pct}
                      className={`tip-btn ${tipPercent === pct ? 'active' : ''}`}
                      onClick={() => setTipPercent(pct)}
                    >
                      {pct}%
                    </button>
                  ))}
                  <button
                    className={`tip-btn ${tipPercent === 0 ? 'active' : ''}`}
                    onClick={() => setTipPercent(0)}
                  >
                    Custom / 0%
                  </button>
                </div>
              </div>
            </>
          )}
        </div>

        {/* Footer */}
        {cartItems.length > 0 && (
          <div className="cart-footer">
            <div className="receipt-breakdown">
              <div className="receipt-line">
                <span>Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <div className="receipt-line">
                <span>Estimated Tax (8.25%)</span>
                <span>${tax.toFixed(2)}</span>
              </div>
              <div className="receipt-line">
                <span>Gratuity ({tipPercent}%)</span>
                <span>${tipAmount.toFixed(2)}</span>
              </div>
              <div className="receipt-divider" />
              <div className="receipt-line grand-total">
                <span>Total Amount</span>
                <span className="total-gold">${grandTotal.toFixed(2)}</span>
              </div>
            </div>

            <div className="cart-action-buttons">
              <button
                className="btn-checkout-primary"
                onClick={() =>
                  onCheckout({
                    items: cartItems,
                    subtotal,
                    tax,
                    tipAmount,
                    grandTotal,
                    kitchenNotes,
                  })
                }
              >
                <span>Confirm & Place Order</span>
                <span className="btn-arrow">→</span>
              </button>
              <button className="btn-clear-cart" onClick={onClearCart}>
                Clear Order
              </button>
            </div>
          </div>
        )}
      </aside>
    </div>
  );
}
