import moment from 'moment';

export const DATE_TIME_FORMAT = 'DD.MM.YYYY HH:mm:ss';

export const DATE_FORMAT = 'DD.MM.YYYY';

export function formatCellDateTime(data: number) {
    return moment(data).format(DATE_TIME_FORMAT);
}

export function formatCellDate(data: number) {
    return moment(data).format(DATE_FORMAT);
}

export function formatCellFromNow(data: number) {
    return moment(data).fromNow();
}

export const dateFieldProps = ({
    parse: (val: any) => val,
    format: (val: any) => formatCellDate(val)
})

export type FormErrors<T> = { [P in keyof T]?: string };