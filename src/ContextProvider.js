import React, { useReducer, createContext, useEffect } from "react";
import { getLocalStorage, setLocalStorage } from "./utils";

export const Context = createContext();
const { Provider } = Context;

const defaultState = {
  value1: 1,
  value2: 2,
  value3: 3
};

const reducer = (state, action) => ({ ...state, ...action });

const ContexProvider = ({ children }) => {
  const initialState = getLocalStorage("LocalStorageKey", defaultState);

  const [state, setState] = useReducer(reducer, initialState);

  useEffect(() => {
    setLocalStorage("LocalStorageKey", state);
  }, [state]);

  return <Provider value={[state, setState]}>{children}</Provider>;
};
export default ContexProvider;
