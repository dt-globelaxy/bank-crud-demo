import * as React from 'react';
import Paper from '@material-ui/core/Paper/Paper';
import Grid from '@material-ui/core/Grid/Grid';
import { Field, Form } from 'react-final-form';
import { normalizeAccountNumber } from './wizard/utils';
import { TextField } from 'final-form-material-ui';
import Button from '@material-ui/core/Button/Button';

interface IAccountListFiltersProps {
    fromNumber: number | undefined
    toNumber: number | undefined
    onFilterChange: (fromNumber: number | undefined, toNumber: number | undefined) => void
}

class AccountListFilters extends React.Component<IAccountListFiltersProps> {

    handleSubmit = (values: any) => {
        const {fromNumber, toNumber} = values;
        this.props.onFilterChange(
            fromNumber ? parseInt(fromNumber) : undefined, 
            toNumber ? parseInt(toNumber) : undefined
        );
    }

    handleReset = () => {
        this.props.onFilterChange(undefined, undefined);
    }

    render() {
        return (
        <Form onSubmit={this.handleSubmit} initialValues={{fromNumber: this.props.fromNumber, toNumber: this.props.toNumber}}>
            {({handleSubmit}) => (
            <form onSubmit={handleSubmit}>
                <Paper style={{padding: 16}}>
                    <Grid container spacing={16} alignContent='center'>
                        <Grid key={0} item xs={4}>
                            <Field
                                fullWidth
                                parse={normalizeAccountNumber}
                                name="fromNumber"
                                component={TextField}
                                label="From Account Number"
                            />
                        </Grid>
                        <Grid key={1} item xs={4}>
                            <Field
                                fullWidth
                                parse={normalizeAccountNumber}
                                name="toNumber"
                                component={TextField}
                                label="To Account Number"
                            />
                        </Grid>
                        <Grid key={2} item xs={1} >
                            <Button variant="contained" type="submit" onClick={this.handleReset}>Reset</Button>
                        </Grid>
                        <Grid key={3} item xs={1}>
                            <Button variant="contained" color="primary" type="submit">Filter</Button>
                        </Grid>
                    </Grid>
                </Paper>
            </form>)}
        </Form>
        )
    }
}

export default AccountListFilters;