import React from "react";
import Header from "../Header/Header";
import Posts from "../posts/Posts";
import Sidebar from "../sidebar/Sidebar";
import { Container, Row,Col } from "react-bootstrap";

import "./home.css";
function Home() {
  return (
    <div>
      <Header />
      <Container fluid>
        <Row>
          <Col className="col-md-9 ">
            <Posts />
          </Col>
          <Col className="col-md-3 ">
          <Sidebar />

          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Home;
