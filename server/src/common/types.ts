export enum OrderType {
    asc = 'asc',
    desc = 'desc',
}

export interface Paged<E> {
    data: E[];
    count: number;
    page: number;
    perPage: number;
}
