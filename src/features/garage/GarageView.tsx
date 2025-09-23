import React from "react";
import CarForm from "./CarForm";
import CarList from "./CarList";

const GarageView: React.FC = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Garage</h1>

      {/* Car creation/editing */}
      <CarForm />

      {/* Race controls */}
      <div className="flex gap-4 my-4">
        <button >Start Race</button>
        <button >Reset Race</button>
        <button >Generate 100 Cars</button>
      </div>

      {/* Car list */}
      <CarList />

      {/* Pagination (Garage = 7 per page) */}
      <div className="mt-4 flex justify-center gap-2">
        <button>Prev</button>
        <span>Page 1 of 10</span>
        <button>Next</button>
      </div>
    </div>
  );
};

export default GarageView;
