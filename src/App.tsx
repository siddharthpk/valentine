import { useState } from "react";
import "./App.css";

const phrases = [
  "No",
  "Are you sure?",
  "Absolutely sure?",
  "Really Really Sure?",
  "Don't do thisssss",
  "You're breaking my heart ;(",
];

function App() {
  const [noCount, setNoCount] = useState(false);
  const [yesPressed, setYesPressed] = useState(false);
  const yesButtonSize = noCount * 20 + 16;

  function handleNoClick() {
    setNoCount(noCount + 1);
  }

  function getNoButtonText() {
    return phrases[Math.min(noCount, phrases.length - 1)];
  }

  return (
    <div className="valentine-container">
      {yesPressed ? (
        <>
          <img
            alt="bears kissing"
            src="https://media.tenor.com/gUiu1zyxfzYAAAAi/bear-kiss-bear-kisses.gif"
          />
          <div className="text">Yay!!!!!</div>
        </>
      ) : (
        <>
          <img
            alt="bear with hearts"
            src="https://media.tenor.com/6eIkl-Qc62EAAAAi/cute.gif"
          />
          <div className="text">Will you be my Valentine?</div>
          <div>
            <button
              className="yesButton"
              style={{ fontSize: yesButtonSize }}
              onClick={() => setYesPressed(true)}
            >
              Yes
            </button>
            <button onClick={handleNoClick} className="noButton">
              {getNoButtonText()}
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
