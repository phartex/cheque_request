import React, { useState, useEffect } from 'react';
import {useParams, Link} from "react-router-dom";
import axios from "axios";
import "./styles/View.css";


const View = () => {
    const [user, setUser] = useState(null);
    const {id} = useParams()

    useEffect(() =>{
        if (id) {
            getSingleUser(id);
        
        }
    },[id]);

    const getSingleUser = async (id) => {
        const response = await axios.get(`http://localhost:3004/details/${id}`)
            console.log('response', response)
            if(response.status === 200){
                setUser(response.data)
               
            }
    
    }


    return (
        <div>
            <h1>View user details</h1>
            <div>
                <strong>Account Name: {id}</strong>
                <br/>
                <span>{user && user.accName}</span>
                <br/>
                <span>{user && user.accNumber}</span>
                <br/>
                <span>{user && user.branchName}</span>
                <br/>
                <span>{user && user.branchAddress}</span>
            </div>
        </div>
    )
}

export default View
