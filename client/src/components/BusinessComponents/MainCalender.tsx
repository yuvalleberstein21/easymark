import { useState } from 'react';
import DatePicker from 'react-date-picker';
import 'react-date-picker/dist/DatePicker.css';

interface ICalendarProps {
  handlehandleCalendarChange: (selectedDate: Date) => void;
  onBack: () => void;
}

const MainCalender = (props: ICalendarProps) => {
  const [date, setDate] = useState(new Date());
  const { onBack, handlehandleCalendarChange } = props;

  return (
    <div className="container">
      <span className="span_calendar" onClick={onBack}>
        חזרה →{' '}
      </span>
      <div className="calendaer-main">
        <DatePicker
          onChange={handlehandleCalendarChange}
          value={date}
          minDate={new Date()}
          locale="he"
          clearAriaLabel="Clear value"
          dayAriaLabel="Day"
          monthAriaLabel="Month"
          yearAriaLabel="Year"
          isOpen={true}
          closeCalendar={false}
        />
      </div>
    </div>
  );
};
export default MainCalender;
