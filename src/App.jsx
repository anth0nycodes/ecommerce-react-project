import { useEffect, useState } from "react";
import Nav from "./components/Nav.jsx";
import axios from "axios";
import { AppContext } from "./context/AppContext.js";
import Footer from "./components/Footer.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import Newsletter from "./components/Newsletter.jsx";
import ProductsPage from "./pages/ProductsPage.jsx";
import ProductPage from "./pages/ProductPage.jsx";

const App = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  const addToCart = (product, addedQuantity) => {
    const checkProductInCart = cart.find((item) => item.id === product.id);

    if (checkProductInCart) {
      setCart((prevCart) =>
        prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + addedQuantity }
            : item
        )
      );
    } else {
      setCart((prevCart) => [
        ...prevCart,
        { ...product, quantity: addedQuantity },
      ]);
    }
  };

  const reduceCartQuantity = (product) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === product.id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  const removeProductFromCart = (product) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== product.id));
  };

  const cartLength = () => {
    let counter = 0;

    cart.forEach((item) => {
      counter += item.quantity;
    });

    return counter;
  };

  const fetchProducts = async () => {
    try {
      const { data } = await axios.get(
        "https://ecommerce-samurai.up.railway.app/product"
      );
      const productsData = data.data;
      setProducts(productsData);
    } catch (error) {
      console.error("An error occurred in fetchProductsData: ", error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <AppContext.Provider
      value={{
        products,
        addToCart,
        cart,
        reduceCartQuantity,
        removeProductFromCart,
        cartLength,
      }}
    >
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/products/:id" element={<ProductPage />} />
        </Routes>
        <Newsletter />
        <Footer />
      </Router>
    </AppContext.Provider>
  );
};

export default App;
