import { useState } from "react";
import { useEffect } from "react";
import { useToken } from "../../Providers/token";
import api from "../../services/api";
import ActivityCard from "../ActivityCard";
import GoalCard from "../GoalCard";

const GroupCard = ({ group }) => {

    const { token } = useToken();
    const config = { headers: { Authorization: `Bearer ${token}` } };
    const [activitiesList, setActivitiesList] = useState([])
    const [goalsList, setGoalsList] = useState([])

    useEffect(() => {
        if (token !== "") {
            api
                .get(`https://kabit-api.herokuapp.com/activities/?group=${group.id}&page=1`, config)
                .then((res) => setActivitiesList(res.data.results))
                .catch((err) => console.log(err))
        }
    }, [])

    useEffect(() => {
        if (token !== "") {
            api
                .get(`https://kabit-api.herokuapp.com/goals/?group=${group.id}&page=1`, config)
                .then((res) => setGoalsList(res.data.results))
                .catch((err) => console.log(err))
        }
    }, [])

    return (
        <div>
            <p>Nome do grupo: {group.name}</p>
            <p>Descrição:{group.description}</p>
            <p>Categoria: {group.category}</p>
            <div>
                Atividades:
                {activitiesList.map((activity, index) => {
                    return <ActivityCard key={index} activity={activity} />
                })}
            </div>
            <div>Metas:
                {goalsList.map((goal, index) => {
                    return <GoalCard key={index} goal={goal} />
                })}
            </div>
            <button>Editar grupo</button>
        </div>
    )
}

export default GroupCard;