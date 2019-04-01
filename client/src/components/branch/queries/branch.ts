import gql from 'graphql-tag'

export const BRANCH = gql`
  query branch($id: ID!) { 
    branch(id: $id) {
        id
        bankId
        name
        address
    }
  }
`;