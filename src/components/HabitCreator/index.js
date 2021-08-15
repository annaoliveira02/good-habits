import { useUser } from "../../Providers/user";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import api from "../../services/api";

const HabitCreator = () => {
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

  const history = useHistory();

  const handleSubmit = (data) => {
    api
      .post("/habits/", data)
      .then((response) => {
        const { access } = response.data;
        localStorage.setItem("@gestaohabitosg5:token", JSON.stringify(access));
        // setAthenticated(true);
        return history.push("/DashboardMain");
      })
      .catch((err) => toast.error("Usuário já cadastrado"));
  };

  return (
    <form>
      <input placeholder="Título" />
      <input placeholder="Categoria" />
      <input placeholder="Dificuldade" />
      <input placeholder="Frequência" />
      {/* <input placeholder="Concluído" />
      <input placeholder="Progresso" />
      <input placeholder="Usuário" /> */}
      <button>Criar hábito</button>
    </form>
  );
};

export default HabitCreator;
