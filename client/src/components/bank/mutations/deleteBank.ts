import gql from 'graphql-tag'

export const DELETE_BANK = gql`
    mutation deleteBank($id: ID!) {
        deleteBank(id: $id) {
            id
            name
            notes
            updated
            created
        }
    }
`;