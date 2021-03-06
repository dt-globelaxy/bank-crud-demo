import * as React from "react";
import { useQuery } from "react-apollo";
import Spinner from "@material-ui/core/CircularProgress";
import Error from "../Error";
import { GET_BANKS } from "./queries/getBanks";
import EnhancedTable from "../table/EnhancedTable";
import { OrderType } from "../table/constants";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import { formatCellDateTime } from "../../utils";
import Button from "@material-ui/core/Button";
import { useHistory } from "react-router-dom";
import { RoutePaths } from "../layout/constants";
import { IBank } from "./models";
import BankDelete from "./BankDelete";

interface QueryResponse {
  getBanks: IBank[];
}

const BankList: React.FC = () => {
  const history = useHistory();
  const [openDialog, setOpenDialog] = React.useState(false);
  const [item, setItem] = React.useState<IBank | undefined>(undefined);
  const { loading, error, data } = useQuery<QueryResponse>(GET_BANKS);

  const handleDialogClose = () => setOpenDialog(false);
  const confirmDelete = (item: IBank) => {
    setItem(item);
    setOpenDialog(true);
  };
  const handleCreateRedirect = () => {
    history.push(RoutePaths.BankCreate);
  };

  if (loading || !data) return <Spinner />;
  if (error) return <Error error={error} />;

  return (
    <>
      <BankDelete
        openDialog={openDialog}
        item={item}
        closeDialog={handleDialogClose}
      />
      <Button onClick={handleCreateRedirect}>Create</Button>
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
                  history.push(RoutePaths.BankUpdate.replace(":id", item.id)),
              },
              {
                label: "Delete",
                actionIcon: <DeleteIcon />,
                onClick: confirmDelete,
              },
            ],
          },
        ]}
      />
    </>
  );
};

export default BankList;
