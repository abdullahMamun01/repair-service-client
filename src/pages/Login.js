import React from "react";
import { Card, Form, FormControl, InputGroup, Button } from "react-bootstrap";
import { MdOutlineMarkEmailUnread } from "react-icons/md";
import { AiOutlineFacebook } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
//
import { FiKey } from "react-icons/fi";

const Login = () => {
  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{ height: "100vh", background: "#181818" }}
    >
      <Card
        className="px-4 py-4"
        style={{ width: "418px", background: "#1F1F1F" }}
      >
        <Card.Body>
          <Card.Title className="text-white">Repair Service</Card.Title>
          <div className="pt-4">
            <Card.Subtitle className="mb-3 text-muted">
              sign in with
            </Card.Subtitle>
            <div className="gap-1">
              <button className="btn btn-outline-secondary me-3">
                <FcGoogle className="fs-4" />
              </button>
              <button className="btn btn-outline-secondary">
                <AiOutlineFacebook className="fs-4" />
              </button>
            </div>
          </div>
          <div className="py-4">
            <Form.Label htmlFor="inlineFormInputGroup" className="text-white">
              email address
            </Form.Label>
            <InputGroup className="mb-2">
              <InputGroup.Text>
                <MdOutlineMarkEmailUnread />
              </InputGroup.Text>
              <FormControl id="inlineFormInputGroup" placeholder="your email" />
            </InputGroup>
            {/*  */}
            <Form.Label htmlFor="inlineFormInputGroup" className="text-white">
              password
            </Form.Label>
            <InputGroup className="mb-2">
              <InputGroup.Text>
                <FiKey />
              </InputGroup.Text>
              <FormControl id="inlineFormInputGroup" placeholder="Username" />
            </InputGroup>
            <Button type="submit" className="w-100 btn btn-success mt-1">
              Sign in
            </Button>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Login;
