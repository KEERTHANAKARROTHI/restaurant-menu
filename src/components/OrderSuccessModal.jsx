import React from 'react';

export default function OrderSuccessModal({ orderDetails, onClose }) {
  if (!orderDetails) return null;

  const orderId = `LA-${Math.floor(1000 + Math.random() * 9000)}`;

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="order-success-card" onClick={(e) => e.stopPropagation()}>
        <div className="success-crest">✦</div>
        <h2>Order Received!</h2>
        <p className="success-tagline">
          Our culinary team has begun firing your course.
        </p>

        <div className="order-receipt-card">
          <div className="order-meta-header">
            <span>Order Reference: <strong>#{orderId}</strong></span>
            <span>Est. Wait: <strong>18–25 Mins</strong></span>
          </div>

          <div className="order-items-scroll">
            {orderDetails.items?.map((item) => (
              <div key={item.id} className="receipt-item-row">
                <span className="receipt-item-qty">{item.quantity}×</span>
                <span className="receipt-item-name">{item.name}</span>
                <span className="receipt-item-price">${(item.price * item.quantity).toFixed(2)}</span>
              </div>
            ))}
          </div>

          <div className="receipt-total-block">
            <div className="receipt-calc-line">
              <span>Subtotal:</span>
              <span>${orderDetails.subtotal?.toFixed(2)}</span>
            </div>
            <div className="receipt-calc-line">
              <span>Gratuity & Tax:</span>
              <span>${(orderDetails.tax + orderDetails.tipAmount)?.toFixed(2)}</span>
            </div>
            <div className="receipt-divider" />
            <div className="receipt-calc-line final">
              <span>Total Paid:</span>
              <span className="final-amt">${orderDetails.grandTotal?.toFixed(2)}</span>
            </div>
          </div>
        </div>

        <button className="btn-modal-add" onClick={onClose}>
          Back to Menu
        </button>
      </div>
    </div>
  );
}
