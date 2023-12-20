import React from "react";
// import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";

const Touch = () => {
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    if (window.location.search.includes("success=true")) {
      setSuccess(true);
    }
  }, []);
  if (success) {
    Swal.fire("Thank for your message, i will get back to you soon!");
  }
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
          <meta
            property="og:url"
            content="https://pal-portfolio.vercel.app/touch"
          />
          <meta
            property="og:image"
            itemprop="image"
            content="https://pal-portfolio.vercel.app/static/media/PalKagrechaProfessionsalPicAbout.ef9ce083b56620892d96.jpg"
          />
          <meta name="author" content="Pal Kagrecha" />
          <title> Contact Us - Connect for Innovative Solutions</title>
        </Helmet>
      </div>
      <div className="touch">
        <div className="container">
          <div className="row">
            <div className="col-6 mt-3 responsiveContact">
              <div className="row touchForm">
                <h2>
                  <b>Get in touch</b>
                </h2>
                <div className="row">
                  <form
                    name="website-contact-form"
                    method="POST"
                    action="/contact/?success=true"
                    data-netlify="true"
                  >
                    <div className="mb-1 formHeadingLabel">
                      <label for="exampleInputName" class="form-label">
                        Your Name
                      </label>
                      <input
                        name="name"
                        type="text"
                        className="form-control"
                        id="exampleInputName"
                        required
                      />
                    </div>

                    <div className="mb-1 formHeadingLabel">
                      <label for="exampleInputEmail1" class="form-label">
                        Email address
                      </label>
                      <input
                        type="email"
                        name="email"
                        className="form-control"
                        id="exampleInputEmail1"
                      />
                    </div>
                    <div className="mb-1 formHeadingLabel">
                      <label for="exampleInputAddress" class="form-label">
                        Your Address
                      </label>
                      <input
                        type="text"
                        name="address"
                        className="form-control"
                        id="exampleInputAddress"
                      />
                    </div>
                    <div className="mb-1 formHeadingLabel">
                      <label for="exampleInputPhone" class="form-label">
                        Your Phone No
                      </label>
                      <input
                        type="number"
                        name="number"
                        className="form-control"
                        id="exampleInputPhone"
                        required
                      />
                    </div>
                    <div className="mb-1 formHeadingLabel">
                      <label for="exampleFormControlMessage" class="form-label">
                        Message
                      </label>
                      <textarea
                        name="message"
                        className="form-control"
                        id="exampleFormControlMessage"
                        rows="3"
                        required
                      ></textarea>
                    </div>

                    <button type="submit" className="btn btn-primary">
                      Submit
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Touch;
