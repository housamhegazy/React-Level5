import Home from "pages/home/Home";
import Root from "./pages/Root";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import MyCart from "pages/cart/Cart";



import NotFound from "./pages/NotFound";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route index element={<Home />} />
      <Route path="cart" element={<MyCart />} />


      <Route path="*" element={<NotFound />} />

     
    </Route>
  )
);





function App() {



  return (
  
      
      <RouterProvider router={router} />
   
  );
}

export default App;
