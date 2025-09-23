import React from 'react';


type Props = {
onRaceStart: () => void;
onRaceReset: () => void;
onGenerate: () => void;
running: boolean;
};


const RaceControls: React.FC<Props> = ({ onRaceStart, onRaceReset, onGenerate, running }) => (
<div className="race-controls">
<button type="button" onClick={onRaceStart} disabled={running}>Start Race</button>
<button type="button" onClick={onRaceReset}>Reset Race</button>
<button type="button" onClick={onGenerate}>Generate 100</button>
</div>
);


export default RaceControls;