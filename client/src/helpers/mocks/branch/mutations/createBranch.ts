import { CREATE_BRANCH } from "../../../../components/branch/mutations/createBranch";


const varriables = {"bankId":1,"name":"Test Branch","address":"test"};
const newBranch = { 
    bankId: 1,
    name: 'Test Branch',
    notes: 'test'
};
export const createBranchMock = [
    {
      request: {
        query: CREATE_BRANCH,
        variables: varriables,
      },
      result: {
        data: { 
            id: 1,
            updated: '2019-03-31T10:07:56.747Z',
            created: '2019-03-31T10:07:56.747Z',  
            ...newBranch
        }
      },
    },
];