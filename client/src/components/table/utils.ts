import { OrderType } from './constants';
import { get } from 'lodash';

export function desc(a: any, b: any, orderBy: string) {
    if (get(b,orderBy) < get(a,orderBy)) {
        return -1;
    }
    if (get(b,orderBy) > get(a,orderBy)) {
        return 1;
    }
    return 0;
}

export function stableSort(array: any[], cmp: (a: any, b: any) => number) {
    const stabilizedThis = array.map((el, index) => [el, index]);
    stabilizedThis.sort((a, b) => {
        const order = cmp(a[0], b[0]);
        if (order !== 0) return order;
        return a[1] - b[1];
    });
    return stabilizedThis.map(el => el[0]);
}

export function getSorting(order: OrderType, orderBy: string) {
    return order === OrderType.desc ? (a: any, b: any) => desc(a, b, orderBy) : (a: any, b: any) => -desc(a, b, orderBy);
}
