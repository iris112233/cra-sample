import { useEffect, useState } from "react";
import axios from "axios";

import logo from "./assets/logo.svg";
import "./assets/App.css";
import Input from "./components/Input";
import "./assets/all.scss";

function App() {
  const [text, setText] = useState("");
  const onChangeHandler = (e) => {
    setText(e.target.value);
  };
  useEffect(() => {
    (async () => {
      const path = process.env.REACT_APP_PATH;
      const result = await axios.get(path);
      console.log(result);
    })();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit,
          ipsam pariatur. Fuga optio quidem nemo incidunt vitae beatae impedit
          omnis eum harum enim perspiciatis, qui quibusdam facere, iure
          recusandae? Nostrum!
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <button type="button" className="btn btn-primary">
          Primary
        </button>
        {text}
        <Input
          id="sampleText"
          text="這是一個input"
          value={text}
          onChangeHandler={onChangeHandler}
        ></Input>
      </header>
    </div>
  );
}

export default App;
