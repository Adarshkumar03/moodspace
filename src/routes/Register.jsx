import Form from "../components/Form/Form";
import { useState } from "react";
import { useNavigate } from "react-router";
import useAuthStore from "../stores/authStore";
import registerImg from "../assets/register.jpg";
import Navbar from "../components/Navbar/Navbar";
import { Container } from "@mantine/core";

const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const login = useAuthStore((state) => state.login);
  const setName = useAuthStore((state) => state.setName);
  const setUEmail = useAuthStore((state)=>state.setUEmail);

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${import.meta.env.VITE_VERCEL_FETCH}/v1/user/register/`, {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({ username, password}),
      });
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Login failed");
      }
      const data = await response.json();
      login(data.token);
      console.log(data.token);
      setName(data.username);
      setUEmail(data.email);
      navigate("/dashboard");
    } catch (e) {
      console.log(e);
      navigate("/register");
    }
  };
  return (
    <Container fluid p={0}>
      <Navbar/>
      <Form
        type="Register"
        onSubmit={onSubmit}
        username={username}
        setUsername={setUsername}
        password={password}
        setPassword={setPassword}
        email={email}
        setEmail={setEmail}
        img={registerImg}
      />
    </Container>
  );
};

export default Register;
