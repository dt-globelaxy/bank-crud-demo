import {createStyles, Theme} from "@material-ui/core";

const enhancedTableHeadStyle = (theme : Theme) => createStyles({
    root: {
        paddingRight: theme.spacing.unit
    }
});

export default enhancedTableHeadStyle;