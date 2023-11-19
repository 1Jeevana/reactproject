

import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { Form, Button, Container, Row, Col,Image} from "react-bootstrap";
import logo from "../assets/logo.jpeg";



function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can add your own logic to validate the username and password here
    // For simplicity, I will assume that any input is valid
    // history.push("/dashboard");
    navigate('/dashboard');
  };

  return (
    <Container style={{width:"100%",maxHeight:"100%",backgroundColor:"black"}}>
      
      <div style={{display:"flex"}}>
      <Image src={logo} className="logo"style={{margin:"10px",width:"6rem"}}/>
      <div className='flex items-center justify-center text-2xl text-green-500' style={{ fontSize: "25px", margin: "auto", textAlign: "center", width: "50.9rem", padding: "20px", backgroundColor: "#0000FF", color: "white" }}>
        Welcome to Web App Development by GreenZine Technologies
      </div>
      </div>
              
    <Container style={{ marginTop: "auto", width:"20.9rem",margin:"auto",padding:"50px"}}>
      <Row style={{ justifyContent: "center" }}>
        <Col xs={12} md={6} style={{ backgroundColor: "#12AD2B", padding: "20px", border: "1px solid #d6d8db", borderRadius: "5px" }}>
          <Form onSubmit={handleSubmit}>
            <Form.Group style={{ marginBottom: "20px",color:"white" }} controlId="formBasicEmail">
              <Form.Label className="text-white">Username::</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </Form.Group>

            <Form.Group style={{ marginBottom: "20px",color:"white" }} controlId="formBasicPassword">
              <Form.Label className="text-white">Password::</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>
            <Button variant="primary" type="submit" style={{ marginTop: "15px",backgroundColor: "#FF0000",width:"7.5rem",maxHeight:"2.5rem" }}>
              Login
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
     </Container>
  );
}

export default Login;
