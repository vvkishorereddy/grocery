import React, { Component } from "react";
import Slider from "react-slick";
import products from "../../data/offerProducts.json";
import OfferSingleProduct from "./OfferSingleProduct.js";

export default class SpecialOffers extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
      autoplay: true
    };
    return (
      <div className="featured-section" id="projects">
        <div className="container">
          <h3 className="tittle-w3l">
            Special Offers
            <span className="heading-style">
              <i />
              <i />
              <i />
            </span>
          </h3>
          <div className="content-bottom-in">
            <ul>
              <Slider {...settings}>
                {products.map(product => {
                  return <OfferSingleProduct {...product} key={product._id} />;
                })}
              </Slider>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
