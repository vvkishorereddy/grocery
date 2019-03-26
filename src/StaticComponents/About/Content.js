import React from "react";

export default function Content() {
  return (
    <div className="welcome">
      <div className="container">
        {/* tittle heading */}
        <h3 className="tittle-w3l">
          Welcome to our Site
          <span className="heading-style">
            <i />
            <i />
            <i />
          </span>
        </h3>
        {/* //tittle heading */}
        <div className="w3l-welcome-info">
          <div className="col-sm-6 col-xs-6 welcome-grids">
            <div className="welcome-img">
              <img
                src="images/about.jpg"
                className="img-responsive zoom-img"
                alt=""
              />
            </div>
          </div>
          <div className="col-sm-6 col-xs-6 welcome-grids">
            <div className="welcome-img">
              <img
                src="images/about2.jpg"
                className="img-responsive zoom-img"
                alt=""
              />
            </div>
          </div>
          <div className="clearfix"> </div>
        </div>
        <div className="w3l-welcome-text">
          <p>
            Nam libero tempore cum soluta nobis est eligendi optio cumque nihil
            impedit quo minus id quod maxime placeat facere possimus omnis optio
            cumque nihil impedit quo minus id quod maxime placeat facere
            possimus.Sed ut perspiciatis unde omnis iste natus error sit
            voluptatem accusantium doloremque laudantium, totam rem aperiam,
            eaque ipsa quae ab illo inventore veritatis et quasi architecto
            beatae vitae{" "}
          </p>
          <p>
            libero tempore cum soluta nobis est eligendi optio cumque nihil
            impedit quo minus id quod maxime placeat facere possimus omnis optio
            cumque nihil impedit{" "}
          </p>
        </div>
      </div>
    </div>
  );
}
