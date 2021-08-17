import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useGoalsActivities } from "../../Providers/Goals&Activities";
import { TextField } from "@material-ui/core";
import { Container } from "./style";

const AddGoalModal = ({ group }) => {
  const id = group.id;

  const { addGoal } = useGoalsActivities();
  const schema = yup.object().shape({
    title: yup.string().required("Nome da Meta necessário"),
    difficulty: yup.string().required("Fácil, médio ou difícil?"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const handleAdd = (data) => {
    data.how_much_achieved = 0;
    data.group = id;
    addGoal(data);
  };

  return (
    <Container>
      <form onSubmit={handleSubmit(handleAdd)}>
        <h2>Adicione uma Meta</h2>
        <TextField
          variant="outlined"
          size="small"
          label="Meta"
          {...register("title")}
          helperText={errors.title?.message}
        />
        <TextField
          variant="outlined"
          size="small"
          label="Dificuldade"
          {...register("difficulty")}
          helperText={errors.difficulty?.message}
        />
        <button type="submit">Salvar</button>
      </form>
    </Container>
  );
};
export default AddGoalModal;
