import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import AddressList from "./components/AddressList/AddressList";
import AddressForm from "./components/AddressForm/AddressForm";
import NotFound from "./components/NotFound/NotFound";
import { AddressProvider } from "./context/AddressContext";
import "./App.css";

const NavBar = () => {
  return (
    <nav className="navbar">
      <h1>Address Updater</h1>
      <Link to="/add" className="add-button">
        <button>Add</button>
      </Link>
    </nav>
  );
};

const App = () => {
  return (
    <Router>
      <AddressProvider>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<AddressList />} />
          <Route path="/add" element={<AddressForm />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </AddressProvider>
    </Router>
  );
};

export default App;
