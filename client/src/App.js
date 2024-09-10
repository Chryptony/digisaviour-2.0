import react from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  Navbar,
  MainContent
}from './components'

function App() {
  return (
    <div className="main-page">
      <Navbar></Navbar>
      <MainContent></MainContent>
    </div>
  );
}

export default App;
