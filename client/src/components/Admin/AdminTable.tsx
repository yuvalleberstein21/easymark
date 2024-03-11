import '../../styles/adminTable.css';

const AdminTable = ({ userInfo, business }) => {
  console.log(business);
  return (
    <div className="container mt-5">
      <h2>MY APPOINTMENTS</h2>
      {business?.map((business: any) => (
        <div className="row" key={business._id}>
          <div className="col-md-12">
            <h5>{business.businessName}</h5>
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
                  <td>{business.businessName}</td>
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
      ))}
    </div>
  );
};

export default AdminTable;
