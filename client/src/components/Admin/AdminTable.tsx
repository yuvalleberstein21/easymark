import '../../styles/adminTable.css';
import { formatDate } from '../../utils/formatDate';
import Message from '../LoadingError/Error';
import Loading from '../LoadingError/Loading';
import { useDispatch } from 'react-redux';
import { updateAdminAppointmentAction } from '../../Redux/Actions/AppointmentActions';

const AdminTable = ({
  allBusinesses,
  selectedBusinessId,
  handleBusinessSelect,
  appointments,
  appointmentLoading,
  appointmentError,
}) => {
  const dispatch = useDispatch<any>();

  const handleApproval = async (
    appointmentId: string,
    currentStatus: boolean
  ) => {
    try {
      const updatedStatus = !currentStatus;
      await dispatch(
        updateAdminAppointmentAction(appointmentId, updatedStatus)
      );
    } catch (error) {
      console.log(error);
    }
  };

  console.log(appointments);

  return (
    <div className="container mt-5">
      <div className="row">
        <h2>All Businesses</h2>

        {allBusinesses?.map((business: any) => (
          <div className="col-md-4" key={business._id}>
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
                            <td>{appoint.services[0].serviceName}</td>
                            <td>{formatDate(appoint.date)}</td>
                            <td>{appoint.startTime}</td>
                            <td>{appoint.notes}</td>
                            <td
                              onClick={() =>
                                handleApproval(
                                  appoint._id,
                                  appoint.appointmentApproved
                                )
                              }
                              style={{
                                background: appoint.appointmentApproved
                                  ? 'green'
                                  : 'black',
                                cursor: 'pointer',
                                color: 'white',
                                borderRadius: '5px',
                                padding: '10px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                              }}
                            >
                              {appoint.appointmentApproved ? (
                                <>
                                  Accepted{' '}
                                  <i className="fa-solid fa-check m-2"></i>
                                </>
                              ) : (
                                'Not Accepted'
                              )}
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
