import * as React from 'react';
import {find} from 'lodash';
import { Query } from 'react-apollo';
import { Field, FormSpy } from 'react-final-form';
import Grid from '@material-ui/core/Grid/Grid';
import CustomSelect from '../../../select/CustomSelect';
import { GET_BANKS } from '../../../bank/queries/getBanks';
import { IBank } from '../../../bank/models';
import Spinner from '@material-ui/core/CircularProgress';
import Error from '../../../Error'
import { GET_BANK_BRANCHES } from '../../../branch/queries/getBankBranches';
import { IBranch } from '../../../branch/models';
import { IAccountFormModel } from '../models';


export const BankPage = () => (
    <Query query={GET_BANKS}>
        {({ data, error, loading }) =>  {
        if (error) { return <Error error={error} /> }
        if (loading || !data.getBanks) { return <Spinner /> }
        const bankOptions = data.getBanks.map((item: IBank) => ({value: item.id, label: item.name }));
        return (<Grid>
            <Grid item xs={12}>
                <Field name="bankId" 
                    parse={val => val && val.value}
                    format={val => find(bankOptions, o => o.value === val)}
                >
                    {({input, meta}) => (
                        <CustomSelect
                            labelText="Bank"
                            id="bankId"
                            error={meta.error && meta.touched}
                            helperText={meta.touched ? meta.error : ''}
                            formControlProps={{fullWidth: true}}
                            inputProps={{...input, options: bankOptions}}
                        />)
                    }
                </Field>
            </Grid>
            <Grid item xs={12}>
                <FormSpy subscription={{ values: true }}>
                {({ values } : {values: IAccountFormModel}) => {
                    if (!values || !values.bankId) {
                        return (
                            <Field name="branchId">
                                {({input, meta}) => (
                                    <CustomSelect
                                        labelText="Branch"
                                        id="branchId"
                                        error={meta.error && meta.touched}
                                        helperText={meta.touched ? meta.error : ''}
                                        formControlProps={{fullWidth: true}}
                                        inputProps={{...input,isDisabled: true, options: []}}
                                    />)
                                }
                            </Field>)
                    }

                    return( <Query query={GET_BANK_BRANCHES} variables={{ bankId: values.bankId  }}>
                        {({ data, error, loading }) =>  {
                            if (error) { return <Error error={error} /> }
                            if (loading || !data.getBankBranches) { return <Spinner /> }
                            const branchOptions = data.getBankBranches.map((item: IBranch) => ({value: item.id, label: item.name }));
                            return (
                            <Field name="branchId" parse={val => val && val.value} format={val => find(branchOptions, o => o.value === val)}>
                                {({input, meta}) => (
                                    <CustomSelect
                                        labelText="Branch"
                                        id="branchId"
                                        error={meta.error && meta.touched}
                                        helperText={meta.touched ? meta.error : ''}
                                        formControlProps={{fullWidth: true}}
                                        inputProps={{...input, options: branchOptions}}
                                    />)
                                }
                            </Field>)
                        }}
                    </Query>)
                    }}
                </FormSpy>
            </Grid>
        </Grid>)}}
    </Query>
)