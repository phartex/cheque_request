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
import '../styles/Pending.css'

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
      marginLeft:'5em',
      marginTop:'0.5em',
       width:'100%',
       color:'#fff',
    },
    items:{
        marginTop:'5em',
        color:'#fff',
        padding:'8em 15em',
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

const AdminHeader = () => {
    const [activeTab, setActiveTab] = useState('adminhome');
    const [text, setText] = useState('cheque Automation')

    const location = useLocation()

    useEffect(() =>{
        if(location.pathname === '/adminhome'){
            setActiveTab('adminhome')
        }
        else if(location.pathname == '/adminpending'){
            setActiveTab('adminpending')
        }else if(location.pathname === '/adminapproved'){
            setActiveTab('adminapproved')
        }else if(location.pathname === '/adminrejected'){
            setActiveTab('adminrejected')
        }
    },[location])
    const classes = useStyles();
    return (
    <Box className={classes.mainHeader}>
        <Link to='/adminhome' className={classes.chequetext}>
            <h3 className={`${activeTab === "adminhome" ? "active" : ""}`} onClick={()=> setActiveTab('adminhome')}>{location.pathname === '/adminhome' ? 'cheque Automation' : 'Go back'}</h3>
          </Link>
            <Grid container className={classes.itemsContainer}>
                <Grid item><Link to='/adminpending' className={classes.items}>
                <Typography className={`${activeTab === "adminpending" ? "active" : "non-active"}`} onClick={()=> setActiveTab('adminpending')}>PENDING</Typography>
                </Link></Grid> 

                <Grid Item><Link to='/adminapproved' className={classes.items}>
                <Typography className={`${activeTab === "adminapproved" ? "active" : "non-active"}`} onClick={()=> setActiveTab('adminapproved')}>APPROVED</Typography>
                </Link></Grid>

                <Grid item><Link to='/adminrejected' className={classes.items}>
                <Typography className={`${activeTab === "adminrejected" ? "active" : "non-active"}`} onClick={()=> setActiveTab('adminrejected')}>REJECTED</Typography>
                </Link></Grid>

                {/* <Grid item><Link to='/draft' className={classes.items}>
                <Typography className={`${activeTab === "draft" ? "active" : ""}`} onClick={()=> setActiveTab('draft')}>DRAFT</Typography>
                </Link></Grid>   */}

            </Grid>
       </Box>
    )
}

export default AdminHeader;
