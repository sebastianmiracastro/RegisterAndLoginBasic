import axios from 'axios';
import React, { useState, useEffect } from 'react'

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
            <table>
                <thead>
                    <tr>
                        <th>UserName</th>
                        <th>Password</th>
                        <th>Name</th>
                    </tr>
                </thead>
            </table>
        </div>
    )
}
