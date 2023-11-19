import React from 'react';

const EmployeeCard = (props) => {
    return (

        <div className='flex items-center justify-center' style={{ margin: "auto", width:"40.9rem",padding:"50px",backgroundColor:"#12AD2B",alignItems:"center",textAlign:"center"}}>


                <div className='border-2  m-1 md:w-2/4  md:h-2/4  flex flex-col items-center justify-center rounded-lg border-black-600 shadow p-3 relative '>
                    <img  className=' rounded-lg border-black-300 shadow border-2  h-36  w-full ' src={props.employee.avatar}/> 
                     <center style={{color:"white",textAlign:"center",fontSize:"28px"}}>  
                     Name:{props.employee.first_name} 
                     <br></br>
                  Id:{props.employee.id}
                  <br></br>
                  Address:Delhi
                  </center>
                </div>
        </div>
       
    );
};

export default EmployeeCard;
