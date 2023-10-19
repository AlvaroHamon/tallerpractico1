
import { CssBaseline } from '@mui/material';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Productos from './components/Producto/Producto';


export default function App() {
  return (
    <div className="App">
      <CssBaseline />
      <Navbar />
      <Productos />
      <Footer />
    </div>
  );
}
