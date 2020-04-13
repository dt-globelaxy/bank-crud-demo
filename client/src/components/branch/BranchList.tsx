import Spinner from "@material-ui/core/CircularProgress";
import * as React from "react";
import { useQuery } from "react-apollo";
import Error from "../Error";
import { GET_BRANCHES } from "./queries/getBranches";
import EnhancedTable from "../table/EnhancedTable";
import { OrderType } from "../table/constants";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import { formatCellDateTime } from "../../utils";
import Button from "@material-ui/core/Button";
import { IBranch } from "./models";
import { RoutePaths } from "../layout/constants";
import BranchDelete from "./BranchDelete";
import { useHistory } from "react-router-dom";

interface QueryResponse {
  getBranches: IBranch[];
}

const BranchList: React.FC = () => {
  const history = useHistory();
  const [openDialog, setOpenDialog] = React.useState(false);
  const [item, setItem] = React.useState<IBranch | undefined>(undefined);
  const { loading, error, data } = useQuery<QueryResponse>(GET_BRANCHES);

  const handleDialogClose = () => setOpenDialog(false);
  const confirmDelete = (item: IBranch) => {
    setItem(item);
    setOpenDialog(true);
  };
  const handleCreateRedirect = () => {
    history.push(RoutePaths.BranchCreate);
  };

  if (loading || !data) return <Spinner />;
  if (error) return <Error error={error} />;

  return (
    <>
      <BranchDelete
        openDialog={openDialog}
        item={item}
        closeDialog={handleDialogClose}
      />
      <Button onClick={handleCreateRedirect}>Create</Button>
      <EnhancedTable
        title="Branches"
        keyField="id"
        order={OrderType.asc}
        orderBy={"name"}
        columns={[
          { label: "Name", field: "name", disablePadding: false },
          { label: "Bank", field: "bank.name", disablePadding: false },
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
                  history.push(RoutePaths.BranchUpdate.replace(":id", item.id)),
              },
              {
                label: "Delete",
                actionIcon: <DeleteIcon />,
                onClick: confirmDelete,
              },
            ],
          },
        ]}
        isLoading={loading}
        data={data.getBranches}
      />
    </>
  );
};

export default BranchList;
