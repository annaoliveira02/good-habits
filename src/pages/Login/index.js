import Header from "../../components/Header";
import { InitialContainer } from "../../styles/mainContainers";
import Footer from "../../components/Footer";
import { Link, Redirect, useHistory } from "react-router-dom";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import api from "../../services/api";
import { toast } from "react-toastify";
import { AnimationContainer, Background, Content } from "./styles";
import { TextField } from "@material-ui/core";

const Login = () => {
  const schema = yup.object().shape({
    username: yup.string().required("User Name obrigatório"),
    password: yup
      .string()
      .min(6, "Mínimo de 6 caracateres")
      .required("Senha obrigatória"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const history = useHistory();

  const onSubmitLogin = (data) => {
    api
      .post("/sessions/", data)
      .then((response) => {
        const { access } = response.data;
        localStorage.setItem("@gestaohabitosg5:token", JSON.stringify(access));
        // setAthenticated(true);
        return history.push("/DashboardMain");
      })
      .catch((err) => toast.error("Email ou senha inválidos"));
  };

  // if (authenticated) {
  //   return <Redirect to="/dashboard" />;
  // }

  return (
    <div>
      <Header />
      <InitialContainer>
        <Background />
        <Content>
          <AnimationContainer>
            <form onSubmit={handleSubmit(onSubmitLogin)}>
              <h1>Login</h1>

              <TextField
                variant="outlined"
                margin="normal"
                size="small"
                label="Nome de Usuário"
                {...register("username")}
                helperText={errors.username?.message}
              />
              <TextField
                variant="outlined"
                margin="normal"
                label="Senha"
                size="small"
                type="password"
                {...register("password")}
                helperText={errors.password?.message}
              />

              <button type="submit">Login</button>
              <p>
                Não possui conta? <Link to="/signUp">Crie a sua</Link>
              </p>
            </form>
          </AnimationContainer>
        </Content>
      </InitialContainer>
      <Footer />
    </div>
  );
};

export default Login;