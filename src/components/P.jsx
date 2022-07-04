import React, { useContext } from "react";
import { GlobalContext } from "../contexts/AppContext";


export default function P() {
    const theContext = useContext(GlobalContext);
    const {
      contextState: { body },
      setContextState,
    } = theContext;
    return <p onClick={() => setContextState((s) => ({...s, counter: s.counter + 1}))}>{body}</p>;
  }