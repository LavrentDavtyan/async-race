import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import GarageView from "./features/garage/GarageView";
import WinnersView from "./features/winners/WinnersView";

function App() {
  return (
    <Router>
      <nav className="p-4 flex gap-4 bg-gray-200">
        <Link to="/">Garage</Link>
        <Link to="/winners">Winners</Link>
      </nav>
      <Routes>
        <Route path="/" element={<GarageView />} />
        <Route path="/winners" element={<WinnersView />} />
      </Routes>
    </Router>
  );
}

export default App;
