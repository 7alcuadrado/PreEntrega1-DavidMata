import React from "react";
import librosNYT from "./data/librosNYT";

const LibrosNuevos = () => {
    return ( 
        <ul>
            {librosNYT.map((book) => {
                return <li>{book.title} {book.isbn} {book.thumbnailUrl}</li>
            })}
        </ul>
     );
}
 
export default LibrosNuevos;