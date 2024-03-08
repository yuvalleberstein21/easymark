import { useDispatch, useSelector } from 'react-redux';
import '../../styles/summary.css';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import {
  createAppointmentAction,
  getUserAppointmentAction,
} from '../../Redux/Actions/AppointmentActions';
import Loading from '../LoadingError/Loading';

interface ISummaryComponentProps {
  date: any;
  selectedService: string;
  hour: string;
  onBack: () => void;
  businessServices: [];
  dateRegular: Date;
}

const SummaryComponent = (props: ISummaryComponentProps) => {
  const userLogin = useSelector((state: any) => state.userLogin);
  const { userInfo } = userLogin;
  const createAppointment = useSelector(
    (state: any) => state.createAppointment
  );
  const { loading, error } = createAppointment;
  const { date, onBack, selectedService, hour, businessServices, dateRegular } =
    props;

  const [name, setName] = useState<string | null>(null);
  const [phone, setPhone] = useState<string | null>(null);
  const [comment, setComment] = useState<string>('');

  const location = useLocation();
  const pathname = location.pathname;
  const businessId = pathname.split('/').pop();
  const dispatch = useDispatch();

  const serviceId = businessServices.find(
    (service) => service.serviceName === selectedService
  )?._id;

  // Convert the date to UTC timezone
  const utcDate = new Date(
    dateRegular.getTime() - dateRegular.getTimezoneOffset() * 60000
  ).toISOString();

  useEffect(() => {
    if (userInfo !== null) {
      setName(userInfo.name);
      setPhone(userInfo.phoneNumber);
    }
    console.log(utcDate);
  }, [userInfo]);

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPhone(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const action = createAppointmentAction(
        userInfo._id,
        businessId,
        utcDate,
        hour,
        serviceId,
        comment
      );
      await dispatch<any>(action);
      const fetchAppointmentAction = getUserAppointmentAction(userInfo._id);
      dispatch<any>(fetchAppointmentAction);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="container">
      <span className="span_calendar" onClick={onBack}>
        חזרה →{' '}
      </span>
      <div className="summary-container">
        <div className="summary">
          <h2>סיכום</h2>
          <div
            dir="rtl"
            style={{
              fontSize: '16px',
              color: 'gray',
              fontWeight: '500',
            }}
          >
            <p>
              {' '}
              תור ל {selectedService} {''}בתאריך {date} {''}בשעה {hour}
            </p>
          </div>
        </div>
        <form className="inputs-container" onSubmit={handleSubmit}>
          <div className="inputs-container">
            <input
              type="text"
              placeholder="Full Name"
              value={name ?? ''}
              onChange={handleNameChange}
            />
            <input
              type="text"
              placeholder="Phone Number"
              value={phone ?? ''}
              onChange={handlePhoneChange}
            />
            <textarea
              placeholder="Comment"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
            />
          </div>
          {loading ? (
            <Loading />
          ) : (
            <button type="submit" className="btn btn-dark p-3">
              Get Appointment
            </button>
          )}
        </form>
      </div>
    </div>
  );
};

export default SummaryComponent;
