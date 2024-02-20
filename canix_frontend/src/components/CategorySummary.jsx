import React from 'react';

const CategorySummary = ({ products }) => {
  const totalWeightPerCategory = products.reduce((accumulator, product) => {
    const category = product.category || product.product_id.slice(0, 3);
    let weight = parseFloat(product.weight);
    const unit = product.unit;

    if (!accumulator[category]) {
      accumulator[category] = 0;
    }

    if (unit === 'grams') {
      weight *= 0.001
    } else if (unit === 'pounds') {
      weight *= 0.453592
    }

    accumulator[category] += weight;

    return accumulator;
  }, {});

  return (
    <div className="bg-white shadow rounded-lg p-8">
      <h2 className="text-xl font-medium text-gray-800 mb-4">
        Total Weight per Category
      </h2>
  
      <div>
        {Object.entries(totalWeightPerCategory).map(([category, weight]) => (
          <div key={category} className="border-b border-gray-200 py-2 mb-2 last:border-0">
            <h3 className="text-lg font-medium capitalize mb-1">
              {category}
            </h3>
            
            <p className="text-gray-600 font-medium">
              {weight.toFixed(3)} Kg
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategorySummary;
