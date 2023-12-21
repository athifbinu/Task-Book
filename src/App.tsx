import { useState } from "react";
import "./App.css";
import Imageheader from "./components/Imageheader";
import Input from "./components/Input";


type Items={
      title:string;
      id:string;
}

function App() {
  const [Items, setItems] = useState<Items[]>([]);
  const [inputValue, setInputvalues] = useState<string>("");

  const handlesubmit = (event: React.FormEvent) => {
    event.preventDefault();
    setItems((prev) => [...prev, {title:inputValue,id:Date.now().toString()}]);
    setInputvalues("");
  };

  const handledelete = (id: string) => {
    setItems((prev) => prev.filter((data) => data.id !== id));
  };

  return (
    <div>
      <Imageheader />

      <form onSubmit={handlesubmit}>
        <div>
           <Input inputValue={inputValue} setInputvalues={setInputvalues}/>
        </div>

        <div>
          <button type="submit">submit</button>
        </div>
      </form>

      <div>
        {Items.map((data) => (
          <div key={data.id} className="flex">
            <div>
              <p>{data.title}</p>
            </div>

            <div>
              <button onClick={() => handledelete(data.id)}>Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
