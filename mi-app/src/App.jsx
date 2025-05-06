import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './Componentes/NavBar';
import ItemListContainer from './Componentes/ItemListContainer';
import ItemDetailContainer from './Componentes/ItemDetailContainer';
import './index.css';


function App() {
  return (
    <BrowserRouter>
      <NavBar />  {/* 👈 esto es clave */}
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/category/:categoryId" element={<ItemListContainer />} />
        <Route path="/item/:productId" element={<ItemDetailContainer />} />
        <Route path="*" element={<h2>Error 404 - Página no encontrada</h2>} />
      </Routes>
    </BrowserRouter>
  );
}



export default App;