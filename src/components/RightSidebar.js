import React from 'react';
import './RightSidebar.css';
import TaskSection from './TaskSection';
import PersonalProgress from './PersonalProgress';
const dummyImg ="https://i.natgeofe.com/n/548467d8-c5f1-4551-9f58-6817a8d2c45e/NationalGeographic_2572187_square.jpg";

function RightSidebar() {
  return (
    <div className="right-sidebar">
      <div className="section-contacts">
        <div className='test'>
        <h4>15 Contacts</h4>
        <a href="#" className="buttonlol">+ New Contact</a>
        </div>
        
        <ul>
          <li><img src={dummyImg} alt="Contact 1" /><span className="text">herry</span></li>
          <li><img src={dummyImg} alt="Contact 2" /><span className="text">siyamadit</span></li>
          <li><img src={dummyImg} alt="Contact 3" /><span className="text">Claire</span></li>
        </ul>
        <a href="#" className="show-all">Show All</a>
      </div>
    
   <PersonalProgress/> 

<TaskSection/>

    </div>
  );
}

export default RightSidebar;
