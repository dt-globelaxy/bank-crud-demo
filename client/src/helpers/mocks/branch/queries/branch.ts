import { BRANCH } from "../../../../components/branch/queries/branch";

export const branchMock = [
    {
        request: {
            query: BRANCH,
            variables: {"id":1}
        },
        result: {
            data: {
                branch: { 
                    id: 1, 
                    bankId:1, 
                    name:'Test Branch', 
                    bank: {name:'Test BANK' }, 
                    address: 'test', 
                    updated: '2019-03-31T10:07:56.747Z', 
                    created: '2019-03-31T10:07:56.747Z' 
                },
            }
        }
    }
];