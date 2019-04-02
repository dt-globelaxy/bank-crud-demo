
import { GET_BRANCHES } from "../../../../components/branch/queries/getBranches";

export const getBranchesMock = [
    {
      request: {
        query: GET_BRANCHES,
      },
      result: {
        data: { 
            getBranches: [
                { id: 1, bankId:1, name:'Test Branch', bank: {name:'Test BANK' }, address: 'test', updated: '2019-03-31T10:07:56.747Z', created: '2019-03-31T10:07:56.747Z' },
                { id: 2, bankId:2, name:'Test Branch', bank: {name:'Test BANK' }, address: 'test', updated: '2019-03-31T10:07:56.747Z', created: '2019-03-31T10:07:56.747Z' },
                { id: 3, bankId:1, name:'Test Branch', bank: {name:'Test BANK' }, address: 'test', updated: '2019-03-31T10:07:56.747Z', created: '2019-03-31T10:07:56.747Z' },
                { id: 4, bankId:2, name:'Test Branch', bank: {name:'Test BANK' }, address: 'test', updated: '2019-03-31T10:07:56.747Z', created: '2019-03-31T10:07:56.747Z' },
                { id: 5, bankId:1, name:'Test Branch', bank: {name:'Test BANK' }, address: 'test', updated: '2019-03-31T10:07:56.747Z', created: '2019-03-31T10:07:56.747Z' },
                { id: 6, bankId:2, name:'Test Branch', bank: {name:'Test BANK' }, address: 'test', updated: '2019-03-31T10:07:56.747Z', created: '2019-03-31T10:07:56.747Z' },
                { id: 7, bankId:1, name:'Test Branch', bank: {name:'Test BANK' }, address: 'test', updated: '2019-03-31T10:07:56.747Z', created: '2019-03-31T10:07:56.747Z' },
            ]
        }
      },
    },
];