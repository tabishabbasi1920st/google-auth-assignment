import "./App.css";
import Home from "./Components/Home";
import Auth from "./Components/Auth";
import { Route, Routes } from "react-router-dom";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Auth />} />
    </Routes>
  );
}
