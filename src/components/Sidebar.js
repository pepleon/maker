import React from 'react';
import './Sidebar.css';

const dummyImg ="https://i.natgeofe.com/n/548467d8-c5f1-4551-9f58-6817a8d2c45e/NationalGeographic_2572187_square.jpg";
function Sidebar() {
  return (
    <div className="sidebar">
      <div className="section-contacts">
        <div className='test'>
        <h2>15 Contacts</h2>
        <a href="#" className="new-button">+ New Contact</a>
        </div>
        
        <ul>
          <li><img src={dummyImg} alt="Contact 1" /><span className="text">herry</span></li>
          <li><img src={dummyImg} alt="Contact 2" /><span className="text">siyamadit</span></li>
          <li><img src={dummyImg} alt="Contact 3" /><span className="text">Claire</span></li>
        </ul>
        <a href="#" className="show-all">Show All</a>
      </div>
      <div className="section-contacts">
        
      <div className='test'>
        <h2>Proejcts</h2>
        <a href="#" className="new-button">+ New Contact</a>
        </div>
        
      
        <ul>
          <li > <img src={dummyImg} alt="Project 1" /><span className="text">4359 test</span> </li>
          <li > <img src={dummyImg} alt="Project 2" /><span className="text">a test 5146</span> </li>
          <li><img src={dummyImg} alt="Project 3" /><span className="text">A Training Project</span> </li>
        </ul>
        <a href="#" className="show-all">Show All</a>
      </div>
      <div className="section-contacts">
      <div className='test'>
        <h2>Albums</h2>
        <a href="#" className="new-button">+ New Contact</a>
        </div>
        <ul>
          <li><img src={dummyImg} alt="Album 1" /><span className="text">2021 Portfolio</span></li>
          <li><img src={dummyImg} alt="Album 2" /><span className="text">All Partners</span></li>
          <li><img src={dummyImg} alt="Album 3" /><span className="text">Big Lottery Fund</span></li>
        </ul>
        <a href="#" className="show-all">Show All</a>
      </div>
      <div className="section-contacts">
        
        <h2>Organizations</h2>
        <ul>
          <li><img src={dummyImg} alt="Organization 1" /><span className="text">An Organisation Demo</span></li>
          <li><img src={dummyImg} alt="Organization 2" /><span className="text">A Showcase International Development Education Charity</span></li>
          <li><img src={dummyImg} alt="Organization 3" /><span className="text">Some Organization</span></li>
        </ul>
        <a href="#" className="show-all">Show All</a>
      </div>
      <div className="section-contacts">
        <h2>Followers</h2>
        <ul className='followers'>
          <li><img src={dummyImg} alt="Follower 1" /></li>
          <li><img src={dummyImg} alt="Follower 2" /></li>
          <li><img src={dummyImg} alt="Follower 3" /></li>
        </ul>
        <a href="#" className="show-all">Show All</a>
      </div>
      <div className="section-contacts">
        <h2>People You Follow</h2>
        <ul className='followers' >
          <li><img src={dummyImg} alt="Follow 1" /></li>
          <li><img src={dummyImg} alt="Follow 2" /></li>
          <li><img src={dummyImg} alt="Follow 3" /></li>
        </ul>
        <a href="#" className="show-all">Show All</a>
      </div>
    </div>
  );
}

export default Sidebar;
