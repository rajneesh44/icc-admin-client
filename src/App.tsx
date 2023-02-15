import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductList from "./components/ProductList";
import Login from "./components/Login";
// import * as dotenv from "dotenv";

// dotenv.config();
// console.log('##', process.env); // remove this after you've confirmed it is working

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/">
            <Route index element={<Navbar />} />
            <Route path="/login" element={<Login />} />
            <Route path="/products" element={<ProductList />} />
            {/* <Route path="blogs" element={<BlogList />} />
            <Route path="/blogs/:blogId" element={<SingleBlog />} /> */}
          </Route>
        </Routes>
        {/* <BottomBar /> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
