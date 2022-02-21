import axios from 'axios';
import React from 'react'
import { NavLink } from 'react-router-dom';

export const UIContainLogin = () => {

  const UrlTokenLogin = 'https://backend-edw.herokuapp.com/login';

  const response = (e) => {
    e.preventDefault();

    axios.get('')

  }


  return (
    <div>
        <div className='cardLoginForm'>
            <h1>LogIn User</h1>
            <div className='formValidateLogIn'>
                <input className='formUserName' placeholder='Username' type='text'></input>
                <input className='formPassword' placeholder='Password' type='password'></input>
                <div className='buttonsValidateUser'>
                    <button className='LogIn'>LogIn</button>
                    <h3>¿No tienes una cuenta?</h3>
                    <NavLink to="/"><button className='Register'>Register!</button></NavLink>
                </div>
            </div>
        </div>
    </div>
  )
}
