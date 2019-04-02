
import { GET_BANK_BRANCHES } from "../../../../components/branch/queries/getBankBranches";

export const getBankBranchesMock = [
    {
      request: {
        query: GET_BANK_BRANCHES,
        variables: {"bankId":1}
      },
      result: {
        data: { 
            getBankBranches: [
                { id: 1, bankId:1, name:'Test Branch', bank: {name:'Test BANK' }, address: 'test', updated: '2019-03-31T10:07:56.747Z', created: '2019-03-31T10:07:56.747Z' },
                { id: 2, bankId:1, name:'Test Branch', bank: {name:'Test BANK' }, address: 'test', updated: '2019-03-31T10:07:56.747Z', created: '2019-03-31T10:07:56.747Z' },
                { id: 3, bankId:1, name:'Test Branch', bank: {name:'Test BANK' }, address: 'test', updated: '2019-03-31T10:07:56.747Z', created: '2019-03-31T10:07:56.747Z' },
                { id: 4, bankId:1, name:'Test Branch', bank: {name:'Test BANK' }, address: 'test', updated: '2019-03-31T10:07:56.747Z', created: '2019-03-31T10:07:56.747Z' },
                { id: 5, bankId:1, name:'Test Branch', bank: {name:'Test BANK' }, address: 'test', updated: '2019-03-31T10:07:56.747Z', created: '2019-03-31T10:07:56.747Z' },
                { id: 6, bankId:1, name:'Test Branch', bank: {name:'Test BANK' }, address: 'test', updated: '2019-03-31T10:07:56.747Z', created: '2019-03-31T10:07:56.747Z' },
                { id: 7, bankId:1, name:'Test Branch', bank: {name:'Test BANK' }, address: 'test', updated: '2019-03-31T10:07:56.747Z', created: '2019-03-31T10:07:56.747Z' },
            ]
        }
      },
    },
];