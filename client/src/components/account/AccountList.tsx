import * as React from "react";
import { useQuery } from "react-apollo";
import { useHistory } from "react-router-dom";
import Button from "@material-ui/core/Button";
import Spinner from "@material-ui/core/CircularProgress";
import Error from "../Error";
import EnhancedTable from "../table/EnhancedTable";
import { OrderType } from "../table/constants";
import { GET_ACCOUNTS } from "./queries/getAccounts";
import accountListColumns from "./AccountListColumns";
import { IAccount } from "./models";
import { RoutePaths } from "../layout/constants";
import AccountDelete from "./AccountDelete";
import AccountListFilters from "./AccountListFilters";

interface QueryResponse {
  getAccounts: {
    data: IAccount[];
    count: number;
  };
}
const AccountsList: React.FC = () => {
  const history = useHistory();
  const [openDialog, setOpenDialog] = React.useState(false);
  const [item, setItem] = React.useState<IAccount | undefined>(undefined);
  const [page, setPage] = React.useState(0);
  const [perPage, setPerPage] = React.useState(5);
  const [order, setOrder] = React.useState<OrderType>(OrderType.asc);
  const [orderBy, setOrderBy] = React.useState("holdersName");
  const [fromNumber, setFromNumber] = React.useState<number | undefined>(
    undefined
  );
  const [toNumber, setToNumber] = React.useState<number | undefined>(undefined);

  const { loading, error, data } = useQuery<QueryResponse>(GET_ACCOUNTS, {
    variables: { page, perPage, order, orderBy, fromNumber, toNumber },
  });

  const handleDialogClose = () => setOpenDialog(false);
  const confirmDelete = (item: IAccount) => {
    setItem(item);
    setOpenDialog(true);
  };
  const handleCreateRedirect = () => {
    history.push(RoutePaths.AccountCreate);
  };

  const handleOnOrderByChange = (newOrderBy: string) => {
    setOrderBy(newOrderBy);
  };

  const handleOnOrderChange = (newOrder: OrderType) => {
    setOrder(newOrder);
  };

  const handleOnPerPageChange = (newPerPage: number) => {
    setPerPage(newPerPage);
  };

  const handleOnPageChange = (newPage: number) => {
    setPage(newPage);
  };

  const handleOnEditItemClick = (item: IAccount) =>
    history.push(RoutePaths.AccountUpdate.replace(":id", item.id.toString()));
  const handleFilderChange = (
    fromNumber: number | undefined,
    toNumber: number | undefined
  ) => {
    setFromNumber(fromNumber);
    setToNumber(toNumber);
  };

  if (loading || !data) return <Spinner />;
  if (error) return <Error error={error} />;

  return (
    <>
      <AccountDelete
        openDialog={openDialog}
        item={item}
        closeDialog={handleDialogClose}
      />
      <Button onClick={handleCreateRedirect}>Create</Button>
      <AccountListFilters
        fromNumber={fromNumber}
        toNumber={toNumber}
        onFilterChange={handleFilderChange}
      />
      <EnhancedTable
        title="Accounts"
        keyField="id"
        order={order}
        orderBy={orderBy}
        columns={accountListColumns(handleOnEditItemClick, confirmDelete)}
        isLoading={loading}
        data={data.getAccounts.data}
        count={data.getAccounts.count}
        perPage={perPage}
        page={page}
        remotePaging={true}
        onOrderByChange={handleOnOrderByChange}
        onOrderChange={handleOnOrderChange}
        onPerPageChange={handleOnPerPageChange}
        onPageChange={handleOnPageChange}
      />
    </>
  );
};

export default AccountsList;
