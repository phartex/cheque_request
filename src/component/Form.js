import '../App.css'
import React, { useState, useEffect} from 'react';

import { makeStyles } from '@material-ui/core/styles';
import { ThemeProvider, createTheme } from '@material-ui/core/styles';
import {Typography} from '@material-ui/core';
import Container from "@material-ui/core/Container";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { Link } from 'react-router-dom';




const useStyles = makeStyles(theme => ({
    chequecontainer:{
        height:"100vh",
    },
    textContainer:{
        marginTop:'0em',
        padding:'0',
    },
    textField:{
    width: '80%',
    marginTop:'2em',
    },
    branchAddress:{
        width:'61%',
        marginLeft:'13.5em',
    },
    formstyle:{
        display:'grid',
        // flexDirection:'columns',
        gridTemplateColumns:'1fr 1fr 1fr',
        width:'65%',
        padding:'0',
        margin:'0 auto',
        // justifyContent:'flex-end',
        // margin:'0 auto'
    },
    
    requestHeader:{
        textAlign:'center',
        fontSize:'2em',
        lineHeight:'0.8',
    },
    branchaddress:{
        // width:'77%',
    },
    btnButton:{
        color:'#FF4500', 
        margin:'2em 0 0 5em',
        width:'20%',
        textAlign:'center',
        fontSize:'1.1em',
    },
    btnButton2:{
        color:'#FF4500', 
        margin:'2em 0 0 4em',
        width:'20%',
        textAlign:'center',
        fontSize:'1.1em',
    },
    btnLink:{
        textDecoration: 'none',
        color:'white',
    },
    buttonDiv:{
        display:'flex',
justifyContent:'center',
        flexDirection:'row',
    }

}))
const ChequeComponent = () => {
    // const [accNumber, setAccNumber] = useState('')
    // const [booklet, setBooklet] = useState(0)
    // const [leaves, setLeaves] = useState(50)
    // const [sol, setSol] = useState('001')
    const [formData, setFormData] = useState({
        accNumber: '',
        booklet:0,
        leaves: 50,
        sol: parseInt('001'),
      });
    const { accNumber,booklet,leaves,sol } = formData;
    const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });
    const [disable, setDisable] = React.useState(false);
    
    const handleSubmit = (e)=>{
        e.preventDefault()
        if (accNumber.length === 10){
            console.log(accNumber)
            
            
           
        }
        else{
            console.log('please put something')
         }
    }
    const classes = useStyles();
    return (
        <div className='chequecontainer'>
            <Typography className={classes.requestHeader}>Cheque Request</Typography>
            <Container className={classes.textContainer}>
           
            <form autoComplete='off' onSubmit={handleSubmit}>
               <div className={classes.formstyle} autoComplete='off'> 
                    <TextField
                        className={`${classes.textField}`}
                        value={accNumber}
                        onChange={(e)=> onChange(e)}
                        name='accNumber'
                        inputProps={{minlength:10, maxLength: 10}}
                        label="Account Number"
                        variant="outlined"
                        size="small"
                    />
                    <TextField
                        className={`${classes.textField}`}
                        onChange={(e)=> onChange(e)}
                        label="Account Name"
                        variant="outlined"
                        size="small"
                    />

                        <TextField
                        className={`${classes.textField}`}
                        label="Branch Name"
                        variant="outlined"
                        size="small"
                    />
              </div>
               <TextField
                className={`${classes.textField} ${classes.branchAddress}`}
                label="Branch address"
                variant="outlined"
                size="small"
              />
                <div className={classes.formstyle} autoComplete='off'>
                    <TextField
                        className={`${classes.textField}`}
                        label="Sol Id"
                        variant="outlined"
                        size="small"
                    />
                    <TextField
                        className={`${classes.textField}`}
                        onChange={(e)=> onChange(e)}
                        value={sol}
                        label="Delivery Sol"
                        variant="outlined"
                        size="small"
                    />
                    <TextField
                        className={`${classes.textField}`}
                        label="Sort Code"
                        variant="outlined"
                        size="small"
                    />
                    <TextField
                        className={`${classes.textField}`}
                        label="Scheme Code"
                        variant="outlined"
                        size="small"
                    />
                    <TextField
                        className={`${classes.textField}`}
                        label="Range Start"
                        variant="outlined"
                        size="small"
                    />
                    <TextField
                        className={`${classes.textField}`}
                        label="Range Stop"
                        variant="outlined"
                        size="small"
                    />    
                    <TextField
                        className={`${classes.textField}`}
                        label="Cheque Type"
                        variant="outlined"
                        size="small"
                    />    
                    <TextField
                        className={`${classes.textField}`}
                        onChange={(e)=> onChange(e)}
                        value={leaves}
                        label="No of Leaves"
                        variant="outlined"
                        size="small"
                    />    
                    <TextField
                        className={`${classes.textField}`}
                        onChange={(e)=> onChange(e)}
                        value={booklet}
                        label="No of Booklets"
                        variant="outlined"
                        size="small"
                    />    
                </div>
                <div className={classes.buttonDiv}>
                    <Button type="submit" variant='contained' color='primary' className={classes.btnButton}  
                    disabled={accNumber.length < 10} onClick={() => setDisable(true)}
                    disableElevation >
                    <Link to='/' className={classes.btnLink}>
                        Save as Draft
                    </Link>
                    </Button>

                    <Button type="submit" variant='contained' color='primary' className={classes.btnButton2}  
                    disabled={accNumber.length < 10} onClick={() => setDisable(true)}
                    disableElevation >
                    <Link to='/Pending' className={classes.btnLink}>
                    Submit
                    </Link>
                    </Button>
                </div>
            </form>
           
            </Container>
            
        </div>
    )
}

export default ChequeComponent
 