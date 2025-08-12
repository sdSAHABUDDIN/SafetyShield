import React from 'react';
const products = [
  {
    name: "Legacy",
    description: "36mm Display | BT Calling",
    price: 1799,
    image: "img1.png",
    colors: ["#000000", "#d1d5db"],
    moreColors: 4,
  },
  {
    name: "Talk",
    description: "BT Calling | SpO2",
    price: 1299,
    image: "imgB2.png",
    colors: ["#1f2937", "#bfa14a"],
    moreColors: 7,
  },
  {
    name: "Brillia Pro",
    description: "BT Calling",
    price: 1899,
    image: "imgB3.png",
    colors: ["#1f2937", "#c084fc"],
    moreColors: 12,
  },
  {
    name: "Rise Luxe",
    description: "47mm Display | BT Calling",
    price: 1599,
    image: "imgB4.png",
    colors: ["#1f2937", "#d1d5db"],
    moreColors: 2,
  },
];

export default function TrendingSection() {
  return (
    <section className="py-12 bg-white">
      {/* Title */}
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold">
          Just <span className="text-orange-500">Trending</span>
        </h2>
        <div className="w-16 h-1 bg-gray-300 mx-auto mt-2"></div>
      </div>

      {/* Product Grid */}
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {products.map((product, index) => (
          <div
            key={index}
            className="bg-gray-50 p-4 rounded-2xl shadow-sm hover:shadow-lg transition-shadow duration-300"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-60 object-contain mb-4"
            />
            <h3 className="text-lg font-semibold">{product.name}</h3>
            <p className="text-sm text-gray-500">{product.description}</p>
            <p className="text-lg font-bold mt-2">₹{product.price.toLocaleString()}</p>

            {/* Colors */}
            <div className="flex items-center gap-2 mt-3">
              {product.colors.map((color, idx) => (
                <span
                  key={idx}
                  className="w-5 h-5 rounded-full border"
                  style={{ backgroundColor: color }}
                ></span>
              ))}
              {product.moreColors > 0 && (
                <span className="text-gray-600 text-sm font-medium">
                  + {product.moreColors}
                </span>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* View All Button */}
      <div className="text-center mt-10">
        <button className="bg-black text-white px-6 py-2 rounded-lg font-medium hover:bg-gray-800 transition">
          View All
        </button>
      </div>
    </section>
  );
}
