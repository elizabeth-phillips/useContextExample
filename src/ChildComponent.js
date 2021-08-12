import React from "react";
import SubChildComponent from "./SubChildComponent";

function ChildComponent(props) {
  return (
    <div>
      <h2>This is Child Component</h2>
      <hr />
      <SubChildComponent userDetails={props.userDetails} />
    </div>
  );
}
export default ChildComponent;
