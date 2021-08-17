import { useState } from "react";
import { useToken } from "../../Providers/token";
import api from "../../services/api";
import { FiEdit } from "react-icons/fi"
import { AiOutlineDelete } from "react-icons/ai"
import { ActivityBox } from "./style";

const ActivityCard = ({activity}) => {

    const [specificActivity, setSpecificActivity] = useState([])
    const { token } = useToken();
    const config = { headers: { Authorization: `Bearer ${token}` } };

    const getOneActivity = () => {
        api
            .get(`/activities/${activity.id}/`)
            .then((response) => setSpecificActivity(response))
            .catch((err) => console.log(err))
    }

    const editActivity = () => {
        getOneActivity();  
        api
            .patch(`/activities/${specificActivity.id}/`, config)
            .catch((err) => console.log(err))
    }

    const deleteActivity = () => {
        getOneActivity();
        api
            .delete(`/activities/${specificActivity.id}/`, config)
            .catch((err) => console.log(err))
    }

    return (
        <ActivityBox>
            <div className="activityTitle">{activity.title}</div>
            <div className="activityButtons">
              <button><FiEdit/></button>
              <button onClick={deleteActivity}><AiOutlineDelete/></button>  
            </div>            
        </ActivityBox>
    )
}

export default ActivityCard;