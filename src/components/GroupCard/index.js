import { useState } from "react";
import { useEffect } from "react";
import { useToken } from "../../Providers/token";
import api from "../../services/api";
import ActivityCard from "../ActivityCard";
import GoalCard from "../GoalCard";
import { GroupContainer } from "./style.js"

const GroupCard = ({ group }) => {

    const { token } = useToken();
    const config = { headers: { Authorization: `Bearer ${token}` } };
    const [activitiesList, setActivitiesList] = useState([])
    const [goalsList, setGoalsList] = useState([])

    useEffect(() => {
        if (token !== "") {
            api
                .get(`https://kabit-api.herokuapp.com/activities/?group=${group.id}&page=1`, config)
                .then((res) => {
                    setActivitiesList(res.data.results)
                    console.log(res.data.results)
                })
                .catch((err) => console.log(err))
            api
                .get(`https://kabit-api.herokuapp.com/goals/?group=${group.id}&page=1`, config)
                .then((res) => {
                    setGoalsList(res.data.results)
                    console.log(res.data.results)
                })
                .catch((err) => console.log(err))
        }
    }, [])

    return (
        <GroupContainer>
            <h1>{group.name}</h1>
            <h3>Categoria: {group.category}</h3>
            <div className="activitiesSection">
                <h2>Atividades:</h2>
                {activitiesList.length > 0 ? activitiesList.map((activity) => {
                    return <ActivityCard activity={activity} />
                })
                    :
                    <span className="noContentMessage">Não há atividades</span>}
            </div>
            <div className="goalsSection">
                <h2>Metas:</h2>
                {goalsList.length > 0 ? goalsList.map((goal) => {
                    return <GoalCard key={goal.title} goal={goal} />
                })
                    :
                    <span className="noContentMessage">Não há metas</span>}
            </div>
            <button>Editar grupo</button>
        </GroupContainer>
    )
}

export default GroupCard;