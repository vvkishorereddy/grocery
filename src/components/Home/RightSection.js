import React, { Component } from "react";
import SingleProductRow from "./SingleProductRow";
import products from "../../data/TopProducts.json";

export default class RightSection extends Component {
  render() {
    const category1 = products.filter(product => {
      return product.category === "Nuts";
    });
    const category2 = products.filter(product => {
      return product.category === "Oils";
    });
    const category3 = products.filter(product => {
      return product.category === "Pasta & Noodles";
    });

    return (
      <div className="agileinfo-ads-display col-md-9">
        <div className="wrapper">
          {/* first section (nuts) */}
          <div className="product-sec1">
            <h3 className="heading-tittle">Nuts</h3>
            {category1.map(product => {
              return <SingleProductRow {...product} key={product._id} />;
            })}

            <div className="clearfix" />
          </div>
          {/* //first section (nuts) */}

          {/* second section (nuts special) */}
          <div className="product-sec1 product-sec2">
            <div className="col-xs-7 effect-bg">
              <h3 className>Pure Energy</h3>
              <h6>Enjoy our all healthy Products</h6>
              <p>Get Extra 10% Off</p>
            </div>
            <h3 className="w3l-nut-middle">Nuts &amp; Dry Fruits</h3>
            <div className="col-xs-5 bg-right-nut">
              <img src="images/nut1.png" alt />
            </div>
            <div className="clearfix" />
          </div>
          {/* //second section (nuts special) */}

          {/* third section (oils) */}
          <div className="product-sec1">
            <h3 className="heading-tittle">Oils</h3>
            {category2.map(product => {
              return <SingleProductRow {...product} key={product._id} />;
            })}

            <div className="clearfix" />
          </div>
          {/* //third section (oils) */}

          {/* fourth section (noodles) */}
          <div className="product-sec1">
            <h3 className="heading-tittle">Pasta &amp; Noodles</h3>
            {category3.map(product => {
              return <SingleProductRow {...product} key={product._id} />;
            })}

            <div className="clearfix" />
          </div>
          {/* //fourth section (noodles) */}
        </div>
      </div>
    );
  }
}
