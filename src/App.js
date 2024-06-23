import Navbar from "./components/home/Navbar";
import Footer from "./components/home/Footer";
import {
  BrowserRouter,
  Route,
  Routes
} from "react-router-dom";
import Root from "./components/home/Root";
// import About from "./components/home/About";
// import CafePage from "./components/home/CafePage";


function App() {
  return (
    <>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Root />} />
          {/* <Route path="/cafepage/:id" element={<CafePage />} /> */}
          {/* <Route path="/about" element={<About />} /> */}
          {/* <Route path="*" element= */}
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
