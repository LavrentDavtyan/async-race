import React, { useState } from "react";

type CarFormProps = {
  onCarCreated?: (car: { id: number; name: string; color: string }) => void;
};

const CarForm: React.FC<CarFormProps> = ({ onCarCreated }) => {
  const [name, setName] = useState("");
  const [color, setColor] = useState("#000000");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:3000/garage", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, color }),
      });
      const createdCar = await res.json();
      onCarCreated?.(createdCar); 

      setName("");
      setColor("#000000");
    } catch (err) {
      console.error(err);
    }
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
      <button type="submit">Create Car</button>
    </form>
  );
};

export default CarForm;
