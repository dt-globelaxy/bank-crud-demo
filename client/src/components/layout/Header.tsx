import * as React from 'react'
import { FormattedMessage } from 'react-intl';
import AppBar from '@material-ui/core/AppBar'
import {createStyles, Theme, withStyles, WithStyles} from '@material-ui/core/styles'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'


const styles = (theme : Theme) => createStyles({
    appBar: {
        gridArea: 'appBar',
        position: 'static',
        zIndex: theme.zIndex.drawer + 1
    }
})

interface IHeaderProps extends WithStyles < typeof styles > {}

const Header: React.SFC<IHeaderProps> = ({classes}) => (
    <AppBar className={classes.appBar}>
        <Toolbar>
            <Typography variant="h5" color="inherit" noWrap={true}>
                <FormattedMessage 
                    id="headerTitle"
                    defaultMessage='Bank CRUD demo'
                />
            </Typography>
        </Toolbar>
    </AppBar>
)

export default withStyles(styles)(Header)