import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import Footer from "./Footer";
// import TopNavbar from "./TopNavbar";

function PageNotFound() {
  return (
    <>
      {/* <TopNavbar /> */}
      <Container>
        <div className="m-auto w-100 text-center my-5">
          <h1 className="text-danger">Page Not Found</h1>
          <Link to="/" className="text-dark text-decoration-none fs-5">
            Go back to Home Page
          </Link>
        </div>
      </Container>
      <Footer />
    </>
  );
}

export default PageNotFound;