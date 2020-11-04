import React from "react";
import ContextProvider from "./ContextProvider";
import Layaout from "./components/Layout";
import ChangeValue from "./components/ChangeValue";
import "./styles.css";

const App = () => (
  <ContextProvider>
    <Layaout />
    <ChangeValue value="value1" />
    <ChangeValue value="value2" />
    <ChangeValue value="value3" />
  </ContextProvider>
);

export default App;
