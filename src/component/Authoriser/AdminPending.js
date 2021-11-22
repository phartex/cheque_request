import React, {useState, useEffect} from 'react'
import {Link, useParams} from "react-router-dom";
import { toast } from 'react-toastify';
import "../styles/Pending.css"
import axios from 'axios'
import faker from 'faker';
import {Box,Button,Typography} from '@material-ui/core';
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
}from '@material-ui/core';
import 'react-toastify/dist/ReactToastify.css'
import Pagination from '../Pagination';
import AdminHeader from './AdminHeader';




const useStyles = makeStyles((theme) => ({
    btnView:{
        width:'80px',
        backgroundColor:'#253F66',
        color:'#ffff',
        padding:'0.4em',
        border:"none",
        marginRight:'0.5em',
    },
    btnClose:{
        width:'80px',
        backgroundColor:'#253F66',
        color:'#ffff',
        padding:'0.4em',
        border:"none",
        marginRight:'0.5em',
        position:'top',
        marginTop:'5em',
    },
    tableHeaderCell:{
        fontWeight:'bold',
        // backgroundColor:'#212529',
        color:'#212529',
    },
    modalOverlay:{
        position: 'fixed',
        top: '0',
        left: '0',
        width: '100%',
        height: '100%',
        background: 'rgba(0, 0, 0, 0.5)',
        display: 'grid',
        placeItems: 'center',
        transition: 'all 0.3s linear',
        visibility: 'hidden',
        zIndex: '10',
    },
    showModal:{
        visibility: 'visible',
        zIndex: '10',
        position: 'fixed',
        top: '0',
        left: '0',
        width: '100%',
        height: '100%',
        background: 'rgba(0, 0, 0, 0.5)',
        display: 'grid',
        placeItems: 'center',
        transition: 'all 0.3s linear',
    },
    modalContainer:{
        background:'#fff',
        height:'60vh',
        width:'30%',
    },

}))

const AdminPending = () => {
    const [data, setData] = useState([]);
    const [user, setUser] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage, setPostsPerPage] =useState(5);

    const {id} = useParams()
    
    const url = 'http://localhost:3004/details'

    useEffect(() => {
        getUsers()
      }, []);

    
    useEffect(() =>{
        if (id) {
            getSingleUser(id);
        
        }
    },[id]);

    const getSingleUser = async (id) => {
        const response = await axios.get(`${url}/${id}`)
            console.log('response', response)
            if(response.status === 200){
                setUser(response.data)
               
            }
    
    }

    const getUsers = async () => {
    const response = await axios.get(`${url}`)
        if(response.status === 200){
            setData(response.data)
            console.log(response.data)
        }
  }
  const onDeleteUser = async (id) =>{
      if(window.confirm("Are you sure that you wanted to delete that")){
          const response = await axios.delete(`${url}/${id}`);
          if(response.status === 200) {
            toast.success('successfully deleted')
            //   window.alert('successfully deleted')
              getUsers();
          }
      }
  }

  toast.configure()
  const notify = () =>{
      toast('basic notif')
  }

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = data.slice(indexOfFirstPost, indexOfLastPost);


  const classes = useStyles();
    return (
        <Box>
            <AdminHeader/>
        <TableContainer className={classes.tableContainer}>
        <Table className={classes.table} aria-label='simple'>
            <TableHead>
                <TableRow>
                    <TableCell className={classes.tableHeaderCell}>Account Name</TableCell>
                    <TableCell className={classes.tableHeaderCell}>Account Number</TableCell>
                    <TableCell className={classes.tableHeaderCell}>Branch Name</TableCell>
                    <TableCell className={classes.tableHeaderCell}>Branch Address</TableCell>
                    <TableCell className={classes.tableHeaderCell}>Status</TableCell>

                </TableRow>
            </TableHead>
            <TableBody>
            {currentPosts.map((item,index)=>{
                    return (
        
                        <TableRow key={index}>
                            <TableCell>{item.accName}</TableCell>
                            <TableCell>{item.accNumber}</TableCell>
                            <TableCell>{item.branchName}</TableCell>
                            <TableCell>{item.branchAddress}</TableCell>
                            <TableCell>pending</TableCell>
                            <TableCell classes={classes.btnContainer}>
                            <Link to={`/update/${item.id}`}><button className={classes.btnView}>Edit</button></Link>
                            <button className={classes.btnView} onClick= {() => onDeleteUser(item.id)}>Delete</button>
                            <button className={classes.btnView}
                                onClick={()=>{
                                    setUser(true)
                                    getSingleUser(item.id)
                                }}
                            >view</button>
                            </TableCell>
                            <TableCell></TableCell>
                        </TableRow>
                    )
                })}

            </TableBody>
                
               

            </Table>
            
        </TableContainer>
        <Box className={`${user ? classes.showModal : classes.modalOverlay }`}>
            {user && 
            <div className={classes.modalContainer}>
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
                            <span>{user && user.branchName}</span>
                            <br/>
                            <span>{user && user.branchName}</span>
                            <span>{user && user.branchName}</span>
                            <br/>
                            <span>{user && user.branchName}</span>
                            <br/>
                            <span>{user && user.branchName}</span>
                            <br/>
                            <span>{user && user.branchName}</span>
                            
                        </div>
                        <Button type="submit" variant='contained' className={classes.btnClose}
                            onClick={()=>setUser(false)}
                        >close</Button>
                        </div>
                    }
                </Box>
                <Pagination postsPerPage={postsPerPage} totalPosts={data.length} paginate={paginate}/>
                <p>{data.length}</p>
        </Box>

    )
}

export default AdminPending

// https://fakestoreapi.com/products