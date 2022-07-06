import React from "react";
import { Container, Navbar, InputGroup, FormControl, Button } from "react-bootstrap";
import "./MyHeader.css"
const MyHeader = () => {
  return (
    <div>
      <>
        <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="#home">Web Scrapper</Navbar.Brand>
          </Container>
        </Navbar>
        <div className="bodyUrl">
        <>
 
  <InputGroup className="p-5">
    <FormControl
      placeholder="Recipient's username"
      aria-label="Recipient's username"
      aria-describedby="basic-addon2"
    />
    <Button className="ms-2" variant="dark" id="button-addon2">
      Button
    </Button>
  </InputGroup>
  <div className="textBox">
    <textarea name="" id="" cols="30" rows="10"></textarea>
  </div>
</>
        </div>
      </>
    </div>
  );
};

export default MyHeader;
