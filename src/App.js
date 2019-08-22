//TODO: STEP 1 - Import the useState hook.
import React, { useState } from "react"; //useState hook added
import "./App.css";
import BottomRow from "./BottomRow";


function App() {
  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.

  // 1. Hold each team's current score in a state value
  // LionsScorepoints is one slice of state and current value is 32
  const [LionsScorepoints, setLionsScorepoints] = useState(20);
  const LionsTouchdown= e => {
    setLionsScorepoints(LionsScorepoints + 7)
  }
  const LionsFieldgoal= e => {
    setLionsScorepoints(LionsScorepoints + 3)
  }
  const [TigersScorepoints, setTigersScorepoints] = useState(20);
  const TigersTouchdown = e => {
    setTigersScorepoints(TigersScorepoints + 7)
  }
  const TigersFieldgoal= e => {
    setTigersScorepoints(TigersScorepoints + 3)
  }

  return (
    <div className="container">
      <section className="scoreboard">
        <div className="topRow">
          <div className="home">
            <h2 className="home__name">Lions</h2>

            {/* TODO STEP 3 - We need to change the hardcoded values in these divs to accept dynamic values from our state. */}

  {/* // 2. Render each team's current score that is in state to the DOM. */}

            <div className="home__score">{LionsScorepoints}</div>
          </div>
          <div className="timer">00:03</div>
          <div className="away">
            <h2 className="away__name">Tigers</h2>
            <div className="away__score">{TigersScorepoints}</div>
          </div>
        </div>
        <BottomRow />
      </section>
      <section className="buttons">
        <div className="homeButtons">
          {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
          {/* 3. Be able to click the different buttons to increment the appropriate team's score by the correct amount */}
          <button className="homeButtons__touchdown" onClick={LionsTouchdown}>Home Touchdown</button>
          <button className="homeButtons__fieldGoal" onClick={LionsFieldgoal}>Home Field Goal</button>
        </div>
        <div className="awayButtons">
          <button className="awayButtons__touchdown" onClick={TigersTouchdown}>Away Touchdown</button>
          <button className="awayButtons__fieldGoal" onClick={TigersFieldgoal}>Away Field Goal</button>
        </div>
      </section>
    </div>
  );
}

export default App;
