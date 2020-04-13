import {createStyles, Theme} from "@material-ui/core";
import { lighten } from '@material-ui/core/styles/colorManipulator';

const enhancedTableToolbarStyle = (theme : Theme) => createStyles({
    root: {
        paddingRight: theme.spacing()
    },
    highlight: theme.palette.type === 'light'
        ? {
            color: theme.palette.secondary.main,
            backgroundColor: lighten(theme.palette.secondary.light, 0.85)
        }
        : {
            color: theme.palette.text.primary,
            backgroundColor: theme.palette.secondary.dark
        },
    spacer: {
        flex: '1 1 100%'
    },
    actions: {
        color: theme.palette.text.secondary
    },
    title: {
        flex: '0 0 auto'
    }
});

export default enhancedTableToolbarStyle;