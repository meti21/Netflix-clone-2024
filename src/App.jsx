
import {Routes, Route } from "react-router-dom";
import Header from '../src/Components/Header/Header'
import Footer from "../src/Components/Footer/Footer";
import Home from './Pages/Home'
import Search from "../src/Pages/Search/Search";
import Auth from "./Pages/Auth/Auth";

function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/auth" element={<Auth/>} />
      </Routes>
      <Footer />
    </>
  );
}

export default App
