import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { MainContent } from "./components/MainContent";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MenProducts from "./components/MenProducts";
import WomenProducts from "./components/WomenProducts";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<MainContent />} />
          <Route path="/men" element={<MenProducts />} />
          <Route path="/women" element={<WomenProducts />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
