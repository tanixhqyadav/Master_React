import React from 'react';

const RevisionCard = ({ title, description }) => {
  return (
    <div className="bg-white p-4 rounded shadow hover:shadow-lg transition">
      <h3 className="text-xl font-bold text-blue-700">{title}</h3>
      <p className="text-gray-600 mt-2">{description}</p>
    </div>
  );
};

export default RevisionCard;
