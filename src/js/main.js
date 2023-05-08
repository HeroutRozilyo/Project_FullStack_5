import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useHistory,
} from 'react-router-dom';

import Login from '../js/Login.js'
import Application from '../js/Application.js'
function main() {
    return (
    <Router>
    <div>
    <Switch>
    <Route exact path="/">
    <Login />
    </Route>
    <Route path="/application">
    <Application />
    </Route>
    </Switch>
    </div>
    </Router>
    );
    }
    
    export default main;