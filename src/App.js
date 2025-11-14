import Home from './pages/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import About from './component/About';
import Create from './component/Create';
import Footer from './component/Footer';
import Navbar from './component/Navbar';
import Sign from './component/Sign';
import Error from './component/Error';
import Loading from './component/Loading';
import Order from './component/Order'
import ProductPage from './component/Productlist';
import Thankyou from './component/Thankyou';
import Contact from './component/Contact';
import Checkout from './component/Checkout';
import Termandcondition from './component/Termandcondition';
import Privacy from './component/Privacy';
import Disclamer from './component/Disclamer';
import Return from './component/Return';
import Faq from './component/Faq';
import ProductPages from './component/Productpage';
import Productlist from './component/Productlist';
import Placeorder from './component/Placeorder';
import Productpage from './component/Productpage';
import Bear from './component/Bear';
import ProductCarousel from './component/Product';
import Educationtoy from './component/Educationtoy';
import Softtoys from './component/Softtoy';
import Outdoortoy from './component/Outdoor';
import Puzzlegame from './component/Puzzlegame';
import Boardgame from './component/Boardgame';
import Limited from './component/Limited';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/sin' element={<Sign />} />/////
          <Route path='/create' element={<Create />} />///////
          <Route path='/about' element={<About />} />/////////
          <Route path="/contact" element={<Contact />} />///////
          <Route path="/list" element={<Productlist />} />///////
          <Route path="/err" element={<Error />} />////////
          <Route path="/loading" element={<Loading />} />////
          <Route path="/ppage" element={<ProductPages />} />///////
          <Route path="/order" element={<Order />} />////////
          <Route path="/thanks" element={<Thankyou />} />/////
          <Route path="/checkout" element={<Checkout />} />/////
          <Route path="/privacy" element={<Privacy />} />/////
          <Route path="/dis" element={<Disclamer />} />///////
          <Route path="/return" element={<Return />} />//////**** */
          <Route path="/faq" element={<Faq />} />/////////
          <Route path="/term" element={<Termandcondition />} />//////
        </Routes>
        {/* <Puzzlegame/>/// */}
        {/* <Home/> */}
        {/* <Placeorder/> */}
        {/* <Boardgame/>/// */}
        {/* <Limited/>///// */}
        {/* <ProductPages/> /// */}
        {/* <Educationtoy/>/// */}
        {/* <Softtoys/>// */}
        {/* <Outdoortoy/>////// */}
        <Footer />
        {/* <Create/> */}
        

      </BrowserRouter>


    </div>
  );
}

export default App;
