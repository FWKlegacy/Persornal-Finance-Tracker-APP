import React from "react";



function TransactionItem({ transaction, onDelete }) {
  const { id, type, amount, category, date } = transaction;

  return (
    <div className="transactionItem">
      <div className="transactionDetails">
        <p>
          <strong>{type.toUpperCase()}:</strong> {category} - ${amount} on {date}
        </p>
      </div>
      <button onClick={() => onDelete(id)}>Delete</button>
    </div>
  );
}

export default TransactionItem;
