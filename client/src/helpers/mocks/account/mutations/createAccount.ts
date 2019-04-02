import { AccountType } from "../../../../components/account/models";
import { CREATE_ACCOUNT } from "../../../../components/account/mutations/createAccount";


const varriables = {
    "holdersName":"Test Holders Name",
    "employeeName":"Test Employee Name",
    "bankId":1,
    "branchId":1,
    "employeeNumber":555555555555555,
    "number":7777777,
    "type":"Savings"}
const newAccount = { 
    holdersName: 'Test Holders Name', 
    bankId: 1,
    branchId: 1, 
    number: 7777777, 
    type: AccountType.Savings, 
    employeeNumber: 555555555555555, 
    employeeName: 'Test Employee Name'
};
export const createAccountMock = [
    {
      request: {
        query: CREATE_ACCOUNT,
        variables: varriables,
      },
      result: {
        data: { 
            id: 1,
            updated: '2019-03-31T10:07:56.747Z',
            created: '2019-03-31T10:07:56.747Z',  
            ...newAccount
        }
      },
    },
];