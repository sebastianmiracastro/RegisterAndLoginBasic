import axios from 'axios';
import React, { useState, useEffect } from 'react'
import {Table, TableContainer, TableHead, TableCell, TableBody, TableRow} from '@material-ui/core';

export const UIContentAllUsers = () => {

    const UrlAllUsers = 'https://backend-edw.herokuapp.com/usuarios';

    const [data, setData] = useState([]);

    const GetAllUsers = async () => {
        await axios.get(UrlAllUsers).then(response => {
            setData(response.data);
            console.log(response.data);
        })
    }

    useEffect(async() => {
        await GetAllUsers();
    },[])


    return (
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
                    {data.map(consola => {
                        <TableRow>
                            <TableCell>{consola.id}</TableCell>
                            <TableCell>{consola.username}</TableCell>
                            <TableCell>{consola.password}</TableCell>
                            <TableCell>{consola.name}</TableCell>
                        </TableRow>
                    })}
                </TableBody>
            </Table>
        </TableContainer>
    )
}
