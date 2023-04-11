import React from "react";
import styled from "styled-components";
import librosClasicos from "./data/librosClasicos";
import { useParams } from "react-router";

const Post = () => {
        const {id} = useParams()
        return ( 
        <>
        {librosClasicos[id -1] ?
            <Contenedor>
                <Titulo>{librosClasicos[id -1].nombre}</Titulo>
                <p>{librosClasicos[id -1].fecha}</p>
            </Contenedor>
        :
         <Error404> Este articulo no existe </Error404>
        }
     </>
     );
}

const Contenedor = styled.div `
        height 100px;
        text-align: center;

`;
 
const Titulo = styled.h1 `

    font-size:20px;
    margin: 10px;
    padding 15px;
    font-size: 30px;

`;

const Error404 = styled.div ` 

    font-size: 30px;
    text-align: center;
    color: blue;
    

`;

export default Post;