
import { Routes, Route } from "react-router-dom";
import { Collection, About, Contact, Product, Home, Cart, Login, Orders, PlaceOrders } from "./pages";
import { Navbar, Footer } from "./components";
import { ToastContainer } from "react-toastify";
import { ShopContextProvider } from "./context";

const App = () => {
  return (
    <ShopContextProvider>
      <div className="px-5  sm:px-[5vw]  md:px-[7vw] lg:px-[9vw]">
        <ToastContainer />
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/collection" element={<Collection />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/product/:productId" element={<Product />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<Login />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/place-Orders" element={<PlaceOrders />} />
        </Routes>
        <Footer />
      </div>
    </ShopContextProvider>
  );
};

export default App;
