import React, { useState, useMemo } from 'react';
import './App.css';
import { MENU_ITEMS, CATEGORIES, DIETARY_FILTERS } from './data/menuData';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import MenuCard from './components/MenuCard';
import ItemModal from './components/ItemModal';
import CartDrawer from './components/CartDrawer';
import ReservationModal from './components/ReservationModal';
import OrderSuccessModal from './components/OrderSuccessModal';
import Footer from './components/Footer';

function App() {
  // Navigation & Modal States
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isReservationOpen, setIsReservationOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [completedOrder, setCompletedOrder] = useState(null);
  const [toastMessage, setToastMessage] = useState(null);

  // Filtering & Search States
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedDietary, setSelectedDietary] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('featured');

  // Cart State
  const [cart, setCart] = useState([
    {
      ...MENU_ITEMS[0],
      quantity: 1,
    },
    {
      ...MENU_ITEMS[9], // Truffle Tagliolini
      quantity: 1,
    }
  ]);

  // Show a quick toast feedback
  const triggerToast = (text) => {
    setToastMessage(text);
    setTimeout(() => {
      setToastMessage(null);
    }, 2800);
  };

  // Add item to cart
  const handleAddToCart = (dish) => {
    setCart((prevCart) => {
      const existing = prevCart.find((item) => item.id === dish.id);
      if (existing) {
        return prevCart.map((item) =>
          item.id === dish.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...prevCart, { ...dish, quantity: 1 }];
      }
    });
    triggerToast(`Added ${dish.name} to order`);
  };

  // Update item quantity
  const handleUpdateQuantity = (itemId, newQuantity) => {
    if (newQuantity <= 0) {
      handleRemoveItem(itemId);
      return;
    }
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === itemId ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  // Remove item from cart
  const handleRemoveItem = (itemId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== itemId));
  };

  // Clear cart
  const handleClearCart = () => {
    setCart([]);
  };

  // Complete checkout
  const handleCheckout = (orderData) => {
    setIsCartOpen(false);
    setCompletedOrder(orderData);
    setCart([]);
  };

  // Smooth scroll to menu section
  const handleScrollToMenu = () => {
    const el = document.getElementById('menu-catalog');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Filtered & Sorted Menu Items
  const filteredItems = useMemo(() => {
    return MENU_ITEMS.filter((item) => {
      // Category Filter
      if (selectedCategory !== 'all' && item.category !== selectedCategory) {
        return false;
      }

      // Dietary Filter
      if (selectedDietary !== 'all') {
        if (selectedDietary === 'chef-special') {
          if (!item.badge?.toLowerCase().includes('special') && !item.badge?.toLowerCase().includes('signature')) {
            return false;
          }
        } else if (!item.dietary?.includes(selectedDietary)) {
          return false;
        }
      }

      // Search Query
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase();
        const matchesName = item.name.toLowerCase().includes(query);
        const matchesDesc = item.description.toLowerCase().includes(query);
        const matchesIngredients = item.details?.ingredients?.some((ing) =>
          ing.toLowerCase().includes(query)
        );
        if (!matchesName && !matchesDesc && !matchesIngredients) {
          return false;
        }
      }

      return true;
    }).sort((a, b) => {
      if (sortBy === 'price-asc') return a.price - b.price;
      if (sortBy === 'price-desc') return b.price - a.price;
      if (sortBy === 'rating') return b.rating - a.rating;
      return 0; // 'featured'
    });
  }, [selectedCategory, selectedDietary, searchQuery, sortBy]);

  const totalCartCount = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div className="app-wrapper">
      {/* Top Navigation */}
      <Navbar
        cartCount={totalCartCount}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenReservation={() => setIsReservationOpen(true)}
        onScrollToMenu={handleScrollToMenu}
      />

      {/* Hero Section */}
      <Hero
        onExploreMenu={handleScrollToMenu}
        onOpenReservation={() => setIsReservationOpen(true)}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
      />

      {/* Main Menu Catalog */}
      <main className="menu-section" id="menu-catalog">
        <div className="menu-section-header">
          <span className="section-label">Gastronomic Selection</span>
          <h2 className="section-title">Chef's Artisanal Menu</h2>
        </div>

        {/* Category Tabs */}
        <div className="category-tabs-wrapper">
          <div className="category-tabs">
            {CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                className={`category-tab ${selectedCategory === cat.id ? 'active' : ''}`}
                onClick={() => setSelectedCategory(cat.id)}
              >
                <span className="category-icon">{cat.icon}</span>
                <span>{cat.name}</span>
                <span className="category-badge-count">
                  {cat.id === 'all'
                    ? MENU_ITEMS.length
                    : MENU_ITEMS.filter((i) => i.category === cat.id).length}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Dietary & Sorting Toolbar */}
        <div className="filter-toolbar">
          <div className="dietary-chips">
            {DIETARY_FILTERS.map((d) => (
              <button
                key={d.id}
                className={`dietary-chip ${selectedDietary === d.id ? 'active' : ''}`}
                onClick={() => setSelectedDietary(d.id)}
              >
                {d.label}
              </button>
            ))}
          </div>

          <div className="sort-group">
            <span className="sort-label">Sort By:</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="sort-select"
            >
              <option value="featured">Featured Chef's Order</option>
              <option value="rating">Highest Rated (★)</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
            </select>
          </div>
        </div>

        {/* Menu Cards Grid */}
        <div className="menu-grid">
          {filteredItems.length > 0 ? (
            filteredItems.map((item) => {
              const inCartItem = cart.find((c) => c.id === item.id);
              const inCartQuantity = inCartItem ? inCartItem.quantity : 0;
              return (
                <MenuCard
                  key={item.id}
                  item={item}
                  inCartQuantity={inCartQuantity}
                  onAddToCart={handleAddToCart}
                  onQuickView={(dish) => setSelectedItem(dish)}
                />
              );
            })
          ) : (
            <div className="no-results">
              <span className="no-results-icon">🔍</span>
              <h3>No dishes match your filter</h3>
              <p>Try clearing your search query or choosing another dietary preference.</p>
              <button
                className="btn-reset-filters"
                onClick={() => {
                  setSelectedCategory('all');
                  setSelectedDietary('all');
                  setSearchQuery('');
                }}
              >
                Reset All Filters
              </button>
            </div>
          )}
        </div>
      </main>

      {/* Footer */}
      <Footer onOpenReservation={() => setIsReservationOpen(true)} />

      {/* Item Quick View Modal */}
      {selectedItem && (
        <ItemModal
          item={selectedItem}
          inCartQuantity={
            cart.find((c) => c.id === selectedItem.id)?.quantity || 0
          }
          onClose={() => setSelectedItem(null)}
          onAddToCart={(dish) => {
            handleAddToCart(dish);
          }}
        />
      )}

      {/* Cart Slide-Over Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cart}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
        onCheckout={handleCheckout}
      />

      {/* Table Reservation Modal */}
      <ReservationModal
        isOpen={isReservationOpen}
        onClose={() => setIsReservationOpen(false)}
      />

      {/* Order Confirmation Receipt Modal */}
      {completedOrder && (
        <OrderSuccessModal
          orderDetails={completedOrder}
          onClose={() => setCompletedOrder(null)}
        />
      )}

      {/* Toast Notification */}
      {toastMessage && (
        <div className="toast-notice">
          <span className="toast-icon">✨</span>
          <span className="toast-text">{toastMessage}</span>
          <span
            className="toast-view-btn"
            onClick={() => {
              setIsCartOpen(true);
              setToastMessage(null);
            }}
          >
            View Cart
          </span>
        </div>
      )}
    </div>
  );
}

export default App;
