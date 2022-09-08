import { createContext, useState, useReducer } from "react";

const CountContext = createContext();

function CountProvider({children}) {
  const [user, setUser] = useState("");

  const [parejas, setParejas] = useState("");
  
  const value = {user, setUser, parejas, setParejas}
  return <CountContext.Provider value={value}>{children}</CountContext.Provider>
}

export { CountProvider, CountContext };