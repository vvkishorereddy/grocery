import React, { Component } from "react";
import SpecialDeals from "./SpecialDeals";

export default class LeftSection extends Component {
  render() {
    return (
      <div className="side-bar col-md-3">
        <div className="search-hotel">
          <h3 className="agileits-sear-head">Search Here..</h3>
          <form action="#" method="post">
            <input
              type="search"
              placeholder="Product name..."
              name="search"
              required
            />
            <input type="submit" defaultValue=" " />
          </form>
        </div>

        {/* reviews */}
        <div className="customer-rev left-side">
          <h3 className="agileits-sear-head">Customer Review</h3>
          <ul>
            <li>
              <a href="#root">
                <i className="fa fa-star" aria-hidden="true" />
                <i className="fa fa-star" aria-hidden="true" />
                <i className="fa fa-star" aria-hidden="true" />
                <i className="fa fa-star" aria-hidden="true" />
                <i className="fa fa-star" aria-hidden="true" />
                <span>5.0</span>
              </a>
            </li>
            <li>
              <a href="#root">
                <i className="fa fa-star" aria-hidden="true" />
                <i className="fa fa-star" aria-hidden="true" />
                <i className="fa fa-star" aria-hidden="true" />
                <i className="fa fa-star" aria-hidden="true" />
                <i className="fa fa-star-o" aria-hidden="true" />
                <span>4.0</span>
              </a>
            </li>
            <li>
              <a href="#root">
                <i className="fa fa-star" aria-hidden="true" />
                <i className="fa fa-star" aria-hidden="true" />
                <i className="fa fa-star" aria-hidden="true" />
                <i className="fa fa-star-half-o" aria-hidden="true" />
                <i className="fa fa-star-o" aria-hidden="true" />
                <span>3.5</span>
              </a>
            </li>
            <li>
              <a href="#root">
                <i className="fa fa-star" aria-hidden="true" />
                <i className="fa fa-star" aria-hidden="true" />
                <i className="fa fa-star" aria-hidden="true" />
                <i className="fa fa-star-o" aria-hidden="true" />
                <i className="fa fa-star-o" aria-hidden="true" />
                <span>3.0</span>
              </a>
            </li>
            <li>
              <a href="#root">
                <i className="fa fa-star" aria-hidden="true" />
                <i className="fa fa-star" aria-hidden="true" />
                <i className="fa fa-star-half-o" aria-hidden="true" />
                <i className="fa fa-star-o" aria-hidden="true" />
                <i className="fa fa-star-o" aria-hidden="true" />
                <span>2.5</span>
              </a>
            </li>
          </ul>
        </div>
        {/* //reviews */}
        <SpecialDeals />
      </div>
    );
  }
}
