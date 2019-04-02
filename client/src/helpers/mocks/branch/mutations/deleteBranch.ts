import { DELETE_BRANCH } from "../../../../components/branch/mutations/deleteBranch";

const deleteBranch = { 
    id: 1,
    name: 'Test BANK', 
    bank: {nane: 'Test BANK'},
    address: 'test'
};
export const deleteBranchMock = [
    {
      request: {
        query: DELETE_BRANCH,
        variables: {"id":1},
      },
      result: {
        data: {
            updated: '2019-03-31T10:07:56.747Z',
            created: '2019-03-31T10:07:56.747Z',  
            ...deleteBranch
        }
      },
    },
];