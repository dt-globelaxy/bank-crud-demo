export const DRAWER_WIDTH: number = 240

export enum RoutePaths {
    Accounts = '/accounts',
    AccountCreate = '/account-create',
    AccountUpdate = '/account-update/:id',
    AccountDetails = '/account/:id',
    Banks = '/banks',
    BankCreate = '/bank-create',
    BankUpdate = '/bank-update/:id',
    BankDetails = '/bank/:id',
    Branches = '/branches',
    BranchCreate = '/branch-create',
    BranchUpdate = '/branch-update/:id',
    BranchDetails ='/branch/:id',
    BankBranches = '/bank/:bankId/branches'
}