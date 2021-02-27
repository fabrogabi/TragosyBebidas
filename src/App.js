import React,{Fragment} from 'react';
import Header from './Components/Header'
import Formulario from './Components/Formulario'
import ListaRecetas from './Components/ListaRecetas'
import CategoriasProvider from './context/CategoriasContext';
import RecetasProvider from './context/RecetasContext';



function App() {
  return (
    <CategoriasProvider>
      <RecetasProvider>
        <Header />
        <div className="container mt-5">
          <div className="row">
            <Formulario/>

          </div>
          <ListaRecetas/>
        </div>

      

        </RecetasProvider>
    </CategoriasProvider>
  
 
      
  );
}

export default App;
