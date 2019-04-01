import { AccountType } from "../models";

export function normalizeAccountNumber(value: string) {
    if (!value) return value;
    const onlyNums = value.replace(/[^\d]/g, "");
    if (!onlyNums) return undefined;
    if (onlyNums.length <= 7) return onlyNums;
    return onlyNums.slice(0, 7)
}

export function normalizeEmployeeNumber(value: string) {
    if (!value) return value;
    const onlyNums = value.replace(/[^\d]/g, "");
    if (!onlyNums) return 0;
    if (onlyNums.length <= 15) return undefined;
    return onlyNums.slice(0, 15)
}

export function pad(num: number | bigint, size: number): string {
    var s = num+"";
    while (s.length < size) s = "0" + s;
    return s;
}

export const accountTypeOptions = [
    {value: AccountType.Savings, label: 'Savings'},
    {value: AccountType.Checking, label: 'Checking'}
]