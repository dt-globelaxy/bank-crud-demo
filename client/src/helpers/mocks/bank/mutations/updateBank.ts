
import { UPDATE_BANK } from "../../../../components/bank/mutations/updateBank";

const varriables = {"id":1,"name":"Test BANK","notes":"test"};
const updateBank = { 
    id: 1,
    name: 'Test BANK', 
    notes: ''
};
export const updateBankMock = [
    {
      request: {
        query: UPDATE_BANK,
        variables: varriables,
      },
      result: {
        data: {
            updated: '2019-03-31T10:07:56.747Z',
            created: '2019-03-31T10:07:56.747Z',  
            ...updateBank
        }
      },
    },
];