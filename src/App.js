import React from 'react';
import Header from './components/header';
import Login from './components/login';
import InfoBox from './components/infoBox';
import './App.css';
import firebase from './firebase.js';

function App() {
  return (
    
      
      <div>
        <Header /> <Login/> <InfoBox/>
      </div>
    
        
     
  );
}

export default App;
