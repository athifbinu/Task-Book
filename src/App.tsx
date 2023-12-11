import { useState } from "react";
import "./App.css";
import Imageheader from "./components/Imageheader";

function App() {
  const [Items, setItems] = useState<string[]>(["sad", "sad"]);
  const [inputValue, setInputvalues] = useState<string>("");

  const handlesubmit = (event: React.FormEvent) => {
    event.preventDefault();
    setItems((prev) => [...prev, inputValue]);
    setInputvalues("");
  };

  return (
    <div>
      <Imageheader />

      <form action="" onSubmit={handlesubmit}>
        <div>
          <input type="text" className="border " />
        </div>

        <div>
          <button type="submit">submit</button>
        </div>
      </form>

      <div>
        {Items.map((data) => (
          <div key={data} className="flex">
            <div>
              <p>{data}</p>
            </div>

            <div>
              <button>Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
