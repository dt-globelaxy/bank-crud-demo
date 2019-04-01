export enum OrderType {
    asc = 'ask',
    desc = 'desc',
}

export interface Paged<E> {
    data: E[];
    count: number;
    page: number;
    perPage: number;
}
