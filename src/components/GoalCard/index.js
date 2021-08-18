import { useState } from "react";
import { useToken } from "../../Providers/token";
import api from "../../services/api";
import { BsCheck } from "react-icons/bs"
import { AiOutlineDelete } from "react-icons/ai"
import { GoalBox } from "./style";
import { toast } from "react-toastify";

const GoalCard = ({ goal, setGoalsList, group }) => {
  const [specificGoal, setSpecificGoal] = useState([]);
  const { token } = useToken();
  const config = { headers: { Authorization: `Bearer ${token}` } };

  const getOneGoal = () => {
    api
      .get(`/goals/${goal.id}/`)
      .then((response) => setSpecificGoal(response))
      .catch((err) => console.log(err))
  }

  const editGoal = () => {
    getOneGoal();
    const achievedGoal = { "achieved": true }  
    api
      .patch(`/goals/${goal.id}/`, achievedGoal, config)
      .then(toast.success("Meta realizada com sucesso!"))
      .catch((err) => console.log(err))
  }

  const deleteGoal = () => {
    const tk = JSON.parse(localStorage.getItem('@gestaohabitosg5:token'));
    api
      .delete(`/goals/${goal.id}/`, {
        headers: { Authorization: `Bearer ${tk}` }
      })
      .then((_) => toast.info("Deletado!"))
      .then((res) => api.get(`/goals/?group=${group.id}`))
      .then((res) => setGoalsList(res.data.results))
      .catch((err) => console.log(err));
  };

  return (
    <GoalBox>
      <div className="goalTitle">{goal.title}</div>
      <div className="goalButtons">
        <button onClick={editGoal}>
          <BsCheck/>
        </button>
        <button onClick={deleteGoal}>
          <AiOutlineDelete/>
        </button>  
      </div>            
    </GoalBox>
  )
}

export default GoalCard;
