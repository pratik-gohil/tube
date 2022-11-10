import { Component } from "react";
import { BrowserRouter, Link, Navigate, Route, Routes } from "react-router-dom";
import Counter from "./Counter";
import "./styles.css";
import UserDetailsForm from "./UserDetailsForm";

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <header className="header">
            <Link className="header-link" to="/counter">
              Counter
            </Link>
            <Link className="header-link" to="/user-details">
              User Details
            </Link>
          </header>
          <Routes>
            <Route path="/" element={<Navigate to="/counter" />} />
            <Route path="/counter" element={<Counter />} />
            <Route path="/user-details" element={<UserDetailsForm />} />
          </Routes>
        </div>
      </BrowserRouter>
    );
  }
}
