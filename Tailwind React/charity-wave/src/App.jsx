import Home from "./components/Home";
import Footer from "./components/Common/Footer";
import Navbar from "./components/Common/Navbar";
import Error from "./components/Common/Error";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import About from "./components/About";
import Blogs from "./components/Blogs/Blogs";
import JoiningForm from "./components/Support/JoiningForm";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/join" element={<JoiningForm />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="*" element={<Error />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
