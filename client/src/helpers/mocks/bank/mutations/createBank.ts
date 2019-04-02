
import { CREATE_BANK } from "../../../../components/bank/mutations/createBank";


const varriables = {"name":"Test BANK","notes":"test"};
const newBank = { 
    name: 'Test BANK', 
    notes: 'test'
};
export const createBankMock = [
    {
      request: {
        query: CREATE_BANK,
        variables: varriables,
      },
      result: {
        data: { 
            id: 1,
            name: 'Test BANK', 
            notes: 'test',
            updated: '2019-03-31T10:07:56.747Z',
            created: '2019-03-31T10:07:56.747Z',
        }
      },
    },
];