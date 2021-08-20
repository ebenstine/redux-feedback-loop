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
        <h1 className='App-title'>Feedback!</h1>
        <h4>Don't forget it!</h4>
      </header>
      <Route path="/" exact>
        <Feeling />
      </Route>

      <Route path="/understanding" exact>
        <Understanding />
      </Route>

      <Route path="/supported" exact>
        <Supported />
      </Route>

      <Route path="/review" exact>
        <Review />
      </Route>

      <Route path="/comments" exact>
        <Comments />
      </Route>

      <Route path="/submitted" exact>
        <Submitted />
      </Route>
    </Router>
    </div>
  );
}

export default App;
