import React, {useState, useEffect} from 'react'
import {Link, useLocation} from "react-router-dom";
import "../styles/Pending.css"
import axios from 'axios'
import {Box,Button,Typography} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import AdminApproved from './AdminApproved';
import AdminHeader from './AdminHeader';



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

const AdminHome = () => {
    const classes = useStyles();
   
    return (
        <Box className={classes.homeContainer}>
            <AdminHeader/>
            <Box className={classes.cardContainer}>
                <Link to='/adminpending' className={classes.linkRoot}>
                    <Card className={classes.root} variant='outlined'>
                        <CardContent>
                        <Typography className={classes.text}>pending</Typography>
                        
                        </CardContent>
                    </Card>
                </Link>

                <Link to='/adminapproved' className={classes.linkRoot}>
                    <Card className={classes.root} variant='outlined'>
                        <CardContent>
                        <Typography className={classes.text}>APPROVED</Typography>
                        </CardContent>
                    </Card>
                </Link>
            </Box>
            
            <Box className={classes.cardContainer}>
                <Link to='/adminrejected' className={classes.linkRoot}>
                    <Card className={classes.root} variant='outlined'>
                        <CardContent>
                        <Typography className={classes.text}>REJECTED</Typography>
                        </CardContent>
                    </Card>
                </Link>
                {/* <Card className={classes.root} variant='outlined'>
                    <CardContent>
                    <Typography className={classes.text}>DRAFT</Typography>
                    <Typography className={classes.totalText}>Total:</Typography>
                    </CardContent>
                        
                </Card> */}
            </Box>
            

        </Box>
    )
}

export default AdminHome

