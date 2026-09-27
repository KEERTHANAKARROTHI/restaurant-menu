import React from 'react';

export default function MenuCard({ item, inCartQuantity, onAddToCart, onQuickView }) {
  const isVegetarian = item.dietary?.includes('vegetarian');
  const isVegan = item.dietary?.includes('vegan');
  const isGlutenFree = item.dietary?.includes('gluten-free');
  const isSpicy = item.spiciness > 0;

  return (
    <article className="menu-card">
      {/* Card Image Container */}
      <div className="card-media" onClick={() => onQuickView(item)}>
        <img 
          src={item.image} 
          alt={item.name} 
          loading="lazy" 
          className="card-img"
        />
        <div className="card-img-overlay">
          <button 
            className="btn-quick-view-hover"
            onClick={(e) => {
              e.stopPropagation();
              onQuickView(item);
            }}
          >
            <span>Quick View & Pairing</span>
          </button>
        </div>

        {/* Badges */}
        {item.badge && (
          <span className="card-badge-floating">
            {item.badge}
          </span>
        )}

        {/* Dietary Icons Ribbon */}
        <div className="card-dietary-pills">
          {isVegan && <span className="pill pill-vegan" title="Vegan">🌱 Vegan</span>}
          {!isVegan && isVegetarian && <span className="pill pill-veg" title="Vegetarian">🌿 Veg</span>}
          {isGlutenFree && <span className="pill pill-gf" title="Gluten-Free">🌾 GF</span>}
          {isSpicy && (
            <span className="pill pill-spicy" title={`Spicy Level: ${item.spiciness}/3`}>
              {'🌶️'.repeat(item.spiciness)}
            </span>
          )}
        </div>
      </div>

      {/* Card Body */}
      <div className="card-body">
        <div className="card-header-row">
          <div className="card-rating">
            <span className="star-icon">★</span>
            <span className="rating-num">{item.rating.toFixed(2)}</span>
            <span className="reviews-num">({item.reviewsCount})</span>
          </div>
          <span className="card-calories">{item.details?.calories} kcal</span>
        </div>

        <h3 className="card-title" onClick={() => onQuickView(item)}>
          {item.name}
        </h3>

        <p className="card-description">
          {item.description}
        </p>

        {/* Key Highlights */}
        <div className="card-meta-line">
          <span className="meta-tag">⏱️ {item.details?.prepTime}</span>
          {item.details?.winePairing && (
            <span className="meta-tag wine-tag" title={`Sommelier Pairing: ${item.details.winePairing}`}>
              🍷 {item.details.winePairing.split(' ')[0]} {item.details.winePairing.split(' ')[1] || ''}
            </span>
          )}
        </div>

        {/* Card Footer */}
        <div className="card-footer">
          <div className="price-block">
            <span className="currency">$</span>
            <span className="price-amount">{item.price.toFixed(2)}</span>
          </div>

          <div className="card-cta-group">
            <button 
              className="btn-details-ghost"
              onClick={() => onQuickView(item)}
              title="View full details & allergens"
            >
              Info
            </button>

            <button 
              className={`btn-add-cart ${inCartQuantity > 0 ? 'in-cart' : ''}`}
              onClick={() => onAddToCart(item)}
              aria-label={`Add ${item.name} to order`}
            >
              {inCartQuantity > 0 ? (
                <>
                  <span className="cart-check">✓</span>
                  <span>Added ({inCartQuantity})</span>
                </>
              ) : (
                <>
                  <span className="add-plus">+</span>
                  <span>Add to Order</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </article>
  );
}
