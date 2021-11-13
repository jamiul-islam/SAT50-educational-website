import React from "react";
import { Col, Form, Row } from "react-bootstrap";
import Footer from "../Footer/Footer";
import MenuBar from "../MenuBar/MenuBar";

const Contact = () => {
  return (
    <div>
      <MenuBar></MenuBar>
      <div>
        <h1 className="mt-5 border-top">Contact Me</h1>
        <div className="container text-start mt-5 mb-5">
          <Form>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  className="btn-outline-success"
                  type="email"
                  placeholder="Enter email"
                />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  className="btn-outline-success"
                  type="password"
                  placeholder="Password"
                />
              </Form.Group>
            </Row>

            <Form.Group className="mb-3" controlId="formGridAddress1">
              <Form.Label>Address</Form.Label>
              <Form.Control
                className="btn-outline-success"
                placeholder="1234 Main St"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formGridAddress2">
              <Form.Label>Address 2</Form.Label>
              <Form.Control
                className="btn-outline-success"
                placeholder="Apartment, studio, or floor"
              />
            </Form.Group>

            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridCity">
                <Form.Label>City</Form.Label>
                <Form.Control className="btn-outline-success" />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridState">
                <Form.Label>Country</Form.Label>
                <Form.Select
                  className="btn-outline-success"
                  defaultValue="Choose..."
                >
                  <option>Choose...</option>
                  <option>...</option>
                </Form.Select>
              </Form.Group>

              <Form.Group as={Col} controlId="formGridZip">
                <Form.Label>Zip</Form.Label>
                <Form.Control className="btn-outline-success" />
              </Form.Group>
            </Row>

            <button className="btn btn-outline-success btn-lg">Submit</button>
          </Form>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Contact;
