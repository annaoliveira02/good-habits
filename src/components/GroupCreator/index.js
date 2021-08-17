import { FiActivity, FiBook, FiXCircle } from "react-icons/fi";
import { BsBriefcase } from "react-icons/bs";
import GroupCreaterContainer from "./style";
import { useState } from "react";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import api from "../../services/api";
import { useToken } from "../../Providers/token";

const GroupCreatorPopup = () => {
  const [selectedArray, setSelectedArray] = useState([1, 0, 0]);
  const categories = ["Saúde", "Etudos", "Trabalho"];
  const { token } = useToken();
  console.log(token);

  const schema = yup.object().shape({
    name: yup.string().required("Nome obrigatório"),
    description: yup.string().required("Descrição obrigatória"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const highlightSelected = (pos) => {
    let updated = selectedArray;
    if (Math.max(...selectedArray) === 1) {
      // Verifica se tem um '1' no array
      updated = selectedArray.map((e) => (e = 0)); // Se tiver zera tudo
    }

    updated.splice(pos, 1, 1); // E coloca um 1 na posição indicada pelo parâmetro
    setSelectedArray(updated);
  };

  const getCategory = () => {
    return categories.filter((el, index) => el && selectedArray[index]); // Essa função parte do fato do "selectedArray" ter apenas um valor truthy, que é o 1,
  }; //  a partir disso, foi montado um array com as atuais categorias, nas mesmas posições
  //  de selectedArray. A partir disso, ele verifica em qual posição está o truthy de selectedArray
  //  e pega o elemento dessa mesma posição em "categories".

  const createGroup = (data) => {
    const categoryArr = getCategory();
    data.category = categoryArr[0];
    api
      .post("/groups/", data, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => console.log("Grupo criado", res));
  };

  return (
    <GroupCreaterContainer
      selectedArray={selectedArray}
      onSubmit={handleSubmit(createGroup)}
    >
      <section>
        <h3> Crie seu grupo </h3>
        <input placeholder="Nome do grupo" {...register("name")} />
        {errors.name && <span> {errors.name.message} </span>}
        <input placeholder="Descrição" {...register("description")} />
        {errors.description && <span> {errors.description.message} </span>}
      </section>
      <section>
        <p> Selecione a categoria: </p>
        <div>
          <p onClick={() => highlightSelected(0)}>
            <FiActivity className="health" /> <br /> Saúde
          </p>
          <p onClick={() => highlightSelected(1)}>
            <FiBook className="study" /> <br /> Estudos
          </p>
          <p onClick={() => highlightSelected(2)}>
            <BsBriefcase className="work" /> <br /> Trabalho
          </p>
        </div>
        <button>Criar grupo</button>
      </section>
      {/* <FiXCircle /> */}
    </GroupCreaterContainer>
  );
};

export default GroupCreatorPopup;
