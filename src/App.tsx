import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signin from "@/pages/Signin";
import Layout from "./Layout";
import Signup from "@/pages/Signup";
import { useEffect, useState } from "react";
import { useCurrentUserStore } from "./modules/auth/current-user.state";
import { authRepository } from "./modules/auth/auth.repository";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const currentUserStore = useCurrentUserStore();

  useEffect(() => {
    setSession();
  }, [])

  const setSession = async () => {
    const currentUser = await authRepository.getCurrentUser();
    currentUserStore.set(currentUser);
    setIsLoading(false);
  }

  if (isLoading) return <div />;

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
