import React from "react";
import "./CarList.css";
import { FaCar, FaPlay, FaStop, FaPen, FaTrash } from "react-icons/fa";

type CarListProps = {
  cars: Car[];
  onDelete: (id: number) => void;
  onEdit: (car: Car) => void;
};

const CarList: React.FC<CarListProps> = ({ cars, onDelete, onEdit }) => {
  return (
    <div className="space-y-4">
      {cars.map((car) => (
        <div key={car.id} className="car-row">
          <div className="car-info">
            <FaCar style={{ color: car.color }} className="car-icon" />
            <span className="font-medium">{car.name}</span>
          </div>
          <div className="flex gap-2">
            <button className="btn btn-start">
              <FaPlay /> Start
            </button>
            <button className="btn btn-stop">
              <FaStop /> Stop
            </button>
            <button className="btn btn-edit" onClick={() => onEdit(car)}>
              <FaPen /> Edit
            </button>
            <button
              className="btn btn-delete"
              onClick={() => onDelete(car.id)}
            >
              <FaTrash /> Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CarList;
