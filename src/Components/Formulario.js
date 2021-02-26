import React,{useContext, useState} from 'react';
import {CategoriasContext} from '../context/CategoriasContext';
const Formulario = () => {

    const { categorias }=useContext(CategoriasContext);
    const [busqueda , guardarBusqueda]=useState({
        ingrediente:'',
        categoria:''
    });
    //lee los contenidos del formulario
    const handleOnchange=(e)=>{
        guardarBusqueda({...busqueda,
            [e.target.name]:e.target.value
        })
        
    }

    //gaurdar los datos del formulario
    const handleSubmit=e=>{
        e.preventDefault();
        
    }

    return ( 
        <form
        className="col-12"
        onSubmit={handleSubmit}
        >
            <fieldset className="text-center">
                <legend>Busca Bebidas por Categoria o Ingrediente</legend>
            </fieldset>
            <div className="row mt-4">
                <div className="col-md-4">
                    <input
                        name="ingrediente"
                        className="form-control"
                        type="text"
                        placeholder="Buscar por Ingrediente"
                        onChange={handleOnchange}
                        />
                </div>
                <div className="col-md-4">
                    <select
                        className="form-control"
                        name="categoria"
                        onChange={handleOnchange}
                    > 
                        <option value="">--Selecciona Categoria--</option>
                        {categorias.map(categoria=>(
                            <option 
                                key={categoria.strCategory}
                                value={categoria.strCategory}
                                >
                                                             {categoria.strCategory}</option>
                        ))}    
                    </select>
                </div>
                <div className="col-md-4">
                    <input
                        type="submit"
                        className="btn btn-clock-p"
                        value="Buscar Recetas" 
                    />
                </div>

            </div>
        </form>

     );
}
 
export default Formulario;