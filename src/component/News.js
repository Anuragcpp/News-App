import React, { Component } from 'react';
import Navbar from './Navbar';
import NewsItem from './NewsItem';

export class News extends Component {
  article = [
    {
        "title": "PayPal enables transfer of digital currencies to external wallets",
        "imageURL": process.env.PUBLIC_URL+"images/image1.jpg",
        "discription": "The move comes after nearly two years since PayPal enabled users to buy and sell crypto on its platform.After rolling out the ability to buy and sell crypto on its platform in October 2020, PayPal is finally allowing users the ability to natively transfer, send and receive digital assets between PayPal and other wallets and exchanges. As of Tuesday, the feature is available to select U.S. users, with the feature expanding to all eligible U.S. users in the coming weeks. The first batch of supported coins consists of Bitcoin"
    },
    {
      "title": "Prime Minister Giorgia Meloni's new bill also includes an incentive for those declaring crypto for tax purposes.",
      "imageURL": process.env.PUBLIC_URL+"images/image2.jpg",
      "discription": `Microstrategy is now holding approximately 132,500 bitcoin following its most recent purchases. This year, the world’s largest cryptocurrency has emerged as ‘the institutional-grade digital asset,’ said Microstrategy founder Michael Saylor.`
    },
    {
      "title": "Microstrategy Buys More Bitcoin — Company's Crypto Holdings Grow to 132,500 BTC ",
      "imageURL": process.env.PUBLIC_URL+"images/image3.jpg",
      "discription": "The move comes after nearly two years since PayPal enabled users to buy and sell crypto on its platform.After rolling out the ability to buy and sell crypto on its platform in October 2020, PayPal is finally allowing users the ability to natively transfer, send and receive digital assets between PayPal and other wallets and exchanges. As of Tuesday, the feature is available to select U.S. users, with the feature expanding to all eligible U.S. users in the coming weeks. The first batch of supported coins consists of Bitcoin"
    },
    {
      "title": " Bitcoin Miners’ Revenue Hits $9.55 Billion in 2022",
      "imageURL": process.env.PUBLIC_URL+"images/image4.jpg",
      "discription": "2022 has been a rough and tough year for investors, traders, cryptocurrency businesses, and miners in general. The prolonged bear market, exacerbated by a series of catastrophic events, posed a threat to miners. Miners were dealing with a variety of issues, including defaulted loans, quarterly losses, and soaring bitcoin hashrates that reached all-time highs. All these factors were affecting the profitability of the miners and were causing sell pressure"
    },
    {
      "title": "Mango Markets Exploiter Eisenberg Arrested in Puerto Rico",
      "imageURL": process.env.PUBLIC_URL+"images/image5.jpg",
      "discription": "The investor drained $110 million in cryptocurrencies from the platform.Avraham Eisenberg, the crypto investor whose ‘highly profitable trading strategy’ drained DeFi trading platform Mango Markets of crypto worth $110 million, was arrested Monday in Puerto Rico, court documents said.The self-described game theorist admitted his role in draining Mango Markets’ treasury shortly after the incident in mid-October, and may now be the first U.S. resident to face charges for his role in manipulating a decentralized-finance trading platform."
    }
]
  constructor(){
    super();
    this.state= {
      article : this.article
    }
  }
  render() {
    return (
      <div>
        <Navbar />
        <div className="container ">
          
          <div className="row">
               {this.state.article.map((element)=>{
                   return <div className="col-md-4" key={element.imageURL} >
                       <NewsItem image ={element.imageURL} title={element.title.slice(0,80)} discription={element.discription.slice(0,150)} /> 
                   </div>
                 })}
            </div>  
        </div>
      </div>
    )
  }
}

export default News
