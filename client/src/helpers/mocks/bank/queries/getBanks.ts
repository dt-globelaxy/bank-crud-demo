
import { GET_BANKS } from "../../../../components/bank/queries/getBanks";

export const getBanksMock = [
    {
      request: {
        query: GET_BANKS,
      },
      result: {
        data: { 
            getBanks: [
                { id: 1, name: 'Test BANK', notes: '', updated: '2019-03-31T10:07:56.747Z', created: '2019-03-31T10:07:56.747Z' },
                { id: 2, name: 'Test BANK', notes: '', updated: '2019-03-31T10:07:56.747Z', created: '2019-03-31T10:07:56.747Z' },
                { id: 3, name: 'Test BANK', notes: '', updated: '2019-03-31T10:07:56.747Z', created: '2019-03-31T10:07:56.747Z' },
                { id: 4, name: 'Test BANK', notes: '', updated: '2019-03-31T10:07:56.747Z', created: '2019-03-31T10:07:56.747Z' },
                { id: 5, name: 'Test BANK', notes: '', updated: '2019-03-31T10:07:56.747Z', created: '2019-03-31T10:07:56.747Z' },
                { id: 6, name: 'Test BANK', notes: '', updated: '2019-03-31T10:07:56.747Z', created: '2019-03-31T10:07:56.747Z' },
                { id: 7, name: 'Test BANK', notes: '', updated: '2019-03-31T10:07:56.747Z', created: '2019-03-31T10:07:56.747Z' },
            ]
        }
      },
    },
];