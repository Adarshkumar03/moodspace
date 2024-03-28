import {
  Paper,
  TextInput,
  PasswordInput,
  Button,
  Title,
  Text,
  Grid,
  Image,
  Container,
} from "@mantine/core";
import { Link } from "react-router-dom";
import classes from "./Form.module.css";
import { useViewportSize } from "@mantine/hooks";

export default function Form({
  type,
  onSubmit,
  username,
  setUsername,
  password,
  setPassword,
  email,
  setEmail,
  img,
}) {
  const { height, width } = useViewportSize();
  const newH = height * 0.926;
  return (
    <Container fluid p={0} h={height * 0.95}>
      <Grid>
        <Grid.Col span={6} pr={0}>
          <div className={classes.wrapper}>
            <Paper className={classes.form} radius={0} p={50} h={newH}>
              <Title
                order={2}
                className={classes.title}
                ta="center"
                mt="md"
                mb={50}
              >
                {type === "Login"
                  ? "Welcome back to MoodSpace"
                  : "Welcome to Moodspace, Register"}
              </Title>
              <TextInput
                label={type === "Login" ? "Username/Email" : "Username"}
                name="username"
                value={username}
                placeholder="Ex: Jack-8"
                size="md"
                required
                onChange={(e) => setUsername(e.target.value)}
              />
              {setEmail ? (
                <TextInput
                  label="Email address"
                  name="email"
                  value={email}
                  placeholder="hello@gmail.com"
                  size="md"
                  onChange={(e) => setEmail(e.target.value)}
                />
              ) : null}
              <PasswordInput
                label="Password"
                name="password"
                value={password}
                placeholder="Your password"
                mt="md"
                size="md"
                required
                onChange={(e) => setPassword(e.target.value)}
              />
              {type === "Login" ? (
                <Button
                  fullWidth
                  mt="xl"
                  size="md"
                  onClick={onSubmit}
                  variant="gradient"
                  gradient={{ from: "#05372C", to: "#70D560", deg: 90 }}
                >
                  Login
                </Button>
              ) : (
                <Button
                  fullWidth
                  mt="xl"
                  size="md"
                  onClick={onSubmit}
                  variant="gradient"
                  gradient={{ from: "#05372C", to: "#70D560", deg: 90 }}
                >
                  Register
                </Button>
              )}

              {type === "Login" ? (
                <Text ta="center" mt="md">
                  Don&apos;t have an account?{" "}
                  <Link to="/register">Register</Link>
                </Text>
              ) : (
                <Text ta="center" mt="md">
                  Already have an account? <Link to="/login">Login</Link>
                </Text>
              )}
            </Paper>
          </div>
        </Grid.Col>
        <Grid.Col span={6} pl={0}>
          <Image src={img} height={newH} />
        </Grid.Col>
      </Grid>
    </Container>
  );
}
