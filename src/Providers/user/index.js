import jwtDecode from "jwt-decode";
import { createContext, useContext, useState, useEffect } from "react";
import api from "../../services/api";
import { useToken } from "../token";

export const UserContext = createContext([]);

export const UserProvider = ({ children }) => {
  const [userId, setUserID] = useState(0);
  const [userName, setUserName] = useState("");
  const { token } = useToken();

  useEffect(() => {
    if (token) {
      const decoderId = jwtDecode(token);
      setUserID(decoderId.user_id);
      api.get(`/users/${decoderId.user_id}/`).then((response) => {
        setUserName(response.data.username);
      });
    }
  }, [token]);

  const createUser = (data) => {
    api.post("/users/", data).then((response) => {
      console.log(response);
    });
  };

  return (
    <UserContext.Provider value={{ userName, userId, createUser }}>
      {children}
    </UserContext.Provider>
  );
};
export const useUser = () => useContext(UserContext);
