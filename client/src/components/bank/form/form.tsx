import * as React from "react";
import { FormRenderProps, Field } from "react-final-form";
import { TextField } from "final-form-material-ui";
import Grid from "@material-ui/core/Grid/Grid";
import Paper from "@material-ui/core/Paper/Paper";
import { Button } from "@material-ui/core";
import { IBankFormModel } from "./models";

export const bankFormRender = (props: FormRenderProps<IBankFormModel>) => (
  <form onSubmit={props.handleSubmit}>
    <Paper style={{ padding: 16 }}>
      <Grid>
        <Grid item xs={12}>
          <Field
            fullWidth
            name="name"
            component={TextField}
            label="Bank Name"
          />
        </Grid>
        <Grid item xs={12}>
          <Field
            fullWidth
            name="notes"
            component={TextField}
            multiline
            label="Notes"
          />
        </Grid>
        <Grid item style={{ marginTop: 16 }}>
          <Button
            variant="contained"
            color="primary"
            type="submit"
            disabled={props.submitting}
          >
            {!props.values.id && "Create"}
            {props.values.id && "Update"}
          </Button>
        </Grid>
      </Grid>
    </Paper>
  </form>
);
