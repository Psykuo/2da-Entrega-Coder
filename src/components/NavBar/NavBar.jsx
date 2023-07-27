import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import "./NavBar.css";
import CartWidget from '../CartWidget/CartWidget';


export const NavBar = () => {

  return (
    <>
      <header className="navbar">
        
        <div className="container">

            <NavLink to="/">

              <h1 className="navbar-logo">LOGO</h1>

            </NavLink>

            <nav className="navbar-menu">

              <NavLink
                to={"/category/colecciones"}
                style={({ isActive }) => ({
                  color: isActive ? "#51c363" : "#8686d2",
                })}
              >
                Colecciones
              </NavLink>

              <NavLink
                to={"/category/marcas"}
                style={({ isActive }) => ({
                  color: isActive ? "#51c363" : "#8686d2",
                })}
              >
                Marcas
              </NavLink>

              <NavLink
                to={"/category/contacto"}
                style={({ isActive }) => ({
                  color: isActive ? "#51c363" : "#8686d2",
                })}
              >
                Contacto
              </NavLink>

              <div className="navbar-search">
              <input type="text" placeholder="Buscar productos" className="search-input" />
              <button className="search-button">Buscar</button>
              </div>
              
            </nav>
            <CartWidget />

          </div>
        
      </header>

      <Outlet />
      
      <footer>Footer</footer>
    </>
  );
};