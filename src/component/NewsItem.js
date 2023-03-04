import React, { Component } from 'react';
import {
 Link
  } from "react-router-dom";

export class NewsItem extends Component {
 
  render() {
    let {image,title,discription,path} = this.props
    return (
      <div>
        <div className="">
            <div className="card my-4">
                <img src={image} style={{height:'170px'}} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{title} </h5>
                    <p className="card-text">{discription} </p>
                    <Link to={path}  rel="noreferrer"> <button className="btn btn-dark" >Read More</button></Link>
                </div>
            </div>
        </div>
        
      </div>
    )
  }
}

export default NewsItem
