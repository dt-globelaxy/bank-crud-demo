import gql from 'graphql-tag'

export const CREATE_BRANCH = gql`
    mutation createBranch($bankId: Int, $name: String, $address: String) {
        createBranch(createBranchInput: {
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