import React, { Component } from "react";

export default class Newsletter extends Component {
  render() {
    return (
      <div className="footer-top">
        <div className="container-fluid">
          <div className="col-xs-8 agile-leftmk">
            <h2>Get your Groceries delivered from local stores</h2>
            <p>Free Delivery on your first order!</p>
            <form action="#" method="post">
              <input type="email" placeholder="E-mail" name="email" required />
              <input type="submit" defaultValue="Subscribe" />
            </form>
            <div className="newsform-w3l">
              <span className="fa fa-envelope-o" aria-hidden="true" />
            </div>
          </div>
          <div className="col-xs-4 w3l-rightmk">
            <img src="images/tab3.png" alt=" " />
          </div>
          <div className="clearfix" />
        </div>
      </div>
    );
  }
}
