import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import BudgetApp from './BudgetApp';

function App() {
  return (
    <div>
      <h1>Welcome back, user</h1>
      <div >
        <BrowserRouter>
        <Routes>
          <Route path="/budget-app" element={<BudgetApp />} />
        </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
