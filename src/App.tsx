import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signup from "@/pages/auth/Signup";
import Signin from "@/pages/auth/Signin";
import Layout from "./Layout";
import Customers from "./pages/customers";
import { useEffect, useState } from "react";
import { useCurrentUserStore } from "./modules/auth/current-user.state";
import { authRepository } from "./modules/auth/auth.repository";
import CreateCustomer from "./pages/customers/CreateCustomer";

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
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/" element={<Layout />}>
          <Route index element={<Customers />} />
          <Route path="/create" element={<CreateCustomer />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
