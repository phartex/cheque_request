import React, {useState, useEffect} from 'react'
import {Link} from "react-router-dom"
import "./styles/Pending.css"
import axios from 'axios'
import faker from 'faker';
import { ListItem } from '@material-ui/core';


const identity = 1
let DETAILS = [], STATUSES = ['Active', 'pending','Blocked'];
for (let i = 0;i<12;i++){
    DETAILS[i] = {
        accNumber:Math.round(Math.random(2.5)*100000000),
        accName:faker.name.findName(),
        branchName:faker.name.findName(),
        branchAddress:faker.name.findName(),
        deliveryAddress:faker.name.findName(),
        sortCode:Math.random(),
        chequeType:1,
        noOfLeaves:Math.random(),
        noOfBooklets:Math.random(),
        schemeCode:'pc002',
        solId:parseInt('001'),
        deliverySol:parseInt('001'),
        rangeStart:1,
        id : Math.random(),
        rangeStop:50,
        registerId:Math.random(),
        userId:Math.floor(Math.random() * 10) + 1,
    }
}
const Pending = () => {
    const [data, setData] = useState([]);
    
 
    useEffect(() => {
        getUsers()
      }, []);

  const getUsers = async () => {
    const response = await axios.get('http://localhost:3000/details')
        if(response.status === 200){
            setData(response.data)
            console.log(response.data)
        }
  }
console.log("data=>", data)
    return (
        <div>
           <table>
               <thead>
                   <tr>
                       <th style={{textAlign:'center'}}>No.</th>
                       <th style={{textAlign:'center'}}>Account Name</th>
                       <th style={{textAlign:'center'}}>Account Number</th>
                       <th style={{textAlign:'center'}}>Branch Name</th>
                       <th style={{textAlign:'center'}}>Branch Address</th>    
                   </tr>
               </thead>
               <tbody>
                   {data.map((item, index) =>{
                       return (
                        <tr key={index}>
                            <th>{index + 1}</th>
                            <td>{item.accName}</td>
                            <td>{item.accNumber}</td>
                            <td>{item.branchName}</td>
                            <td>{item.branchAddress}</td>
                            <td>
                                <Link to={`/update/${item.id}`}>
                                    <button className="btn btn-edit">Edit</button>
                                </Link>
                                <button className="btn btn-delete">Delete</button>
                                <Link to={`/view/${item.id}`}>
                                    <button  className="btn btn-view">view</button>
                                </Link>
                            </td>
                        </tr>
                       )
                   })}
               </tbody>
           </table>
            
        </div>
    )
}

export default Pending
