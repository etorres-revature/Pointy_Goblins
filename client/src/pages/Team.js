import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Team.css";

import doria from "../assets/img/profiles/doria.jpg";
import schilling from "../assets/img/profiles/schilling.jpg";
import spindel from "../assets/img/profiles/spindel.jpg";
import torres from "../assets/img/profiles/torres.jpg";

const Team = () => {
  return (
    <Container className="py-5 mt-2">
      <Row className="mb-4">
        <Col>
          <h2>THE TEAM</h2>
          <p>
            Meet the individuals working day and night to bring the STR
            Aggregator to life...
          </p>
        </Col>
      </Row>

      <Row>
        <Col className="col-md-6 mb-4">
          <div className="bg-white rounded shadow-sm py-5 px-4 text-center">
            <img
              src={torres}
              alt=""
              width="100"
              className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"
            ></img>
            <h5 className="mb-0">Eric D. Torres</h5>
            <span className="small text-uppercase text-muted">
              CEO - Founder
            </span>
            <ul className="social mb-0 list-inline mt-3">
              <li className="list-inline-item">
                <a
                  href="https://github.com/etorres-revature"
                  // eslint-disable-next-line react/jsx-no-target-blank
                  target="_blank"
                  rel="noreferrer noopener"
                  className="social-link"
                >
                  <i class="fa fa-github"></i>
                </a>
              </li>
              <li className="list-inline-item">
                <a
                  href="https://www.linkedin.com/in/ericdtorres/"
                  // eslint-disable-next-line react/jsx-no-target-blank
                  target="_blank"
                  rel="noreferrer noopener"
                  className="social-link"
                >
                  <i className="fa fa-linkedin"></i>
                </a>
              </li>
            </ul>
          </div>
        </Col>

        <Col className="col-md-6 mb-4">
          <div className="bg-white rounded shadow-sm py-5 px-4 text-center">
            <img
              src={schilling}
              alt=""
              width="100"
              className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"
            ></img>
            <h5 className="mb-0">Shane Schilling</h5>
            <span className="small text-uppercase text-muted">CTO - GURU</span>
            <ul className="social mb-0 list-inline mt-3">
              <li className="list-inline-item">
                <a
                  href="https://github.com/trilambda122"
                  // eslint-disable-next-line react/jsx-no-target-blank
                  target="_blank"
                  rel="noreferrer noopener"
                  className="social-link"
                >
                  <i class="fa fa-github"></i>
                </a>
              </li>
              <li className="list-inline-item">
                <a
                  href="https://www.linkedin.com/in/shane-schilling/"
                  // eslint-disable-next-line react/jsx-no-target-blank
                  target="_blank"
                  rel="noreferrer noopener"
                  className="social-link"
                >
                  <i className="fa fa-linkedin"></i>
                </a>
              </li>
            </ul>
          </div>
        </Col>
      </Row>

      <Row>
        <Col className="col-md-6 mb-4">
          <div className="bg-white rounded shadow-sm py-5 px-4 text-center">
            <img
              src={doria}
              alt=""
              width="100"
              className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"
            ></img>
            <h5 className="mb-0">Vincent Doria, Jr.</h5>
            <span className="small text-uppercase text-muted">
              Backend - Ninja
            </span>
            <ul className="social mb-0 list-inline mt-3">
              <li className="list-inline-item">
                <a
                  href="https://github.com/Cenzo-cmd"
                  // eslint-disable-next-line react/jsx-no-target-blank
                  target="_blank"
                  rel="noreferrer noopener"
                  className="social-link"
                >
                  <i class="fa fa-github"></i>
                </a>
              </li>
              <li className="list-inline-item">
                <a
                  href="https://www.linkedin.com/in/vincent-doria-jr-7938741aa/"
                  // eslint-disable-next-line react/jsx-no-target-blank
                  target="_blank"
                  rel="noreferrer noopener"
                  className="social-link"
                >
                  <i className="fa fa-linkedin"></i>
                </a>
              </li>
            </ul>
          </div>
        </Col>

        <Col className="col-md-6 mb-4">
          <div className="bg-white rounded shadow-sm py-5 px-4 text-center">
            <img
              src={spindel}
              alt=""
              width="100"
              className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"
            ></img>
            <h5 className="mb-0">Abraham Spindel</h5>
            <span className="small text-uppercase text-muted">
              react - jedi
            </span>
            <ul className="social mb-0 list-inline mt-3">
              <li className="list-inline-item">
                <a
                  href="https://github.com/abraspin"
                  // eslint-disable-next-line react/jsx-no-target-blank
                  target="_blank"
                  rel="noreferrer noopener"
                  className="social-link"
                >
                  <i class="fa fa-github"></i>
                </a>
              </li>
              <li className="list-inline-item">
                <a
                  href="https://www.linkedin.com/in/abrahamspindel/"
                  // eslint-disable-next-line react/jsx-no-target-blank
                  target="_blank"
                  rel="noreferrer noopener"
                  className="social-link"
                >
                  <i className="fa fa-linkedin"></i>
                </a>
              </li>
            </ul>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Team;
