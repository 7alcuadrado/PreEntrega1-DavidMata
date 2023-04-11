import React from "react";
import styled from "styled-components";

const Footer = (props) => {
    return ( 
        <ContenedorFooter>
                <Agrupador>
                    <Lista>{props.categoriaNovelas}</Lista>
                    <Lista>{props.categoriaClasicos}</Lista >
                    <Lista>{props.categoriaNuevoPeriodismo}</Lista >
                    <Lista>{props.categoriaPromociones}</Lista >
                </Agrupador>
        </ContenedorFooter>
     );
}

const ContenedorFooter = styled.footer `
            color: white;
            flex-direction: column;
            justify-content: flex-end;
            align-items: center;

    `;

const Agrupador = styled.ul `
        display: flex;
        justify-content: space-around;
        align-items: flex-end;

`;

const Lista = styled.li `
        list-style: none;

`;
 
export default Footer;