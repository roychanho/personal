import React, { useEffect } from "react";
import { useNavigate, useRouteError } from "react-router-dom";

const Error404 = () => {
  const error = useRouteError();
  const navigate = useNavigate();
  useEffect(() => {
    setTimeout(() => {
      navigate("/");
    }, 1000);
  }, []);
  return (
    <>
      <h1>404 Not Found</h1>
      <p>{error.error.message}</p>
    </>
  );
};

export default Error404;
