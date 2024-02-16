import Action from '../utils/Action';
import CalendarComponent from '../utils/Calendar';

interface ICalendarProps {
  setDate: any;
  date: any;
  selectRange: boolean;
  setSelectRange: any;
}

const MainCalender = (props: ICalendarProps) => {
  const { setDate, date } = props;
  return (
    <div className="calendar-container-main">
      <CalendarComponent setDate={setDate} date={date} />
      <Action date={date} />
    </div>
  );
};

export default MainCalender;
