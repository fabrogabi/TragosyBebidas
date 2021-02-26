import axios from 'axios';
import React, {createContext, useEffect, useState} from 'react';



//crear context
export const CategoriasContext = createContext();



//provider es donde se encuentran las funciones y state

const CategoriasProvider= (props)=>{
    //create state del context
    const [categorias,guardarCategoria]=useState([]);
    //llamado a la api
useEffect(()=>{
    const obtenerCategorias= async()=>{
       const url='https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list';
       const categorias= await axios.get(url);
       guardarCategoria(categorias.data.drinks);
    }
    obtenerCategorias();
     
} ,[]);


    return(

        <CategoriasContext.Provider
            value={{categorias}}
        >
            {props.children}
        </CategoriasContext.Provider>
    );
}

export default CategoriasProvider;