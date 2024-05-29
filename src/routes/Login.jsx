import Form from "../components/Form/Form";
import { useState } from "react";
import { useNavigate } from "react-router";
import useAuthStore from "../stores/authStore";
import loginImg from "../assets/loginImg.jpg";
import Navbar from "../components/Navbar/Navbar";
import { Container } from "@mantine/core";
const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const login = useAuthStore((state) => state.login);
  const setName = useAuthStore((state) => state.setName);
  const setUEmail = useAuthStore((state) => state.setUEmail);
  const apiUrl = useAuthStore((state) => state.apiUrl);

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${apiUrl}/v1/user/login/`, {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({ username, password }),
      });
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Login failed");
      }
      const data = await response.json();
      login(data.token);
      setName(data.username);
      setUEmail(data.email);
      navigate("/dashboard");
    } catch (e) {
      console.log(e);
      throw(e);
    }
  };
  return (
    <Container fluid p={0}>
      <Navbar />
      <Form
        type="Login"
        onSubmit={onSubmit}
        username={username}
        setUsername={setUsername}
        password={password}
        setPassword={setPassword}
        img={loginImg}
      />
    </Container>
  );
};

export default Login;
