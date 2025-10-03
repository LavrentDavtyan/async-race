import React, { useState } from "react";
import "./CarList.css";
import { FaCar, FaPlay, FaStop, FaPen, FaTrash } from "react-icons/fa";
import { Car } from "../../api/garage";


type CarListProps = {
  cars: Car[];
  onDelete: (id: number) => void;
  onEdit: (car: Car) => void;
  runningCars: { [key: number]: boolean };
  onStart: (id: number) => void;
  onStop: (id: number) => void;
};

const CarList: React.FC<CarListProps> = ({
  cars,
  onDelete,
  onEdit,
  runningCars,
  onStart,
  onStop,
}) => {
  return (
    <div className="space-y-4">
      {cars.map((car) => (
        <div key={car.id} className="car-row">
          <div
            className={`car-info ${runningCars[car.id] ? "car-moving" : ""}`}
          >
            <FaCar style={{ color: car.color }} className="car-icon" />
            <span className="font-medium">{car.name}</span>
          </div>
          <div className="flex gap-2">
            <button className="btn btn-edit" onClick={() => onEdit(car)}>
              <FaPen /> Edit
            </button>
            <button className="btn btn-delete" onClick={() => onDelete(car.id)}>
              <FaTrash /> Delete
            </button>
            {runningCars[car.id] ? (
              <button className="btn btn-stop" onClick={() => onStop(car.id)}>
                <FaStop /> Stop
              </button>
            ) : (
              <button className="btn btn-start" onClick={() => onStart(car.id)}>
                <FaPlay /> Start
              </button>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default CarList;
