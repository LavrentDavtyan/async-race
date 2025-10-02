// GarageView.tsx
import React, { useState, useEffect } from "react";
import CarList from "./CarList";
import CarForm from "./CarForm";

type Car = {
  id: number;
  name: string;
  color: string;
};

const GarageView: React.FC = () => {
  const [cars, setCars] = useState<Car[]>([]);
  const [selectedCar, setSelectedCar] = useState<Car | null>(null);

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

  const handleDelete = async (id: number) => {
    await fetch(`http://localhost:3000/garage/${id}`, { method: "DELETE" });
    setCars((prevCars) => prevCars.filter((car) => car.id !== id));
  };

  const handleSaveCar = async (car: Car) => {
    if (car.id) {
      // update existing
      const res = await fetch(`http://localhost:3000/garage/${car.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(car),
      });
      const updated = await res.json();
      setCars((prev) =>
        prev.map((c) => (c.id === updated.id ? updated : c))
      );
      setSelectedCar(null);
    } else {
      // create new
      const res = await fetch("http://localhost:3000/garage", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(car),
      });
      const created = await res.json();
      setCars((prev) => [...prev, created]);
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Garage</h1>

      <CarForm
        key={selectedCar?.id || "new"}
        onSave={handleSaveCar}
        selectedCar={selectedCar}
      />

      <div className="flex gap-4 my-4">
        <button>Start Race</button>
        <button>Reset Race</button>
        <button>Generate 100 Cars</button>
      </div>

      <CarList cars={cars} onDelete={handleDelete} onEdit={setSelectedCar} />

      <div className="mt-4 flex justify-center gap-2">
        <button>Prev</button>
        <span>Page 1 of 10</span>
        <button>Next</button>
      </div>
    </div>
  );
};

export default GarageView;
