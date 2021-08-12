import React, { useState } from "react";
import ChildComponent from "./ChildComponent";

var userDetailContext = React.createContext(null);

export default function App() {
  const [userDetails] = useState({
    name: "Mayank",
    age: 30
  });

  return (
    <userDetailContext.Provider value={userDetails}>
      <h1>This is the Parent Component</h1>
      <hr />
      <ChildComponent userDetails={userDetails} />
    </userDetailContext.Provider>
  );
}
