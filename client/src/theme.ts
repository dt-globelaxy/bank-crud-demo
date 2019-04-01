import { createMuiTheme } from '@material-ui/core/styles'

// All the following keys are optional.
// We try our best to provide a great default value.
const customTheme = createMuiTheme({
    palette: {
        primary: {
          light: '#586776',
          main: '#2f4154',
          dark: '#202d3a',
          contrastText: '#fff',
        },
        secondary: {
          light: '#47c9af',
          main: '#1abc9c',
          dark: '#12836d',
          contrastText: '#000',
        },
    },
    typography: {
        useNextVariants: true,
    },
})

export default customTheme