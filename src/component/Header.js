import React , {useState, useEffect} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { ThemeProvider, createTheme } from '@material-ui/core/styles';
import {Box,Typography} from '@material-ui/core';
import Button from "@material-ui/core/Button";
import { Link, useLocation} from 'react-router-dom';
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    Grid,
}from '@material-ui/core';
import './styles/Pending.css'

const useStyles = makeStyles((theme) => ({
    mainHeader:{
        display:'flex',
        alignContent:'center',
        backgroundColor: '#253F66',
        textAlign:'center',
        // justifyContent:'center',
        height:'12vh',
    },
    chequetext:{
        width:'30%',
        paddingTop:'0.5em',
        color:'#fff',
        border:'none',
        textDecoration:'none',
        paddingLeft:'2em',
    },
    
    itemsContainer:{
      marginLeft:'7em',
      marginTop:'0.5em',
       width:'100%',
       color:'#fff',
    },
    items:{
        marginTop:'5em',
        color:'#fff',
        padding:'8em',
        textDecoration:'none',
        border:'none',
        
    },
    btnLink:{
        marginLeft:'6em',
        marginTop:'1em',
        border:'none',
        
    },
    requestLink:{
        textDecoration:'none',
    },
    active:{
        borderBottom: '2px solid #fff',
        background:'white'
    }

}))

const Header = () => {
    const [activeTab, setActiveTab] = useState('Home');

    const location = useLocation();

    useEffect(() =>{
        if(location.pathname === "/") {
            setActiveTab("home");
        }else if (location.pathname === "/pending"){
            setActiveTab("pending");
        }else if (location.pathname === "/approved"){
            setActiveTab("approved");
        }else if (location.pathname === "/rejected"){
            setActiveTab("rejected");
        }else if (location.pathname === "/draft"){
            setActiveTab("draft");
        }
    },[location])
    const classes = useStyles();
    return (
    <Box className={classes.mainHeader}>
        <Link to='/' className={classes.chequetext}>
            <h3 className={`${activeTab === "home" ? "active" : ""}`} 
            onClick={()=> setActiveTab('home')}>
                Cheque Automation</h3>
        </Link>
            <Grid container className={classes.itemsContainer}>
                <Grid item><Link to='/pending' className={classes.items}>
                <Typography className={`${activeTab === "pending" ? "active" : "non-active"}`} onClick={()=> setActiveTab('pending')}>PENDING</Typography>
                </Link></Grid> 

                <Grid Item><Link to='/approved' className={classes.items}>
                <Typography className={`${activeTab === "approved" ? "active" : "non-active"}`} onClick={()=> setActiveTab('approved')}>APPROVED</Typography>
                </Link></Grid>

                <Grid item><Link to='/rejected' className={classes.items}>
                <Typography className={`${activeTab === "rejected" ? "active" : "non-active"}`} onClick={()=> setActiveTab('rejected')}>REJECTED</Typography>
                </Link></Grid>

                <Grid item><Link to='/draft' className={classes.items}>
                <Typography className={`${activeTab === "draft" ? "active" : "non-active"}`} onClick={()=> setActiveTab('draft')}>DRAFT</Typography>
                </Link></Grid>  

                <Grid item><Link to='/formpage' className={classes.requestLink}><Button variant='contained' className={classes.btnLink}>Create Request</Button></Link></Grid>
            </Grid>
       </Box>
    )
}

export default Header;
