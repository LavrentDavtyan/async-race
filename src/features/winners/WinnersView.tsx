import React from "react";

const WinnersView: React.FC = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Winners</h1>

      {/* Winners Table */}
      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-100">
            <th className="border p-2">#</th>
            <th className="border p-2">Car</th>
            <th className="border p-2">Name</th>
            <th className="border p-2">Wins</th>
            <th className="border p-2">Best Time</th>
          </tr>
        </thead>
        <tbody>
          {/* Example row */}
          <tr>
            <td className="border p-2 text-center">1</td>
            <td className="border p-2">🚗</td>
            <td className="border p-2">Car Name</td>
            <td className="border p-2 text-center">3</td>
            <td className="border p-2 text-center">5.23s</td>
          </tr>
        </tbody>
      </table>

      {/* Pagination (Winners = 10 per page) */}
      <div className="mt-4 flex justify-center gap-2">
        <button className="px-3 py-1 border rounded">Prev</button>
        <span>Page 1 of 5</span>
        <button className="px-3 py-1 border rounded">Next</button>
      </div>
    </div>
  );
};

export default WinnersView;
