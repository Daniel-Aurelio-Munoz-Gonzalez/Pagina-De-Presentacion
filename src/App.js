import './App.css';
import Footer from './pureComponents/Footer';
import NavBar from './pureComponents/NavBar';
import FotoMia from "./assets/images/FotoPresentacion.jpeg"

function App() {
  return (
    <>
      <NavBar/>
      <img src={FotoMia} className='h-[200px] w-auto'/>
      <Footer/>
    </>
  );
}

export default App;
