import React from 'react';
import Layout from './components/Layout/Layout';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './components/Home/Home';
import './App.css';

function App() {
  return (
    <>
    <Router>
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />

        </Switch>
      </Layout>
    </Router>
    </>
  );
}

export default App;
