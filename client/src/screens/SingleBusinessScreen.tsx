import { useDispatch, useSelector } from 'react-redux';
import '../styles/singleBusiness.css';
import CreateQueues from '../components/BusinessComponents/CreateQueues';
import { useEffect } from 'react';
import { getSingleBusinessAction } from '../Redux/Actions/BusinessActions';
import { useLocation } from 'react-router-dom';
import Loading from '../components/LoadingError/Loading';
import Message from '../components/LoadingError/Error';
import BusinessImagesCard from '../components/BusinessComponents/BusinessImagesCard';
import {
  deleteAppointmentAction,
  getUserAppointmentAction,
} from '../Redux/Actions/AppointmentActions';
import { motion } from 'framer-motion';
import { formatDate } from '../utils/formatDate';

const SingleBusiness = () => {
  const dispatch = useDispatch<any>();
  const location = useLocation();
  const pathname = location.pathname;
  const businessId = pathname.split('/').pop();

  useEffect(() => {
    try {
      dispatch(getSingleBusinessAction(businessId));
    } catch (err) {
      console.log(err);
    }
  }, [dispatch, businessId]);

  const { loading, error, business } = useSelector(
    (state: any) => state.getSingleBusiness
  );

  const { userInfo } = useSelector((state: any) => state.userLogin);
  const { loading: loadingDelete } = useSelector(
    (state: any) => state.deleteAppointment
  );
  const { loading: loadingAppointments, appointment } = useSelector(
    (state: any) => state.getUserAppointment
  );

  useEffect(() => {
    try {
      if (userInfo !== null && !loadingDelete && !loadingAppointments) {
        // Dispatch action to get appointments for the specific user and business
        dispatch(getUserAppointmentAction(userInfo._id, businessId));
      }
    } catch (err) {
      console.log(err);
    }
  }, [dispatch, loadingDelete, userInfo, businessId]);

  const handleDelete = async (appointmentId: any) => {
    try {
      await dispatch(deleteAppointmentAction(appointmentId));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="container mt-3 p-4">
        {loading ? (
          <Loading />
        ) : error ? (
          <Message variant="">{error}</Message>
        ) : business ? (
          <div>
            <div className="row">
              <div className="col-md-6">
                <div className="card_single_business">
                  <div className="text-center">
                    <div className="img-hover-zoom img-hover-zoom--colorize">
                      <img
                        className="shadow"
                        src={business?.images[0]?.imageUrl}
                        alt={business?.businessName}
                      />
                    </div>
                  </div>
                  <div className="card-body">
                    <div className="clearfix mb-3"></div>
                    <div className="my-2 text-center">
                      <h2>{business?.businessName}</h2>
                    </div>
                    <div className="mb-3">
                      <p className="text-uppercase text-center role">
                        {business.location?.streetAddress}{' '}
                        <i className="fa-solid fa-location-dot m-1"></i>
                      </p>
                    </div>
                    <div className="box">
                      <div>
                        <ul className="list-inline m-2">
                          <li className="list-inline-item">
                            <i className="fa-brands fa-waze fa-xl"></i>
                          </li>
                          <li className="list-inline-item">
                            <i className="fa-brands fa-whatsapp fa-xl"></i>
                          </li>
                          <li className="list-inline-item">
                            <i className="fa-brands fa-instagram fa-xl"></i>
                          </li>
                          <li className="list-inline-item">
                            <i className="fa-solid fa-phone fa-xl"></i>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <BusinessImagesCard
                  images={business?.images}
                  businessName={business?.businessName}
                />
                <motion.div
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  {appointment &&
                    appointment.map((appoint: any) => (
                      <div key={appoint._id}>
                        <div className="card">
                          <div className="card__header p-2">
                            {appoint.appointmentApproved ? (
                              <div>
                                {' '}
                                מאושר{' '}
                                <i className="fa-regular fa-circle-check m-1"></i>
                              </div>
                            ) : (
                              <div>
                                ממתין לבעל/ת העסק{' '}
                                <i className="fa-regular fa-clock"></i>
                              </div>
                            )}
                          </div>

                          <div className="card-body">
                            <div dir="rtl">
                              <p>
                                תור ל {appoint.services[0].serviceName} בתאריך{' '}
                                {formatDate(appoint.date)} בשעה{' '}
                                {appoint.startTime}
                              </p>
                            </div>
                          </div>
                          <button
                            type="button"
                            className="button-delete"
                            onClick={() => handleDelete(appoint._id)}
                          >
                            ביטול <i className="fa-solid fa-xmark"></i>
                            {loadingDelete && <Loading />}
                          </button>
                        </div>
                      </div>
                    ))}
                </motion.div>
              </div>

              <div className="mt-3">
                <CreateQueues
                  businessServices={business?.services}
                  businessOperation={business?.hoursOfOperation}
                  businessId={businessId}
                />
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </>
  );
};

export default SingleBusiness;
