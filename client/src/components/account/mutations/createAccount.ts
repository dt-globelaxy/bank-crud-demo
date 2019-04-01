import gql from 'graphql-tag'

export const CREATE_ACCOUNT = gql`
    mutation createAccount(
            $holdersName: String, 
            $employeeName: String,
            $bankId: Int,
            $branchId: Int,
            $employeeNumber: BigInt,
            $number: Int,
            $type: AccountType
            ) {
        createAccount(createAccountInput: {
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