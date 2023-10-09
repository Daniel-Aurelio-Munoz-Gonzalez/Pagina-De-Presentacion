import './App.css';
import Footer from './pureComponents/Footer';
import NavBar from './pureComponents/NavBar';
import CryptoInfo from './containers/CryptoInfo';
import Hobbies from './containers/Hobbies';
import Academic from './containers/Academic';
import Carousel from './containers/Carousel';

function App() {
  return (
    <>
      <NavBar/>
      <div className='w-full flex flex-row mt-10 text-left justify-between lg:h-[320px]'>
        <Carousel/>
      </div>
      <Academic/>
      <CryptoInfo/>
      <Hobbies/>
      <Footer/>
    </>
  );
}

export default App;
