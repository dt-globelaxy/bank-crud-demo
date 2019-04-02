import { DELETE_BANK } from "../../../../components/bank/mutations/deleteBank";

const deleteBank = { 
    id: 1,
    name: 'Test BANK', 
    notes: ''
};
export const deleteBankMock = [
    {
      request: {
        query: DELETE_BANK,
        variables: {"id":1},
      },
      result: {
        data: {
            updated: '2019-03-31T10:07:56.747Z',
            created: '2019-03-31T10:07:56.747Z',  
            ...deleteBank
        }
      },
    },
];