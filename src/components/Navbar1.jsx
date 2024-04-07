import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import tasktDutyLogo from "../assets/images/Task-Duty-logo.png";
import { Link } from "react-router-dom";

const Navbar1 = () => {
  return (
    <Navbar expand="lg" className="py-lg-4 border-bottom mb-4">
      <Container>
        <Link
          to="/"
          className="text-black text-decoration-none fw-bold d-flex gap-2 align-items-center fs-4"
        >
          <img src={tasktDutyLogo} alt="" />
          Task Duty
        </Link>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto d-lg-flex justify-content-lg-end w-100 gap-lg-3">
            <Link
              to="/new"
              className="text-black text-decoration-none fw-semibold"
            >
              New Task
            </Link>
            <Link
              to="/tasks"
              className="text-black text-decoration-none fw-semibold"
            >
              All Tasks
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navbar1;
