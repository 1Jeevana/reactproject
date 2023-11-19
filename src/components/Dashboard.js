import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Container, Row, Col, Image } from "react-bootstrap";
import logo from "../assets/logo.jpeg";
import userIcon from "../assets/user-icon.png";

function Dashboard() {
  const location = useLocation();
  const navigate = useNavigate();
  const username = location.state?.username || "User";

  const handleUserClick = () => {
    navigate('/employee-list');
  };

  const progressBarContainerStyle = {
    width: "80%", // Adjust the width as needed
    height: "20px", // Adjust the height as needed
    backgroundColor: "white", // Background color
    borderRadius: "5px", // Rounded corners
    margin: "10px 0", // Margin to separate progress bars
  };

  const progressBarStyle = {
    width: "40%", // Adjust the width as needed
    height: "100%", // Full height
    backgroundColor: "#10ffff", // Green color for Python
    borderRadius: "5px", // Rounded corners
    color: "black", // Text color
    textAlign: "center", // Center text
    paddingTop: "5px", // Adjust padding as needed
  };

  const progressBarStyleJava = {
    width: "60%", // Adjust the width as needed
    height: "100%", // Full height
    backgroundColor: "#FF50ff", // Yellow color for Java
    borderRadius: "5px", // Rounded corners
    color: "black", // Text color
    textAlign: "center", // Center text
    paddingTop: "5px", // Adjust padding as needed
  };

  const progressBarStyleCpp = {
    width: "80%", // Adjust the width as needed
    height: "100%", // Full height
    backgroundColor: "#ff7722", // Red color for C++
    borderRadius: "5px", // Rounded corners
    color: "black", // Text color
    textAlign: "center", // Center text
    paddingTop: "5px", // Adjust padding as needed
  };

  return (
    <Container style={{ width: "100%", maxHeight: "100%", backgroundColor: "black" }}>
      {/* <h1 style={{ color: "white", fontStyle: "Serif", margin: "9px", padding: "10px" }}>JEEVANA</h1> */}
      <div style={{display:"flex"}}>
      <Image src={logo} className="logo"style={{margin:"10px",width:"6rem"}}/>
      <div className='flex items-center justify-center text-2xl text-green-500' style={{ fontSize: "25px", margin: "auto", textAlign: "center", width: "50.9rem", padding: "20px", backgroundColor: "#0000FF", color: "white" }}>
        Welcome to Web App Development by GreenZine Technologies
      </div>
      </div>
      <Container style={{ margin: "auto", marginTop: "20px", width: "60.9rem", padding: "50px", backgroundColor: "#12AD2B" }}>
        <Row className="align-items-center">
          <Col xs={8}>
            <h1 className="dashboard-title text-center" style={{ color: "white" }}>Dashboard</h1>
          </Col>
          <Col xs={40} className="text-center">
            <Image src={userIcon} className="dashboard-icon" onClick={handleUserClick} />
            click here
          </Col>
        </Row>
        <Row className="justify-content-center">
          <h2 className="text-center">Welcome, {username}</h2>
        </Row>

        {/* Skill Bars */}
        <Row className="justify-content-center">
          <Col xs={12} className="text-center">
            <h3>Skills</h3>
            <div style={progressBarContainerStyle}>
              <div style={progressBarStyle}>JAVA 40%</div>
            </div>
            <div style={progressBarContainerStyle}>
              <div style={progressBarStyleJava}>C++  60%</div>
            </div>
            <div style={progressBarContainerStyle}>
              <div style={progressBarStyleCpp}>PYTHON  80%</div>
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Dashboard;




