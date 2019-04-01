import * as React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { Link } from 'react-router-dom';

interface INavItemProps {
    label: React.ReactNode;
    path: string;
    pathname: string;
    icon: React.ReactElement<any>;
}

const NavItem: React.SFC<INavItemProps> = (props: INavItemProps) => {
    const { label, path, pathname, icon } = props;
    const isSeleted = path.toLowerCase() == pathname.toLowerCase();
    return (
        <ListItem selected={isSeleted} button component={({innerRef,...props}) => <Link {...props} to={path} />}>
            <ListItemIcon>
                {icon}
            </ListItemIcon>
            <ListItemText primary={label} />
        </ListItem>
    );
}

export default NavItem;