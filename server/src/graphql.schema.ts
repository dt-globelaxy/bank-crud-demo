
/** ------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
export enum AccountType {
    Savings = "Savings",
    Checking = "Checking"
}

export enum OrderType {
    asc = "asc",
    desc = "desc"
}

export class AccountPagedInput {
    page?: number;
    perPage?: number;
    order?: OrderType;
    orderBy?: string;
}

export class CreateAccountInput {
    holdersName?: string;
    employeeName?: string;
    bankId?: number;
    branchId?: number;
    type?: AccountType;
    number?: number;
    employeeNumber?: BigInt;
}

export class CreateBankInput {
    name?: string;
    notes?: string;
}

export class CreateBranchInput {
    bankId?: number;
    name?: string;
    address?: string;
}

export class UpdateAccountInput {
    id?: number;
    holdersName?: string;
    employeeName?: string;
    bankId?: number;
    branchId?: number;
    type?: AccountType;
    number?: number;
    employeeNumber?: BigInt;
}

export class UpdateBankInput {
    id?: number;
    name?: string;
    notes?: string;
}

export class UpdateBranchInput {
    id?: number;
    bankId?: number;
    name?: string;
    address?: string;
}

export class Account {
    id?: number;
    holdersName?: string;
    employeeName?: string;
    bankId?: number;
    bank?: Bank;
    branchId?: number;
    branch?: Branch;
    type?: AccountType;
    number?: number;
    employeeNumber?: BigInt;
    created?: Date;
    updated?: Date;
}

export class Bank {
    id?: number;
    name?: string;
    notes?: string;
    created?: Date;
    updated?: Date;
}

export class Branch {
    id?: number;
    bankId?: number;
    name?: string;
    bank?: Bank;
    address?: string;
    created?: Date;
    updated?: Date;
}

export abstract class IMutation {
    abstract createAccount(createAccountInput?: CreateAccountInput): Account | Promise<Account>;

    abstract updateAccount(updateAccountInput?: UpdateAccountInput): Account | Promise<Account>;

    abstract deleteAccount(id: string): Account | Promise<Account>;

    abstract createBank(createBankInput?: CreateBankInput): Bank | Promise<Bank>;

    abstract updateBank(updateBankInput?: UpdateBankInput): Bank | Promise<Bank>;

    abstract deleteBank(id: string): Bank | Promise<Bank>;

    abstract createBranch(createBranchInput?: CreateBranchInput): Branch | Promise<Branch>;

    abstract updateBranch(updateBranchInput?: UpdateBranchInput): Branch | Promise<Branch>;

    abstract deleteBranch(id: string): Branch | Promise<Branch>;
}

export class PagedAccounts {
    data?: Account[];
    count?: number;
    page?: number;
    perPage?: number;
}

export abstract class IQuery {
    abstract getAccounts(pagedInput?: AccountPagedInput): PagedAccounts | Promise<PagedAccounts>;

    abstract account(id: string): Account | Promise<Account>;

    abstract getBanks(): Bank[] | Promise<Bank[]>;

    abstract bank(id: string): Bank | Promise<Bank>;

    abstract getBranches(): Branch[] | Promise<Branch[]>;

    abstract getBankBranches(bankId: string): Branch[] | Promise<Branch[]>;

    abstract branch(id: string): Branch | Promise<Branch>;

    abstract temp__(): boolean | Promise<boolean>;
}

export abstract class ISubscription {
    abstract accountCreated(): Account | Promise<Account>;

    abstract accountUpdated(): Account | Promise<Account>;

    abstract accountDeleted(): Account | Promise<Account>;

    abstract bankCreated(): Bank | Promise<Bank>;

    abstract bankUpdated(): Bank | Promise<Bank>;

    abstract bankDeleted(): Bank | Promise<Bank>;

    abstract branchCreated(): Branch | Promise<Branch>;

    abstract branchUpdated(): Branch | Promise<Branch>;

    abstract branchDeleted(): Branch | Promise<Branch>;
}

export type BigInt = any;
export type Date = any;
