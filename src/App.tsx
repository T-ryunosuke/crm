import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signin from "@/pages/Signin";
import Layout from "./Layout";
import Signup from "@/pages/Signup";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/" element={<Layout />} />
      </Routes>
    </Router>
  );
}

export default App;
