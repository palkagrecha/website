import React from "react";
import { Helmet } from "react-helmet";

const WhatWe = () => {
  return (
    <>
      <div>
        <Helmet>
          <meta charSet="utf-8" />
          <meta
            name="description"
            content="Reach out to Pal Kagrecha and explore the possibilities of innovative Augmented Reality solutions. Contact our team for inquiries, collaborations, or to discuss how we can elevate your projects with our expertise in AR technology."
          />
          <meta
            name="keywords"
            content="Augmented Reality, AR experiences, Innovation, Digital Transformation, Pal Kagrecha, Expertise, Story, Values, Team, Technology"
          />
          <meta property="og:url" content="https://palkagrecha.com/service" />
          <meta
            property="og:image"
            itemprop="image"
            content="https://palkagrecha.com/static/media/PalKagrechaProfessionsalPicAbout.ef9ce083b56620892d96.jpg"
          />
          <link rel="canonical" href="https://www.palkagrecha.com/service" />
          <meta name="author" content="Pal Kagrecha" />
          <title> Service- Pal Kagrecha</title>
        </Helmet>
      </div>
      <section className="work">
        <div className="container ">
          <div className="row mx-5">
            <h1 className="about_title">
              <span className="aboutIntro1 mt-3">What we do</span>
            </h1>
          </div>

          <div className=" mx-5 row my-1 py-5 atSmallPadding0">
            <h2 className="aboutSubtitle">
              Crafting immersive AR experiences for gaming, entertainment,
              education, and healthcare. Elevate your projects with our 3+ years
              of expertise.
            </h2>
          </div>

          <div className=" py-5 atSmallPadding0 row m-5 d-flex justify-content-between column-gap-1">
            <div className="col-md-3 count">
              <h1>500+</h1>
              <p>Effects Delivered</p>
            </div>

            <div className="col-md-3 count">
              <h1>20B+</h1>
              <p>Impressions</p>
            </div>
            <div className="col-md-3 count">
              <h1>1B+</h1>
              <p>Shares</p>
            </div>

            <div className="col-md-3 count">
              <h1>500M+</h1>
              <p>user generated content</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WhatWe;
