import React from "react";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="row justify-content-center text-center m-5 p-5">
        <h1>404</h1>
        <h2>Page Not Found!</h2>
        <Link to={"/"}>
          <button className="btn btn-outline-secondary">Return Home</button>
        </Link>
    </div>
  );
}

export default NotFound;
