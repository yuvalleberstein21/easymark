import '../styles/calendar.css';
import ReactCalendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

interface CalendarProps {
  setDate: any;
  date: any;
  onChange: (selectedDate: Date) => void;
}
const CalendarComponent = (props: CalendarProps) => {
  const { setDate, date, onChange } = props;

  const handleCalendarChange = (selectedDate: Date) => {
    setDate(selectedDate);
    onChange(selectedDate); // Call the onChange prop
  };

  return (
    <div className="calendar-container">
      <ReactCalendar value={date} onChange={handleCalendarChange} />
    </div>
  );
};

export default CalendarComponent;
