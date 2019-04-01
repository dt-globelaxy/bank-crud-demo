import gql from 'graphql-tag'

export const UPDATE_BANK = gql`
    mutation updateBank($id: Int, $name: String, $notes: String) {
        updateBank(updateBankInput: {
                id: $id
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