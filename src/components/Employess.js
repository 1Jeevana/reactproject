import React, { useState, useEffect } from 'react';
import axios from "axios";
import { Container, Image } from "react-bootstrap";
import EmployeeCard from './EmployeeCard';
import logo from "../assets/logo.jpeg";

const Employees = () => {
  const [employeeData, setEmployeeData] = useState(null);
  const [query, setQuery] = useState('');

  const fetchData = () => {
    axios.get("https://reqres.in/api/users?page=2").then((res) => {
      setEmployeeData(res.data.data);
      console.log(typeof employeeData);
      console.log(res.data.data);
    });
  };

  useEffect(fetchData, []);

  if (employeeData == null) {
    // loading
    return (
      <>
        <div className='flex items-center justify-center h-screen'>
          loading
        </div>
      </>
    );
  }

  return (
    <>
      <Container style={{ width: "100%", maxHeight: "100%", backgroundColor: "black" }}>
        <div style={{ display: "flex" }}>
          <Image src={logo} className="logo" style={{ margin: "10px", width: "6rem" }} />
          <div className='flex items-center justify-center text-2xl text-green-500' style={{ fontSize: "25px", margin: "auto", textAlign: "center", width: "40.9rem", padding: "20px", backgroundColor: "#0000FF", color: "white" }}>
            Employees-List
          </div>
        </div>

       {/* search box */}
<div style={{ left: "20px", width: "full", backgroundColor: "whit", padding: "10px" }}>
  <center>
    <input
      type='text'
      placeholder='Search by name......'
      style={{ width: "300px", height: "40px", fontSize: "16px" }}  // Adjust width, height, and fontSize as needed
      className='p-1 m-2 w-3/4 border-white focus:outline-none'
      value={query}
      onChange={(event) => setQuery(event.target.value)}
    />
  </center>
</div>

        {
          employeeData
            .filter((employee) => {
              return (employee.first_name.toLowerCase().includes(query.toLowerCase().trim()));
            })
            .map((employee) => {
              return (<EmployeeCard employee={employee} key={employee.id} />);
            })
        }
      </Container>
    </>
  );
};

export default Employees;
