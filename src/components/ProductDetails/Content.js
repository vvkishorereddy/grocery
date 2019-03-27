import React, { Component } from "react";
import { withRouter } from "react-router-dom";

import Products from "../../data/Products.json";

class Content extends Component {
  state = {
    product: {}
  };

  componentDidMount() {
    const SingleProduct = Products.filter(product => {
      return product._id === this.props.match.params.id;
    });
    this.setState({
      product: SingleProduct[0]
    });
  }

  render() {
    const { product } = this.state;

    return (
      <div className="col-md-7 single-right-left simpleCart_shelfItem">
        <h3>{product.name}</h3>
        <div className="rating1">
          <span className="starRating">
            <input id="rating5" type="radio" name="rating" defaultValue={5} />
            <label htmlFor="rating5">5</label>
            <input id="rating4" type="radio" name="rating" defaultValue={4} />
            <label htmlFor="rating4">4</label>
            <input
              id="rating3"
              type="radio"
              name="rating"
              defaultValue={3}
              defaultChecked
            />
            <label htmlFor="rating3">3</label>
            <input id="rating2" type="radio" name="rating" defaultValue={2} />
            <label htmlFor="rating2">2</label>
            <input id="rating1" type="radio" name="rating" defaultValue={1} />
            <label htmlFor="rating1">1</label>
          </span>
        </div>
        <p>
          <span className="item_price">&#8377;{product.final_price}</span>
          <del>&#8377;{product.mrp_price}</del>
          <label> delivery charges &#8377;{product.delivery_price}</label>
        </p>
        <div className="single-infoagile">
          <ul>
            <li>{`Payment Mode: ${product.payment_type}`}</li>
            <li>{`Sold and fulfilled by ${product.seller_name}`}</li>
          </ul>
        </div>
        <div className="product-single-w3l">
          {product.description}

          <p>
            <i className="fa fa-refresh" aria-hidden="true" />
            All food products are
            <label>non-returnable.</label>
          </p>
        </div>
        <div className="occasion-cart">
          <div className="snipcart-details top_brand_home_details item_add single-item hvr-outline-out">
            <form action="#" method="post">
              <fieldset>
                <input type="hidden" name="cmd" defaultValue="_cart" />
                <input type="hidden" name="add" defaultValue={1} />
                <input type="hidden" name="business" defaultValue=" " />
                <input
                  type="hidden"
                  name="item_name"
                  defaultValue="Zeeba Premium Basmati Rice - 5 KG"
                />
                <input type="hidden" name="amount" defaultValue={950.0} />
                <input
                  type="hidden"
                  name="discount_amount"
                  defaultValue={1.0}
                />
                <input type="hidden" name="currency_code" defaultValue="USD" />
                <input type="hidden" name="return" defaultValue=" " />
                <input type="hidden" name="cancel_return" defaultValue=" " />
                <input
                  type="submit"
                  name="submit"
                  defaultValue="Add to cart"
                  className="button"
                />
              </fieldset>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Content);
