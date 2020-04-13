import createStyles from "@material-ui/core/styles/createStyles";
import { Theme } from "@material-ui/core/styles";
import { emphasize } from "@material-ui/core/styles/colorManipulator";

const customSelectStyles = (theme : Theme) => {
    return createStyles({
    root: {
        flexGrow: 1,
        height: 250,
    },
    input: {
        display: 'flex',
        padding: 0,
        color: "#495057",
        "&,&::placeholder": {
            fontSize: "16px",
            fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
            fontWeight: 400,
            lineHeight: "1.42857",
            opacity: 1
        },
        "&::placeholder": {
            color: "#AAAAAA"
        }
    },
    valueContainer: {
        display: 'flex',
        flexWrap: 'wrap',
        flex: 1,
        color: "#495057",
        alignItems: 'center',
        overflow: 'hidden',
        fontSize: "16px",
        fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
        fontWeight: 400,
        lineHeight: "1.42857",
        opacity: 1
    },
    chip: {
        margin: `${theme.spacing(0.5)}px ${theme.spacing(0.25)}px`,
    },
    chipFocused: {
        backgroundColor: emphasize(
            theme.palette.type === 'light' ? theme.palette.grey[300] : theme.palette.grey[700],
            0.08,
        ),
    },
    noOptionsMessage: {
        padding: `${theme.spacing()}px ${theme.spacing(2)}px`,
    },
    singleValue: {
        //color: "#495057",
        fontSize: "16px",
        fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
        fontWeight: 400,
        lineHeight: "1.42857",
        opacity: 1
    },
    placeholder: {
        position: 'absolute',
        left: 2,
        color: "#495057",
        fontSize: "16px",
        fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
        fontWeight: 400,
        lineHeight: "1.42857",
        opacity: 1
    },
    paper: {
        position: 'absolute',
        zIndex: 1,
        marginTop: theme.spacing(),
        left: 0,
        right: 0,
    },
    divider: {
        height: theme.spacing(2),
    },
    formControl: {
        margin: "0 0 0 0",
        paddingTop: "7px",
        position: "relative",
        "& svg,& .fab,& .far,& .fal,& .fas,& .material-icons": {
            //color: "#495057"
        }
    },
  });
}

export default customSelectStyles;