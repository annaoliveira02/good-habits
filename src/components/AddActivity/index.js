import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useGoalsActivities } from "../../Providers/Goals&Activities";
import { TextField } from "@material-ui/core";
import { Container } from "./style";

const AddActivityModal = ({ group }) => {
  const id = group.id;

  const { addActivity } = useGoalsActivities();
  const schema = yup.object().shape({
    title: yup.string().required("Nome da atividade necessário"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const handleAdd = (data) => {
    data.realization_time = "2021-03-10T15:00";
    data.group = id;
    addActivity(data);
  };

  return (
    <Container>
      <form onSubmit={handleSubmit(handleAdd)}>
        <h2>Adicione uma Atividade</h2>
        <TextField
          variant="outlined"
          size="small"
          label="Atividade"
          {...register("title")}
          helperText={errors.title?.message}
        />
        <button type="submit">Salvar</button>
      </form>
    </Container>
  );
};
export default AddActivityModal;
