import React, { useState, useEffect } from 'react';
import {useParams, Link} from "react-router-dom";
import axios from "axios";
import "./styles/View.css"

const View = () => {
    const [user, setUser] = useState(null);
    const {id} = useParams()

    useEffect(() =>{
        if (id) {
            getSingleUser(id);
        }
    },[id]);

    const getSingleUser = async (id) => {
        const response = await axios.get('http://localhost:3000/details')
            if(response.status === 200){
                setUser(response.data)
                console.log(response.data)
            }
      }


    return (
        <div>
            view
        </div>
    )
}

export default View
