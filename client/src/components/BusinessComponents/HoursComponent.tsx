import { useEffect } from 'react';
import '../../styles/hoursComponent.css';
import { useDispatch, useSelector } from 'react-redux';
import { getBusinessAppointmentsAction } from '../../Redux/Actions/AppointmentActions';
interface IHoursComponentProps {
  date: any;
  onBack: () => void;
  onChange: (value: string) => void;
  businessOperation: any[];
  businessServices: any[];
  selectedService: string;
  businessId: any;
  dateRegular: Date;
}

const HoursComponent = (props: IHoursComponentProps) => {
  const {
    dateRegular,
    date,
    onBack,
    onChange,
    businessOperation,
    businessServices,
    selectedService,
    businessId,
  } = props;

  const getBusinessAppointments = useSelector(
    (state: any) => state.getBusinessAppointments
  );
  const { appointments, loading: loadingAppointments } =
    getBusinessAppointments;

  const dispatch = useDispatch<any>();

  useEffect(() => {
    try {
      dispatch(getBusinessAppointmentsAction(businessId));
    } catch (error) {
      console.log(error);
    }
  }, [dispatch]);

  const dayOfWeekHebrew = date?.split(',')[0];

  const getDayOfWeek = (dayOfWeekHebrew: []) => {
    const dayOfWeekMap = {
      'יום ראשון': 'sunday',
      'יום שני': 'monday',
      'יום שלישי': 'tuesday',
      'יום רביעי': 'wednesday',
      'יום חמישי': 'thursday',
      'יום שישי': 'friday',
    };

    return dayOfWeekMap[dayOfWeekHebrew];
  };

  // const isHourActive = (hour: string) => {
  //   const appointmentHours = appointments?.find(
  //     (appointment) => appointment.startTime === hour
  //   );
  //   if (appointmentHours) {
  //     return true;
  //   }
  //   return false;
  // };

  const isHourActive = (hour: string) => {
    if (appointments) {
      // Parse the chosen date to compare with appointment dates
      const chosenDate = new Date(dateRegular);

      // Filter appointments for the selected date
      const appointmentsForDate = appointments.filter((appointment: any) => {
        // Parse the appointment date
        const appointmentDate = new Date(appointment.date);

        // Check if the appointment date matches the chosen date
        return appointmentDate.toDateString() === chosenDate.toDateString();
      });

      // Check if any appointment matches the given hour
      return appointmentsForDate.some((appointment: any) => {
        return appointment.startTime === hour;
      });
    }
    return false;
  };

  const dayOfWeek = getDayOfWeek(dayOfWeekHebrew);

  const hoursForDay = businessOperation?.find(
    (hours) => hours.dayOfWeek === dayOfWeek
  );

  function getHoursBetween(start: string, end: string, increment: number) {
    const [startHours, startMinutes] = start.split(':');
    const [endHours, endMinutes] = end.split(':');
    const startTime = parseInt(startHours) * 60 + parseInt(startMinutes);
    const endTime = parseInt(endHours) * 60 + parseInt(endMinutes);

    const hours = [];

    for (let time = startTime; time < endTime; time += increment) {
      const currentHours = Math.floor(time / 60);
      const currentMinutes = time % 60;
      const formattedHours = currentHours.toString().padStart(2, '0');
      const formattedMinutes = currentMinutes.toString().padStart(2, '0');
      const formattedTime = `${formattedHours}:${formattedMinutes}`;

      hours.push(formattedTime);
    }
    return hours;
  }

  const choosenService = businessServices.find(
    (service) => service.serviceName === selectedService
  );

  const hoursBetween = hoursForDay
    ? getHoursBetween(
        hoursForDay.openTime,
        hoursForDay.closeTime,
        choosenService.serviceTime
      )
    : null;

  const handleHourSelection = (selectedHour: string) => {
    onChange(selectedHour);
  };

  return (
    <div className="container">
      <span className="span_calendar" onClick={onBack}>
        חזרה →{' '}
      </span>
      <div className="titles">
        <h4>{date}</h4>
        <h4>Choose hour</h4>
      </div>
      <div className="hours">
        {hoursBetween ? (
          hoursBetween.map((hour, i) => (
            <button
              key={i}
              onClick={() => handleHourSelection(hour)}
              className={isHourActive(hour) ? 'active' : 'inactive'}
            >
              {hour}
            </button>
          ))
        ) : (
          <div
            className="alert alert-info color-white"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '100%',
              fontSize: '18px',
            }}
          >
            The business doesn't work this day
          </div>
        )}
      </div>
    </div>
  );
};

export default HoursComponent;
