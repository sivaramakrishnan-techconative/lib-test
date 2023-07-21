import { useState } from "react";

function App() {
  const [value, setvalue] = useState("");
  return (
    <div className="App">
      <input type="text" value={value} />
      <button type="button" onClick={() => setvalue("Value Changed")}>
        Change value
      </button>
    </div>
  );
}

export default App;
