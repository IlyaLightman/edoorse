import React from 'react';
import './App.css';
import { Route, Switch, Redirect, withRouter } from 'react-router-dom'

function App() {
  return (
      <Switch>
          <Route path='/' component={
              <div className="App">
                  <header className="App-header">
                      <h1>Edoorse</h1>
                      <button
                          onClick={
                              async () => {
                                  await fetch('api/auth/dbtest', {
                                      method: 'POST',
                                      headers: {},
                                      body: null
                                  })
                              }
                          }
                      >DB Test</button>
                  </header>
              </div>
          } />
          <Route path='/login' component={} />
      </Switch>
  );
}

export default App;
