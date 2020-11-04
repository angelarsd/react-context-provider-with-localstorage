import React, { useContext } from "react";
import { Context } from "../ContextProvider";

const ChangeValue = ({ value }) => {
  const [state, setState] = useContext(Context);
  return (
    <div className="App">
      <button onClick={() => setState({ [value]: state[value] + 1 })}>
        Change {value}
      </button>
    </div>
  );
};

export default ChangeValue;
