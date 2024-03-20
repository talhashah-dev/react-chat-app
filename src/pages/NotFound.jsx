import React from "react";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="notFound">
        <h1>404</h1>
        <h2>Page Not Found!</h2>
        <Link to={"/Home"}>
          <button>Return Home</button>
        </Link>
    </div>
  );
}

export default NotFound;
