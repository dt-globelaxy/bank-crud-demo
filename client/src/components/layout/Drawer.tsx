import * as React from 'react'
import { withRouter, RouteComponentProps } from 'react-router'
import { FormattedMessage } from 'react-intl';
import Divider from '@material-ui/core/Divider'
import Drawer from '@material-ui/core/Drawer'
import List from '@material-ui/core/List'
import {createStyles, withStyles, WithStyles} from '@material-ui/core/styles'
import BusinessIcon from '@material-ui/icons/Business';
import NavItem from './NavItem';
import { DRAWER_WIDTH, RoutePaths } from './constants';


const styles = createStyles({
    paper: {
        width: `${DRAWER_WIDTH}px`,
        height: '100%',
        position: 'static'
    }
})

interface IDrawerProps extends WithStyles<typeof styles> {
    className?: string
}

const DrawerComponent: React.SFC<IDrawerProps & RouteComponentProps> = ({className, classes, location: { pathname }}) => (
    <Drawer
        className={className}
        variant="permanent"
        classes={{
        paper: classes.paper
    }}>
        <List>
            <NavItem label={<FormattedMessage  id="accountsNavItemLabel" defaultMessage='Accounts' />} path={RoutePaths.Accounts} pathname={pathname} icon={<BusinessIcon />}/>
            <NavItem label={<FormattedMessage  id="banksNavItemLabel" defaultMessage='Banks' />}  path={RoutePaths.Banks} pathname={pathname} icon={<BusinessIcon />}/>
            <NavItem label={<FormattedMessage  id="branchesNavItemLabel" defaultMessage='Branches' />} path={RoutePaths.Branches} pathname={pathname} icon={<BusinessIcon />}/>
        </List>
        <Divider/>
    </Drawer>
)

export default withRouter(withStyles(styles)(DrawerComponent))