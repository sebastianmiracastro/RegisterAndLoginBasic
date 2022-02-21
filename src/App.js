import { 
  BrowserRouter,
  Routes,
  Route } from "react-router-dom";
import './App.css';
import { UIContainLogin } from "./UI/UIContainLogin/UIContainLogin";
import { UIContainRegister } from './UI/UIContainRegister/UIContainRegister';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element= { <UIContainRegister /> } />
        <Route path='/LogIn' element= { <UIContainLogin /> } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
