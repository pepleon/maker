import React from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';
import RightSidebar from './components/RightSidebar';
import AddNewPost from './components/AddNewPost';
import './App.css';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="app-body">
        <Sidebar />
  
        <MainContent />
        <RightSidebar />
      </div>
     <Footer/>
    </div>
  );
}

export default App;
