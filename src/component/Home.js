import React, {useState, useEffect} from 'react'
import {Link, useParams} from "react-router-dom";
import { toast } from 'react-toastify';
import "./styles/Pending.css"
import axios from 'axios'
import faker from 'faker';
import {Box,Button,Typography} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import 'react-toastify/dist/ReactToastify.css'
import Pagination from './Pagination';
import Header from './Header';


const useStyles = makeStyles((theme) => ({
    homeContainer:{
        height:'86vh',
       
        
    },
    cardContainer:{
        display:'flex',
        justifyContent:'center',
    },
    linkRoot:{
        width:'25%',
        textDecoration:'none',
    },
    root:{
        '&:hover':{
            boxShadow: "0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)",
        },
    marginTop:"1em",
    borderRadius: '55px 0px 60px 0px',
    height:'35vh',
    
    marginLeft:'2em',
    cursor:'pointer',
    },
    text:{
        marginTop:'2em',
        textTransform:'uppercase'
    },
    totalText:{
        marginTop:'2em',
    }

}))

const Home = () => {
    const classes = useStyles();

   
    return (
        <Box className={classes.homeContainer}>
            <Header/>
            <Box className={classes.cardContainer}>
                <Link to='/pending' className={classes.linkRoot}>
                    <Card className={classes.root} variant='outlined'>
                        <CardContent>
                        <Typography className={classes.text}>pending</Typography>
                        </CardContent>
                    </Card>
                </Link>
                <Link to='/approved' className={classes.linkRoot}>
                    <Card className={classes.root} variant='outlined'>
                        <CardContent>
                        <Typography className={classes.text}>APPROVED</Typography>
                        </CardContent>
                            
                    </Card>
                </Link>
               
            </Box>
            
            <Box className={classes.cardContainer}>
                <Link to='rejected' className={classes.linkRoot}>
                    <Card className={classes.root} variant='outlined'>
                        <CardContent>
                        <Typography className={classes.text}>REJECTED</Typography>
                        </CardContent>
                    </Card>
                </Link>
               
                <Link to='draft'className={classes.linkRoot}>
                    <Card className={classes.root} variant='outlined'>
                        <CardContent>
                        <Typography className={classes.text}>DRAFT</Typography>
                        </CardContent>
                            
                    </Card>
                </Link>
            </Box>
            

        </Box>
    )
}

export default Home
