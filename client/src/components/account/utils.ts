import { padStart } from "lodash";

export function formatCellAccountNumber(data: number) {
    return padStart(data.toString(), 7, '0');
}

export function formatCellEmployeeNumber(data: any) {
    return padStart(data.toString(), 15, '0');
}