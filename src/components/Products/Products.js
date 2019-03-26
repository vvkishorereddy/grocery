import React, { Component, Fragment } from "react";

import ProductsList from "../../data/Products.json";
import SingleProductRow from "../SingleProductRow";

export default class Products extends Component {
  render() {
    return (
      <Fragment>
        <div className="agileinfo-ads-display col-md-9 w3l-rightpro">
          <div className="wrapper">
            <div className="product-sec1">
              {ProductsList.map(product => {
                return <SingleProductRow {...product} key={product._id} />;
              })}
              <div className="clearfix" />
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}
