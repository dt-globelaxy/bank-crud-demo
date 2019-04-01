import gql from 'graphql-tag'

export const CREATE_BANK = gql`
    mutation createBank($name: String, $notes: String) {
        createBank(createBankInput: {
                name: $name
                notes: $notes
        }) {
            id
            name
            notes
            updated
            created
        }
    }
`;