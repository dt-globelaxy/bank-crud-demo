import * as React from 'react';
import MenuItem from "@material-ui/core/MenuItem/MenuItem";

export default function Option(props: any) {
    return (
      <MenuItem
        buttonRef={props.innerRef}
        selected={props.isFocused}
        component="div"
        style={{
          fontSize: 14,
          fontWeight: props.isSelected ? 500 : 400,
        }}
        {...props.innerProps}
      >
        {props.children}
      </MenuItem>
    );
}

