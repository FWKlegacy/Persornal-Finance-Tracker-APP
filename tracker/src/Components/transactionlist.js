

import React, { useState, useEffect } from 'react';
import { db } from '../firebase';
import { collection, onSnapshot } from 'firebase/firestore';

function TransactionList() {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, 'transactions'), (snapshot) => {
      const data = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      setTransactions(data);
    });
    return unsubscribe;
  }, []);

  return (
    <div>
      <h2>Transaction History</h2>
      {transactions.map((t) => (
        <p key={t.id}>
          {t.type} - {t.category}: ${t.amount} on {t.date}
        </p>
      ))}
    </div>
  );
}

export default TransactionList;
