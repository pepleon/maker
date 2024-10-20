import React from 'react';
import './PersonalProgress.css';

function PersonalProgress() {
  return (
    <div className="personal-progress">
      <div className="header-section">
        <h2>Personal Progress</h2>
        <a href="#" className="go-to-board">Go to board</a>
      </div>
      <ul>
        <li className="progress-item">
          <div className="progress-header">
            <div className="circle orange">7</div>
            
          </div>

          <div><span className="progress-text">This is a progress bar for Events</span>
          
          <div className="progress-bar">
               
               <div className="progress green" style={{ width: '70%' }}></div>
             </div>
          </div>
         
          <button className="plus-btn">+</button>
        </li>
        <li className="progress-item">
          <div className="progress-header">
            <div className="circle blue">6</div>
           
          </div>
          <div> <span className="progress-text">This is a progress bar for Events</span>
          <div className="progress-bar">
          

            <div className="progress blue" style={{ width: '60%' }}></div>
          </div>
          </div>
          
          <button className="plus-btn">+</button>
        </li>
        <li className="progress-item">
          <div className="progress-header">
            <div className="circle pink">27</div>
            
          </div>

          <div><span className="progress-text">This is a progress bar for Events</span>
          <div className="progress-bar">
            <div className="progress red" style={{ width: '90%' }}></div>
          </div>
          </div>
          
          <button className="plus-btn">+</button>
        </li>
      </ul>
      <a href="#" className="show-all">Show All</a>
    </div>
  );
}

export default PersonalProgress;
