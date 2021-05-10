import React from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';
import Index from './components/Index';
import Tasks from './components/Tasks';

function App() {
  return (
    <BrowserRouter>

      <div className='App'>
      <Header />
      <Route exact path="/" component={Index} />
      <Route exact path="/tasks" component={Tasks} />
      <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
