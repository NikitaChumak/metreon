import React from 'react';

const ArrowRightIcon = () => (
  <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M3.33334 8.65031H12.6667M12.6667 8.65031L8.00001 3.98364M12.6667 8.65031L8.00001 13.317" stroke="#0A0A0A" strokeWidth="1.33" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const categories = [
  {
    title: "Smartphones",
    description: "Latest models from Apple, Xiaomi, Samsung and more",
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&h=300&fit=crop"
  },
  {
    title: "Laptops", 
    description: "Business-ready devices from ASUS, Lenovo & HP",
    image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400&h=300&fit=crop"
  },
  {
    title: "Drones",
    description: "DJI professional drones for business and hobby", 
    image: "https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=400&h=300&fit=crop"
  },
  {
    title: "Tablets",
    description: "Latest models from Apple, Xiaomi, Samsung and more",
    image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=400&h=300&fit=crop"
  },
  {
    title: "Smart Watches",
    description: "Latest models from Apple, Xiaomi, Samsung and more",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=300&fit=crop"
  },
  {
    title: "Cameras",
    description: "Latest models from Apple, Xiaomi, Samsung and more",
    image: "https://images.unsplash.com/photo-1606983340126-99ab4feaa64a?w=400&h=300&fit=crop"
  },
  {
    title: "Smart Home",
    description: "Latest models from Apple, Xiaomi, Samsung and more",
    image: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=400&h=300&fit=crop"
  },
  {
    title: "Audio",
    description: "Latest models from Apple, Xiaomi, Samsung and more",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=300&fit=crop"
  }
];

const ProductCategories = () => {
  return (
    <section className="product-categories">
      <div className="container">
        <div className="section-header">
          <div className="section-title-wrapper">
            <h2 className="section-title">Explore our product categories</h2>
            <p className="section-subtitle">
              Browse the tech we specialize in — from drones to notebooks. More added every month.
            </p>
          </div>
        </div>

        <div className="categories-grid">
          {categories.map((category, index) => (
            <div key={index} className="category-card">
              <div className="category-image" style={{ backgroundImage: `url(${category.image})` }}>
              </div>
              <div className="category-content">
                <h3 className="category-title">{category.title}</h3>
                <div className="category-description-row">
                  <p className="category-description">{category.description}</p>
                  <button className="category-arrow">
                    <ArrowRightIcon />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="categories-cta">
          <button className="btn btn-dark btn-lg">Explore Product Categories</button>
        </div>
      </div>
    </section>
  );
};

export default ProductCategories;
