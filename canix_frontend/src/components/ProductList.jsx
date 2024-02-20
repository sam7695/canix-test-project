import React from "react";

const ProductList = ({ products }) => {
  const productsByCategory = products.reduce((accumulator, product) => {
    const { category, product_id } = product;
    accumulator[category] = accumulator[category] || [];
    accumulator[category].push(product_id);
    return accumulator;
  }, {});

  return (
    <section className="bg-white shadow rounded-lg p-8">
      <h2 className="text-xl font-medium text-gray-800 mb-4">
        Products Grouped By Category
      </h2>

      {Object.entries(productsByCategory).map(([category, productIds]) => (
        <article key={category} className="bg-white shadow rounded-lg mb-4 last:mb-0">
          <h3 className="bg-gray-50 px-4 py-2 text-lg font-medium text-gray-800">
            {category}
          </h3>

          <div className="px-4 py-3">
            {productIds.map((id) => (
              <span
                className="inline-block bg-gray-100 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
                key={id}
              >
                {id}
              </span>
            ))}
          </div>
        </article>
      ))}
    </section>
  );
};

export default ProductList;
