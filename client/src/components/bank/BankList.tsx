import Spinner from "@material-ui/core/CircularProgress";
import * as React from "react";
import { Query, QueryResult } from "react-apollo";
import Error from "../Error";
import { GET_BANKS } from "./queries/getBanks";
import EnhancedTable from "../table/EnhancedTable";
import { OrderType } from "../table/constants";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import { formatCellDateTime } from "../../utils";
import Button from "@material-ui/core/Button";
import { withRouter, RouteComponentProps } from "react-router-dom";
import { RoutePaths } from "../layout/constants";
import { IBank } from "./models";
import BankDelete from "./BankDelete";

interface IBankListState {
  openDialog: boolean;
  item: IBank | undefined;
}

class BankList extends React.Component<RouteComponentProps> {
  state: IBankListState = {
    openDialog: false,
    item: undefined,
  };
  handleDialogClose = () => this.setState({ openDialog: false });
  confirmDelete = (item: IBank) => this.setState({ item, openDialog: true });
  handleCreateRedirect = () => {
    this.props.history.push(RoutePaths.BankCreate);
  };
  render() {
    return (
      <>
        <BankDelete
          openDialog={this.state.openDialog}
          item={this.state.item}
          closeDialog={this.handleDialogClose}
        />
        <Button onClick={this.handleCreateRedirect}>Create</Button>
        <Query query={GET_BANKS}>
          {({ data, error, loading }: QueryResult<any>) => {
            if (error) {
              return <Error error={error} />;
            }
            if (loading || !data) {
              return <Spinner />;
            }
            return (
              <EnhancedTable
                title="Banks"
                keyField="id"
                order={OrderType.asc}
                orderBy={"name"}
                isLoading={loading}
                data={data.getBanks}
                columns={[
                  { label: "Name", field: "name", disablePadding: false },
                  {
                    label: "Updated",
                    field: "updated",
                    disablePadding: false,
                    format: formatCellDateTime,
                  },
                  {
                    label: "Created",
                    field: "created",
                    disablePadding: false,
                    format: formatCellDateTime,
                  },
                  {
                    label: "Actions",
                    field: "actions",
                    disablePadding: true,
                    action: true,
                    actions: [
                      {
                        label: "Edit",
                        actionIcon: <EditIcon />,
                        onClick: (item) =>
                          this.props.history.push(
                            RoutePaths.BankUpdate.replace(":id", item.id)
                          ),
                      },
                      {
                        label: "Delete",
                        actionIcon: <DeleteIcon />,
                        onClick: this.confirmDelete,
                      },
                    ],
                  },
                ]}
              />
            );
          }}
        </Query>
      </>
    );
  }
}

export default withRouter(BankList);
