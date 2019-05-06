import React from 'react';
import logo from './logo.svg';
import './App.css';

import TestComponent from './components/TestComponent'

import { Theme } from "@material-ui/core/styles/createMuiTheme";
import withStyles, { WithStyles, StyleRules } from "@material-ui/core/styles/withStyles";
import createStyles from "@material-ui/core/styles/createStyles";
import withRoot from './withRoot';
const styles = (theme: Theme): StyleRules => createStyles({ root: {} });
type Props = WithStyles<typeof styles>;

const App: React.FC = () => {
  return (
    <div>
      <TestComponent title="React TypeScript Material-UI Example" />
    </div>
  );
}

export default withRoot(withStyles(styles)(App));
