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

  // Load cars
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

  // Save car (create or update)
  const handleSave = async (car: Car) => {
    if (car.id) {
      // ✅ Update existing car
      const res = await fetch(`http://localhost:3000/garage/${car.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(car),
      });
      const updatedCar = await res.json();
      setCars((prev) =>
        prev.map((c) => (c.id === updatedCar.id ? updatedCar : c))
      );
      setSelectedCar(null); // clear edit mode
    } else {
      // ✅ Create new car
      const res = await fetch("http://localhost:3000/garage", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(car),
      });
      const newCar = await res.json();
      setCars((prev) => [...prev, newCar]);
    }
  };

  // Delete car
  const handleDelete = async (id: number) => {
    await fetch(`http://localhost:3000/garage/${id}`, {
      method: "DELETE",
    });
    setCars((prev) => prev.filter((car) => car.id !== id));
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Garage</h1>

      {/* Form handles both create & update */}
      <CarForm onSave={handleSave} selectedCar={selectedCar} />

      <CarList
        cars={cars}
        onDelete={handleDelete}
        onEdit={(car) => setSelectedCar(car)} // ✅ pass edit handler
      />
    </div>
  );
};

export default GarageView;
