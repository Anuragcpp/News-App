import React, { Component } from 'react'

export class ThiredNews extends Component {
  render() {
    
    return ( 
      <div className='container my-4 'style={{fontFamily:"monospace"}} >
         <h2 className='my-3' > Microstrategy Buys More Bitcoin — Company's Crypto Holdings Grow to 132,500 BTC</h2>
         <p className='my-3'>The move comes after nearly two years since PayPal enabled users to buy and sell crypto on its platform.</p>
         <div className="text-center my-3">
          <img className='text-center' src= {process.env.PUBLIC_URL+"images/image3.jpg"} style={{height:'300px',width:'600px'}} alt="" />
         </div>
         <p className='my-3'>Microstrategy is now holding approximately 132,500 bitcoin following its most recent purchases. This year, the world’s largest cryptocurrency has emerged as “the institutional-grade digital asset,” said Microstrategy founder Michael Saylor.<br/> <h6>Microstrategy Acquires More Bitcoin,
        </h6>
        Nasdaq-listed Microstrategy Inc. announced Wednesday that it has purchased more bitcoin for its corporate treasury. Michael Saylor, the company’s founder and executive chairman, tweeted Wednesday:
        <br/>
        Microstrategy has increased its bitcoin holdings by ~2,500 BTC. As of 12/27/22 Microstrategy holds ~132,500 bitcoin acquired for ~$4.03 billion at an average price of ~$30,397 per bitcoin.<br/>
        In its filing with the U.S. Securities and Exchange Commission (SEC), Microstrategy clarified that the 2,500. <br/>
        The subsidiary bought approximately 2,395 BTC at acoins were acquired between Nov. 1 and Dec. 24 by its wholly owned subsidiary Macrostrategy.n average price of $17,871 per coin between Nov. 1 and Dec. 21. It then sold about 704 BTC at $16,776 per coin on Dec. 22. Macrostrategy then bought about 810 more BTC at $16,845 per coin on Dec. 24. At the time of writing, bitcoin is trading at $16,656.80.
        <br/>The bitcoin sale in December marked the first time Microstrategy sold its bitcoin since it began accumulating the crypto for its corporate treasury in 2020. The company cited tax reasons for selling BTC. “Microstrategy plans to carry back the capital losses resulting from this transaction against previous capital gains, to the extent such carrybacks are available under the federal income tax laws currently in effect, which may generate a tax benefit,” the SEC filing describes.
        <br/>Saylor said in an interview last week:
        <br/>The most positive thing of the year is the emergence of bitcoin as the institutional grade digital asset and the clarity that … there is one crypto asset that’s a digital commodity … Bitcoin is that commodity.
        <br/>The executive noted that both the chairman of the SEC and the chair of the Commodity Futures Trading Commission (CFTC) have confirmed that bitcoin is a commodity.
        <br/>Saylor previously explained that Microstrategy is investing in BTC “for the long term.” He added: “Our strategy is to buy bitcoin and hold the bitcoin, so there’s no price target … I expect bitcoin is going to go into the millions. So, we’re very patient. We think it’s the future of money.”
         
            </p>
      </div>
    )
  }
}

export default ThiredNews
