import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header-left">
        <h1>My Apps</h1>
        
        <h1>Home</h1>
        <h1>Explore</h1>
        <input type="text" placeholder="Search for contacts" />
      </div>
      <div className="header-right">
       
        <button className="create-btn">Create</button>
        <button className="upgrade-btn">Upgrade</button>
        <button className="more-btn">More</button>
      </div>
    </header>
  );
};

export default Header;
