import * as React from 'react';
import { FormRenderProps } from 'react-final-form';
import Grid from '@material-ui/core/Grid/Grid';
import Paper from '@material-ui/core/Paper/Paper';
import { Button } from '@material-ui/core';
import { BankPage } from './pages/BankPage';
import { AccountPage } from './pages/AccountPage';
import { EmployeePage } from './pages/EmployeePage';


export const updateFormRender = (props: FormRenderProps) => ( 
    <form onSubmit={props.handleSubmit}>
        <Paper style={{ padding: 16 }}>
            <BankPage />
            <AccountPage />
            <EmployeePage />
            <Grid>
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
    </form>
);