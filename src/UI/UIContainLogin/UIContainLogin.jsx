import axios from 'axios';
import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';

export const UIContainLogin = () => {

  const UrlTokenLogin = 'https://backend-edw.herokuapp.com/login';

  const [username, setUsername] = useState();
  const [password, setPassword] = useState();

  const LogInUser = (e) => {

    e.preventDefault();

    axios.post(UrlTokenLogin, {
      "username": username,
      "password": password
    })
    .then(response => {
      if(response.data.Message === "Credenciales Invalidas"){
        alert("Ojo Con eso manito, revise la contraseña")
      }
      else{
        alert("Bienvenido")
        window.location = '/AllUsers'
      }
    }).catch (response => {
      console.log(response)
    })
  }

  return (
    <div>
        <div className='cardLoginForm'>
            <h1>LogIn User</h1>
            <div className='formValidateLogIn'>
                <input onChange={e => setUsername(e.target.value)} className='formUserName' placeholder='Username' type='text'></input>
                <input onChange={e => setPassword(e.target.value)} className='formPassword' placeholder='Password' type='password'></input>
                <div className='buttonsValidateUser'>
                    <button onClick={LogInUser} className='LogIn'>LogIn</button>
                    <h3>¿No tienes una cuenta?</h3>
                    <NavLink to="/"><button className='Register'>Register!</button></NavLink>
                </div>
            </div>
        </div>
    </div>
  )
}
