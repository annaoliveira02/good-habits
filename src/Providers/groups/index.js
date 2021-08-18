import { useEffect } from "react";
import { createContext, useState } from "react";
import api from "../../services/api";
import { useToken } from "../token";

export const GroupsContext = createContext();

export const GroupsProvider = ({ children }) => {
  const [groupsList, setGroupsList] = useState([]);
  const { token } = useToken();
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

  // useEffect(() => {
  //   console.log(token);
  //   if (token) {
  //     api
  //       .get("/groups/subscriptions/", config)
  //       .then((res) => setGroupsList(res.data))
  //       .catch((err) => console.log(err));
  //     console.log('Foi');
  //   }
  // }, [token]);

  const removeGroup = () => { };

  const editGroup = () => { };

  return (
    <GroupsContext.Provider
      value={{ groupsList, getGroups, setGroupsList, removeGroup, editGroup }}
    >
      {children}
    </GroupsContext.Provider>
  );
};
