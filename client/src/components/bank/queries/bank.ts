import gql from 'graphql-tag'

export const BANK = gql`
  query bank($id: ID!) { 
    bank(id: $id) {
        id
        name
        notes
    }
  }
`;