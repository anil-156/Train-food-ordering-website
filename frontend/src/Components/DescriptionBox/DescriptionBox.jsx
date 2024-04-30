import React from "react";
import "./DescriptionBox.css";

export const DescriptionBox = () => {
  return (
    <div className="descriptionbox ">
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box">Description</div>
        <div className="descriptionbox-nav-box fade">Reviews(122)</div>
      </div>
      <div className="descriptionbox-description">
        <p>
          Ecommerce is a method of buying and selling goods and services online.
          The definition of ecommerce business can also include tactics like
          affiliate marketing. You can use ecommerce channels such as your own
          website, an established selling website like Amazon, or social media
          to drive online sales.
        </p>
      </div>
    </div>
  );
};
