
import { CssBaseline } from '@mui/material';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Productos from './components/Producto/Producto';
import Login from './components/Login/Login';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Crear from './components/Login/Create';


export default function App() {
  return (
    <Router>
      <CssBaseline />
      <Navbar />
      <Routes>
        <Route path='/' element={<Productos />} />
        <Route path='/login' element={<Login />} />
        <Route path='/create' element={<Crear />} />
      </Routes>
      <Footer />
    </Router>
  );
}
