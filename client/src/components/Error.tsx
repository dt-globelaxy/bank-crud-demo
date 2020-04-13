import Snackbar from '@material-ui/core/Snackbar'
import {ApolloError} from 'apollo-client'
import * as React from 'react'

const Error: React.FC<{error: ApolloError}> = ({error: { message}}) => (
    <Snackbar  
        autoHideDuration={5000}
        ContentProps={{
            'aria-describedby': 'message-id'
        }}
        message={<span>{message}</span>}
        open={!!message}
    />)

export default Error