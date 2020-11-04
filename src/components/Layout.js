import React, { useContext } from "react";
import { Context } from "../ContextProvider";

const Layout = () => {
  const [state] = useContext(Context);
  const { value1, value2, value3 } = state;
  return (
    <div className="App">
      <h1>Example React Context Provider with LocalStorage</h1>
      <h3>value1 = {value1}</h3>
      <h3>value2 = {value2}</h3>
      <h3>value3 = {value3}</h3>
    </div>
  );
};

export default Layout;
