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
import { useState } from "react";
import { useAuthentication } from "../../Providers/Authentication";

const Login = () => {
  const { authenticated, setAuthenticated } = useAuthentication();
  const schema = yup.object().shape({
    username: yup.string().required("Campo obrigatório"),
    password: yup
      .string()
      .min(6, "Mínimo de 6 caracateres")
      .required("Campo obrigatório"),
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
        localStorage.clear();
        const { access } = response.data;
        setAuthenticated(true);
        localStorage.setItem("@gestaohabitosg5:token", JSON.stringify(access));
        setAuthenticated(true);
        // setToken(access);
        return history.push("/DashboardMain");
      })
      .catch((err) =>
        // toast.error("Usuário ou senha inválidos")
        console.log(err)
      );
  };

  if (authenticated) {
    return <Redirect to="/dashboardMain" />;
  }

  return (
    <div>
      <Header />
      <InitialContainer>
        <Background />
        <Content>
          <AnimationContainer>
            <form onSubmit={handleSubmit(onSubmitLogin)}>
              <h1>login</h1>
              <TextField
                variant="outlined"
                margin="dense"
                size="small"
                placeholder="Nome de usuário"
                {...register("username")}
                helperText={errors.username?.message}
              />
              <TextField
                variant="outlined"
                margin="dense"
                placeholder="Senha"
                size="small"
                type="password"
                {...register("password")}
                helperText={errors.password?.message}
              />

              <button type="submit">Entrar</button>
              <h2>
                Não possui conta? <Link to="/signUp">Crie a sua!</Link>
              </h2>
            </form>
          </AnimationContainer>
        </Content>
      </InitialContainer>
      <Footer />
    </div>
  );
};

export default Login;
