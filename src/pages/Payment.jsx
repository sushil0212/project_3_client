// src/pages/Payment.jsx
import React, { useState } from "react";
import axios from "axios";

function Payment() {
  const [bankName, setBankName] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
/*   const [amount, setAmount] = useState(0.1); */ 
  const [totalAmount, setTotalAmount] = useState(0.1);
  const [generatedCoins, setGeneratedCoins] = useState(0);

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      await axios.post(`${import.meta.env.VITE_API_URL}/payment`, {
        bankName,
        cardNumber,
        expiryDate,
        totalAmount,
        generatedCoins,
      });
      window.location.href = "/shorts";
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h2>Payment</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="bankName">Bank Name</label>
        <input
          type="text"
          id="bankName"
          value={bankName}
          onChange={e => setBankName(e.target.value)}
        />
        <label htmlFor="cardNumber">Card Number</label>
        <input
          type="text"
          id="cardNumber"
          value={cardNumber}
          onChange={e => setCardNumber(e.target.value)}
        />
        <label htmlFor="expiryDate">Expiry Date</label>
        <input
          type="text"
          id="expiryDate"
          value={expiryDate}
          onChange={e => setExpiryDate(e.target.value)}
        />
        <label htmlFor="totalAmount">Total Amount</label>
        <input
          type="number"
          id="totalAmount"
          value={totalAmount}
          readOnly
        />
        <label htmlFor="generatedCoins">Generated Coins</label>
        <input
          type="number"
          id="generatedCoins"
          value={generatedCoins}
          onChange={e => setGeneratedCoins(e.target.value)}
        />
        <button type="submit">Agree and Pay</button>
      </form>
    </div>
  );
}

export default Payment;
