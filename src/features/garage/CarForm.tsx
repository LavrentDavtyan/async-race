import React, { useState } from "react";

const CarForm: React.FC = () => {
  const [name, setName] = useState("");
  const [color, setColor] = useState("#000000");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Car created:", { name, color });
    setName("");
    setColor("#000000");
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-4 items-center mb-6">
      <input
        type="text"
        placeholder="Car name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="border p-2 rounded w-48"
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
