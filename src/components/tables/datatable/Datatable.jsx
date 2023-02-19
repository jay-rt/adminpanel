import { DataGrid } from "@mui/x-data-grid";
import { Link, useLocation } from "react-router-dom";
import { userRows, userColumns } from "../../../data-table-source";
import "./datatable.scss";

const Datatable = () => {
  const location = useLocation();
  const link = location.pathname;
  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: () => {
        return (
          <div className="cell-action">
            <Link to={`${link}/test`} className="link">
              <div className="btn btn-view">View</div>
            </Link>
            <div className="btn btn-delete">Delete</div>
          </div>
        );
      },
    },
  ];
  return (
    <div className="datatable">
      <div className="datatable-title">
        <h1>Add New User</h1>
        <Link to={`${link}/new`} className="link">
          Add New
        </Link>
      </div>
      <DataGrid
        className="datagrid"
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
