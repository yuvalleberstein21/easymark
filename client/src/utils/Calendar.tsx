import '../styles/calendar.css';
import ReactCalendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

interface CalendarProps {
  setDate: any;
  date: any;
  onChange: (selectedDate: Date) => void;
  onBack: () => void;
}
const CalendarComponent = (props: CalendarProps) => {
  const { setDate, date, onChange, onBack } = props;

  const handleCalendarChange = (selectedDate: Date) => {
    setDate(selectedDate);
    onChange(selectedDate); // Call the onChange prop
  };

  return (
    <div className="calendar-container">
      <span className="span_calendar" onClick={onBack}>
        חזרה →{' '}
      </span>
      <ReactCalendar
        value={date}
        onChange={handleCalendarChange}
        onBack={onBack}
      />
    </div>
  );
};

export default CalendarComponent;
