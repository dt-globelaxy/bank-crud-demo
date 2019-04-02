import { GET_ACCOUNTS } from "../../../../components/account/queries/getAccounts";
import { AccountType } from "../../../../components/account/models";


export const getAccountsMock = [
    {
      request: {
        query: GET_ACCOUNTS,
        variables: {
          page: 0,
          perPage: 5,
          order: 'asc',
          orderBy: 'holdersName',
          fromNumber: undefined,
          toNumber: undefined
        },
      },
      result: {
        data: { 
            getAccounts: {
                data: [
                    { id: 1, holdersName: 'Test Holder Name', bankId: 1, bank: { name: 'test'}, branchId: 1, branch: { name: 'test'}, number: 452, type: AccountType.Savings, employeeNumber: 777, employeeName: 'Employee Test Name', updated: '2019-03-31T10:07:56.747Z', created: '2019-03-31T10:07:56.747Z' },
                    { id: 2, holdersName: 'Test Holder Name', bankId: 1, bank: { name: 'test'}, branchId: 1, branch: { name: 'test'}, number: 452, type: AccountType.Savings, employeeNumber: 777, employeeName: 'Employee Test Name', updated: '2019-03-31T10:07:56.747Z', created: '2019-03-31T10:07:56.747Z' },
                    { id: 3, holdersName: 'Test Holder Name', bankId: 1, bank: { name: 'test'}, branchId: 1, branch: { name: 'test'}, number: 452, type: AccountType.Savings, employeeNumber: 777, employeeName: 'Employee Test Name', updated: '2019-03-31T10:07:56.747Z', created: '2019-03-31T10:07:56.747Z' },
                    { id: 4, holdersName: 'Test Holder Name', bankId: 1, bank: { name: 'test'}, branchId: 1, branch: { name: 'test'}, number: 452, type: AccountType.Savings, employeeNumber: 777, employeeName: 'Employee Test Name', updated: '2019-03-31T10:07:56.747Z', created: '2019-03-31T10:07:56.747Z' },
                    { id: 5, holdersName: 'Test Holder Name', bankId: 1, bank: { name: 'test'}, branchId: 1, branch: { name: 'test'}, number: 452, type: AccountType.Savings, employeeNumber: 777, employeeName: 'Employee Test Name', updated: '2019-03-31T10:07:56.747Z', created: '2019-03-31T10:07:56.747Z' },
                    { id: 6, holdersName: 'Test Holder Name', bankId: 1, bank: { name: 'test'}, branchId: 1, branch: { name: 'test'}, number: 452, type: AccountType.Savings, employeeNumber: 777, employeeName: 'Employee Test Name', updated: '2019-03-31T10:07:56.747Z', created: '2019-03-31T10:07:56.747Z' },
                    { id: 7, holdersName: 'Test Holder Name', bankId: 1, bank: { name: 'test'}, branchId: 1, branch: { name: 'test'}, number: 452, type: AccountType.Savings, employeeNumber: 777, employeeName: 'Employee Test Name', updated: '2019-03-31T10:07:56.747Z', created: '2019-03-31T10:07:56.747Z' },
                ],
                count: 7
            }
        }
      },
    },
];