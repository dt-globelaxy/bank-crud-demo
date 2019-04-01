import * as React from 'react';
import Dialog from '@material-ui/core/Dialog/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent/DialogContent';
import DialogActions from '@material-ui/core/DialogActions/DialogActions';
import Button from '@material-ui/core/Button/Button';
import Typography from '@material-ui/core/Typography/Typography';

interface IConfirmDialogProps {
    open: boolean;
    title?: string;
    message: string;
    yesButtonText?: string;
    noButtonText?: string;
    handleDialogClose: Function;
    handleDialogAction: Function;
}

class ConfirmDialog extends React.Component<IConfirmDialogProps> {
    render() {
        return (
        <Dialog open={this.props.open} onClose={() => this.props.handleDialogClose()}>
            <DialogTitle>{this.props.title ? this.props.title : 'Confirmation'}</DialogTitle>
            <DialogContent>
                <Typography>{this.props.message ? this.props.message : 'Do you confirm action?'}</Typography>
            </DialogContent>
            <DialogActions>
              <Button color="primary" onClick={() => this.props.handleDialogClose()}>
                {this.props.noButtonText ? this.props.noButtonText : 'No'}
              </Button>
              <Button color="primary" onClick={() => this.props.handleDialogAction()}>
                {this.props.yesButtonText ? this.props.yesButtonText : 'Yes'}
              </Button>
            </DialogActions>
        </Dialog>)
    }
}

export default ConfirmDialog;