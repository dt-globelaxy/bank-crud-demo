import * as React from 'react';

import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import DeleteIcon from '@material-ui/icons/Delete';
import FilterListIcon from '@material-ui/icons/FilterList';
import {WithStyles, withStyles} from "@material-ui/core";
import classNames from 'classnames';
import enhancedTableToolbarStyle from './enhancedTableToolbarStyle';

interface Props {
    numSelected : number;
    title: string;
}

class EnhancedTableToolbar extends React.Component<Props & WithStyles<typeof enhancedTableToolbarStyle>> {
    render() {

        const {numSelected, title, classes} = this.props;

        return (
            <Toolbar
                className={classNames(classes.root, {
                [classes.highlight]: numSelected > 0
            })}>
                <div className={classes.title}>
                    {numSelected > 0
                        ? (
                            <Typography color="inherit" variant="subtitle1">
                                {numSelected} selected
                            </Typography>
                        )
                        : (
                            <Typography variant="h6" id="tableTitle">
                                {title}
                            </Typography>
                        )}
                </div>
                <div className={classes.spacer}/>
                <div className={classes.actions}>
                    {numSelected > 0
                        && (
                            <Tooltip title="Delete">
                                <IconButton aria-label="Delete">
                                    <DeleteIcon/>
                                </IconButton>
                            </Tooltip>
                        )}
                </div>
            </Toolbar>
        );
    }
};

export default withStyles(enhancedTableToolbarStyle, {withTheme: true})(EnhancedTableToolbar);