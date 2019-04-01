import * as React from 'react';
import Typography from "@material-ui/core/Typography/Typography";

export default function NoOptionsMessage(props: any) {
    return (
      <Typography
        color="textSecondary"
        className={props.selectProps.classes.noOptionsMessage}
        {...props.innerProps}
      >
        {props.children}
      </Typography>
    );
}
  