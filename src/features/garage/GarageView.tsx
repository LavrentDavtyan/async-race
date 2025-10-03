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
  const [runningCars, setRunningCars] = useState<{ [key: number]: boolean }>({});

  const handleStart = (id: number) => {
    setRunningCars((prev) => ({ ...prev, [id]: true }));
  };

  const handleStop = (id: number) => {
    setRunningCars((prev) => ({ ...prev, [id]: false }));
  };


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


  const handleSave = async (car: Car) => {
    if (car.id) {
      const res = await fetch(`http://localhost:3000/garage/${car.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(car),
      });
      const updatedCar = await res.json();
      setCars((prev) =>
        prev.map((c) => (c.id === updatedCar.id ? updatedCar : c))
      );
      setSelectedCar(null);
    } else {
      const res = await fetch("http://localhost:3000/garage", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(car),
      });
      const newCar = await res.json();
      setCars((prev) => [...prev, newCar]);
    }
  };

  const handleDelete = async (id: number) => {
    await fetch(`http://localhost:3000/garage/${id}`, {
      method: "DELETE",
    });
    setCars((prev) => prev.filter((car) => car.id !== id));
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Garage</h1>

      <CarForm onSave={handleSave} selectedCar={selectedCar} />

      <CarList
        cars={cars}
        onDelete={handleDelete}
        onEdit={(car) => setSelectedCar(car)}
        runningCars={runningCars}
        onStart={handleStart}
        onStop={handleStop}
      />
    </div>
  );
};

export default GarageView;
