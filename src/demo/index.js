import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from '../header';
import Loarding from './loarding';
import JsCutText from './jsCutText';
import Snow from './snow';
import TextAnimationOne from './textAnimationOne';
import Buttons from './buttons';
import ThreeDAnimation from './threeDAnimation';
import ThreeDButton from './threeDButton';

export default class idnex extends Component {
  render() {
    return (
      <Router>
        <Header />
        <Switch>
          <Route path='/loarding' component={Loarding} />
          <Route path='/snow' component={Snow} />
          <Route path='/textanimationone' component={TextAnimationOne} />
          <Route path='/buttons' component={Buttons} />
          <Route path='/3dbutton' component={ThreeDButton} />
          <Route path='/3danimation' component={ThreeDAnimation} />
        </Switch>
      </Router>
    );
  }
}
