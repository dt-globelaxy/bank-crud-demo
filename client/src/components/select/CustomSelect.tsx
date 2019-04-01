import * as React from 'react';
import classNames from 'classnames';
import withStyles, {WithStyles} from '@material-ui/core/styles/withStyles';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import customSelectStyle from './customSelectStyle';

import Select from 'react-select';
import { Props as SelectProps } from 'react-select/lib/Select';
import components from './components';

interface CustomSelectProps extends WithStyles<typeof customSelectStyle> {
    classes: any;
    labelText?: string;
    labelProps?: any;
    helperText?: string;
    helperProps?: any;
    id?: string;
    inputProps?: any;
    formControlProps?: any;
    inputRootCustomClasses?: string;
    error?: boolean;
    success?: boolean;
    white?: boolean;
    theme?: any;
};

const CustomSelect : React.FC<CustomSelectProps> = ({
    ...props
}) => {
    const {
        classes,
        formControlProps,
        labelText,
        helperText,
        id,
        inputProps,
        helperProps,
    } = props;


    var formControlClasses;
    if (formControlProps !== undefined) {
        formControlClasses = classNames(formControlProps.className, classes.formControl);
    } else {
        formControlClasses = classes.formControl;
    }
    
    const selectStyles = {
        input: (base: any) => ({
          ...base,
          color: props.theme ? props.theme.palette.text.primary : 'black',
          '& input': {
            font: 'inherit',
          },
        }),
    };
  
    return (
        <FormControl {...formControlProps} className={formControlClasses}>
            <Select
                classes={classes}
                textFieldProps={{
                    label: labelText,
                    InputLabelProps: {
                      shrink: true,
                    },
                  }}
                styles={selectStyles}
                components={components}
                id={id}
                {...inputProps}
            />
            {helperText && (<FormHelperText {...helperProps}>{helperText}</FormHelperText>)}
        </FormControl>
    );
}

export default withStyles(customSelectStyle, {withTheme: true})(CustomSelect);
