import React from 'react';
import Beluga from './Beluga';
import { 
  Switch, Route,
  useRouteMatch 
 } from 'react-router-dom';
import Blue from './Blue';
export default function Whale() {
  const { path } = useRouteMatch();


  debugger
  return (
    <>
      <h2>Whale</h2>
      <Switch>
        <Route path={`${path}/beluga`}>
          <Beluga />
        </Route>
        <Route path={`${path}/blue`}>
          <Blue />
        </Route>
      </Switch>
    </>
  );
}