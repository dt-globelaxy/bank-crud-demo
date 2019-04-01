import gql from 'graphql-tag'

export const UPDATE_ACCOUNT = gql`
    mutation updateAccount(
            $id: Int, 
            $holdersName: String, 
            $employeeName: String,
            $bankId: Int,
            $branchId: Int,
            $employeeNumber: BigInt,
            $number: Int,
            $type: AccountType
            ) {
        updateAccount(updateAccountInput: {
            id: $id
            holdersName: $holdersName
            employeeName: $employeeName
            bankId: $bankId
            branchId: $branchId
            employeeNumber: $employeeNumber
            number: $number
            type: $type
        }) {
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