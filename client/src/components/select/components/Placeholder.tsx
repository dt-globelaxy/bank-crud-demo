import * as React from 'react';
import Typography from "@material-ui/core/Typography/Typography";

export default function Placeholder(props: any) {
    return (
      <Typography
        color="textSecondary"
        className={props.selectProps.classes.placeholder}
        {...props.innerProps}
      >
        {props.children}
      </Typography>
    );
}
