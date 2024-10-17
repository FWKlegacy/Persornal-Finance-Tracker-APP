
import React, { useState } from 'react';
import { db } from '../firebase';
import { addDoc, collection } from 'firebase/firestore';

function AddTransaction() {
  const [form, setForm] = useState({ type: '', category: '', amount: '', date: '' });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, 'transactions'), { ...form, amount: parseFloat(form.amount) });
      alert('Transaction added!');
    } catch (error) {
      alert('Failed to add transaction: ' + error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="type" placeholder="Type" onChange={handleChange} />
      <input name="category" placeholder="Category" onChange={handleChange} />
      <input name="amount" placeholder="Amount" type="number" onChange={handleChange} />
      <input name="date" placeholder="Date" type="date" onChange={handleChange} />
      <button type="submit">Add Transaction</button>
    </form>
  );
}

export default AddTransaction;
