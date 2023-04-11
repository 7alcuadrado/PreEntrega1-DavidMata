import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import CartWidget from "./CartWidget";

const NavBar = () => {
    return ( 
        <ContenedorNavBar>
            <Menu>
                <NavLink to="/"> Inicio</NavLink>
                <NavLink to="/novelas"> Novelas</NavLink>
                <NavLink to="/clasicos"> Clasicos </NavLink>
                <NavLink to="/periodismo"> Nuevo Periodismo</NavLink>
                <NavLink to="/promociones"> Promociones</NavLink>
            </Menu>
            <CartWidget />
        </ContenedorNavBar>
     );
}

const ContenedorNavBar = styled.div`
        display: flex;

`;

const Menu = styled.nav`
        margin: auto;
        a {
            text-decoration: none;
            color: #165168;
            margin: 0 10px;
        }   
        
        a.hover {
            color: #19168
        }

        a.active {
            border-bottom: 2px solid #165168;
            padding-bottom: 3px
        }
`;

export default NavBar;