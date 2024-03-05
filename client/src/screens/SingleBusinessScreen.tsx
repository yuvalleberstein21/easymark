import { useDispatch, useSelector } from 'react-redux';
import '../styles/singleBusiness.css';
import CreateQueues from '../components/BusinessComponents/CreateQueues';
import { useEffect } from 'react';
import { getSingleBusinessAction } from '../Redux/Actions/BusinessActions';
import { useLocation } from 'react-router-dom';
import Loading from '../components/LoadingError/Loading';
import Message from '../components/LoadingError/Error';
import BusinessImagesCard from '../components/BusinessComponents/BusinessImagesCard';
import { getAppointmentAction } from '../Redux/Actions/AppointmentActions';

const SingleBusiness = () => {
  const getSingleBusiness = useSelector(
    (state: any) => state.getSingleBusiness
  );
  const { loading, error, business } = getSingleBusiness;

  const getAppointment = useSelector((state: any) => state.getAppointment);
  const {
    loading: loadingAppointment,
    error: errorAppointment,
    appointment,
  } = getAppointment;

  const userLogin = useSelector((state: any) => state.userLogin);
  const { userInfo } = userLogin;

  const dispatch = useDispatch();
  const location = useLocation();
  const pathname = location.pathname;
  const businessId = pathname.split('/').pop();

  useEffect(() => {
    try {
      const action = getSingleBusinessAction(businessId);
      dispatch<any>(action);
    } catch (err) {
      console.log(err);
    }
  }, [dispatch, businessId]);

  useEffect(() => {
    try {
      const action = getAppointmentAction(userInfo._id);
      dispatch<any>(action);
    } catch (err) {
      console.log(err);
    }
  }, [dispatch]);

  console.log(appointment);
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
                <div className="h-100 card_single_business">
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
                <div className="card mt-3">
                  <div className="card_header p-2">
                    מאושר <i className="fa-regular fa-circle-check m-1"></i>
                  </div>
                  <div className="card-body">
                    {appointment?.map((appoint: any) => (
                      <div
                        key={appoint._id}
                        dir="rtl"
                        style={{
                          fontSize: '16px',
                          color: 'rgb(24, 24, 24)',
                          fontWeight: '400',
                        }}
                      >
                        <p>
                          {' '}
                          תור ל {appoint.service} {''}בתאריך {appoint.date} {''}
                          בשעה {appoint.startTime}
                        </p>
                        <hr />
                      </div>
                    ))}
                  </div>
                  <button className="button-delete">
                    ביטול
                    <i className="fa-solid fa-xmark"></i>
                  </button>
                </div>
              </div>

              <div className="mt-3">
                <CreateQueues
                  businessServices={business?.services}
                  businessOperation={business?.hoursOfOperation}
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
