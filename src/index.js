import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import './index.css';

import Home from './pages/Home';
import Post from './pages/Post';
import NotFound from './pages/NotFound';

ReactDOM.render(
  <Router>
    <div>
      <Route exact path="/" component={Home} />
      <Route exact path="/404" component={NotFound} />
      <Route exact path="/post/:slug" render={(props) => <Post {...props} />} />
    </div>
  </Router>,
  document.getElementById('root'),
);
