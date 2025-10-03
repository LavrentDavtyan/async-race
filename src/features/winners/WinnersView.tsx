import React from "react";
import "../../App.css"; 

const WinnersView: React.FC = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Winners</h1>

      <div className="winners-container">
      <h1 className="text-2xl font-bold mb-4">Winners</h1>

      <table className="winners-table">
        <thead>
          <tr>
            <th>#</th>
            <th>Car</th>
            <th>Name</th>
            <th>Wins</th>
            <th>Best Time</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>🚗</td>
            <td>Car Name</td>
            <td>3</td>
            <td>5.23s</td>
          </tr>
        </tbody>
      </table>

      <div className="winners-pagination">
        <button>Prev</button>
        <span>Page 1 of 5</span>
        <button>Next</button>
      </div>
    </div>
    </div>
  );

};

export default WinnersView;
