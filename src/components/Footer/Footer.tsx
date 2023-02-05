import React from "react";
import { Container, Row, Col, ListGroup, ListGroupItem } from "react-bootstrap";
import logo from "../../assets/images/res-logo.png";
import "../../styles/footer.css";
import { Link } from "react-router-dom";
import { FaPaperPlane, FaFacebook } from "react-icons/fa";
import { BsGithub } from "react-icons/bs";
import { CiLinkedin } from "react-icons/ci";
import { ImYoutube2 } from "react-icons/im";
type Props = {};

const Footer = (props: Props) => {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col
            lg="3"
            md="4"
            sm="6"
          >
            <div className="footer-logo text-start d-flex flex-column ">
              <img
                className=""
                src={logo}
                alt="logo"
              />
              <h5>VietNam</h5>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Nostrum, ratione tempora ducimus aut sint laboriosam.
              </p>
            </div>
          </Col>
          <Col
            lg="3"
            md="4"
            sm="6"
          >
            <h5 className="footer-title">Delivery Time</h5>
            <ListGroup className="time-list">
              <ListGroupItem className="border-0 ps-0 time-item">
                <span>Sunday - ThursDay</span>
                <p>10:00am - 11:00pm</p>
              </ListGroupItem>
              <ListGroupItem className="border-0 ps-0 time-item ">
                <span>Friday - Saturday</span>
                <p>Off Day</p>
              </ListGroupItem>
            </ListGroup>
          </Col>
          <Col
            lg="3"
            md="4"
            sm="6"
          >
            <h5 className="footer-title">Contact</h5>
            <ListGroup className="time-list">
              <p>Location: ZidanBazar, SyletBangladesh </p>
              <ListGroupItem className="border-0 ps-0 time-item">
                <span className="">
                  Phone <p> 0348701696</p>
                </span>
              </ListGroupItem>
              <ListGroupItem className="border-0 ps-0 time-item ">
                <span>
                  Email <p>example@gmail.com</p>
                </span>
              </ListGroupItem>
            </ListGroup>
          </Col>
          <Col
            lg="3"
            md="4"
            sm="6"
          >
            <h5 className="footer-title">Newsletter</h5>
            <p>Subscribe our newsletter</p>
            <div className="newsletter">
              <input
                type="email"
                placeholder="Enter your email"
              />
              <span>
                <FaPaperPlane className="sgv" />
              </span>
            </div>
          </Col>
        </Row>
        <Row className="mt-3 mb-0">
          <Col
            lg="6"
            md="6"
          >
            <p className="text-danger">
              Copyright - 2023, website made by Hai Dang{" "}
            </p>
          </Col>
          <Col
            lg="6"
            md="6"
          >
            <div className="links justify-content-end d-flex align-items-center gap-3">
              <p className="m-0">Follow:</p>
              <span>
                <Link to={"/"}>
                  {" "}
                  <FaFacebook className="sgv" />
                </Link>
              </span>
              <span>
                <Link to={"/"}>
                  {" "}
                  <BsGithub className="sgv" />
                </Link>
              </span>
              <span>
                <Link to={"/"}>
                  {" "}
                  <ImYoutube2 className="sgv" />
                </Link>
              </span>
              <span>
                <Link to={"/"}>
                  {" "}
                  <CiLinkedin className="sgv" />
                </Link>
              </span>
            </div>
          </Col>
        </Row>
      </Container>
      ;
    </footer>
  );
};

export default Footer;
