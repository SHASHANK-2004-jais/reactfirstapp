
import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [text, setText] = useState("");
  const [currentTime, setCurrentTime] = useState(new Date());

  // Real-time clock
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const time = currentTime.toLocaleTimeString("en-IN", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });

  const date = currentTime.toLocaleDateString("en-IN", {
    weekday: "short",
    day: "2-digit",
    month: "short",
    year: "numeric",
  });

  return (
    <div className="page">

      {/* TOP RIGHT CLOCK */}
      <div className="clock">
        <div className="clock-top">
          <span className="status"></span>
          LIVE CLOCK
        </div>

        <div className="clock-time">
          {time}
        </div>

        <div className="clock-date">
          {date}
        </div>
      </div>

      {/* MAIN CONTENT */}
      <div className="content">

        <div className="tag">
          ✨ LIVE TEXT EDITOR
        </div>

        <h1>
          Write it.
          <br />
          <span>See it.</span>
        </h1>

        <p className="subtitle">
          Everything you type appears instantly.
        </p>

        {/* INPUT */}
        <div className="editor">

          <div className="editor-header">
            <span>MESSAGE</span>
            <span>{text.length} / 200</span>
          </div>

          <div className="input-box">

            <span className="pencil">✎</span>

            <input
              type="text"
              maxLength="200"
              placeholder="Type something here..."
              value={text}
              onChange={(e) => setText(e.target.value)}
            />

            {text && (
              <button onClick={() => setText("")}>
                Clear
              </button>
            )}

          </div>

        </div>

        {/* OUTPUT */}
        <div className="output">

          <div className="output-title">
            <span className="green-dot"></span>
            LIVE PREVIEW
          </div>

          <div className={text ? "result has-text" : "result"}>
            {text || "Start typing to see your text here..."}
          </div>

        </div>

      </div>

    </div>
  );
}

export default App;
