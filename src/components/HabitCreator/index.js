import { useUser } from "../../Providers/user";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { FormInput } from "../SignUpForm/style";
import { useHabits } from "../../Providers/habits";

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
    reset,
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
    <form onSubmit={handleSubmit(handleForm)}>
      <div>
        <FormInput placeholder="Título" {...register("title")}></FormInput>
        <div className="ErrorMessage">{errors.title?.message}</div>
      </div>
      <div>
        <FormInput
          placeholder="Categoria"
          {...register("category")}
        ></FormInput>
        <div className="ErrorMessage">{errors.category?.message}</div>
      </div>
      <div>
        <FormInput
          placeholder="Dificuldade"
          {...register("difficulty")}
        ></FormInput>
        <div className="ErrorMessage">{errors.difficulty?.message}</div>
      </div>
      <div>
        <FormInput
          placeholder="Frequência"
          {...register("frequency")}
        ></FormInput>
        <div className="ErrorMessage">{errors.frequency?.message}</div>
      </div>
      <button type="submit">Criar hábito</button>
    </form>
  );
};

export default HabitCreator;
