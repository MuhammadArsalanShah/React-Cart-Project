import Header from './components/Header.jsx';
import Shop from './components/Shop.jsx';
import Product from './components/Product.jsx';
import { DUMMY_PRODUCTS } from './dummy-products.js';
import  CartContextProvider  from './store/shopping-cart-context.jsx';

function App() {
  return (
    <CartContextProvider>
      <Header />
      <Shop>
        {DUMMY_PRODUCTS.map((product) => (
            <li key={product.id}>
              <Product {...product} />
            </li>
          ))}
      </Shop>
    </CartContextProvider>
  );
}

export default App;




/****** Coding exercise 26: Creating and using context (Code is on Udemy code exercise block) ******/

/****** Coding exercise 27: Using useReducer (Code is on Udemy code exercise block) ******/
