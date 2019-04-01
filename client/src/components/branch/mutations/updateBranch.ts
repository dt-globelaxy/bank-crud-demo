import gql from 'graphql-tag'

export const UPDATE_BRANCH = gql`
    mutation updateBranch($id: Int, $bankId: Int, $name: String, $address: String) {
        updateBranch(updateBranchInput: {
                id: $id
                bankId: $bankId
                name: $name
                address: $address
        }) {
            id
            bankId
            name
            address
            updated
            created
        }
    }
`;