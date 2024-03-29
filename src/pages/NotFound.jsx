import React from "react";
import { Link } from "react-router-dom";
import NOT_FOUND_IMG from "../assets/images/404.jpg"

function NotFound() {
  return (
    <div className="notFound">
      <img src={NOT_FOUND_IMG} alt="Not Found" />
      <div className="infoText">
        <h1>404</h1>
        <h2>Page Not Found!</h2>
        <p>The page you're looking for doesn't exist.</p>
        <Link to={"/"}>
          <button>Return Home</button>
        </Link>
      </div>
    </div>
  );
}

export default NotFound;
