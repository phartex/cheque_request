import {Link, useParams} from "react-router-dom";
import { toast } from 'react-toastify';
import "./styles/Pending.css"
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
import Pagination from './Pagination';
import Header from './Header';

const Draft = () => {
    return (
        <Box>
            <Header/>
            <Box>
                Draft
            </Box>
        </Box>
    )
}

export default Draft
