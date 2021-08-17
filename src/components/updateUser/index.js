import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useToken } from "../../Providers/token";
import api from "../../services/api";
import { useUser } from "../../Providers/user";
import { TextField } from "@material-ui/core";
import { Container } from "./styles";

const UpdateUser = () => {
  const { userId } = useUser();
  const { token } = useToken();

  const config = { headers: { Authorization: `Bearer ${token}` } };
  const schema = yup.object().shape({
    username: yup.string().required("Novo nome de usuário obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const onUpdateForm = (data) => {
    api.patch(`/users/${userId}/`, data, config).then((response) => {
      console.log("usuário atualizado");
    });
  };

  return (
    <Container>
      <form onSubmit={handleSubmit(onUpdateForm)}>
        <h2>Altere seu nome de usuário</h2>
        <TextField
          variant="outlined"
          size="small"
          label="Novo nome de usuário"
          {...register("username")}
          helperText={errors.username?.message}
        />
        <button type="submit">Salvar</button>
      </form>
    </Container>
  );
};
export default UpdateUser;
