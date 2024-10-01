import React from "react";
import HomeImage1 from "../assets/home-img-1.jpg";
import HomeImage2 from "../assets/home-img-2.jpg";
import HomeImage3 from "../assets/home-img-3.jpg";
import HomeImage4 from "../assets/home-img-4.jpg";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="row header__row">
          <h1 className="header__title">
            Welcome to <span className="color-primary">RAOUF</span>
          </h1>
          <div className="header__grid-container">
            <Link to="/products" className="header__grid">
              <h2 className="header__grid__title">Live Comfortably</h2>
              <img src={HomeImage1} alt="image of a room within a home, trailing towards home appliances" className="header__grid__img" />
            </Link>
            <Link to="/products" className="header__grid">
              <h2 className="header__grid__title">Skincare</h2>
              <img src={HomeImage2} alt="image of a skincare product" className="header__grid__img" />
            </Link>
            <Link to="/products" className="header__grid">
              <h2 className="header__grid__title">Kitchen</h2>
              <img src={HomeImage3} alt="image of a kitchen" className="header__grid__img" />
            </Link>
            <Link to="/products" className="header__grid">
              <h2 className="header__grid__title">Electronics</h2>
              <img src={HomeImage4} alt="image of a table that has a lot of technological appliances" className="header__grid__img" />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
