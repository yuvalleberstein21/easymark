import { useState } from 'react';
import '../../styles/adminTable.css';
import { formatDate } from '../../utils/formatDate';
import Message from '../LoadingError/Error';
import Loading from '../LoadingError/Loading';

const AdminTable = ({
  allBusinesses,
  selectedBusinessId,
  handleBusinessSelect,
  appointments,
  appointmentLoading,
  appointmentError,
}) => {
  return (
    <div className="container mt-5">
      <div className="row">
        <h2>All Businesses</h2>

        {allBusinesses?.map((business: any) => (
          <div className="col-md-4">
            <div
              className="card"
              style={{ cursor: 'pointer' }}
              key={business._id}
              onClick={() => handleBusinessSelect(business._id)}
            >
              <div className="card-body">
                <div className="card-title">
                  <h4>{business.businessName}</h4>
                </div>
                <div className="image mt-2">
                  <img
                    src={business.images[0]?.imageUrl}
                    alt={business.businessName}
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
        <h2 className="mt-5">MY APPOINTMENTS</h2>
        {selectedBusinessId && (
          <div>
            <h2>Appointments for Selected Business</h2>
            {appointmentLoading ? (
              <div>
                <Loading />
              </div>
            ) : appointmentError ? (
              <div>
                <Message variant={'alert alert-ff'}>{appointmentError}</Message>
              </div>
            ) : (
              <div>
                <div className="col-md-12">
                  <div className="table_container">
                    <table className="table mt-5">
                      <tbody>
                        <tr className="table-header">
                          <th className="cell">S.no</th>
                          <th className="cell">Name</th>
                          <th className="cell">Phone No.</th>
                          <th className="cell">Service</th>
                          <th className="cell">Date</th>
                          <th className="cell">Time</th>
                          <th className="cell">Notes</th>
                          <th className="cell">Action</th>
                        </tr>
                        {appointments?.map((appoint: any) => (
                          <tr className="active" key={appoint._id}>
                            <td>1</td>
                            <td>{appoint.user.name}</td>
                            <td>{appoint.user.phoneNumber}</td>
                            <td>{appoint.service}</td>
                            <td>{formatDate(appoint.date)}</td>
                            <td>{appoint.startTime}</td>
                            <td>{appoint.notes}</td>
                            <td
                              style={{
                                background: 'green',
                                cursor: 'pointer',
                                color: 'white',
                                borderRadius: '5px',
                                padding: '10px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                              }}
                            >
                              Approve
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
export default AdminTable;