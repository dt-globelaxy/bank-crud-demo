import gql from 'graphql-tag'

export const DELETE_ACCOUNT = gql`
    mutation deleteAccount($id: ID!) {
        deleteAccount(id: $id) {
            id
            holdersName
            employeeName
            bankId
            branchId
            employeeNumber
            number
            type
            updated
            created
        }
    }
`;