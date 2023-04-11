import React from "react";
import styled from "styled-components";
import librosNovelas from "./data/librosNovelas";
import { NavLink } from "react-router-dom";

const Novelas = (props) => {
    return ( 
        <div>
            <TituloCategoria> {props.greeting} {props.categoriaNovelas}</TituloCategoria>
              <ul>
              {librosNovelas.map( (book) => {
                  return <li key={book.id}><NavLink to={`/novelas/${book.id}`}>{book.nombre}</NavLink></li>
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
 
export default Novelas;