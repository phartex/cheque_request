import React from 'react';
import {Box,Button,Typography} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    listContainer:{
        listStyle:'none',
        display:'flex',
        flexDirection:'row',
        justifyContent:'center',
    },
    pageItem:{
        border:'2px solid black',
        margin:'0.5em',
        padding:'0.5em',
        cursor:'pointer',
    }
}))

const Pagination = ({postsPerPage, totalPosts,paginate}) => {
    const pageNumbers = [];

    for(let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++){
        pageNumbers.push(i);

    }

    const classes = useStyles()
    return (
        <Box>
            <ul className={classes.listContainer}>
               {pageNumbers.map(number => (
                   <li  key={number} className={classes.pageItem}>
                       <a  onClick={() => paginate(number)}>
                           {number}
                       </a>

                   </li>
               ))} 
            </ul>
            
        </Box>
    )
}

export default Pagination
