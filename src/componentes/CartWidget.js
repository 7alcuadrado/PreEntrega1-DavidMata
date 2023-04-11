import React from "react";
import styled from "styled-components";
import IconCart2 from "../assets/shopping-cart.png"

const CartWidget = () => {
    return (  
        <ContenedorCart className="button">
            <ContenedorImagen>
                <CartImage img src={IconCart2} alt="shopping cart" /> 
            </ContenedorImagen>
            <ContenedorNumero>
                <Numero>3 items</Numero> 
            </ContenedorNumero>
        </ContenedorCart>
    );
}
 const CartImage = styled.img `
        width: 30px;
        height:30px;
        margin: 3px;
 `;

 const ContenedorCart = styled.button `
        display: inline-block;
        display: flex;
        margin: 1em;
        padding: 5px 15px 5px 15px;
        border: 1px solid #FF5733;
        border-radius: 20px;
        cursor: pointer;

        &:hover {
            box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.12);
            
          }

`;

 const ContenedorNumero = styled.div `
        height: 100%;
        display: flex;
        align-items: center;
        align-items: center;
        
//  `;

const Numero = styled.p `
        font-size: 16px;
        color: #FF5733;

` ;

const ContenedorImagen = styled.div `
`;



export default CartWidget;