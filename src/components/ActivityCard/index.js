import { useState } from "react";
import { useToken } from "../../Providers/token";
import api from "../../services/api";
import { FiEdit } from "react-icons/fi";
import { AiOutlineDelete } from "react-icons/ai";
import { ActivityBox } from "./style";
import { EditText, EditTextarea } from 'react-edit-text';
import 'react-edit-text/dist/index.css';

const ActivityCard = ({ activity, setActivitiesList, group }) => {

  const [specificActivity, setSpecificActivity] = useState([])
  const [newActivity, setNewActivity] = useState(activity.title)
  const { token } = useToken();
  const config = { headers: { Authorization: `Bearer ${token}` } };
  
  //   const getOneActivity = () => {
  //     api
  //       .get(`/activities/${activity.id}/`)
  //       .then((response) => setSpecificActivity(response.data))
  //       .catch((err) => console.log(err));
  //   };

  const editActivity = () => {
  //  getOneActivity();
    const submitData = { title: newActivity }
    console.log(submitData)  
    api
        .patch(`/activities/${activity.id}/`, submitData, config)
        .catch((err) => console.log(err))
  };

  const deleteActivity = () => {
    const tk = JSON.parse(localStorage.getItem('@gestaohabitosg5:token'));
    api
      .delete(`/activities/${activity.id}/`, {
        headers: { Authorization: `Bearer ${tk}` }
      })
      .then(() => api.get(`activities/?group=${group.id}`))
      .then(res => setActivitiesList(res.data.results))
      .catch((err) => console.log(err));
  };

  return (
    <ActivityBox>
      <div>
        <EditText
          placeholder={activity.title} 
          value={newActivity}
          onChange={setNewActivity}/>
      </div>
      <div className="activityButtons">
        <button onClick={editActivity}><FiEdit/></button>
        <button onClick={deleteActivity}><AiOutlineDelete/></button>  
      </div>            
    </ActivityBox>
  )
}

export default ActivityCard;
