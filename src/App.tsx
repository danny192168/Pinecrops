import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router";
import { Home } from "./pages/Home";
import { Listings } from "./pages/Listings";
import { Product } from "./pages/Product";
import { Dashboard } from "./pages/Dashboard";
import { Authentication } from "./pages/Authentication";
import AccountSetup from "./pages/AccountSetup";

function App() {
  return (
    <div>
      <Router basename={import.meta.env.BASE_URL}>
        <Routes>
          <Route path="home" element={<Home />} />
          <Route path="" element={<Listings />} />
          <Route path="product" element={<Product />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="authentication" element={<Authentication />} />
          <Route path="account-setup" element={<AccountSetup />} />
          <Route path="/*" element={<h1>404 Not found</h1>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
