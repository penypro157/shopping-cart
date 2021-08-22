import React from 'react';
import './App.css';
import { Component } from 'react';
import JSX from './Components/JSX';
import Props from './Components/Props';
import Decorator from './Components/Decorator';
import Form from './Components/Form';
import JobManagement from './Components/JobManagement';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import {demo,message} from './Redux/demo';
import { Provider } from 'react-redux'
import {myReducer} from './Redux/Reducer/index'
import { createStore } from 'redux';
class App extends Component {
  store = createStore(myReducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
  render() {
    return (
      <div>

        <BrowserRouter>
          <nav className="navbar navbar-expand-lg navbar-dark bg-dark ">
            <h1 className="navbar-brand" >ReactJS</h1>
            <button className="navbar-toggler" data-target="#my-nav" data-toggle="collapse" aria-controls="my-nav"
              aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div id="my-nav" className="collapse navbar-collapse">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item ">
                  <Link to="/component" className="nav-link">Component</Link>
                </li>
                <li className="nav-item ">
                  <li><Link to="/jsx" className="nav-link">JSX</Link></li>
                </li>
                <li className="nav-item ">
                  <li><Link to="/props" className="nav-link">Props - Refs - State</Link></li>
                </li>
                <li className="nav-item ">
                  <li><Link to="/practice" className="nav-link">Practice</Link></li>
                </li>
                <li className="nav-item ">
                  <li><Link to="/form" className="nav-link">Form</Link></li>
                </li>
                <li className="nav-item active">
                  <li><Link to="/jobManagement" className="nav-link">Job Management</Link></li>
                </li>
              </ul>
            </div>
          </nav>
          <Switch>
            <Route path="/component">
              <h1>Studied</h1>
            </Route>
            <Route path="/jsx">
              <JSX />
            </Route>
            <Route path="/props">
              <Props />
            </Route>
            <Route path="/practice">
              <Decorator />
            </Route>
            <Route path="/form">
              <Form />
            </Route>
            <Route path="/jobManagement">
              <Provider store={this.store}>
              <JobManagement />
              </Provider>
            </Route>
          </Switch>
        </BrowserRouter>
      </div>


    );
  }
}

export default App;
