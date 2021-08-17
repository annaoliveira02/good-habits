import { useState } from "react";
import { useToken } from "../../Providers/token";
import api from "../../services/api";
import { FiEdit } from "react-icons/fi"
import { AiOutlineDelete } from "react-icons/ai"
import { GoalBox } from "./style";

const GoalCard = ({goal}) => {

    const [specificGoal, setSpecificGoal] = useState([])
    const { token } = useToken();
    const config = { headers: { Authorization: `Bearer ${token}` } };

    // const getOneGoal = () => {
    //     api
    //         .get(`/goals/${goal.id}/`)
    //         .then((response) => setSpecificGoal(response))
    //         .catch((err) => console.log(err))
    // }

    const editGoal = () => {
        // getOneGoal();  
        api
            .patch(`/goals/${goal.id}/`, config)
            .catch((err) => console.log(err))
    }

    const deleteGoal = () => {
        // getOneGoal();
        api
            .delete(`/goals/${goal.id}/`, config)
            .catch((err) => console.log(err))
    }

    return (
        <GoalBox>
            <div className="goalTitle">{goal.title}</div>
            <div className="goalButtons">
              <button><FiEdit/></button>
              <button onClick={deleteGoal}><AiOutlineDelete/></button>  
            </div>            
        </GoalBox>
    )
}

export default GoalCard;