import { useEffect } from "react";
import { Routes, Route, useLocation, Navigate } from "react-router-dom";
import { nprogress, NavigationProgress } from "@mantine/nprogress";

import Hero from "./routes/Hero";
import Dashboard from "./routes/Dashboard";
import Login from "./routes/Login";
import Logout from "./routes/Logout";
import Register from "./routes/Register";
import ErrorPage from "./routes/error-page";
import Home from "./components/Home/Home";
import Mood from "./routes/Mood";
import Journal from "./routes/Journal";
import Books from "./routes/Books";
import Apps from "./routes/Apps";
import Articles from "./routes/Articles";
import Organizations from "./routes/Organizations";


import useAuthStore from "./stores/authStore";
import JournalDetail from "./routes/JournalDetail";
import { Container } from "@mantine/core";

const App = () => {
  // Login state
  const isLoggedIn = useAuthStore((store) => store.isLoggedIn);
  let location = useLocation();

  useEffect(() => {
    nprogress.start();
    nprogress.complete();
  }, [location.pathname]);

  return (
    <Container fluid bg="#f5f5f5" p={0} >
      <NavigationProgress />
      <Routes>
        {!isLoggedIn && <Route index element={<Hero />} />}
        {isLoggedIn && (
          <Route index element={<Navigate to="/dashboard" replace />} />
        )}
        {isLoggedIn && (
          <Route path="dashboard" element={<Dashboard />}>
            <Route index element={<Home />} />
            <Route path="mood" element={<Mood />} />
            <Route path="journal" element={<Journal />} />
            <Route path="journal/:id" element={<JournalDetail />} />
            <Route path="resources/books" element={<Books />} />
            <Route path="resources/articles" element={<Articles />} />
            <Route path="resources/apps" element={<Apps />} />
            <Route path="resources/organizations" element={<Organizations />} />
            <Route path="*" element={<ErrorPage />} />
          </Route>
        )}
        {isLoggedIn && <Route path="/logout" element={<Logout />} />}
        {!isLoggedIn && <Route path="login" element={<Login />} />}
        {!isLoggedIn && <Route path="register" element={<Register />} />}
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Container>
  );
};

export default App;
