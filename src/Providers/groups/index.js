import { useEffect } from "react";
import { createContext, useState } from "react";
import api from "../../services/api";
import { useToken } from "../token";

export const GroupsContext = createContext();

export const GroupsProvider = ({ children }) => {
  const [groupsList, setGroupsList] = useState([]);
  // const { token } = useToken();
  const token = JSON.parse(localStorage.getItem('@gestaohabitosg5:token'))
  const config = { headers: { Authorization: `Bearer ${token}` } };

  const getGroups = (tk) => {
    api
      .get("/groups/subscriptions/", {
        headers: { Authorization: `Bearer ${tk}` }
      })
      .then((res) => {
        setGroupsList(res.data)
      })
      .catch((err) => console.log(err));
    // console.log('Config: ', config);
  }

  const removeGroup = () => { };

  const editGroup = (data, group, setRealGroup) => {

    // const index = groupsList.indexOf(inGroup => inGroup.id === group.id)

    api.patch(`/groups/${group.id}/`,
      data,
      {
        headers: { Authorization: `Bearer ${token}` }
      })
      .then(res => {
        group = {
          ...group,
          name: res.data.name,
          description: res.data.description,
          category: res.data.category
        }
        // setRealGroup(group);
      })
      // .then(
      //   api.get(`/groups/${group.id}/`)
      //     .then(res => {
      //       groupsList.filter(g => g.id !== group.id);
      //       groupsList.push(res.data)
      //       // setGroupsList(groupsList)
      //     })
      //     .then(res => console.log(res))
      .catch(err => console.log(err))

  };

  return (
    <GroupsContext.Provider
      value={{ groupsList, getGroups, setGroupsList, removeGroup, editGroup }}
    >
      {children}
    </GroupsContext.Provider>
  );
};
