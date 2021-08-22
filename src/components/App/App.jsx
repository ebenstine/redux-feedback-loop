import React from 'react';
import './App.css';
import { HashRouter as Router, Route } from 'react-router-dom';
import Feeling from '../Feeling/Feeling';
import Understanding from '../Understanding/Understanding';
import Supported from '../Supported/Supported';
import Comments from '../Comments/Comments';
import Review from '../Review/Review';
import Submitted from '../Submitted/Submitted';



function App() {
  
  return (
    <div className='App'>
      <Router>
        <header className='App-header'>
          <h1 className='App-title'>Daily Feedback Form</h1>
          <h4>We'll mine your reflection for our Prime self-inspection!</h4>
        </header>
        {/*All necessary routes here*/}
        <Route path="/" exact>
          <Feeling 
          />
        </Route>

        <Route path="/understanding">
          <Understanding
          />
        </Route>

        <Route path="/supported">
          <Supported 
          />
        </Route>

        <Route path="/comments">
          <Comments 
          />
        </Route>

        <Route path="/review">
          <Review />
        </Route>

        <Route path="/submitted">
          <Submitted />
        </Route>

        </Router>
    </div>
  );
}

export default App;