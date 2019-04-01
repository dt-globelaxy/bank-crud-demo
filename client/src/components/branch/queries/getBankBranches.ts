import gql from 'graphql-tag'

export const GET_BANK_BRANCHES = gql`
  query getBankBranches($bankId: ID!){ 
    getBankBranches(bankId: $bankId) {
        id
        bankId
        bank { name }
        name
        address
        updated
        created
    }
  }
`