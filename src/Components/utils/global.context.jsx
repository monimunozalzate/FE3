import axios from "axios";
import { useEffect } from "react";
import { useReducer } from "react";
import { createContext } from "react";

export const initialState = { theme: "", data: [] };

export const ContextGlobal = createContext();

const reducerFunction = (state, { type }) => {
  switch (type) {
    case "dark":
      return "dark";
    case "light":
      return "light";
    default:
      return state;
  }
};

export const ContextProvider = ({ children }) => {
  //Aqui deberan implementar la logica propia del Context, utilizando el hook useMemo

  const initialState = {theme: ' light', data: []};
  const [state, dispatch] = useReducer(reducerFunction, initialState);

  const getData = () => {
    axios.get("https://jsonplaceholder.typicode.com/users")
      .then((res) => dispatch({type:'data', payload:res.data}));
  }

useEffect(()=>{
  getData();
}, [])

  const store = {
    state,
    dispatch,
    getData
  };

  return (
    <ContextGlobal.Provider value={{ store }}>
      <div>{children}</div>
    </ContextGlobal.Provider>
  );
};

export default ContextProvider;
