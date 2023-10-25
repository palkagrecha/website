import React from "react";
// import { Link } from "react-router-dom";

const Touch = () => {
  return (
    <>
      <div className="touch">
        <div className="container">
          <div className="row">
            <div className="col-6 mt-3">
              <div className="row touchForm">
                <h3>Contact Our Team</h3>
                <div className="row">
                  <form>
                    <div className="mb-1 formHeadingLabel">
                      <label for="exampleInputEmail1" class="form-label">
                        Your Name
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                      />
                    </div>

                    <div className="mb-1 formHeadingLabel">
                      <label for="exampleInputEmail1" class="form-label">
                        Email address
                      </label>
                      <input
                        type="email"
                        className="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                      />
                      <div id="emailHelp" className="form-text">
                        We'll never share your email with anyone else.
                      </div>
                    </div>
                    <div className="mb-1 formHeadingLabel">
                      <label for="exampleInputEmail1" class="form-label">
                        Your Address
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                      />
                    </div>
                    <div className="mb-1 formHeadingLabel">
                      <label for="exampleInputEmail1" class="form-label">
                        Your Phone No
                      </label>
                      <input
                        type="number"
                        className="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                      />
                    </div>
                    <div className="mb-1 formHeadingLabel">
                      <label
                        for="exampleFormControlTextarea1"
                        class="form-label"
                      >
                        Message
                      </label>
                      <textarea
                        className="form-control"
                        id="exampleFormControlTextarea1"
                        rows="3"
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
