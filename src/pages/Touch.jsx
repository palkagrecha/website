import React from "react";
// import { Link } from "react-router-dom";
import { useState } from "react";
import { Helmet } from "react-helmet";

const Touch = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const [address, setAddress] = useState("");

  const [phone, setPhone] = useState("");

  const [message, setMessage] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name, email, message);
    setName("");
    setEmail("");
    setAddress("");
    setMessage("");
    setPhone("");
  };
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
                  <form onSubmit={handleSubmit}>
                    <div className="mb-1 formHeadingLabel">
                      <label for="exampleInputName" class="form-label">
                        Your Name
                      </label>
                      <input
                        value={name}
                        type="text"
                        className="form-control"
                        id="exampleInputName"
                        onChange={(e) => setName(e.target.value)}
                      />
                    </div>

                    <div className="mb-1 formHeadingLabel">
                      <label for="exampleInputEmail1" class="form-label">
                        Email address
                      </label>
                      <input
                        type="email"
                        value={email}
                        className="form-control"
                        id="exampleInputEmail1"
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                    <div className="mb-1 formHeadingLabel">
                      <label for="exampleInputAddress" class="form-label">
                        Your Address
                      </label>
                      <input
                        type="text"
                        value={address}
                        className="form-control"
                        id="exampleInputAddress"
                        onChange={(e) => setAddress(e.target.value)}
                      />
                    </div>
                    <div className="mb-1 formHeadingLabel">
                      <label for="exampleInputPhone" class="form-label">
                        Your Phone No
                      </label>
                      <input
                        type="number"
                        value={phone}
                        className="form-control"
                        id="exampleInputPhone"
                        onChange={(e) => setPhone(e.target.value)}
                      />
                    </div>
                    <div className="mb-1 formHeadingLabel">
                      <label for="exampleFormControlMessage" class="form-label">
                        Message
                      </label>
                      <textarea
                        className="form-control"
                        value={message}
                        id="exampleFormControlMessage"
                        rows="3"
                        onChange={(e) => setMessage(e.target.value)}
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
