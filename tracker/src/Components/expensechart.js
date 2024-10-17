import React from "react";
import { Bar, Pie } from 'react-chartjs-2';

function ExpenseChart({ transactions = [] }) {  
  if (!transactions || transactions.length === 0) {
    return <p>No transactions available</p>;
  }

  const expenses = transactions.filter((t) => t.type === "expenses");
  const categories = expenses.map((t) => t.category);

    const categoryCounts= categories.reduce((acc, category)=>{
        acc[category]=(acc[category] || 0)+1;
        return acc;
    },{});

    const data = {
        labels: Object.keys(categoryCounts),
        datasets: [
          {
            label: 'Expenses by Category',
            data: Object.values(categoryCounts),
            backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF'],
          },
        ],
      };

      return (
        <div>
          <h2>Expense Breakdown</h2>
          <Bar data={data} />
          <Pie data={data} />
        </div>
      );
    }
    
    export default ExpenseChart;
    
