import Action from '../utils/Action';
import CalendarComponent from '../utils/Calendar';

interface ICalendarProps {
  setDate: any;
  date: any;
  selectRange: boolean;
  setSelectRange: any;
  onChange: (selectedDate: Date) => void;
  onBack: () => void;
}

const MainCalender = (props: ICalendarProps) => {
  const { setDate, date, onChange, onBack } = props;

  const handleCalendarChange = (selectedDate: Date) => {
    setDate(selectedDate);
    onChange(selectedDate);
  };
  return (
    <div className="calendar-container-main">
      <CalendarComponent
        onBack={onBack}
        setDate={setDate}
        date={date}
        onChange={handleCalendarChange}
      />
      <Action date={date} />
    </div>
  );
};

export default MainCalender;
