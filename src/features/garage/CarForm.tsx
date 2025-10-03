import React, { useState, useEffect } from "react";

type Car = {
  id?: number;
  name: string;
  color: string;
};

type CarFormProps = {
  onSave: (car: Car) => void;
  selectedCar?: Car | null;
};

const CarForm: React.FC<CarFormProps> = ({ onSave, selectedCar }) => {
  const [name, setName] = useState("");
  const [color, setColor] = useState("#000000");

  useEffect(() => {
    if (selectedCar) {
      setName(selectedCar.name);
      setColor(selectedCar.color);
    } else {
      setName("");
      setColor("#000000");
    }
  }, [selectedCar]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave({ id: selectedCar?.id, name, color });
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-4 items-center mb-6">
      <input
        type="text"
        placeholder="Car name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="border p-2 rounded w-48"
        required
      />
      <input
        type="color"
        value={color}
        onChange={(e) => setColor(e.target.value)}
        className="w-12 h-10 cursor-pointer"
      />
      <button type="submit">
        {selectedCar ? "Update Car" : "Create Car"}
      </button>
    </form>
  );
};

export default CarForm;
