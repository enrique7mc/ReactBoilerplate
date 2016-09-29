import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Router, IndexRoute, hashHistory } from 'react-router';
import Main from './components/Main';

// Load foundation-sites
/* eslint-disable import/no-extraneous-dependencies, import/no-unresolved */
require('style!css!foundation-sites/dist/foundation.min.css');
require('style!css!sass!./styles/app.scss');

$(document).foundation();
/* eslint-enable import/no-extraneous-dependencies, import/no-unresolved */

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
    </Route>
  </Router>,
  document.getElementById('app')
);
