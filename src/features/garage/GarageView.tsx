import React, { useEffect, useState } from "react";
import CarForm from "./CarForm";
import CarList from "./CarList";

type Car = {
  id: number;
  name: string;
  color: string;
};

const GarageView: React.FC = () => {
  const [cars, setCars] = useState<Car[]>([]);

  // fetch initial cars
  useEffect(() => {
    const fetchCars = async () => {
      try {
        const res = await fetch("http://localhost:3000/garage");
        const data = await res.json();
        setCars(data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchCars();
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Garage</h1>

      {/* Pass setCars down so CarForm can add new cars */}
      <CarForm onCarCreated={(car) => setCars((prev) => [...prev, car])} />

      {/* Race controls */}
      <div className="flex gap-4 my-4">
        <button>Start Race</button>
        <button>Reset Race</button>
        <button>Generate 100 Cars</button>
      </div>

      {/* Pass cars down to CarList */}
      <CarList cars={cars} />

      {/* Pagination */}
      <div className="mt-4 flex justify-center gap-2">
        <button>Prev</button>
        <span>Page 1 of 10</span>
        <button>Next</button>
      </div>
    </div>
  );
};

export default GarageView;
