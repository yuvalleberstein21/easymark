import '../styles/calendar.css';
import ReactCalendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

interface CalendarProps {
  setDate: any;
  date: any;
}
const CalendarComponent = (props: CalendarProps) => {
  const { setDate, date } = props;
  return (
    <div className="calendar-container">
      <ReactCalendar onChange={setDate} value={date} />
    </div>
  );
};

export default CalendarComponent;
