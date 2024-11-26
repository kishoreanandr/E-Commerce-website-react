import './App.css';
import { Navbar } from './Navbar/Navbar';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import { Shop } from './Pages/Shop';
import { ShopCategory } from './Pages/ShopCategory';
import { Product } from './Pages/Product';
import { LoginSignUp } from './Pages/LoginSignUp';
import { Cart } from './Pages/Cart';
import { Footer } from './Components/Footer/Footer';

function App() {
  return (
    <div className="App">
 
      <BrowserRouter>
          <Navbar/>
          <Routes>
              <Route path='/' element={<Shop/> }/>
              <Route path='/mens' element={<ShopCategory/>}/>
              <Route path='/womens' element={<ShopCategory/>}/>
              <Route path='/kids' element={<ShopCategory/>}/>
              <Route path='/product' element={<Product/>}>
                  <Route path=':id' element={<Product/>}/>
              </Route>
              <Route path='/login' element={<LoginSignUp/>}/>
              <Route path='/cart' element={<Cart/>}/>
          </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
