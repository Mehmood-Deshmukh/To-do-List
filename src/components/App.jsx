import React from "react";
import List from "./List_item";
function App() {
  const [entry, setEntry] = React.useState("");
  const [entries, setEntries] = React.useState([]);
  function handleChange(event) {
    const newEntry = event.target.value;
    setEntry(newEntry);
  }
  function addEntry() {
    setEntries((prevEntries) => {
      return [...prevEntries, entry];
    });
    setEntry("");
  }
  function deleteEntry(id) {
    console.log("hello");
    setEntries((prevItems) => {
      return prevItems.filter((item, index) => {
        return index !== id;
      });
    });
  }
  return (
    <div>
      <h1 className="fHeading">SimplyDo</h1>

      <div className="container">
        <div className="heading">
          <h1>Lets Get things Done!</h1>
        </div>
        <div className="form">
          <input type="text" onChange={handleChange} value={entry} />
          <button onClick={addEntry}>
            <span>Add</span>
          </button>
        </div>
        <div>
          <ul>
            {entries.map((entry, index) => (
              <List
                key={index}
                id={index}
                text={entry}
                onChecked={deleteEntry}
              />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
