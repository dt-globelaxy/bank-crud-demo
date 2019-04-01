import gql from 'graphql-tag'

export const GET_BRANCHES = gql`
  query getBranches{ 
    getBranches {
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