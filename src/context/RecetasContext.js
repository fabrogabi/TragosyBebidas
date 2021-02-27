import React, { createContext,useState,useEffect } from 'react';
import axios from 'axios'


export const RecetasContext=createContext();

const RecetasProvider = (props) => {

    const [recetas,guardarRecetas]=useState([]);
    const [busqueda,buscarRecetas]=useState({
        ingredientes:'',
        categoria:''
    })
    const [consultar,guardarConsultar]=useState(false);

    useEffect(()=>{
       const obtenerReceta= async() =>{
        if (consultar){
            const urlrecetas=`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${busqueda.nombre}&c=${busqueda.categoria}`
        const resultado= await axios.get(urlrecetas);
       guardarRecetas(resultado.data.drinks);
       // console.log(resultado.data.drinks);
        }
        
       obtenerReceta();
       }
    },[busqueda])

    return ( 
        <RecetasContext.Provider
        value={{buscarRecetas,guardarConsultar}}
        >
            {props.children}
        </RecetasContext.Provider>
     );
}
 
export default RecetasProvider;
