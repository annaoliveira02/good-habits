import { useUser } from "../../Providers/user";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useHabits } from "../../Providers/habits";
import HabitsCreatorContainer from "./style";
import { TextField } from "@material-ui/core";

const HabitCreator = () => {
  const { addHabit } = useHabits();
  const { userId } = useUser();

  // esse componente é um modal que deve abrir na tela ao clicar no botão Novo hábito
  const schema = yup.object().shape({
    title: yup.string().required("Título obrigatório"),
    category: yup.string().required("Categoria obrigatoria"),
    difficulty: yup.string().required("Dificuldade obrigatória"),
    frequency: yup.string().required("Frequência obrigatória"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const handleForm = (data) => {
    const completeData = Object.assign(data, {
      achieved: false,
      how_much_achieved: 0,
      user: userId,
    });
    addHabit(completeData);
  };

  return (
    <HabitsCreatorContainer>
      <form onSubmit={handleSubmit(handleForm)}>
        <h2>crie o seu hábito</h2>
        <TextField 
          variant="outlined"
          size="small"
          placeholder="Título"
          {...register("title")}
          helperText={errors.title?.message}
        />
        <TextField
          variant="outlined"
          size="small"
          placeholder="Categoria"
          {...register("category")}
          helperText={errors.category?.message}
        />
        <TextField
          variant="outlined"
          size="small"
          placeholder="Dificuldade"
          {...register("difficulty")}
          helperText={errors.difficulty?.message}
        />
        <TextField
          variant="outlined"
          size="small"
          placeholder="Frequência"
          {...register("frequency")}
          helperText={errors.frequency?.message}
        />      
        <button type="submit">Criar hábito</button>
      </form>
    </HabitsCreatorContainer>
  );
};

export default HabitCreator;
