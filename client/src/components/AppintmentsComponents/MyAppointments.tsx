import { useEffect, useState } from 'react';
import '../../styles/appointmets.css';
import { Link } from 'react-router-dom';

const dateOptions = {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
  weekday: 'long',
};

const MyAppointments = (props: any) => {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    if (props !== undefined) {
      setAppointments(props.appointments);
    }
  }, [props]);
  console.log(appointments);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    // Adjust the time zone offset according to your requirements
    const timeZoneOffset = date.getTimezoneOffset() * 60000;
    const localDate = new Date(date.getTime() + timeZoneOffset);

    const day = localDate.getDate().toString().padStart(2, '0');
    const month = (localDate.getMonth() + 1).toString().padStart(2, '0');
    const year = localDate.getFullYear().toString().slice(-2);
    return `${day}/${month}/${year}`;
  };

  return (
    <div
      className="container mb-3 p-2"
      style={{ overflowX: 'auto', whiteSpace: 'nowrap' }}
    >
      {appointments?.map((appointment: any) => (
        <Link to={`/business/${appointment.business._id}`}>
          <div
            className="card"
            style={{
              display: 'inline-block',
              minWidth: '300px',
              margin: '4px',
            }}
            key={appointment._id}
          >
            <div className="card_body_appointmets">
              <img
                src={appointment.business.images[0].imageUrl}
                alt={appointment.business.businessName}
              />
              <div dir="rtl" className="businessDetails_appointmet">
                <span>{appointment.business.businessName}</span>
                <p dir="rtl">
                  בתאריך {formatDate(appointment.date)} בשעה{' '}
                  {appointment.startTime}
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
