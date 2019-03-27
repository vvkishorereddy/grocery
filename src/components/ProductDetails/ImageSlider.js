import React, { Component } from "react";
import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from "react-image-gallery";

export default class ImageSlider extends Component {
  render() {
    const images = [
      {
        original: "images/si1.jpg",
        thumbnail: "images/si1.jpg"
      },
      {
        original: "images/si2.jpg",
        thumbnail: "images/si2.jpg"
      },
      {
        original: "images/si3.jpg",
        thumbnail: "images/si3.jpg"
      }
    ];

    return (
      <div className="col-md-5 single-right-left ">
        <div className="grid images_3_of_2">
          <ImageGallery
            items={images}
            showNav={false}
            showFullscreenButton={false}
            showPlayButton={false}
            renderItem={image => (
              <img data-imagezoom="true" src={image.original} />
            )}
          />
          <div className="clearfix" />
        </div>
      </div>
    );
  }
}
