import React from 'react';

export default function ItemModal({ item, onClose, onAddToCart, inCartQuantity }) {
  if (!item) return null;

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-card" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={onClose} aria-label="Close modal">
          ✕
        </button>

        <div className="modal-grid">
          <div className="modal-image-col">
            <img src={item.image} alt={item.name} className="modal-img" />
            <div className="modal-image-badge-wrap">
              {item.badge && <span className="modal-badge">{item.badge}</span>}
            </div>
          </div>

          <div className="modal-info-col">
            <div className="modal-category-tag">{item.category.toUpperCase()}</div>
            <h2 className="modal-title">{item.name}</h2>

            <div className="modal-rating-row">
              <span className="star-icon">★</span>
              <span className="rating-bold">{item.rating.toFixed(2)}</span>
              <span className="review-sub">({item.reviewsCount} customer reviews)</span>
              <span className="dot-sep">•</span>
              <span className="cal-sub">{item.details?.calories} Calories</span>
            </div>

            <p className="modal-desc">{item.description}</p>

            {/* Ingredients */}
            <div className="modal-section">
              <h4 className="section-heading">Key Ingredients</h4>
              <div className="ingredient-chips">
                {item.details?.ingredients.map((ing, idx) => (
                  <span key={idx} className="chip">
                    {ing}
                  </span>
                ))}
              </div>
            </div>

            {/* Wine Pairing & Allergens */}
            <div className="modal-meta-grid">
              <div className="meta-box">
                <span className="meta-label">🍷 Sommelier Pairing</span>
                <span className="meta-val">{item.details?.winePairing || 'Ask our Sommelier'}</span>
              </div>
              <div className="meta-box">
                <span className="meta-label">⚠️ Allergens</span>
                <span className="meta-val">
                  {item.details?.allergens?.length > 0
                    ? item.details.allergens.join(', ')
                    : 'None reported'}
                </span>
              </div>
            </div>

            {/* Footer Pricing & CTA */}
            <div className="modal-actions-footer">
              <div className="modal-price-col">
                <span className="price-label">Price per serving</span>
                <span className="modal-price">${item.price.toFixed(2)}</span>
              </div>

              <button
                className="btn-modal-add"
                onClick={() => {
                  onAddToCart(item);
                }}
              >
                <span>{inCartQuantity > 0 ? `Add Another (${inCartQuantity} in order)` : 'Add to Order'}</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
