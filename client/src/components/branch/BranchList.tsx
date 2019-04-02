import Spinner from '@material-ui/core/CircularProgress'
import * as React from 'react'
import { Query } from 'react-apollo'
import Error from '../Error'
import { GET_BRANCHES } from './queries/getBranches';
import EnhancedTable from '../table/EnhancedTable';
import { OrderType } from '../table/constants';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import { formatCellDateTime } from '../../utils';
import Button from '@material-ui/core/Button';
import { IBranch } from './models';
import { RoutePaths } from '../layout/constants';
import BranchDelete from './BranchDelete';

interface IBankListState {
  openDialog: boolean;
  item: IBranch | undefined
}

class BranchList extends React.Component<any,IBankListState> {
  state: IBankListState = {
      openDialog: false,
      item: undefined
  }
  handleDialogClose = () => this.setState({ openDialog: false });
  confirmDelete = (item: IBranch) => this.setState({item, openDialog: true});
  handleCreateRedirect = () => { this.props.history.push(RoutePaths.BranchCreate); }
  render() {
    return ( 
      <>
        <BranchDelete openDialog={this.state.openDialog} item={this.state.item} closeDialog={this.handleDialogClose} />
        <Button onClick={this.handleCreateRedirect} >Create</Button>
        <Query query={GET_BRANCHES}>
          {({ data, error, loading }) => {
            if (error) { return <Error error={error} />  }
            if (loading || !data) {  return <Spinner /> }

            return (
              <EnhancedTable 
                  title="Branches" 
                  keyField="id"
                  order={OrderType.asc}
                  orderBy={'name'}
                  columns={[
                  { label: 'Name', field: 'name', disablePadding: false },
                  { label: 'Bank', field: 'bank.name', disablePadding: false },
                  { label: 'Updated', field: 'updated', disablePadding: false, format: formatCellDateTime },
                  { label: 'Created', field: 'created', disablePadding: false, format: formatCellDateTime },
                  { label: 'Actions', field: 'actions', disablePadding: true, action: true, actions: [ 
                      { label: 'Edit', actionIcon: <EditIcon/>, onClick: (item) => this.props.history.push(RoutePaths.BranchUpdate.replace(':id',item.id)) },
                      { label: 'Delete',  actionIcon: <DeleteIcon/>, onClick: this.confirmDelete } 
                      ]
                  }
                  ]}
                  isLoading={loading}
                  data={data.getBranches}
              />
          )
          }}
        </Query>
      </>)
  }
}

export default BranchList;