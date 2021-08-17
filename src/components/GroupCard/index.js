import { useState } from "react";
import { useEffect } from "react";
import { useToken } from "../../Providers/token";
import api from "../../services/api";
import ActivityCard from "../ActivityCard";
import GoalCard from "../GoalCard";
import { GroupContainer } from "./style.js";
import { GrAddCircle } from "react-icons/gr";
import Modal from "../Modal";
import AddActivityModal from "../AddActivity";
import AddGoalModal from "../AddGoals";

const GroupCard = ({ group }) => {
  const { token } = useToken();
  const config = { headers: { Authorization: `Bearer ${token}` } };
  const [activitiesList, setActivitiesList] = useState([]);
  const [goalsList, setGoalsList] = useState([]);
  const [openActivty, setOpenActivity] = useState(false);
  const [openGoal, setOpenGoal] = useState(false);

  const handleOpenActivity = () => {
    setOpenActivity(true);
  };
  const handleOpenGoals = () => {
    setOpenGoal(true);
  };
  const handleClose = () => {
    setOpenActivity(false);
    setOpenGoal(false);
  };

  useEffect(() => {
    if (token) {
      api
        .get(`/goals/?group=${group.id}`, config)
        .then((res) => setGoalsList(res.data.results))
        .catch((e) => console.log(e));

      api
        .get(`/activities/?group=${group.id}`, config)
        .then((res) => setActivitiesList(res.data.results))
        .catch((e) => console.log(e));
    }
  }, []);

  return (
    <GroupContainer>
      <h1>{group.name}</h1>
      <h3>Categoria: {group.category}</h3>
      <div className="activitiesSection">
        <h2>
          Atividades: <GrAddCircle onClick={handleOpenActivity} />
        </h2>
        <Modal openModal={openActivty} setOpenModal={handleClose}>
          <AddActivityModal group={group} />
        </Modal>
        {activitiesList.length > 0 ? (
          activitiesList.map((activity) => {
            return <ActivityCard activity={activity} />;
          })
        ) : (
          <span className="noContentMessage">Não há atividades</span>
        )}
      </div>
      <div className="goalsSection">
        <h2>
          Metas: <GrAddCircle onClick={handleOpenGoals} />
        </h2>
        <Modal openModal={openGoal} setOpenModal={handleClose}>
          <AddGoalModal group={group} setGoalsList={setGoalsList} />
        </Modal>
        {goalsList.length > 0 ? (
          goalsList.map((goal) => {
            return (
              <GoalCard
                key={goal.title}
                goal={goal}
                setGoalsList={setGoalsList}
                group={group}
              />
            );
          })
        ) : (
          <span className="noContentMessage">Não há metas</span>
        )}
      </div>
      <button>Editar grupo</button>
    </GroupContainer>
  );
};

export default GroupCard;
