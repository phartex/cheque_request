import React, {useState, useEffect} from 'react'
import {Link} from "react-router-dom"
import "./styles/Pending.css"
import axios from 'axios'
import faker from 'faker';
import { ListItem } from '@material-ui/core';



const Pending = () => {
    const [data, setData] = useState([]);
    
 
    useEffect(() => {
        getUsers()
      }, []);

  const getUsers = async () => {
    const response = await axios.get('http://localhost:3004/details')
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
