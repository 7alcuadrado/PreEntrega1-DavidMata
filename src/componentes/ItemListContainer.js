import React from "react";
import styled from "styled-components";
import Clasicos from "./Clasicos";
import Novelas from "./Novelas";
import Periodismo from "./Periodismo";
import Promociones from "./Promociones";


const Inicio = (props) => {

    return ( 
        <div>
          <TituloCategoria>{props.greeting} {props.categoriaClasicos}</TituloCategoria>
            <Clasicos />
        <TituloCategoria>{props.greeting} {props.categoriaNovelas}</TituloCategoria>
             <Novelas />
        <TituloCategoria>{props.greeting} {props.categoriaNuevoPeriodismo}</TituloCategoria>  
            <Periodismo />
        <TituloCategoria>{props.greeting} {props.categoriaPromociones}</TituloCategoria>  
            <Promociones />
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
 
export default Inicio;