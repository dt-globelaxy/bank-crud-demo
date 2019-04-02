import { AccountType } from "../../../../components/account/models";
import { DELETE_ACCOUNT } from "../../../../components/account/mutations/deleteAccount";

const deleteAccount = { 
    id: 1,
    holdersName: 'Test Holder Name', 
    bankId: 1,
    branchId: 1, 
    number: 452, 
    type: AccountType.Savings, 
    employeeNumber: 777, 
    employeeName: 'Employee Test Name'
};
export const createAccountMock = [
    {
      request: {
        query: DELETE_ACCOUNT,
        variables: {"id":1},
      },
      result: {
        data: deleteAccount
      },
    },
];