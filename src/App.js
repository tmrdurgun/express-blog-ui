import React from 'react';
import './App.scss';
import DashboardComponent from './components/dashboard/DashboardComponent';
import LoginComponent from './components/login/LoginComponent';

function App() {
  return (
    <>
      <DashboardComponent></DashboardComponent>
      <LoginComponent></LoginComponent>
    </>
  );
}

export default App;
