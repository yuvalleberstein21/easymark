import { useEffect, useState } from 'react';
import '../../styles/appointmets.css';
import { Link } from 'react-router-dom';
import { formatDate } from '../../utils/formatDate';

const MyAppointments = (props: any) => {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    if (props !== undefined) {
      setAppointments(props.appointments);
    }
  }, [props]);

  return (
    <div
      className="container mb-3 p-2"
      style={{ overflowX: 'auto', whiteSpace: 'nowrap' }}
    >
      {appointments?.map((appointment: any) => (
        <Link
          to={`/business/${appointment?.business?._id}`}
          key={appointment?._id}
        >
          <div
            className="card"
            style={{
              display: 'inline-block',
              minWidth: '300px',
              margin: '4px',
            }}
          >
            <div className="card_body_appointmets">
              <img
                src={appointment?.business.images[0].imageUrl}
                alt={appointment?.business.businessName}
              />
              <div dir="rtl" className="businessDetails_appointmet">
                <span>{appointment?.business.businessName}</span>
                <p dir="rtl">
                  בתאריך {formatDate(appointment?.date)} בשעה{' '}
                  {appointment?.startTime}
                </p>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default MyAppointments;
