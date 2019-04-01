import * as React from 'react';

export default function ValueContainer(props: any) {
    return <div className={props.selectProps.classes.valueContainer}>{props.children}</div>;
}