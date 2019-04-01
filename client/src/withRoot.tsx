import * as React from 'react';
import { MuiThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import customTheme from './theme'


function withRoot<P>(Component: React.ComponentType<P>) {
    function WithRoot(props: P) {
      // MuiThemeProvider makes the theme available down the React tree
      // thanks to React context.
      return (
        <MuiThemeProvider theme={customTheme}>
          {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
          <CssBaseline />
          <Component {...props} />
        </MuiThemeProvider>
      );
    }
  
    return WithRoot;
  }
  
  export default withRoot;