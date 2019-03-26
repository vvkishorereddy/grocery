import React, { Component } from "react";

import products from "../../data/SpecialDeals.json";

export default class SpecialDeals extends Component {
  render() {
    return (
      <div className="deal-leftmk left-side">
        <h3 className="agileits-sear-head">Special Deals</h3>

        {products.map(product => {
          return (
            <div className="special-sec1" key={product._id}>
              <div className="col-xs-4 img-deals">
                <img src={product.image} alt={product.name} />
              </div>
              <div className="col-xs-8 img-deal1">
                <h3>{product.name}</h3>
                <a href="single.html">&#8377;{product.final_price}</a>
              </div>
              <div className="clearfix" />
            </div>
          );
        })}
      </div>
    );
  }
}
