import React from 'react';
import { NavLink } from 'react-router-dom';
import ErrorGif from '../../img/404Error.gif'
import '../../App.css';


export const UIContainError404 = () => {
  return (
    <div className='containerNotFound'>
        <img className='containerError404' src={ErrorGif} alt="ErrorImage404"></img>
        <NavLink to="/LogIn"><button className='btnNotFound'>Volver a la pagina principal</button></NavLink>
    </div>
  )
}
