import React from 'react';
import './App.css';
import Products from "./Components/Products";
import {BrowserRouter, Route} from "react-router-dom";
import Header from "./Components/Header";
// import Footer from "./Components/Footer";
import Product from "./Components/Product";
import AddProduct from "./Components/AddProduct";

function App() {
  return (
      <BrowserRouter>
        <Header/>
        <Route exact path="/" component={Products} />
        <Route path="/add" component={AddProduct} />
        <Route path="/product/:id" component={Product} />
        <Route path="/search/:str" component={Products} />
       
      </BrowserRouter>
  );
}

export default App;
