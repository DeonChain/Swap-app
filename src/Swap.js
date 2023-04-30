import React from 'react';
import './swap.css'

function Swap() {
  return (
    <div className='swap'>
    <div className="trade-box">
      <h2>Trade Cryptocurrency</h2>
      <form>
        <label htmlFor="currency">Currency:</label>
        <select id="currency" name="currency">
          <option value="btc">Bitcoin</option>
          <option value="eth">Ethereum</option>
          <option value="ltc">Litecoin</option>
        </select>
        <label htmlFor="quantity">Quantity:</label>
        <input type="number" id="quantity" name="quantity" min="0" step="0.01" required />
        <label htmlFor="price">Price:</label>
        <input type="number" id="price" name="price" min="0" step="0.01" required />
        <button type="submit">Buy</button>
        <button type="submit">Sell</button>
      </form>
    </div>
    </div>
  );
}

export default Swap;
