import React, {useState, useEffect} from 'react'
import {Link} from "react-router-dom"
import "./styles/Pending.css"
import axios from 'axios'

const Pending = () => {
    const [data, setData] = useState([]);

    
    useEffect(() => {
        getUsers()
      }, []);
      
  const getUsers = async () => {

  }
    return (
        <div>
            Pending
        </div>
    )
}

export default Pending
