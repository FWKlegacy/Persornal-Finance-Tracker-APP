import React from 'react';
import AuthForm from './Components/authForm';
import AddTransactionForm from './Components/addTransactionForm';
import TransactionList from './Components/transactionlist';
import ExpenseChart from './Components/expensechart';
import { AuthProvider } from './context/authContext';


function App() {
  return (
    <div className="container">
      <AuthProvider>
        <AuthForm />.
        <AddTransactionForm />
        <TransactionList />
        <ExpenseChart />
      </AuthProvider>
    </div>
  );
}

export default App;
