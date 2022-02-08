import React from "react";
import Sidebar from "../../sidebar/Sidebar";
import Singlepost from "../../singlepost/Singlepost";
import {Row,Col} from 'react-bootstrap';

import "./single.css";

function Single() {
  return (
    <div className="single">
      <Row>
        <Col className="col-md-9">
          <Singlepost />
        </Col>
        <Col className="col-md-3">
          <Sidebar />
        </Col>
      </Row>
    </div>
  );
}

export default Single;
