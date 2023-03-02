import React, { Component } from 'react';

export class NewsItem extends Component {
  render() {
    let {image,title,discription} = this.props
    return (
      <div>
        <div className="">
            <div className="card my-4">
                <img src={image} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{title} </h5>
                    <p className="card-text">{discription} </p>
                    <a href="/" className="btn btn-dark"> Read More</a>
                </div>
            </div>
        </div>
        
      </div>
    )
  }
}

export default NewsItem
