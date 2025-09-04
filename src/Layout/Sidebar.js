import React from "react";
import { X } from "lucide-react";
import { Link } from "react-router-dom";

function Sidebar({ isOpen, onClose }) {
  return (
    <>
      {/* Sidebar */}
      <div className={`custom-sidebar ${isOpen ? "active" : ""}`}>
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h5>Menu</h5>
          <X size={28} style={{ cursor: "pointer" }} onClick={onClose} />
        </div>
        <nav className="d-flex flex-column gap-3">
          <Link to="/" onClick={onClose}>Home</Link>
          <Link to="/toy" onClick={onClose}>Toy</Link>
          <Link to="/card" onClick={onClose}>Card</Link>
          <Link to="/accessories" onClick={onClose}>Accessories</Link>
          <Link to="/trending" onClick={onClose}>Trending</Link>
          <Link to="#" onClick={onClose}>Other</Link>
        </nav>
      </div>

      {/* Overlay */}
      {isOpen && <div className="custom-overlay" onClick={onClose}></div>}
    </>
  );
}

export default Sidebar;
