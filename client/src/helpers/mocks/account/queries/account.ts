import {ACCOUNT} from "../../../../components/account/queries/account";
import {AccountType} from "../../../../components/account/models";

export const accountMock = [
    {
        request: {
            query: ACCOUNT,
            variables: {"id":1}
        },
        result: {
            data: {
                account: {
                    id: 1,
                    holdersName: 'Test Holders Name', 
                    bankId: 1,
                    bank: {
                        name: 'Test BANK'
                    },
                    branchId: 1, 
                    branch: {
                        name: 'Test Branch'
                    },
                    number: 7777777, 
                    type: AccountType.Savings, 
                    employeeNumber: 555555555555555, 
                    employeeName: 'Test Employee Name',
                    updated: '2019-03-31T10:07:56.747Z',
                    created: '2019-03-31T10:07:56.747Z'
                }
            }
        }
    }, {
        request: {
            query: ACCOUNT,
            variables: {id: undefined},
        },
        error: new Error("Something went wrong")
    }
];