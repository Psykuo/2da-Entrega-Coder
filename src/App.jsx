import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import "./App.css";
import { NavBar, ItemCount, ItemListContainer, Item } from "./components";
import { Detail } from "./pages/Detail";
import { Home } from "./pages/Home";
import { Category } from "./pages/Category";
import { CartProvider } from "./State/Cart.context";
import { ThemeProvider } from "./State/Theme.context";
import { Cart } from "./pages/Cart";

const routes = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<NavBar />}> 

        <Route path="/" element={<Home />} />
         <Route path="/item/:id" element={<Detail />} />
         <Route path="/category/:id" element={<Category />} />
         <Route path="/cart" element={<Cart />} />


    </Route>
  )
);

function App() {
  return (
    <div>
      <ThemeProvider>
        <CartProvider>
          <RouterProvider router={routes} />
        </CartProvider>
      </ThemeProvider>
    </div>
  );
}

export default App;