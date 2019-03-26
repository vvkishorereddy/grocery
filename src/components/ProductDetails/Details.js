import React, { Component } from "react";

export default class Details extends Component {
  render() {
    return (
      <div className="banner-bootom-w3-agileits">
        <div className="container">
          {/* tittle heading */}
          <h3 className="tittle-w3l">
            Single Page
            <span className="heading-style">
              <i />
              <i />
              <i />
            </span>
          </h3>
          {/* //tittle heading */}
          <div className="col-md-5 single-right-left ">
            <div className="grid images_3_of_2">
              <div className="flexslider">
                <ul className="slides">
                  <li data-thumb="images/si.jpg">
                    <div className="thumb-image">
                      <img
                        src="images/si.jpg"
                        data-imagezoom="true"
                        className="img-responsive"
                        alt=""
                      />{" "}
                    </div>
                  </li>
                  <li data-thumb="images/si2.jpg">
                    <div className="thumb-image">
                      <img
                        src="images/si2.jpg"
                        data-imagezoom="true"
                        className="img-responsive"
                        alt=""
                      />{" "}
                    </div>
                  </li>
                  <li data-thumb="images/si3.jpg">
                    <div className="thumb-image">
                      <img
                        src="images/si3.jpg"
                        data-imagezoom="true"
                        className="img-responsive"
                        alt=""
                      />{" "}
                    </div>
                  </li>
                </ul>
                <div className="clearfix" />
              </div>
            </div>
          </div>
          <div className="col-md-7 single-right-left simpleCart_shelfItem">
            <h3>Zeeba Premium Basmati Rice - 5 KG</h3>
            <div className="rating1">
              <span className="starRating">
                <input
                  id="rating5"
                  type="radio"
                  name="rating"
                  defaultValue={5}
                />
                <label htmlFor="rating5">5</label>
                <input
                  id="rating4"
                  type="radio"
                  name="rating"
                  defaultValue={4}
                />
                <label htmlFor="rating4">4</label>
                <input
                  id="rating3"
                  type="radio"
                  name="rating"
                  defaultValue={3}
                  defaultChecked
                />
                <label htmlFor="rating3">3</label>
                <input
                  id="rating2"
                  type="radio"
                  name="rating"
                  defaultValue={2}
                />
                <label htmlFor="rating2">2</label>
                <input
                  id="rating1"
                  type="radio"
                  name="rating"
                  defaultValue={1}
                />
                <label htmlFor="rating1">1</label>
              </span>
            </div>
            <p>
              <span className="item_price">$950.00</span>
              <del>$1300.00</del>
              <label>Free delivery</label>
            </p>
            <div className="single-infoagile">
              <ul>
                <li>Cash on Delivery Eligible.</li>
                <li>Shipping Speed to Delivery.</li>
                <li>
                  Sold and fulfilled by Supple Tek (3.6 out of 5 | 8 ratings).
                </li>
                <li>
                  1 offer from
                  <span className="item_price">$950.00</span>
                </li>
              </ul>
            </div>
            <div className="product-single-w3l">
              <p>
                <i className="fa fa-hand-o-right" aria-hidden="true" />
                This is a<label>Vegetarian</label> product.
              </p>
              <ul>
                <li>Best for Biryani and Pulao.</li>
                <li>
                  After cooking, Zeeba Basmati rice grains attain an extra
                  ordinary length of upto 2.4 cm/~1 inch.
                </li>
                <li>
                  Zeeba Basmati rice adheres to the highest food afety standards
                  as your health is paramount to us.
                </li>
                <li>
                  Contains only the best and purest grade of basmati rice grain
                  of Export quality.
                </li>
              </ul>
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
                    <input
                      type="hidden"
                      name="currency_code"
                      defaultValue="USD"
                    />
                    <input type="hidden" name="return" defaultValue=" " />
                    <input
                      type="hidden"
                      name="cancel_return"
                      defaultValue=" "
                    />
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
          <div className="clearfix"> </div>
        </div>
      </div>
    );
  }
}
