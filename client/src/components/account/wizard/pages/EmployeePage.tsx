import * as React from 'react';
import { Field } from 'react-final-form';
import { TextField } from 'final-form-material-ui';
import Grid from '@material-ui/core/Grid/Grid';
import { normalizeEmployeeNumber } from '../utils';
import { padStart } from 'lodash';


export const EmployeePage = () => (
    <Grid>
        <Grid item xs={12}>
            <Field
                fullWidth
                name="employeeName"
                component={TextField}
                label="Employee Name"
            />
        </Grid>
        <Grid item xs={12}>
            <Field
                fullWidth
                name="employeeNumber"
                parse={normalizeEmployeeNumber}
                formatOnBlur
                format={value => padStart(value,15, '0')}
                component={TextField}
                label="Employee Number"
            />
        </Grid>
    </Grid>
)