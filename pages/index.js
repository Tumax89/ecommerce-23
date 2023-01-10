import React from "react";

import { Product, FooterBanner, HeroBanner } from "../components";

const Home = ({}) => (
  <div>
    <HeroBanner />
    <div className="products-heading">
      <h2>Best Seller Products</h2>
      <p>speaker There are many variations passages</p>
    </div>

    <div className="products-container">Products</div>

    <FooterBanner />
  </div>
);

export default Home;
