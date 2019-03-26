import React from "react";
import { Link } from "react-router-dom";

export default function Breadcums(props) {
  return (
    <div className="services-breadcrumb">
      <div className="agile_inner_breadcrumb">
        <div className="container">
          <ul className="w3_short">
            <li>
              <Link to="/">Home</Link>
              <i>|</i>
            </li>
            <li>{props.current_page}</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
