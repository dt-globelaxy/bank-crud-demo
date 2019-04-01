import gql from 'graphql-tag'

export const ACCOUNT = gql`
  query account($id: ID!) { 
    account(id: $id) {
        id
        holdersName
        employeeName
        bankId
        bank { name }
        branchId
        branch { name }
        employeeNumber
        number
        type
        updated
        created
    }
  }
`