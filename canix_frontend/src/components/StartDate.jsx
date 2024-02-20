import React from "react";

const StartDate = ({ products }) => {
  const dates = products.map((p) => new Date(p.date));

  return (
    <div className="bg-white shadow rounded-lg p-8 mb-2">
      <h2 className="text-xl font-medium text-gray-800 mb-4">
        Weighing Process Starting Date
      </h2>
      <dl>
        <div className="bg-gray-50 px-4 py-2 sm:grid sm:grid-cols-3 sm:gap-4">
          <dd className="mt-1 text-sm text-gray-900 sm:mt-0">
            {new Date(Math.min(...dates)).toDateString()}
          </dd>
        </div>
      </dl>
    </div>
  );
};

export default StartDate;
