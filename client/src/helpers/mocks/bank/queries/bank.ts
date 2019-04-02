import { BANK } from "../../../../components/bank/queries/bank";

export const bankMock = [
    {
        request: {
            query: BANK,
            variables: {"id":1}
        },
        result: {
            data: {
                bank: { 
                    id: 1, 
                    name:'Test BANK', 
                    notes: 'test', 
                    updated: '2019-03-31T10:07:56.747Z', 
                    created: '2019-03-31T10:07:56.747Z' 
                },
            }
        }
    }
];