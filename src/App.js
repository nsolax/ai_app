import logo from "./monkey.png";
import btnSend from "./send-message.png";
import loading from "./loading.svg";
import "./App.css";
import React, { useState } from "react";

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [textAreaValue, setTextAreaValue] = useState("");

  const handleButtonClick = () => {
    if (textAreaValue.trim() !== "") {
      setIsLoading(true);

      // Simulate some asynchronous operation, like fetching data
      setTimeout(() => {
        setIsLoading(false);
      }, 2000);
    }
  };

  return (
    <div className="App">
      <main>
        {/* The Setup */}
        <section id="setup-container">
          <div className="setup-inner">
            <img src={logo} className="App-logo" alt="logo" />
            <div className="speach-bubble-ai" id="speach-bubble-ai">
              <p id="movie-boss-text">Hello, I'm Boss. What's your name?</p>
            </div>
          </div>
{/* checking if sent btn is clicked if so then the btn is shown otherwise it is hidden */}
          <div className="setup-inner setup-input-container" id="setup-input-container">
            {isLoading ? (
              <img src={loading} alt="Loading" />
            ) : (
              <div>
                <textarea  id="setup-textarea"
                  value={textAreaValue}
                  onChange={(e) => setTextAreaValue(e.target.value)}
                  placeholder="Enter some text..."
                />
                <button className="send-btn" id="send-btn" onClick={handleButtonClick}>
                  <img src={btnSend} alt="Send" />
                </button>
              </div>
            )}
          </div>
        </section>

{/* The Output */}
        <section className="output-container" id="output-container">
          <div
            id="output-img-container"
            className='"output-img-container"'
          ></div>
          <h1 id="output-title" className="output-title"></h1>
          <h2 id="output-stars" className="output-year"></h2>
          <p id="output-text" className="output-text"></p>
        </section>
      </main>

      <footer>&copy; 2023 nsolax All rights reserved</footer>
    </div>
  );
}

export default App;
