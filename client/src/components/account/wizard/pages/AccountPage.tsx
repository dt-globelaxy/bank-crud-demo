import * as React from 'react';
import { Field } from 'react-final-form';
import { TextField } from 'final-form-material-ui';
import Grid from '@material-ui/core/Grid/Grid';
import { normalizeAccountNumber, accountTypeOptions } from '../utils';
import { find, padStart } from 'lodash';
import CustomSelect from '../../../select/CustomSelect';


export const AccountPage = () => (
    <Grid>
        <Grid item xs={12}>
            <Field
                fullWidth
                name="holdersName"
                component={TextField}
                label="Holders Name"
            />
        </Grid>
        <Grid item xs={12}>
            <Field name="type" 
                    parse={val => val && val.value}
                    format={val => find(accountTypeOptions, o => o.value === val)}
            >
                {({input, meta}) => (
                    <CustomSelect
                        labelText="Account Type"
                        id="type"
                        error={meta.error && meta.touched}
                        helperText={meta.touched ? meta.error : ''}
                        formControlProps={{fullWidth: true}}
                        inputProps={{...input, options: accountTypeOptions}}
                    />)
                }
            </Field>
        </Grid>
        <Grid item xs={12}>
            <Field
                fullWidth
                parse={normalizeAccountNumber}
                formatOnBlur
                format={value => padStart(value,7, '0')}
                name="number"
                component={TextField}
                label="Account Number"
            />
        </Grid>
    </Grid>
)