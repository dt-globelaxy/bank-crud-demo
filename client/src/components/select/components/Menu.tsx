import * as React from 'react';
import Paper from "@material-ui/core/Paper/Paper";

export default function Menu(props: any) {
    return (
      <Paper square className={props.selectProps.classes.paper} {...props.innerProps}>
        {props.children}
      </Paper>
    );
}