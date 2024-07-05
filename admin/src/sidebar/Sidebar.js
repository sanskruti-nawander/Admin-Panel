import React from 'react';
import { FaHome, FaClipboardList, FaBox } from 'react-icons/fa';
import './Sidebar.css';
import { useNavigate } from 'react-router-dom';

const Sidebar = () => {
const navigate=useNavigate()
const Exi_Prod=()=>{
  navigate("/products")
}
const Add_Prod=()=>{
  navigate("/addproducts")
}

  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <img  className="logo-techasia" src="https://techasiamechatronics.com/wp-content/uploads/2023/03/techAsia-LOGO_horizontal1028.png"/> 
        <div className="sidebar-title"></div>
      </div>
      <div className="sidebar-menu">
        <a href="#" className="sidebar-link active">
          <FaHome className="sidebar-icon" />
          Home
        </a>
        
        <a href="#" className="sidebar-link"  onClick={()=>Exi_Prod()}>
          <FaBox className="sidebar-icon" />
         Existing Products
        </a>
        <a href="#" className="sidebar-link" onClick={()=>Add_Prod()}>
          <FaClipboardList className="sidebar-icon" />
         Add Products
        </a>
    
      </div>
    </div>
  );
};

export default Sidebar;
