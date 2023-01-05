
import './App.css';
import {Routes,Route,BrowserRouter} from "react-router-dom"
import Home from "./pages/Home"
import Users from "./pages/Users"
import Reports from './pages/Reports'

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/home" exact element={<Home/>}></Route>
      <Route path="/users" exact element={<Users/>}></Route>
      <Route path="/reports" exact element={<Reports/>}></Route>
      </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
