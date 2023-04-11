import React from "react";
import librosClasicos from "./data/librosClasicos";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Clasicos = (props) => {

    return ( 
    <div>
        <TituloCategoria>{props.greeting} {props.categoriaClasicos}</TituloCategoria>
        <ul>
        {librosClasicos.map((book)=> {
                return <li key={book.id}><NavLink to={`/clasicos/${book.id}`}>{book.nombre}</NavLink></li>
            })}
        </ul>
    </div>
     );
}

const TituloCategoria = styled.h1 `
        font-size: 28px;
        color: #FF6C4D;
        text-align: center;
        text-decoration: underline;
        margin: 30px 10px 60px 10px;
`;
 
export default Clasicos;