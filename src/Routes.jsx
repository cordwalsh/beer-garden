import React from 'react';
import { Route, Switch } from 'react-router-dom';
import KegList from './KegList';
import NewKegForm from './NewKegForm';
import NewKegControl from './NewKegControl';
import About from './About';
import Location from './Location';


const Routes = (props) => (
  <Switch>
    <Route exact path='/' render={()=><KegList kegList={props.masterKegList} />} />
    <Route path='/newkeg' render={()=><NewKegControl onNewKegCreation={props.handleAddingNewKegToList} />} />
    <Route path='/about' component={ About } />
    <Route path='/location' component={ Location } />

    }
  </Switch>
);

export default Routes;
