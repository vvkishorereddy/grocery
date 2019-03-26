import React from "react";
import { Link } from "react-router-dom";
import categories from "../data/categories.json";
import brands from "../data/brands.json";

export default function Footer() {
  const categories1 = categories.slice(0, 6);
  const categories2 = categories.slice(6, 12);

  return (
    <footer>
      <div className="container">
        {/* footer first section */}
        <p className="footer-main">
          <span>"Grocery Shoppy"</span> Nemo enim ipsam voluptatem quia voluptas
          sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
          eos qui ratione voluptatem sequi nesciunt.Sed ut perspiciatis unde
          omnis iste natus error sit voluptatem accusantium doloremque
          laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore
          veritatis et quasi architecto beatae vitae dicta sunt explicabo.
        </p>
        {/* //footer first section */}
        {/* footer second section */}
        <div className="w3l-grids-footer">
          <div className="col-xs-4 offer-footer">
            <div className="col-xs-4 icon-fot">
              <span className="fa fa-map-marker" aria-hidden="true" />
            </div>
            <div className="col-xs-8 text-form-footer">
              <h3>Track Your Order</h3>
            </div>
            <div className="clearfix" />
          </div>
          <div className="col-xs-4 offer-footer">
            <div className="col-xs-4 icon-fot">
              <span className="fa fa-refresh" aria-hidden="true" />
            </div>
            <div className="col-xs-8 text-form-footer">
              <h3>Free &amp; Easy Returns</h3>
            </div>
            <div className="clearfix" />
          </div>
          <div className="col-xs-4 offer-footer">
            <div className="col-xs-4 icon-fot">
              <span className="fa fa-times" aria-hidden="true" />
            </div>
            <div className="col-xs-8 text-form-footer">
              <h3>Online cancellation </h3>
            </div>
            <div className="clearfix" />
          </div>
          <div className="clearfix" />
        </div>
        {/* //footer second section */}
        {/* footer third section */}
        <div className="footer-info w3-agileits-info">
          {/* footer categories */}
          <div className="col-sm-5 address-right">
            <div className="col-xs-12 footer-grids">
              <h3>Categories</h3>
              <div className="col-xs-6">
                <ul>
                  {categories1.map((category, i) => {
                    return (
                      <li key={category._id}>
                        <Link to="/">{category.name}</Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
              <div className="col-xs-6">
                <ul>
                  {categories2.map((category, i) => {
                    return (
                      <li key={category._id}>
                        <Link to="/">{category.name}</Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
            <div className="clearfix" />
          </div>
          {/* //footer categories */}
          {/* quick links */}
          <div className="col-sm-5 address-right">
            <div className="col-xs-6 footer-grids">
              <h3>Quick Links</h3>
              <ul>
                <li>
                  <Link to="/about">About Us</Link>
                </li>
                <li>
                  <Link to="/contact">Contact Us</Link>
                </li>
                <li>
                  <Link to="/help">Help</Link>
                </li>
                <li>
                  <Link to="/faqs">Faqs</Link>
                </li>
                <li>
                  <Link to="/terms">Terms of use</Link>
                </li>
                <li>
                  <Link to="/privacy">Privacy Policy</Link>
                </li>
              </ul>
            </div>
            <div className="col-xs-6 footer-grids">
              <h3>Get in Touch</h3>
              <ul>
                <li>
                  <i className="fa fa-map-marker" /> 123 Sebastian, USA.
                </li>
                <li>
                  <i className="fa fa-mobile" /> 333 222 3333
                </li>
                <li>
                  <i className="fa fa-phone" /> +222 11 4444
                </li>
                <li>
                  <i className="fa fa-envelope-o" />
                  <a href="mailto:example@mail.com"> mail@example.com</a>
                </li>
              </ul>
            </div>
          </div>
          {/* //quick links */}
          {/* social icons */}
          <div className="col-sm-2 footer-grids  w3l-socialmk">
            <h3>Follow Us on</h3>
            <div className="social">
              <ul>
                <li>
                  <a className="icon fb" href="#">
                    <i className="fa fa-facebook" />
                  </a>
                </li>
                <li>
                  <a className="icon tw" href="#">
                    <i className="fa fa-twitter" />
                  </a>
                </li>
                <li>
                  <a className="icon gp" href="#">
                    <i className="fa fa-google-plus" />
                  </a>
                </li>
              </ul>
            </div>
            <div className="agileits_app-devices">
              <h5>Download the App</h5>
              <a href="#">
                <img src="images/1.png" alt />
              </a>
              <a href="#">
                <img src="images/2.png" alt />
              </a>
              <div className="clearfix"> </div>
            </div>
          </div>
          {/* //social icons */}
          <div className="clearfix" />
        </div>
        {/* //footer third section */}
        {/* footer fourth section (text) */}
        <div className="agile-sometext">
          <div className="sub-some">
            <h5>Online Grocery Shopping</h5>
            <p>
              Order online. All your favourite products from the low price
              online supermarket for grocery home delivery in Delhi, Gurgaon,
              Bengaluru, Mumbai and other cities in India. Lowest prices
              guaranteed on Patanjali, Aashirvaad, Pampers, Maggi, Saffola,
              Huggies, Fortune, Nestle, Amul, MamyPoko Pants, Surf Excel, Ariel,
              Vim, Haldiram's and others.
            </p>
          </div>
          <div className="sub-some">
            <h5>Shop online with the best deals &amp; offers</h5>
            <p>
              Now Get Upto 40% Off On Everyday Essential Products Shown On The
              Offer Page. The range includes Grocery, Personal Care, Baby Care,
              Pet Supplies, Healthcare and Other Daily Need Products. Discount
              May Vary From Product To Product.
            </p>
          </div>
          {/* brands */}
          <div className="sub-some">
            <h5>Popular Brands</h5>
            <ul>
              {brands.map(brand => {
                return (
                  <li key={brand._id}>
                    <Link to="/">{brand.name}</Link>
                  </li>
                );
              })}
            </ul>
          </div>
          {/* //brands */}
          {/* payment */}
          <div className="sub-some child-momu">
            <h5>Payment Method</h5>
            <ul>
              <li>
                <img src="images/pay2.png" alt />
              </li>
              <li>
                <img src="images/pay5.png" alt />
              </li>
              <li>
                <img src="images/pay1.png" alt />
              </li>
              <li>
                <img src="images/pay4.png" alt />
              </li>
              <li>
                <img src="images/pay6.png" alt />
              </li>
              <li>
                <img src="images/pay3.png" alt />
              </li>
              <li>
                <img src="images/pay7.png" alt />
              </li>
              <li>
                <img src="images/pay8.png" alt />
              </li>
              <li>
                <img src="images/pay9.png" alt />
              </li>
            </ul>
          </div>
          {/* //payment */}
        </div>
        {/* //footer fourth section (text) */}
      </div>
    </footer>
  );
}
