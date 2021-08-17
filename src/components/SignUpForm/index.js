import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useHistory, Link } from "react-router-dom";
import { useState } from "react";
import { FormContainer, FormInput, FormButton, Breaker } from "./style";
import { ImageContainer } from "./style";
import { toast } from "react-toastify";
import axios from "axios";

const SignUpForm = () => {
  const history = useHistory();

  const schema = yup.object().shape({
    username: yup
      .string()
      .min(4, "Mínimo de 4 dígitos")
      .required("Campo Obrigatório"),
    email: yup.string().email("Email inválido").required("Campo Obrigatório"),
    password: yup
      .string()
      .min(8, "Mínimo de 8 dígitos")
      .matches(
        /^((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
        "Obrigatório: Letras maiúsculas e minúsculas, números e caracteres especiais"
      )
      .required("Campo Obrigatório"),
    passwordConfirm: yup
      .string()
      .oneOf([yup.ref("password")], "Senha não confere")
      .required("Campo Obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ resolver: yupResolver(schema) });

  const handleForm = (data) => {
    delete data.passwordConfirm;
    axios
      .post("https://kabit-api.herokuapp.com/users/", data)
      .then((response) => {
        console.log(response);
        reset({});
        history.push("/login");
      })
      .catch((e) => toast.error("Nome ou email já cadastrado"));
  };

  return (
    <Breaker>
      <FormContainer
        className="FormContainer"
        onSubmit={handleSubmit(handleForm)}
      >
        <div className="FormTitle"> Crie a sua conta </div>
        <div>
          <FormInput
            placeholder="Nome de usuário"
            {...register("username")}
          ></FormInput>
          <div className="ErrorMessage">{errors.username?.message}</div>
        </div>
        <div>
          <FormInput placeholder="E-mail" {...register("email")}></FormInput>
          <div className="ErrorMessage">{errors.email?.message}</div>
        </div>
        <div>
          <FormInput
            placeholder="Senha"
            type="password"
            {...register("password")}
          ></FormInput>
          <div className="ErrorMessage">{errors.password?.message}</div>
        </div>
        <div>
          <FormInput
            placeholder="Confirmar senha"
            type="password"
            {...register("passwordConfirm")}
          ></FormInput>
          <div className="ErrorMessage">{errors.passwordConfirm?.message}</div>
        </div>
        <FormButton className="FormButtons" type="submit">
          Criar Conta
        </FormButton>
        <div className="linkToLogin">
          Já possui conta? <Link to="/login"> Faça Login </Link>
        </div>
      </FormContainer>
      <ImageContainer className="image"></ImageContainer>
    </Breaker>
  );
};

export default SignUpForm;
