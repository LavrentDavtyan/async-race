import { BrowserRouter as Router, Routes, Route, Link, NavLink } from "react-router-dom";
import GarageView from "./features/garage/GarageView";
import WinnersView from "./features/winners/WinnersView";
import "./App.css"; 

function App() {
  return (
    <Router>
      <nav className="navbar">
        <span className="brand">Cars</span>
        <div className="nav-links">
          <NavLink to="/" end className={({ isActive }) => isActive ? 'active' : ''}>Garage</NavLink>
          <NavLink to="/winners" className={({ isActive }) => isActive ? 'active' : ''}>Winners</NavLink>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<GarageView />} />
        <Route path="/winners" element={<WinnersView />} />
      </Routes>
    </Router>
  );
}

export default App;
