import React ,{useState, useEffect} from 'react';
import {useParams, Link} from "react-router-dom";
import { useHistory, useLocation } from 'react-router-dom';
import axios from 'axios';
// import "./AddEdit.css";

import InputBase from "@material-ui/core/InputBase"
import Button from "@material-ui/core/Button";
import {Box,InputLabel,MenuItem,Typography} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    Grid,
    Select,
    FormControl
}from '@material-ui/core';
import TextField from "@material-ui/core/TextField";
import { toast } from 'react-toastify';
import Header from './Header';


const useStyles = makeStyles((theme) => ({
    formContainer:{
        width:'100%',
    },
    formStyle:{
        marginTop:'1em',
       width:'60%',
       boxShadow: "0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)",
       margin:"0 auto",
       padding:'1em',
    },
    btnButton2:{
        marginTop:'0.7em',
        border:'none',
        textDecoration:'none',
        background:'#253F66',
        // width:'8%',
        padding:'0.5em',
        fontSize:'1em',
    },
    submitBtn:{
        border:'none',
        textDecoration:'none',
        padding:'0.5em',
        color:'#fff',
    },
    
    textContainer:{
        width:'100%',
        justifyContent:'center',
        marginTop:'1em',
    },
    textItem:{
      padding:'1em',  
    },
    selectClass:{
        width:'225px',
        height:'40px',
    },
    leaveContainer:{
        display:'flex',
        flexDirection:'column',
        marginTop:'-1.1em',
        // marginTop:'0em',
    },
    labelClass:{
        color:'#757575',
        marginLeft:'-5em',
    },
    
}))

const FormPage = () => {
    const [disable, setDisable] = React.useState(false);
    const history = useHistory();
    
    const url = 'http://localhost:3004/details'
    const [data , setData] = useState({
        accName:"",
        accNumber:"",
        branchAddress:"",
        branchName:"",
        noOfLeaves:"",
        noOfBooklets:"",
    })
    
    // const addContact = async (data) =>{
    //     const response = await axios.post('http://localhost:3004/details', data)
    //     if (response.status === 200) {
    //         toast.success(response.data);
    //     }else{
    //         console.log('eror')
    //     }
    // }
    const {id} = useParams();
    
    useEffect(()=> {
        if(id) {
            getSingleUser(id)   
        }

    },[id])

    const getSingleUser = async(id) =>{
        const response = await axios.get(`http://localhost:3004/details/${id}`);
        if(response.status === 200) {
            setData({...response.data[0]})
        }
    }
    const initialData = { accName:data.accName,
        accNumber:data.accNumber,
        branchAddress:data.branchAddress,
        branchName:data.branchName,
        noOfLeaves:data.noOfLeaves,
        noOfBooklets:data.noOfBooklets,
    }
    console.log('i am ',data)
    console.log('i am also', initialData)
    

    const addUser = async(data) =>{
        const response = await axios.post(url,data);
        if(response.status === 200){
            toast.success(response.data)
        }
    }

    const updateUser = async(initialData, id) =>{
        const response = await axios.put(`${url}/${id}`,data).then(res=>{
            console.log(res.data)
            toast.success('successfully added')
        })
    }
    const handleSubmit = (e) =>{
        e.preventDefault();
        if(!data.accNumber){
            toast.error('please input an account number')
        }else{
            if(!id){
                addUser(data)
            }else{
                updateUser(data, id)
            }
        }
      
        // addUser(data)
        // setData({
        //     accName:"",
        //     accNumber:"",
        //     branchAddress:"",
        //     branchName:"",
        //     noOfLeaves:"",
        //     noOfBooklets:"",
        // })
       
    }
   
    
    const handleInputChange = (e) => {
        const newdata = {...data}
        newdata[e.target.id] = e.target.value
        setData(newdata)
        console.log(newdata);
    }

    
    const classes = useStyles();
    return (
        <Box className={classes.formContainer}>
            <Header/>
                <form autoComplete='off' className={classes.formStyle}> 
                    <Grid container className={classes.textContainer}>
                        <Grid item className={classes.textItem}>
                            <TextField
                                className={`${classes.textField}`}
                                value={data.accNumber}
                                id="accNumber"
                                name='accNumber'
                                inputProps={{minlength:10, maxLength: 10}}
                                label="Account Number"
                                variant="outlined"
                                size="small"
                                onChange={(e) => handleInputChange(e)}
                            />
                        </Grid>
                        <Grid item className={classes.textItem}>
                            <TextField
                                className={`${classes.textFieldtextItem}`}
                                value={data.accName}
                                id="accName"
                                name='accName'
                                label="Account Name"
                                variant="outlined"
                                size="small"
                                onChange={(e) => handleInputChange(e)}
                            />
                        </Grid>
                        <Grid item className={classes.textItem}>
                            <TextField
                            className={`${classes.textFieldtextItem}`}
                            value={data.branchName}
                            id="branchName"
                            name='branchName'
                            label="Branch Name"
                            variant="outlined"
                            size="small"
                            onChange={(e) => handleInputChange(e)}
                            />
                        </Grid>
                        

                    </Grid>
                    
                    <Grid container className={classes.textContainer}>
                            <Grid item  className={classes.textItem}>
                                <TextField
                                className={`${classes.textField}`}
                                value={data.branchAddress}
                                id="branchAddress"
                                name='branchAddress'
                                label="Branch Address"
                                variant="outlined"
                                size="small"
                                onChange={(e) => handleInputChange(e)}
                                />
                            </Grid>
                            <Grid item  className={classes.textItem}>
                                <TextField
                                className={`${classes.textField}`}
                                value={data.solId}
                                id="solId"
                                name='solId'
                                label="Sol id"
                                variant="outlined"
                                size="small"
                                onChange={(e) => handleInputChange(e)}
                                />
                            </Grid>
                            <Grid item  className={classes.textItem}>
                                <TextField
                                className={`${classes.textField}`}
                                value={data.deliveryAddress}
                                id="deliveryAddress"
                                name='deliveryAddress'
                                label="Delivery Address"
                                variant="outlined"
                                size="small"
                                onChange={(e) => handleInputChange(e)}
                                />
                            </Grid>
                    </Grid>
                   
                    
                   <Grid container className={classes.textContainer}>
                        <Grid item className={classes.textItem}>
                            <TextField
                            className={`${classes.textField}`}
                            value={data.sortCode}
                            id="sortCode"
                            name='sortCode'
                            label="Sort Code"
                            variant="outlined"
                            size="small"
                            onChange={(e) => handleInputChange(e)}
                            />
                        </Grid>
                        <Grid item className={classes.textItem}>
                            <TextField
                            className={`${classes.textField}`}
                            value={data.schemeCode}
                            id="schemeCode"
                            name='schemeCode'
                            label="Scheme Code"
                            variant="outlined"
                            size="small"
                            onChange={(e) => handleInputChange(e)}
                            />
                        </Grid>
                        <Grid item className={classes.textItem}>
                            <TextField
                            className={`${classes.textField}`}
                            value={data.rangeStart}
                            id="rangeStart"
                            name='rangeStart'
                            label="Range Start"
                            variant="outlined"
                            size="small"
                            onChange={(e) => handleInputChange(e)}
                            />
                        </Grid>
                    </Grid>
                   
                   <Grid container className={classes.textContainer}>
                       <Grid item className={classes.textItem}>
                        <TextField
                            className={`${classes.textField}`}
                            value={data.rangeStop}
                            id="rangeStop"
                            name='rangeStop'
                            label="Range Stop"
                            variant="outlined"
                            size="small"
                            onChange={(e) => handleInputChange(e)}
                            />
                        </Grid>
                        <Grid item className={classes.textItem}>
                            <TextField
                            className={`${classes.textField}`}
                            value={data.chequeType}
                            id="chequeType"
                            name='chequeType'
                            label="Cheque Type"
                            variant="outlined"
                            size="small"
                            onChange={(e) => handleInputChange(e)}
                            />
                        </Grid>
                        <Grid item className={classes.textItem}>
                           
                            <Box className={classes.leaveContainer}>
                                <label className={classes.labelClass}>Number of Leaves</label>
                                <select value={data.noOfLeaves}  id="noOfLeaves" onChange={(e) => handleInputChange(e)}
                                name='noOfLeaves'
                                className={classes.selectClass}
                                placeholder = 'Number of Leaves'
                                >
                                    
                                <option placeholder = 'Number of Leaves' value={(e)=> e.target.value} >25</option>
                                <option value={(e)=> e.target.value}>50</option>
                                </select> 
                            </Box>
                             
                        </Grid>

                    </Grid>

                    <Grid container className={classes.textContainer}>
                        <Grid  item className={classes.textItem}>
                        <Box className={classes.leaveContainer}>
                                <label className={classes.labelClass}>Number of Booklets</label>
                                <select value={data.noOfBooklets}  id="noOfBooklets" onChange={(e) => handleInputChange(e)}
                                name='noOfBooklets'
                                className={classes.selectClass}
                                placeholder = 'Number of Booklets'
                                >
                                    
                                <option placeholder = 'Number of Leaves' value={(e)=> e.target.value} >25</option>
                                <option value={(e)=> e.target.value}>50</option>
                                </select> 
                            </Box>
                        </Grid>
                        <Grid item  className={classes.textItem}>
                            <TextField
                            className={`${classes.textField}`}
                            value={data.deliveryCode}
                            id="deliveryCode"
                            name='deliveryCode'
                            label="Delivery Code"
                            variant="outlined"
                            size="small"
                            onChange={(e) => handleInputChange(e)}
                            />
                        </Grid>
                        
                        
                    </Grid>
                    
                    
                    
                    <div>
                   <Button type="submit" variant='contained' color='primary' size='small' className={classes.btnButton2}  
                     onClick={(e) => handleSubmit(e) }
                    disableElevation value={id ? "update" : "Add"}>
                        
                     <Link to='/Pending' className={classes.submitBtn} > Submit </Link></Button>
                   
                   
                    </div>
                </form>
        </Box>
    )
}

export default FormPage;
