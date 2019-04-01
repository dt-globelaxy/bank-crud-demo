import * as React from 'react';
import {
    WithStyles,
    withStyles,
    Paper,
    TablePagination,
    Table,
    TableBody,
    CircularProgress,
    Tooltip,
    IconButton,
    Button
} from '@material-ui/core';

import { OrderType } from './constants';
import EnhancedTableHead from './EnhancedTableHead';

import TableRow from '@material-ui/core/TableRow';
import TableCell, { TableCellProps } from '@material-ui/core/TableCell';
import Checkbox from '@material-ui/core/Checkbox';
import EnhancedTableToolbar from './EnhancedTableToolbar';
import { TableColumn } from './models';
import enhancedTableStyle from './enhancedTableStyle';
import { stableSort, getSorting } from './utils';
import { get } from 'lodash';

interface EnhancedTableProps {
    title: string;
    data: any[];
    columns: TableColumn[];
    keyField: string;
    order: OrderType;
    orderBy : string;
    remotePaging?: boolean;
    perPage?: number;
    page?: number;
    count?: number;
    isSelectable?: boolean;
    isLoading: boolean;
    onOrderChange?: (newOrder: OrderType) => void;
    onOrderByChange?: (newOrderBy: string) => void;
    onPerPageChange?: (newPerPage: number) => void;
    onPageChange?: (newPage: number) => void;
}

interface EnhancedTableState {
    order: OrderType;
    orderBy : string;
    perPage: number;
    page: number;
    selected : any[];
}

class EnhancedTable extends React.Component<EnhancedTableProps & WithStyles<typeof enhancedTableStyle>, EnhancedTableState> {
    state: EnhancedTableState = {
        selected: [],
        page: this.props.page ? this.props.page : 0,
        perPage: this.props.perPage ? this.props.perPage : 5,
        order: this.props.order,
        orderBy: this.props.orderBy
    };

    handleRequestSort = (event: React.MouseEvent<HTMLElement>, property : string) => {
        if (this.props.remotePaging) {
            const {order, orderBy, onOrderChange, onOrderByChange} = this.props;
            if (orderBy === property) {
                onOrderChange && onOrderChange(order === OrderType.desc ? OrderType.asc : OrderType.desc);
            } else {
                onOrderByChange && onOrderByChange(property)
            }
        } else {
            const orderBy = property;
            let order: OrderType = OrderType.desc;
    
            if (this.state.orderBy === property && this.state.order ===  OrderType.desc) {
                order =  OrderType.asc;
            }
    
            this.setState({order, orderBy});
        }
    };

    handleSelectAllClick = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.checked) {
            const { data } = this.props;
            this.setState(state => ({
                selected: data.map(n => n.id)
            }));
            return;
        }
        this.setState({selected: []});
    };

    handleClick = (event: React.MouseEvent<HTMLElement>, id: any) => {
        if (this.props.isSelectable) {
            const {selected} = this.state;
            const selectedIndex = selected.indexOf(id);
            let newSelected: any[] = [];

            if (selectedIndex === -1) {
                newSelected = newSelected.concat(selected, id);
            } else if (selectedIndex === 0) {
                newSelected = newSelected.concat(selected.slice(1));
            } else if (selectedIndex === selected.length - 1) {
                newSelected = newSelected.concat(selected.slice(0, -1));
            } else if (selectedIndex > 0) {
                newSelected = newSelected.concat(selected.slice(0, selectedIndex), selected.slice(selectedIndex + 1),);
            }

            this.setState({selected: newSelected});
        }
    };

    handleChangePage = (event: React.MouseEvent<HTMLButtonElement> | null, page: number) => {
        if (this.props.remotePaging) {
            this.props.onPageChange && this.props.onPageChange(page);
        } else {
            this.setState({page});
        }
    };

    handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        if (this.props.remotePaging) {
            this.props.onPerPageChange && this.props.onPerPageChange(Number(event.target.value));
        } else {
            this.setState({perPage: Number(event.target.value)});
        }
    };

    isSelected = (id: any) => this.state.selected.indexOf(id) !== -1;

    renderColumnCell = (column: TableColumn, data: any) => {
        const {field, label, disablePadding, action, actions, format, ...props} = column;
        return (action ? 
        <TableCell key={'action'+field} {...props}>
            {actions && actions.map((actionItem, index) => (
                actionItem.actionIcon ?
                <Tooltip key={index} title={actionItem.label}>
                    <IconButton aria-label={actionItem.label} onClick={() => actionItem.onClick && actionItem.onClick(data)}>
                        {actionItem.actionIcon}
                    </IconButton>
                </Tooltip> : <Button>{actionItem.label}</Button>)
                )
            }
        </TableCell>
        : <TableCell key={column.field} {...props}>
            {format ? format(get(data, field)) : get(data, field)}
        </TableCell>);
    }

    render() {
        const { 
            classes, 
            title, 
            columns, 
            keyField, 
            data, 
            isSelectable,
            count,
            isLoading
        } = this.props;
        const {
            selected,
        } = this.state;

        const totalCount = this.props.remotePaging ? (count ? count : 0) : (data ? data.length : 0);
        const fPage =  this.props.remotePaging ? (this.props.page ? this.props.page : 0) : this.state.page;
        const fPerPage =  this.props.remotePaging ? (this.props.perPage ? this.props.perPage : 5) : this.state.perPage;
        const emptyRows = fPerPage - Math.min(fPerPage, totalCount - fPage * fPerPage);
        const order = this.props.remotePaging ? this.props.order : this.state.order;
        const orderBy = this.props.remotePaging ? this.props.orderBy : this.state.orderBy;

        const fData = this.props.remotePaging ? data : stableSort(data, getSorting(order, orderBy))
            .slice(fPage * fPerPage, fPage * fPerPage + fPerPage);

        return (
            <Paper className={classes.root}>
                <EnhancedTableToolbar title={title} numSelected={selected.length}/>
                <div className={classes.tableWrapper}>
                    <Table className={classes.table} aria-labelledby="tableTitle">
                        <EnhancedTableHead
                            numSelected={selected.length}
                            order={order}
                            orderBy={orderBy}
                            isSelectable={isSelectable}
                            onSelectAllClick={this.handleSelectAllClick}
                            onRequestSort={this.handleRequestSort}
                            rowCount={totalCount}
                            columns={columns}
                            />
                        <TableBody>
                            {isLoading && 
                                <TableRow
                                    style={{
                                        height: 49 * emptyRows
                                    }}
                                >
                                    <TableCell align="center" colSpan={columns.length}>
                                        <CircularProgress />
                                    </TableCell>
                                </TableRow>}
                                {!isLoading && fData && fData.map((n: any) => {
                                    const isSelected = this.isSelected(n[keyField]);
                                    return (
                                        <TableRow
                                            hover
                                            onClick={event => this.handleClick(event, n[keyField])}
                                            role="checkbox"
                                            aria-checked={isSelected}
                                            className={classes.row}
                                            tabIndex={-1}
                                            key={n[keyField]}
                                            selected={isSelected}>
                                            {isSelectable && <TableCell padding="checkbox">
                                                <Checkbox checked={isSelected}/>
                                            </TableCell>}
                                            {columns.map((value) => this.renderColumnCell(value, n))}
                                        </TableRow>
                                    );
                                })}
                                {!isLoading &&  emptyRows > 0 && (
                                    <TableRow
                                        style={{
                                        height: 49 * emptyRows
                                    }}>
                                        <TableCell colSpan={columns.length}/>
                                    </TableRow>
                                )}
                        </TableBody>
                    </Table>
                </div>
                <TablePagination
                    rowsPerPageOptions={[5, 10, 25]}
                    component="div"
                    count={totalCount}
                    rowsPerPage={fPerPage}
                    page={fPage}
                    backIconButtonProps={{
                        'aria-label': 'Previous Page'
                    }}
                    nextIconButtonProps={{
                        'aria-label': 'Next Page'
                    }}
                    onChangePage={this.handleChangePage}
                    onChangeRowsPerPage={this.handleChangeRowsPerPage}/>
            </Paper>
        );
    }
}

export default withStyles(enhancedTableStyle, {withTheme: true})(EnhancedTable);