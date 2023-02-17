import { DataGrid } from "@mui/x-data-grid";
import { userRows, userColumns } from "../../../data-table-source";
import "./datatable.scss";

const actionColumn = [
  {
    field: "action",
    headerName: "Action",
    width: 200,
    renderCell: () => {
      return (
        <div className="cell-action">
          <div className="btn btn-view">View</div>
          <div className="btn btn-delete">Delete</div>
        </div>
      );
    },
  },
];

const Datatable = () => {
  return (
    <div style={{ height: 400, width: "100%" }} className="datatable">
      <DataGrid
        rows={userRows}
        columns={userColumns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
        autoHeight
      />
    </div>
  );
};

export default Datatable;
