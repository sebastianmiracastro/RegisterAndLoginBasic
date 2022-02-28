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
            <TableContainer>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>ID</TableCell>
                            <TableCell>Username</TableCell>
                            <TableCell>Password</TableCell>
                            <TableCell>Name</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {users.map(res => (
                            <TableRow>
                                <TableCell>{res[0]}</TableCell>
                                <TableCell>{res[1]}</TableCell>
                                <TableCell>{res[2]}</TableCell>
                                <TableCell>{res[3]}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
}
