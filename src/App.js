import React from "react";
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import ItemListContainer from "./componentes/ItemListContainer"
import Novelas from "./componentes/Novelas";
import Clasicos from "./componentes/Clasicos";
import Periodismo from "./componentes/Periodismo";
import Promociones from "./componentes/Promociones";
import Post from "./componentes/Post";
import Header from "./componentes/Header";
import Footer from "./componentes/Footer";
import styled from "styled-components";


const App = () => {
  return ( 
    <>  
      <BrowserRouter>
            <ContenedorPrincipal>
              <ContenedorHeader>
                <Header />
              </ContenedorHeader>
              <Main>
                <Routes>
                    <Route path="/" element={<ItemListContainer  greeting={"Bienvenidos a la categoria de"}
                                    categoriaClasicos= {"Clasicos de la Literatura Universal"}
                                    categoriaNovelas={"Novelas del siglo XIX"}
                                    categoriaNuevoPeriodismo={"Nuevo Periodismo Iberoamericano"}
                                    categoriaPromociones={"Promociones con 30% de descuento"}
                                  />} />
                    <Route path="/novelas" element={<Novelas greeting={"Bienvenidos a la categoria de"} categoriaNovelas= {"Novelas del siglo XIX"} />}/>
                    <Route path="/clasicos" element={<Clasicos greeting={"Bienvenidos a la categoria de"} categoriaClasicos={"Clasicos de la Literatura Universal"}/>} />
                    <Route path="/periodismo" element={<Periodismo greeting={"Bienvenidos a la categoria de"} categoriaNuevoPeriodismo={"Nuevo Periodismo Iberoamericano"} />}/>
                    <Route path= "/promociones" element={<Promociones greeting={"Bienvenidos a la categoria de"} categoriaPromociones={"Promociones con 30% de descuento"}/>}/>
                    <Route path="/clasicos/:id" element={<Post />} />
                </Routes> 
              </Main>
              <ContenedorFooter>
                <Footer  
                categoriaClasicos= {"Clasicos de la Literatura Universal"}
                categoriaNovelas={"Novelas del siglo XIX"}
                categoriaNuevoPeriodismo={"Nuevo Periodismo Iberoamericano"}
                categoriaPromociones={"Promociones con 30% de descuento"}
                 />
              </ContenedorFooter>
            </ContenedorPrincipal>
        </BrowserRouter>
    </>
      
  );
}

const ContenedorHeader = styled.div `
      display: flex;
      align-items: center;
`;

const ContenedorPrincipal = styled.div`
      height: 100vh;
      padding: 40px;
      width: 90%;
      max-width: 1200px;
`;

const Main = styled.main `
      
      background: #fff;
      padding: 40px;
      box-shadow: 0px 0px 5px rgba(129, 129, 129, 0.1)

`;

const ContenedorFooter = styled.footer `
      background: #000;
      padding: 40px;
      box-shadow: 0px 0px 5px rgba(129, 129, 129, 0.1)

`;
 
export default App;