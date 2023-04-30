import React from 'react';
import './Homepage.css'

function HomePage() {
  return (
    <div className="homepage">
      <header>
        <h1>Buy and Sell Cryptocurrencies</h1>
        <p>Trade over 100 cryptocurrencies with ease and convenience</p>
      </header>
      <main>
        <section className="features">
          <div className="feature">
            <i className="fas fa-chart-line"></i>
            <h2>Real-time Market Data</h2>
            <p>Stay up-to-date with the latest market trends and price movements</p>
          </div>
          <div className="feature">
            <i className="fas fa-user-shield"></i>
            <h2>Secure Transactions</h2>
            <p>Rest easy knowing your transactions are secured with advanced encryption technologies</p>
          </div>
          <div className="feature">
            <i className="fas fa-wallet"></i>
            <h2>Multiple Wallet Options</h2>
            <p>Choose from a variety of wallets to store your cryptocurrencies</p>
          </div>
        </section>
        <section className="cta">
          <h2>Join the cryptocurrency revolution today</h2>
          <a href="/trade" className="button">Get Started</a>
        </section>
      </main>
      <footer>
        <p>&copy; 2023 Cryptocurrency Exchange. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default HomePage;
