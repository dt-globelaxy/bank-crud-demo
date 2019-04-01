import * as React from 'react'
import {createStyles, Theme, withStyles, WithStyles} from '@material-ui/core/styles'
import Drawer from './layout/Drawer'
import Header from './layout/Header'
import Routes from './layout/Routes'
import withRoot from '../withRoot';

const styles = (theme : Theme) => createStyles({
  appBar: {
    gridArea: 'appBar',
    position: 'static',
    zIndex: theme.zIndex.drawer + 1
  },
  container: {
    display: 'grid',
    gridTemplateAreas: `'appBar appBar'
                        'drawer content'`,
    gridTemplateColumns: `auto 1fr`,
    gridTemplateRows: 'auto 1fr',
    height: '100%'
  },
  content: {
    alignItems: 'center',
    backgroundColor: theme.palette.background.default,
    gridArea: 'content',
    justifyContent: 'center',
    padding: theme.spacing.unit * 3
  },
  drawer: {
    gridArea: 'drawer'
  }
})

interface IAppProps extends WithStyles < typeof styles > {}

const App : React.SFC < IAppProps > = (props) => {
  const {classes} = props

  return (
    <div className={classes.container}>
      <Header/>
      <Drawer className={classes.drawer}/>
      <section className={classes.content}>
        <Routes />
      </section>
    </div>
  )
}

export default withRoot(withStyles(styles)(App))