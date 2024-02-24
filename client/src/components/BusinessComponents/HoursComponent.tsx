import '../../styles/hoursComponent.css';
interface IHoursComponentProps {
  date: any;
  onBack: () => void;
  onChange: (value: string) => void;
  businessOperation: any[];
  businessServices: any[];
  selectedService: string;
}

const HoursComponent = (props: IHoursComponentProps) => {
  const {
    date,
    onBack,
    onChange,
    businessOperation,
    businessServices,
    selectedService,
  } = props;

  const dayOfWeekHebrew = date.split(',')[0];

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

  const dayOfWeek = getDayOfWeek(dayOfWeekHebrew);

  const hoursForDay = businessOperation.find(
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

  const hoursBetween = getHoursBetween(
    hoursForDay.openTime,
    hoursForDay.closeTime,
    choosenService.serviceTime
  );

  const handleHourSelection = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    const selectedHour = e.currentTarget.textContent;
    if (selectedHour) {
      onChange(selectedHour);
    }
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
        {hoursBetween.map((hour, i) => (
          <button key={i} onClick={handleHourSelection}>
            {hour}
          </button>
        ))}
      </div>
    </div>
  );
};

export default HoursComponent;
