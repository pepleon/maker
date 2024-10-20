import React, { useState } from 'react';
import './TaskSection.css';

const dummyImg ="https://i.natgeofe.com/n/548467d8-c5f1-4551-9f58-6817a8d2c45e/NationalGeographic_2572187_square.jpg";
function TaskSection() {
  const [newTask, setNewTask] = useState('');

  const handleInputChange = (e) => {
    setNewTask(e.target.value);
  };

  const handleSaveTask = () => {
   
    console.log('New Task:', newTask);
  };

  return (
    <div className="task-section">
      <h2>Tasks</h2>
      <input
        type="text"
        value={newTask}
        onChange={handleInputChange}
        placeholder="Add a new task..."
      />
      <button className="save-task-btn" onClick={handleSaveTask}>
        Save Task
      </button>
      <ul>
        <li className="blue"><input type="checkbox" /><span className="text">follow up call needed</span><img src={dummyImg} alt="Settings" className="settings-icon" /></li>
        <li className="green"><input type="checkbox" /><span className="text">contact the local authority</span><img src={dummyImg} alt="Settings" className="settings-icon" /></li>
        <li className="orange"><input type="checkbox" /><span className="text">Book in another meeting</span><img src={dummyImg} alt="Settings" className="settings-icon" /></li>
        <li className="orange"><input type="checkbox" /><span className="text">Speak to the GP about XYZ</span><img src={dummyImg} alt="Settings" className="settings-icon" /></li>
        <li className="purple"><input type="checkbox" /><span className="text">you need to call her about ...</span><img src={dummyImg} alt="Settings" className="settings-icon" /></li>
        <li className="purple"><input type="checkbox" /><span className="text">Submission deadline</span><img src={dummyImg} alt="Settings" className="settings-icon" /></li>
      </ul>
    </div>
  );
}

export default TaskSection;
