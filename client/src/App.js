import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import StartView from './views/StartView';
import RatingView from './views/RatingView';

function App() {
  return (
    <>
      <Router>
        <Header />

        <Switch>
          <Route exact path="/" component={StartView} />
          <Route path="/rating" component={RatingView} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
