import logo from './monkey.png';
import btnSend from './send-message.png';
import './App.css';

function App() {
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
          <div className="setup-inner setup-input-container" id="setup-input-container">
            <textarea id="setup-textarea" placeholder="Enter your name"></textarea>
            <button id="send-btn" class="send-btn" aria-label="send">
              <img src={btnSend} alt="send" />
            </button>
          </div>
        </section> 
        
        {/* The Output */}
        <section className="output-container" id="output-container">
          <div id="output-img-container" className='"output-img-container"'></div>
          <h1 id="output-title" className="output-title"></h1>
          <h2 id="output-stars" className="output-year"></h2>
          <p id="output-text" className="output-text"></p>
        </section>
      </main>

      <footer>
        &copy; 2023 nsolax All rights reserved
      </footer>
    </div>
  );
}

export default App;
