import './App.css';
import Login from './login/Login';
import { Route, Routes, useNavigate} from "react-router-dom";
import Home from './home/Home';
import Products from './products/existing_products/Products';
import AddProducts from './products/add_products/AddProducts';
import {  useState } from 'react';
import Sidebar from './sidebar/Sidebar';


function App() {
  const [header, setHeader] = useState();
  
  const navigate = useNavigate();

  
  return (
    <>
    
    <div className="main-container">
      
      <div className="sidebar-container">
        <Sidebar setHeader={setHeader} />
      </div>

      <div className="content-container">
        <Routes>
        <Route path="/login" element={<Login />} />6
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/addproducts" element={<AddProducts />} />
        </Routes>

      </div>
    </div>
      

    </>






  );
}

export default App;
