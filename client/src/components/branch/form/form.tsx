import * as React from 'react';
import { FormRenderProps, Field } from 'react-final-form';
import { TextField, Select } from 'final-form-material-ui';
import Grid from '@material-ui/core/Grid/Grid';
import Paper from '@material-ui/core/Paper/Paper';
import { Button, MenuItem } from '@material-ui/core';
import CustomSelect from '../../select/CustomSelect';
import { Query } from 'react-apollo';
import { GET_BANKS } from '../../bank/queries/getBanks';
import Spinner from '@material-ui/core/CircularProgress';
import Error from '../../Error'
import { IBank } from '../../bank/models';
import { find } from 'lodash';


export const branchFormRender = (props: FormRenderProps) => ( 
    <Query query={GET_BANKS}>
        {({ data, error, loading }) =>  {
        if (error) { return <Error error={error} /> }
        if (loading || !data.getBanks) { return <Spinner /> }
        const bankOptions = data.getBanks.map((item: IBank) => ({value: item.id, label: item.name }));
        return (
        <form onSubmit={props.handleSubmit}>
            <Paper style={{ padding: 16 }}>
                <Grid>
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
                                    inputProps={{
                                        ...input,
                                        options: bankOptions, 
                                    }}
                                />)

                            }
                        </Field>
                    </Grid>
                    <Grid item xs={12}>
                        <Field
                            fullWidth
                            name="name"
                            component={TextField}
                            label="Branch Name"
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Field
                            fullWidth
                            name="address"
                            component={TextField}
                            label="Address"
                        />
                    </Grid>
                    <Grid item style={{ marginTop: 16 }}>
                        <Button
                            variant="contained"
                            color="primary"
                            type="submit"
                            disabled={props.submitting}
                        >
                            { !props.values.id && 'Create' }
                            { props.values.id && 'Update' }
                        </Button>
                    </Grid>
                </Grid>
            </Paper>
        </form>)}}
    </Query>
);