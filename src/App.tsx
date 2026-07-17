import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router";
import { Home } from "./pages/Home";
import { Listings } from "./pages/Listings";
import { Product } from "./pages/Product";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="" element={<Home />} />
          <Route path="listings" element={<Listings />} />
          <Route path="product" element={<Product />} />
          <Route path="/*" element={<h1>404 Not found</h1>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
