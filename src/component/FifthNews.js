import React, { Component } from 'react'


export class FifthNews extends Component {
  render() {
    
    return (
      <div className='container my-4 ' style={{fontFamily:"monospace"}}>
         <h2 className='my-3' >Mango Markets Exploiter Eisenberg Arrested in Puerto Rico</h2>
         <p className='my-3'>The investor drained $110 million in cryptocurrencies from the platform.</p>
         <div className="text-center my-3">
          <img className='text-center' src= {process.env.PUBLIC_URL+"images/image5.jpg"} style={{height:'300px',width:'600px'}} alt="" />
         </div>
         <p className='my-3'>Avraham Eisenberg, the crypto investor whose “highly profitable trading strategy” drained DeFi trading platform Mango Markets of crypto worth $110 million, was arrested Monday in Puerto Rico, court documents said.
         <br/> The self-described game theorist admitted his role in draining Mango Markets’ treasury shortly after the incident in mid-October, and may now be the first U.S. resident to face charges for his role in manipulating a decentralized-finance trading platform.
           <br/>Eisenberg faces charges of commodities fraud and commodities manipulation, according to a filing unsealed Tuesday. The charges could see punishments ranging from fines to prison time.
           <br/>Eisenberg faces charges of commodities fraud and commodities manipulation, according to a filing unsealed Tuesday. The charges could see punishments ranging from fines to prison time.
           <br/>“Eisenberg engaged in a scheme involving the intentional and artificial manipulation of the price of perpetual futures contracts on a cryptocurrency exchange called Mango Markets, and other manipulative and deceptive devices and contrivances.”
          </p>
      </div>
    )
  }
}

export default FifthNews
