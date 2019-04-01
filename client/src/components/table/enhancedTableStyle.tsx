import {Theme, createStyles} from "@material-ui/core";

const enhancedTableStyle = (theme : Theme) => createStyles({
    root: {
        width: '100%',
        marginTop: theme.spacing.unit * 3
    },
    table: {
        minWidth: 700
    },
    tableWrapper: {
        overflowX: 'auto'
    },
    row: {
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.background.default
        }
    }
});

export default enhancedTableStyle;