import React from "react";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
function List(props) {
  const [isDone, setIsDone] = React.useState(false);
  function handleClick() {
    setIsDone((previousValue) => {
      return !previousValue;
    });
  }
  return (
    <div className="listDiv">
      <li
        onClick={handleClick}
        style={{ textDecoration: isDone ? "line-through" : "none" }}
      >
        {props.text}
      </li>
      <HighlightOffIcon
        onClick={() => {
          props.onChecked(props.id);
        }}
      />
    </div>
  );
}

export default List;
