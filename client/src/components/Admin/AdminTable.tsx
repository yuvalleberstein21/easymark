import '../../styles/adminTable.css';
const AdminTable = () => {
  return (
    <div className="container mt-5">
      <h2>MY APPOINTMENTS</h2>
      <div className="row">
        <div className="col-md-12">
          <div className="table_container">
            <table className="table mt-5">
              <tr className="table-header">
                <th className="cell">S.no</th>
                <th className="cell">Name</th>
                <th className="cell">Phone No.</th>
                <th className="cell">Action</th>
              </tr>
              <tr className="active">
                <td>1</td>
                <td>Smith</td>
                <td>+3755438764</td>
                <td className="btn btn-success mt-1">Approve</td>
              </tr>
              <tr>
                <td>2</td>
                <td>Smith Mark</td>
                <td>+376768764</td>
                <td className="btn btn-success mt-1">Approve</td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminTable;
