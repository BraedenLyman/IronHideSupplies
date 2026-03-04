const products = [
  {
    id: 1,
    name: "Heavy-Duty Utility Gloves",
    category: "Safety",
    price: "$24.99",
    sku: "IHS-GLV-001",
  },
  {
    id: 2,
    name: "Contractor Grade Tool Belt",
    category: "Accessories",
    price: "$89.00",
    sku: "IHS-TLB-014",
  },
  {
    id: 3,
    name: "Reinforced Work Boots",
    category: "Footwear",
    price: "$129.50",
    sku: "IHS-BTS-023",
  },
  {
    id: 4,
    name: "Job Site LED Flood Light",
    category: "Lighting",
    price: "$64.95",
    sku: "IHS-LGT-009",
  },
  {
    id: 5,
    name: "Industrial Fastener Kit",
    category: "Hardware",
    price: "$39.99",
    sku: "IHS-HDW-031",
  },
  {
    id: 6,
    name: "Weatherproof Cargo Tarp",
    category: "Outdoor",
    price: "$52.00",
    sku: "IHS-ODR-018",
  },
  {
    id: 7,
    name: "Precision Measuring Tape",
    category: "Tools",
    price: "$19.95",
    sku: "IHS-TLS-044",
  },
  {
    id: 8,
    name: "Impact Driver Bit Set",
    category: "Tools",
    price: "$34.75",
    sku: "IHS-TLS-051",
  },
];

function Shop({ onAddToCart }) {
  return (
    <section className="shop-section">
      <div className="shop-shell">
        <div className="shop-header">
          <h1>Shop Supplies</h1>
          <p>
            Placeholder catalog for layout and flow testing. Product names,
            pricing, and categories can be swapped with live data later.
          </p>
        </div>

        <div className="shop-grid">
          {products.map((product) => (
            <article className="shop-card" key={product.id}>
              <div className="shop-imagePlaceholder">Product Image</div>
              <div className="shop-cardBody">
                <p className="shop-category">{product.category}</p>
                <h2>{product.name}</h2>
                <p className="shop-sku">{product.sku}</p>
                <div className="shop-cardFooter">
                  <span className="shop-price">{product.price}</span>
                  <button type="button" onClick={onAddToCart}>Add To Cart</button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Shop;
