import gql from 'graphql-tag'

export const DELETE_BRANCH = gql`
    mutation deleteBranch($id: ID!) {
        deleteBranch(id: $id) {
            id
            bankId
            name
            address
            updated
            created
        }
    }
`;