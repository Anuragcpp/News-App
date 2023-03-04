import React, { Component } from 'react';
import NewsItem from './NewsItem';


export class News extends Component {
 
  render() {
    return (
      
        <div>
          <div className="container "style={{fontFamily:"initial"}}>
            <h2 className='text-center my-2' >Daily News Top Headlines</h2>
              <div className="row">
                  <div className="col-md-4">
                      <NewsItem image={process.env.PUBLIC_URL+"images/image1.jpg"} title= "PayPal enables transfer of digital currencies to external wallets" discription={"The move comes after nearly two years since PayPal enabled users to buy and sell crypto on its platform.After rolling out the ability to buy and sell crypto on its platform in October 2020"} path={"/FirstNews"} /> 
                  </div>
                  <div className="col-md-4">
                      <NewsItem path={'/SecondNews'} image={process.env.PUBLIC_URL+"images/image2.jpg"} title= "Prime Minister Giorgia Meloni's new bill also includes an incentive for those declaring crypto for tax purposes." discription= 'Microstrategy is now holding approximately 132,500 bitcoin following its most recent purchases. This year, the world’s largest cryptocurrency has emerged as'  />
                  </div>
                  <div className="col-md-4">
                      <NewsItem path={'/ThiredNews'} image={process.env.PUBLIC_URL+"images/image3.jpg"} title= " Microstrategy Buys More Bitcoin — Company's Crypto Holdings Grow to 132,500 BTC" discription= "Microstrategy is now holding approximately 132,500 bitcoin following its most recent purchases. This year, the world’s largest cryptocurrency has emerged as ‘the institutional-grade digital"  />
                  </div>
                  <div className="col-md-4">
                      <NewsItem path={'/ForthNews'} image={process.env.PUBLIC_URL+"images/image4.jpg"} title= "Bitcoin Miners’ Revenue Hits $9.55 Billion in 2022" discription= "2022 has been a rough and tough year for investors, traders, cryptocurrency businesses, and miners in general. The prolonged bear market, exacerbated by a series of catastrophic events, posed a threat to miners."  />
                  </div>
                  <div className="col-md-4">
                      <NewsItem path={'/FifthNews'} image={process.env.PUBLIC_URL+"images/image5.jpg"} title=" Mango Markets Exploiter Eisenberg Arrested in Puerto Rico" discription= "The investor drained $110 million in cryptocurrencies from the platformAvraham Eisenberg, the crypto investor whose ‘highly profitable trading strategy’ drained DeFi trading platform Mango Markets of crypto worth $110 million"  />
                  </div>
              </div>
          </div>
        </div>
      
    )
  }
}

export default News
