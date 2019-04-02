import { AccountType } from "../../../../components/account/models";
import { UPDATE_ACCOUNT } from "../../../../components/account/mutations/updateAccount";

const varriables = {
    "id": 1,
    "holdersName":"Test Holders Name",
    "employeeName":"Test Employee Name",
    "bankId":1,
    "branchId":1,
    "employeeNumber":555555555555555,
    "number":7777777,
    "type":"Savings"}
const updateAccount = { 
    id: 1,
    holdersName: 'Test Holders Name', 
    bankId: 1,
    branchId: 1, 
    number: 7777777, 
    type: AccountType.Savings, 
    employeeNumber: 555555555555555, 
    employeeName: 'Test Employee Name'
};
export const updateAccountMock = [
    {
      request: {
        query: UPDATE_ACCOUNT,
        variables: varriables,
      },
      result: {
        data: {
            ...updateAccount,
            updated: '2019-03-31T10:07:56.747Z',
            created: '2019-03-31T10:07:56.747Z',
        }
      },
    },
];