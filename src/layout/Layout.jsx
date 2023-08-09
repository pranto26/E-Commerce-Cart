import React from 'react';
import { NavLink } from 'react-router-dom';

const Layout = (props) => {
    return (
       <div>
        <div className="navbar bg-info">
  <div className="flex-1">
    <a className="btn btn-ghost normal-case text-xl">E-commerce Cart</a>
  </div>
  <div className="flex-none">
    <ul className="menu menu-horizontal px-1">
    <li><NavLink to={"/"}>Home</NavLink></li>
    <li><NavLink to={"/product"}>Product</NavLink></li>
    <li><NavLink to={"/login"}>Login</NavLink></li>
   
      
      
    </ul>
  </div>
</div>
{props.children}
       </div>
    );
};

export default Layout;