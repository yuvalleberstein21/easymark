import Action from '../utils/Action';
import CalendarComponent from '../utils/Calendar';

interface ICalendarProps {
  setDate: any;
  date: any;
  selectRange: boolean;
  setSelectRange: any;
  onChange: (selectedDate: Date) => void;
}

const MainCalender = (props: ICalendarProps) => {
  const { setDate, date, onChange } = props;

  const handleCalendarChange = (selectedDate: Date) => {
    setDate(selectedDate);
    onChange(selectedDate);
    console.log(selectedDate); // Call the onChange prop
  };
  return (
    <div className="calendar-container-main">
      <CalendarComponent
        setDate={setDate}
        date={date}
        onChange={handleCalendarChange}
      />
      <Action date={date} />
    </div>
  );
};

export default MainCalender;
