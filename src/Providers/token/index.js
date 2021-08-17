import { useEffect } from "react";
import { useContext } from "react";
import { useState } from "react";
import { createContext } from "react";

export const TokenContext = createContext([]);

export const TokenProvider = ({ children }) => {
  const [token, setToken] = useState("");

  useEffect(() => {
    const initialToken =
      JSON.parse(localStorage.getItem("@gestaohabitosg5:token")) || "";

    setToken(initialToken);
  }, []);

  return (
    <TokenContext.Provider value={{ token, setToken }}>
      {children}
    </TokenContext.Provider>
  );
};
export const useToken = () => useContext(TokenContext);
