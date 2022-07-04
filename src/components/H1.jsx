import React, {useContext} from "react";
import { GlobalContext } from "../contexts/AppContext";


export default function H1() {
    const theContext = useContext(GlobalContext);
    const {
      contextState: { title, counter },
    } = theContext;
    return (
      <h1>
        {title} {counter}
      </h1>
    );
  }