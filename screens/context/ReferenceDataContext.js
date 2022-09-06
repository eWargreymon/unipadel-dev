import { createContext, useState, useReducer } from "react";

// const [user, setUser] = useState("");

const CountContext = createContext();

function CountProvider({children}) {
  const [user, setUser] = useState("");
  
  const value = {user, setUser}
  return <CountContext.Provider value={value}>{children}</CountContext.Provider>
}

export { CountProvider, CountContext };