import * as React from 'react';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

import indigo from '@material-ui/core/colors/indigo';
import lightGreen from '@material-ui/core/colors/lightGreen';
import CssBaseline from '@material-ui/core/CssBaseline';

const theme = createMuiTheme({
  // Theme Colors
  palette: {
    primary: indigo,
    secondary: lightGreen,
  },
});

function withRoot<P>(Component: React.ComponentType<P>) {
  function WithRoot(props: P) {
    return (
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <Component {...props} />
      </MuiThemeProvider>
    );
  }

  return WithRoot;
}

export default withRoot;