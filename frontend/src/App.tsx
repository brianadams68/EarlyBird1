import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Bags from "./components/Accessories/Bags";
import Hats from "./components/Accessories/Hats";
import GymSocks from "./components/Accessories/GymSocks";
import Tops from "./components/Clothing/Tops";
import BrowseAll from "./components/Clothing/BrowseAll";
import Jackets from "./components/Clothing/Jackets";
import Leggins from "./components/Clothing/Leggins";
import Pants from "./components/Clothing/Pants";
import Sweaters from "./components/Clothing/Sweaters";
import TShirts from "./components/Clothing/TShirts";
import Signup from "./components/SignUp";
import Signin from "./components/SignIn";
import CheckoutForm from "./components/CheckoutForm";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />

        {/* Clothing categories */}
        <Route path="/clothing/tops" element={<Tops />} />
        <Route path="/clothing/leggins" element={<Leggins />} />
        <Route path="/clothing/pants" element={<Pants />} />
        <Route path="/clothing/sweaters" element={<Sweaters />} />
        <Route path="/clothing/t-shirts" element={<TShirts />} />
        <Route path="/clothing/jackets" element={<Jackets />} />
        <Route path="/clothing/browse-all" element={<BrowseAll />} />

        {/* Accessories categories */}
        <Route path="/accessories/bags" element={<Bags />} />
        <Route path="/accessories/hats" element={<Hats />} />
        <Route path="/accessories/belts" element={<GymSocks />} />

        {/* Authentication */}
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />

        {/* Checkout Form */}
        <Route path="/checkoutform" element={<CheckoutForm />} />
      </Routes>
    </Router>
  );
}

export default App;
