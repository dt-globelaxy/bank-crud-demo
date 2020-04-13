import * as React from 'react';
import { FormSpy } from 'react-final-form';
import Grid from '@material-ui/core/Grid/Grid';
import { IAccountFormModel } from '../models';
import { Typography } from '@material-ui/core';
import { Query, QueryResult } from 'react-apollo';
import { BANK } from '../../../bank/queries/bank';
import Spinner from '@material-ui/core/CircularProgress';
import Error from '../../../Error'
import { BRANCH } from '../../../branch/queries/branch';


export const ConfirmationPage = () => (

    <FormSpy subscription={{ values: true }}>
    {({ values } : {values: IAccountFormModel}) => (
        <Grid>
            <Grid item xs={12} style={{padding:16}}>
               <Typography variant="subtitle2" >Bank</Typography> 
               <Query query={BANK} variables={{id:values.bankId}}>
                {({ data, error, loading }: QueryResult<any>) =>  {
                if (error) { return <Error error={error} /> }
                if (loading || !data.bank) { return <Spinner /> }
                return (<Typography variant="subtitle1" >{data.bank.name}</Typography>)}}
               </Query>
               <Typography variant="subtitle2" >Branch</Typography> 
               <Query query={BRANCH} variables={{id:values.branchId}}>
                {({ data, error, loading }: QueryResult<any>) =>  {
                if (error) { return <Error error={error} /> }
                if (loading || !data.branch) { return <Spinner /> }
                return (<Typography variant="subtitle1" >{data.branch.name}</Typography>)}}
               </Query>
            </Grid>
            <Grid item xs={12} style={{padding:16}}>
               <Typography variant="subtitle2" >Holders Name</Typography> 
               <Typography variant="subtitle1" >{values.holdersName}</Typography> 
               <Typography variant="subtitle2" >Account Type</Typography> 
               <Typography variant="subtitle1" >{values.type}</Typography> 
               <Typography variant="subtitle2" >Account Number</Typography> 
               <Typography variant="subtitle1" >{values.number}</Typography> 
            </Grid>
            <Grid item xs={12} style={{padding:16}}>
               <Typography variant="subtitle2" >Employee Name</Typography> 
               <Typography variant="subtitle1" >{values.employeeName}</Typography> 
               <Typography variant="subtitle2" >Employee Number</Typography> 
               <Typography variant="subtitle1" >{values.employeeNumber}</Typography> 
            </Grid>
        </Grid>
    )}
    </FormSpy>
)