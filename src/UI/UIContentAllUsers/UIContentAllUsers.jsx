import axios from 'axios';
import React, { useState, useEffect} from 'react'
import {Table, TableContainer, TableHead, TableCell, TableBody, TableRow} from '@material-ui/core';

export const UIContentAllUsers = () => {

    const UrlAllUsers = 'https://backend-edw.herokuapp.com/usuarios';

    const [users, setUsers] = useState([]);

    const GetUsers = () => {
        axios.get(UrlAllUsers).then(function(res) {
            setUsers(res.data);
        }).catch(function (e){
            console.log(e);
        })
    }

    useEffect( () => {
        GetUsers('')
    },[])

    return (
        <div>
            <h1>Users Lists</h1>
            {users.map(res => (
                <>
                <h4>{res[0]}</h4>
                <h4>{res[1]}</h4>
                <h4>{res[2]}</h4>
                <h4>{res[3]}</h4>
                </>
            ))}
        </div>
    )
}
