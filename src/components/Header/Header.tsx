import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="header-content">
        <Link to="/">
          <div className="logo">
            <h1>Dashboard Rezerwacji Hotelowych</h1>
          </div>
        </Link>
        <div className="header-actions">
          <div className="date-display">
            {new Date().toLocaleDateString("pl-PL", {
              weekday: "long",
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </div>
          <Link to="/add" className="add-reservation">
            Dodaj rezerwację
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
