import { UPDATE_BRANCH } from "../../../../components/branch/mutations/updateBranch";

const varriables = {"id":1,"bankId":1,"name":"Test Branch","address":"test"};
const updateBranch = { 
    id: 1,
    bankId: 1,
    name: 'Test Branch', 
    bank: {nane: 'Test BANK'},
    address: 'test'
};
export const updateBranchMock = [
    {
      request: {
        query: UPDATE_BRANCH,
        variables: varriables,
      },
      result: {
        data: {
            ...updateBranch,
            updated: '2019-03-31T10:07:56.747Z',
            created: '2019-03-31T10:07:56.747Z',  
        }
      },
    },
];