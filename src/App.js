import React from 'react';
import Layout from './components/Layout/Layout';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './components/Home/Home';
import Following from './components/Following/Following';
import './App.css';

function App() {
  
  return (
    <>
    <Router>
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/following" component={Following} />
        </Switch>
      </Layout>
    </Router>
    </>
  );
}

export default App;
