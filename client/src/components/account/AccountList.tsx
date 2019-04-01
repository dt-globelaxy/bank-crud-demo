import * as React from 'react'
import { Query } from 'react-apollo'
import Button from '@material-ui/core/Button';
import Spinner from '@material-ui/core/CircularProgress'
import Error from '../Error'
import EnhancedTable from '../table/EnhancedTable';
import { OrderType } from '../table/constants';
import { GET_ACCOUNTS } from './queries/getAccounts';
import accountListColumns from './AccountListColumns';
import { IAccount } from './models';
import { RoutePaths } from '../layout/constants';
import AccountDelete from './AccountDelete';
import AccountListFilters from './AccountListFilters';

interface IState {
  perPage: number;
  page: number;
  order: OrderType;
  orderBy: string;
  openDialog: boolean;
  item: IAccount | undefined;
  fromNumber: number | undefined,
  toNumber: number | undefined,
}

class AccountsList extends React.Component<any, IState> {
  state: IState = {
    page: 0,
    perPage: 5,
    order: OrderType.asc,
    orderBy: 'holdersName',
    openDialog: false,
    item: undefined,
    fromNumber: undefined,
    toNumber: undefined,
  }

  handleOnOrderByChange = (newOrderBy: string) => {
    this.setState({orderBy: newOrderBy});
  }

  handleOnOrderChange = (newOrder: OrderType) => {
    this.setState({order: newOrder});
  }

  handleOnPerPageChange = (newPerPage: number) => {
    this.setState({perPage: newPerPage});
  }

  handleOnPageChange = (newPage: number) => {
    this.setState({page: newPage});
  }

  handleDialogClose = () => this.setState({ openDialog: false });
  confirmDelete = (item: IAccount) => this.setState({item, openDialog: true});
  handleCreateRedirect = () => { this.props.history.push(RoutePaths.AccountCreate); }

  handleOnEditItemClick = (item: IAccount) => this.props.history.push(RoutePaths.AccountUpdate.replace(':id', item.id.toString()))
  handleFilderChange = (fromNumber: number | undefined, toNumber: number | undefined) => {
    this.setState({fromNumber: fromNumber, toNumber: toNumber});
  }
  render() {
      const {page, perPage, order, orderBy, fromNumber, toNumber } = this.state;
      console.log('state', this.state);
      return(<>
          <AccountDelete openDialog={this.state.openDialog} item={this.state.item} closeDialog={this.handleDialogClose} />
          <Button onClick={this.handleCreateRedirect}>Create</Button>
          <AccountListFilters fromNumber={fromNumber} toNumber={toNumber} onFilterChange={this.handleFilderChange} />
          <Query query={GET_ACCOUNTS} variables={{page, perPage, order, orderBy, fromNumber, toNumber }}>
            {({ data, error, loading }) => {
              if (error) {
                return <Error error={error} />
              }

              if (loading || !data) {
                return <Spinner />
              }

              return (
                <EnhancedTable  title="Accounts"  keyField="id" order={order} orderBy={orderBy} 
                    columns={accountListColumns(this.handleOnEditItemClick, this.confirmDelete)}
                    isLoading={loading} data={data.getAccounts.data} count={data.count}
                    perPage={perPage}
                    page={page}
                    remotePaging={true}
                    onOrderByChange={this.handleOnOrderByChange}
                    onOrderChange={this.handleOnOrderChange}
                    onPerPageChange={this.handleOnPerPageChange}
                    onPageChange={this.handleOnPageChange}
                />
            )
            }}
          </Query>
        </>)
  }
}

export default AccountsList