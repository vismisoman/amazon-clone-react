import React from "react";
import "./Home.css";
import Product from "../products/Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt=""
        />

        <div className="home__row">
          <Product
            id="12321341"
            title="The Lean Startup: How Today's Entrepreneurs Use Continuous Innovation to Create Radically Successful Businesses"
            price={29.99}
            image="https://m.media-amazon.com/images/I/81-QB7nDh4L._AC_UL320_.jpg"
            rating={3}
          />
          <Product
            id="49538094"
            title="Kenwood KMC011 Chef Stand Mixer Kitchen Machine, Silver"
            price={499.99}
            image="https://images-na.ssl-images-amazon.com/images/I/71kj5nomj0L._AC_SL1500_.jpg"
            rating={4}
          />
        </div>
        <div className="home__row">
          <Product
            id="79021341"
            title="Fitness Trackers Waterproof - Fitness Watch with Heart Rate Blood Pressure Monitor, Activity Tracker Watch with Sleep Monitor, Calorie Step Counter Watch for Women Men Kids Compatible iPhone Android"
            price={499.99}
            image="https://images-na.ssl-images-amazon.com/images/I/71kj5nomj0L._AC_SL1500_.jpg"
            rating={4}
          />
          <Product
            id="89538194"
            title="Kenwood KMC011 Chef Stand Mixer Kitchen Machine, Silver"
            price={87.99}
            image="https://images-na.ssl-images-amazon.com/images/I/61UGzL8-K2L._AC_SL1000_.jpg"
            rating={3}
          />
          <Product
            id="69538794"
            title="Echo Plus (2nd gen) – Premium sound with built-in smart home hub - Charcoal"
            price={99}
            image="https://m.media-amazon.com/images/I/71I6oj6ZFBL._AC_UL320_.jpg"
            rating={5}
          />
        </div>
        <div className="home__row">
          <Product
            id="90829332"
            title="Samsung LC49RG90SSNXZA 49' QLED 120Hz HDR1000 WQHD Curved Super Wide 32:9 Gaming Monitor"
            price={1094.98}
            image="https://m.media-amazon.com/images/I/71916r38cNL._AC_UL320_.jpg"
            rating={4}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
