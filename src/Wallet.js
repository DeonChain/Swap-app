import React from 'react'
import './wallet.css'

export default function Wallet() {
  return (
    <div className='wallet-box'>
      <h1>Total Holdings</h1>
      <table className='wallet'>
        <tr>
            <td>Tokens</td>
            <td>Amount</td>
            <td>Dollar Value</td>
        </tr>
        <tr>
            <td>BTC</td>
            <td>0.1</td>
            <td>300</td>
        </tr>
        <tr>
            <td>Eth</td>
            <td>0.5</td>
            <td>900</td>
        </tr>

      </table>
    </div>
  )
}
