import { TableCellProps } from "@material-ui/core/TableCell";

export interface TableColumn extends TableCellProps {
    label: string;
    field: string;
    disablePadding: boolean;
    action?: boolean;
    onClick?: (item: any) => void;
    format?: (value: any) => React.ReactNode;
    actions?: TableColumnActions[];
}

export interface TableColumnActions {
    label: string;
    actionIcon?: React.ReactNode;
    onClick?: (item: any) => void;
}