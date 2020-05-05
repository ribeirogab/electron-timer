import React from 'react';
import { Route, HashRouter } from 'react-router-dom';

import Home from '../pages/Home';
import About from '../pages/About';

export default function Routes() {
  return (
    <HashRouter>
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
    </HashRouter>
  );
}
