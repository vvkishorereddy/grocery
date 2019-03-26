import React from "react";

export default function Video() {
  return (
    <div className="about">
      <div className="container">
        {/* tittle heading */}
        <h3 className="tittle-w3l">
          Our Video
          <span className="heading-style">
            <i />
            <i />
            <i />
          </span>
        </h3>
        {/* //tittle heading */}
        <div className="about-tp">
          <div className="col-md-8 about-agileits-w3layouts-left">
            <iframe
              title="video"
              src="https://player.vimeo.com/video/15520702?color=ffffff&title=0&byline=0"
            />
          </div>
          <div className="col-md-4 about-agileits-w3layouts-right">
            <div className="img-video-about">
              <img src="images/videoimg2.png" alt="" />
            </div>
            <h4>Grocery Shoppy</h4>
            <p>
              No.1 Leading E-commerce marketplace with over 70 million Products
            </p>
          </div>
          <div className="clearfix" />
        </div>
      </div>
    </div>
  );
}
