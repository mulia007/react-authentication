import React from "react";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div>
      <h1>NotFoundPages</h1>
      <Link to="/">back to Home</Link>
    </div>
  );
};

export default NotFoundPage;
