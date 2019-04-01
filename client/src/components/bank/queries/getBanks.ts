import gql from 'graphql-tag'

export const GET_BANKS = gql`
  query getBanks{ 
    getBanks {
        id
        name
        notes
        updated
        created
    }
  }
`;