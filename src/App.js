import { 
  BrowserRouter,
  Routes,
  Route } from "react-router-dom";
import './App.css';
import { UIContainError404 } from "./UI/UIContainError404/UIContainError404";
import { UIContainLogin } from "./UI/UIContainLogin/UIContainLogin";
import { UIContainRegister } from './UI/UIContainRegister/UIContainRegister';
import { UIContentAllUsers } from "./UI/UIContentAllUsers/UIContentAllUsers";



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element= { <UIContainRegister /> } />
        <Route path='/LogIn' element= { <UIContainLogin /> } />
        <Route path='/AllUsers' element= {<UIContentAllUsers /> } />
        <Route path='*' element={ < UIContainError404 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
