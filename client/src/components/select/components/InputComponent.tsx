import * as React from 'react';

export default function inputComponent({ inputRef, ...props } :  { inputRef: any, prop: any[] }) {
    return <div ref={inputRef} {...props} />;
}