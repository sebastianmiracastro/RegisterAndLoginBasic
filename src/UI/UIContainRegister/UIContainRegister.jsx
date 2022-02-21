import axios from 'axios';
import React, {useState} from 'react'
import { NavLink } from 'react-router-dom';


export const UIContainRegister = () => {

  const [userName, setUserName] = useState();
  const [password, setPassword] = useState();
  const [name, setName] = useState();

  const response = async (e) => {
    
    e.preventDefault();

    await axios.post('https://backend-edw.herokuapp.com/usuario', {
      username: userName,
      password: password,
      name: name
    }).then(function (response) {
      console.log(response);
    }).catch(function (error) {
      console.log(error)
    })

  }

  return (
    <form onSubmit={response}>
        <div className='cardRegisterForm'>
            <h1>Register New User</h1>
            <div className='formValidateNewUser'>
                <input className='formUserName' onChange={e => setUserName(e.target.value)} placeholder='Username' type='text'></input>
                <input className='formPassword' onChange={e => setPassword(e.target.value)} placeholder='Password' type='password'></input>
                <input className='formName' onChange={e => setName(e.target.value)} placeholder='Name' type='text'></input>
                <div className='buttonsValidateUser'>
                    <NavLink to="/LogIn"><button className='Register'>Register</button></NavLink>
                    <h3>¿Ya tienes una cuenta?</h3>
                    <NavLink to="/LogIn"><button className='LogIn'>Log In</button></NavLink>
                </div>
            </div>
        </div>
    </form>
  )
}
