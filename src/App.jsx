import { Route, Routes } from "react-router";
import "./App.css";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register/>} />
      <Route path="/lost_found" element=<h1>lost and found page</h1> />
      <Route path="/complaint" element=<h1>complaint page</h1> />
      <Route path="/event" element=<h1>event page</h1> />
    </Routes>
  );
}

export default App;
