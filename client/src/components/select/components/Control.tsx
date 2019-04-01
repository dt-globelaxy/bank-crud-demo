import * as React from 'react';
import TextField from "@material-ui/core/TextField/TextField";
import inputComponent from "./InputComponent";

export default function Control(props: any) {
    return (
      <TextField
        fullWidth
        InputProps={{
          inputComponent,
          inputProps: {
            className: props.selectProps.classes.input,
            inputRef: props.innerRef,
            children: props.children,
            ...props.innerProps,
          },
        }}
        {...props.selectProps.textFieldProps}
      />
    );
}