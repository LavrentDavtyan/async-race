import React from "react";

type Car = {
  id: number;
  name: string;
  color: string;
};

const mockCars: Car[] = [
  { id: 1, name: "Mustang", color: "#ff0000" },
  { id: 2, name: "Tesla", color: "#00ff00" },
  { id: 3, name: "BMW", color: "#0000ff" },
];

const CarList: React.FC = () => {
  return (
    <div className="space-y-4">
      {mockCars.map((car) => (
        <div
          key={car.id}
          className="flex items-center justify-between border rounded p-3"
        >
          <div className="flex items-center gap-4">
            <div
              className="w-12 h-6 rounded"
              style={{ backgroundColor: car.color }}
            />
            <span className="font-medium">{car.name}</span>
          </div>
          <div className="flex gap-2">
            <button>
              Start
            </button>
            <button>
              Stop
            </button>
            <button>
              Edit
            </button>
            <button >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CarList;
