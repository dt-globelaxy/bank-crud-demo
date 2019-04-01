import gql from 'graphql-tag'

export const GET_ACCOUNTS = gql`
  query getAccounts($page: Int, $perPage: Int, $order: OrderType, $orderBy: String, $fromNumber: Int, $toNumber: Int) { 
    getAccounts(pagedInput: {
      page: $page
      perPage: $perPage
      order: $order
      orderBy: $orderBy
      fromNumber: $fromNumber
      toNumber: $toNumber
    }) {
      data {
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
      count
    }
  }
`