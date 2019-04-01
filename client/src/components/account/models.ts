export enum AccountType {
    Savings = 'Savings',
    Checking = 'Checking',
}

export interface IAccount {
    id: number
    holdersName: string
    employeeName: string
    bankId: number;
    bank: { name: string }
    branchId: number;    
    branch: { name : string}
    employeeNumber: bigint;
    number: number;
    type: AccountType;
    updated: Date
    created: Date
}
  