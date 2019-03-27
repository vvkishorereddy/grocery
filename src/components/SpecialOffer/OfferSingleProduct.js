import React from "react";

export default function OfferSingleProduct({
  _id,
  name,
  discount_price,
  final_price,
  image
}) {
  return (
    <li style={{ listStyleType: "none" }}>
      <div className="w3l-specilamk">
        <div className="speioffer-agile">
          <a href="single.html">
            <img src={image} alt={name} />
          </a>
        </div>
        <div className="product-name-w3l">
          <h4>
            <a href="single.html">{name}</a>
          </h4>
          <div className="w3l-pricehkj">
            <h6>&#8377; {final_price}</h6>
            <p>Save &#8377; {discount_price}</p>
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
                  defaultValue="Aashirvaad, 5g"
                />
                <input type="hidden" name="amount" defaultValue={220.0} />
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
    </li>
  );
}
