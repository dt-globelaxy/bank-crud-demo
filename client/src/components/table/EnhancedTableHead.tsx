import * as React from 'react';
import { OrderType } from './constants';

import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import Checkbox from '@material-ui/core/Checkbox';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import Tooltip from '@material-ui/core/Tooltip';
import { TableColumn } from './models';

interface EnhancedTableHeadProps {
    numSelected : number;
    onRequestSort : (event: React.MouseEvent<HTMLElement>, property: string) => void;
    onSelectAllClick : (event: React.ChangeEvent<HTMLInputElement>, checked: boolean) => void;
    order : OrderType;
    orderBy : string;
    rowCount : number;
    columns: TableColumn[];
    isSelectable?: boolean;
}

class EnhancedTableHead extends React.Component<EnhancedTableHeadProps> {
    createSortHandler = (property: string) => (event: React.MouseEvent<HTMLElement>) => {
        this.props.onRequestSort(event, property);
    };

    render() {
        const {onSelectAllClick, order, orderBy, numSelected, rowCount, columns, isSelectable } = this.props;

        return (
            <TableHead>
                <TableRow>
                    {isSelectable && <TableCell padding="checkbox">
                        <Checkbox
                            indeterminate={numSelected > 0 && numSelected < rowCount}
                            checked={numSelected === rowCount}
                            onChange={onSelectAllClick}/>
                    </TableCell>}
                    {columns.map(column => (
                        <TableCell
                            key={column.field}
                            align={column.numeric ? 'right' : 'left'}
                            padding={column.disablePadding  ? 'none' : 'default'}
                            sortDirection={orderBy === column.field ? order : false}>
                            <Tooltip
                                title="Sort"
                                placement={column.numeric ? 'bottom-end' : 'bottom-start'}
                                enterDelay={300}>
                                <TableSortLabel
                                    active={orderBy === column.field}
                                    direction={order}
                                    onClick={column.action ? undefined : this.createSortHandler(column.field)}>
                                    {column.action ? '' : column.label}
                                </TableSortLabel>
                            </Tooltip>
                        </TableCell>
                    ), this,)}
                </TableRow>
            </TableHead>
        );
    }
}

export default EnhancedTableHead;