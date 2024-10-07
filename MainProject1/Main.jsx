import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Mainnav from "./Mainnav";
import Txtform from "./Txtform";
import Counter from "./Counter";
import Todo from "./Todo";
import Footer from "./Footer";

const Main = () => {
  return (
    <>
      <BrowserRouter>
        <Mainnav />

        <Routes>
          <Route path="/" element={<Txtform />}></Route>
          <Route path="/counter" element={<Counter />}></Route>
          <Route path="/todo" element={<Todo />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default Main;
