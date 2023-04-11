import React from "react";
import styled from "styled-components";
import NavBar from "./NavBar";

const Header = () => {
    return ( 
        <MainContainer>
            <Contenedor>
                <BrandName>Librería Manhattan</BrandName>
            </Contenedor>
            <Contenedor>
                <NavBar />
            </Contenedor>
        </MainContainer>     

     );
}

const MainContainer = styled.div `
        width: 100%;
        display: flex;
        justify-content: space-around;
        align-items: center;
`;


const BrandName = styled.h1 `
        color: #FF5733;
        font-size: 26px;
`;

const Contenedor = styled.div `
        display: flex;
        justify-content: flex-end;
`;

 
export default Header;