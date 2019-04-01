
import * as React from 'react';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import { formatCellDateTime } from '../../utils';
import { IAccount } from './models';
import { formatCellAccountNumber, formatCellEmployeeNumber } from './utils';

const accountListColumns = (onEditClick: (item: IAccount) => void, onDeleteClick: (item: IAccount) => void) => [
    { label: 'Holders Name', field: 'holdersName', disablePadding: false },
    { label: 'Employee Name', field: 'employeeName', disablePadding: false },
    { label: 'Account Type', field: 'type', disablePadding: false },
    { label: 'Bank', field: 'bank.name', disablePadding: false },
    { label: 'Account Number', field: 'number', disablePadding: false, format: formatCellAccountNumber },
    { label: 'Employee Number', field: 'employeeNumber', disablePadding: false, format: formatCellEmployeeNumber },
    { label: 'Updated', field: 'updated', disablePadding: false, format: formatCellDateTime },
    { label: 'Created', field: 'created', disablePadding: false, format: formatCellDateTime },
    { label: 'Actions', field: 'actions', disablePadding: true, action: true, actions: [ 
        { label: 'Edit', actionIcon: <EditIcon/>, onClick: onEditClick },
        { label: 'Delete',  actionIcon: <DeleteIcon/>, onClick: onDeleteClick } 
        ]
    }
]

export default accountListColumns;