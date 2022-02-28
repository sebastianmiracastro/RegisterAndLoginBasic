import axios from 'axios';
import React, { useState, useEffect} from 'react'
import {Table, TableContainer, TableHead, TableCell, TableBody, TableRow} from '@material-ui/core';

export const UIContentAllUsers = () => {

    const UrlAllUsers = 'https://backend-edw.herokuapp.com/usuarios';

    const GetUsers = async () => {
        try{
            const res = await axios({
                url: `${UrlAllUsers}`,
                method: 'GET'
            })
            return res;
        } catch (e) {
            console.log(e);
        }
    }
    
    const [users, setUsers] = useState([])

    useEffect( () => {
        async function loadUsers() {
            const response = await GetUsers();

            if (response.status === 200) {
                setUsers(response.data)
                console.log(response.data);
            }
        } 
        loadUsers()
    }, [])

    return (
        <div>
            <h1>Users Lists</h1>
        </div>
    )
}
