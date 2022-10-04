import React from 'react';
import './App.css';
import Budgets from './features/budgets/Budgets';
import Transaction from './features/transactions/Transactions';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <h1>Expense Tracker</h1>
      <Budgets />
      <Transaction />
      </header>
    </div>
  );
}

export default App;
