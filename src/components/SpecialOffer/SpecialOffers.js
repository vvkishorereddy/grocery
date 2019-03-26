import React, { Component } from "react";
import products from "../../data/offerProducts.json";
import OfferSingleProduct from "./OfferSingleProduct.js";

export default class SpecialOffers extends Component {
  render() {
    return (
      <div className="featured-section" id="projects">
        <div className="container">
          {/* tittle heading */}
          <h3 className="tittle-w3l">
            Special Offers
            <span className="heading-style">
              <i />
              <i />
              <i />
            </span>
          </h3>
          {/* //tittle heading */}
          <div className="content-bottom-in">
            <ul id="flexiselDemo1">
              {products.map(product => {
                return <OfferSingleProduct {...product} key={product._id} />;
              })}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
