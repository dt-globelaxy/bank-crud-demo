import * as React from 'react';
import classNames from 'classnames';
import CancelIcon from '@material-ui/icons/Cancel';
import Chip from "@material-ui/core/Chip/Chip";

export default function MultiValue(props: any) {
    return (
      <Chip
        tabIndex={-1}
        label={props.children}
        className={classNames(props.selectProps.classes.chip, {
          [props.selectProps.classes.chipFocused]: props.isFocused,
        })}
        onDelete={props.removeProps.onClick}
        deleteIcon={<CancelIcon {...props.removeProps} />}
      />
    );
}