import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import Popular from '../popular/Popular';
import Battle from "../battle/Battle";
import BattleResult from '../battle/BattleResult';
import TrainNav from '../../components/TrainNav';


// const Battle1 = lazy(() => import('../battle/Battle'));

export default function App() {
  return (
      // eslint-disable-next-line react/jsx-filename-extension
    <Router>
      <div>
        <TrainNav />
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/popular" exact component={Popular} />
          <Route path="/popular/:type" exact component={Popular} />
          <Route path="/battle" exact component={Battle} />
          <Route path="/battle/:name" exact component={BattleResult} />
        </Switch>
      </div>
    </Router>
  );
}
