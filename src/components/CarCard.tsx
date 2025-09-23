import React from 'react';
import { Car } from '../api/garage';


type Props = {
car: Car;
onStart: (id: number) => void;
onStop: (id: number) => void;
onDrive: (id: number) => void;
onSelect: (car: Car) => void;
onDelete: (id: number) => void;
disabled?: boolean;
};


const CarCard: React.FC<Props> = ({ car, onStart, onStop, onDrive, onSelect, onDelete, disabled }) => (
<div className="car-card" role="listitem">
<div className="car-header">
<div style={{ background: car.color, width: 40, height: 24, borderRadius: 4 }} />
<div className="car-name">{car.name}</div>
</div>
<div className="car-controls">
<button type="button" onClick={() => onStart(car.id)} disabled={disabled}>Start</button>
<button type="button" onClick={() => onStop(car.id)} disabled={disabled}>Stop</button>
<button type="button" onClick={() => onDrive(car.id)} disabled={disabled}>Drive</button>
<button type="button" onClick={() => onSelect(car)}>Edit</button>
<button type="button" onClick={() => onDelete(car.id)} disabled={disabled}>Delete</button>
</div>
</div>
);


export default CarCard;