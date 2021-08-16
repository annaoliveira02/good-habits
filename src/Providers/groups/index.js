import { useEffect } from "react";
import { createContext, useState } from "react";
import api from "../../services/api";
import { useToken } from "../token";

export const GroupsContext = createContext();

export const GroupsProvider = ({ children }) => {
  const [groupsList, setGroupsList] = useState([]);
  const [group, setGroup] = useState([]);
  const { token } = useToken();
  const config = { headers: { Authorization: `Bearer ${token}` } };


  useEffect(() => {
    if (token !== "") {
      api
        .get("/groups/subscriptions/", config)
        .then((res) => {
          console.log(res.data)
          setGroupsList(res.data)
        })
        .catch((err) => console.log(err))
    }
  }, []);

  const addGroup = () => { };

  const removeGroup = () => { };

  const editGroup = () => { };

  return (
    <GroupsContext.Provider
      value={{ groupsList, group, addGroup, removeGroup, editGroup }}
    >
      {children}
    </GroupsContext.Provider>
  );
};
