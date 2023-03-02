import React, { Component } from 'react';
import Navbar from './Navbar';
import NewsItem from './NewsItem';

export class News extends Component {
  article = [
    {
        "title": "PayPal enables transfer of digital currencies to external wallets",
        "imageURL": `process.env.PUBLIC_URL+"images/image1.jpg"`,
        "discription": "The move comes after nearly two years since PayPal enabled users to buy and sell crypto on its platform.After rolling out the ability to buy and sell crypto on its platform in October 2020, PayPal is finally allowing users the ability to natively transfer, send and receive digital assets between PayPal and other wallets and exchanges. As of Tuesday, the feature is available to select U.S. users, with the feature expanding to all eligible U.S. users in the coming weeks. The first batch of supported coins consists of Bitcoin"
    },
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
                       <NewsItem image ={process.env.PUBLIC_URL+"images/image1.jpg"} title={element.title} discription={element.discription.slice(0,150)} /> 
                   </div>
                 })}
            </div>  
        </div>
      </div>
    )
  }
}

export default News
