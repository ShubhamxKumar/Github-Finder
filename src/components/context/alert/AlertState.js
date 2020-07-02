import React, { useReducer } from "react";
import AlertContext from "./alertContext";
import AlertReducer from "./alertReducer";
import { REMOVE_ALERT, SET_ALERT } from "../types";

const AlertState = (props) => {
  const initState = {
    alert: null,
  };

  const [state, dispatch] = useReducer(AlertReducer, initState);

  const alertMsg = (msg, type) => {
    dispatch({ type: SET_ALERT, payload: { msg: msg, type: type } });

    setTimeout(() => {
      dispatch({ type: REMOVE_ALERT });
    }, 1000);
    // this means that alert will be gone after showing the message for 5 seconds.
  };

  return (
    <AlertContext.Provider
      value={{
        alert: state.alert,
        alertMsg,
      }}
    >
      {props.children}
    </AlertContext.Provider>
  );
};

export default AlertState;
