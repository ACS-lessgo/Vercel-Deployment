import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import MyInfo from "./assets/MyInfo.md";
import "./App.css";

function App() {
  const [markdown, setMarkdown] = useState("");

  useEffect(() => {
    fetch(MyInfo)
      .then((res) => res.text())
      .then((text) => setMarkdown(text));
  }, []);

  return (
    <div className="app-container">
      <div className="markdown-content">
        <ReactMarkdown>{markdown}</ReactMarkdown>
      </div>
    </div>
  );
}

export default App;
