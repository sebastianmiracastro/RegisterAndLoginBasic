import axios from 'axios';
import React, { useState, useEffect } from 'react'
import {Table, TableContainer, TableHead, TableCell, TableBody, TableRow} from '@material-ui/core';

export const UIContentAllUsers = () => {

    const UrlAllUsers = 'https://backend-edw.herokuapp.com/usuarios';

    const [data, setData] = useState([]);

    const GetAllUsers = async () => {
        await axios.get(UrlAllUsers).then(response => {
            console.log(response.data);
        })
    }

    useEffect(async() => {
        await GetAllUsers();
    },[])


    return (
        <div>
            
        </div>
    )
}
