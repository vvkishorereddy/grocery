import React from "react";
import { Link } from "react-router-dom";

export default function SingleProductRow({
  _id,
  name,
  mrp_price,
  final_price,
  image
}) {
  return (
    <div className="col-md-4 product-men">
      <div className="men-pro-item simpleCart_shelfItem">
        <div className="men-thumb-item">
          <img src={image} alt={name} />
          <div className="men-cart-pro">
            <div className="inner-men-cart-pro">
              <Link to="/product" className="link-product-add-cart">
                Quick View
              </Link>
            </div>
          </div>
          <span className="product-new-top">New</span>
        </div>
        <div className="item-info-product ">
          <h4>
            <Link to="/product">{name}</Link>
          </h4>
          <div className="info-product-price">
            <span className="item_price">&#8377; {final_price}</span>
            <del>&#8377; {mrp_price}</del>
          </div>
          <div className="snipcart-details top_brand_home_details item_add single-item hvr-outline-out">
            <form action="#" method="post">
              <fieldset>
                <input type="hidden" name="cmd" defaultValue="_cart" />
                <input type="hidden" name="add" defaultValue={1} />
                <input type="hidden" name="business" defaultValue=" " />
                <input
                  type="hidden"
                  name="item_name"
                  defaultValue="Pista, 250g"
                />
                <input type="hidden" name="amount" defaultValue="520.99" />
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
    </div>
  );
}
