import React,{useContext} from 'react';
import {RecetasContext} from '../context/RecetasContext';



const ListaRecetas = () => {
    
    const {recetas}=useContext(RecetasContext)  ;
/*
    console.log("recetas1")

    
    console.log(recetas)
    console.log("recetas2")*/
    return ( 
        <h1>listarecetas</h1>
     );
}
 
export default ListaRecetas;