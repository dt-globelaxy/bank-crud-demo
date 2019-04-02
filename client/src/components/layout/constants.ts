export const DRAWER_WIDTH: number = 240

export enum RoutePaths {
    Accounts = '/accounts',
    AccountCreate = '/account-create',
    AccountUpdate = '/account-update/:id',
    Banks = '/banks',
    BankCreate = '/bank-create',
    BankUpdate = '/bank-update/:id',
    Branches = '/branches',
    BranchCreate = '/branch-create',
    BranchUpdate = '/branch-update/:id',
    BankBranches = '/bank/:bankId/branches'
}