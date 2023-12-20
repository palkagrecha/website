import React from "react";
import { Link } from "react-router-dom";
import NotFoundPage from "../images/notFound.png";
const NotFound = () => {
  return (
    <>
      <div className="text-center">
        <img
          src={NotFoundPage}
          alt="error page"
          className="img-fluid my-3"
          height="200px"
          width="300px"
        />
        <br />
        <button className="btn btn-danger my-5" id="home-btn">
          <Link to="https://palkagrecha.com/" className="text-light">
            Home
          </Link>
        </button>
      </div>
    </>
  );
};

export default NotFound;
