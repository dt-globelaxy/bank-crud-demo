import * as React from 'react';
import Typography from "@material-ui/core/Typography/Typography";

export default function SingleValue(props: any) {
    return (
      <Typography className={props.selectProps.classes.singleValue} {...props.innerProps}>
        {props.children}
      </Typography>
    );
}
