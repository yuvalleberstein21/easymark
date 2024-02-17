import '../styles/hoursComponent.css';
interface IHoursComponentProps {
  date: any;
  onBack: () => void;
  onChange: (value: string) => void;
}

const HoursComponent = (props: IHoursComponentProps) => {
  const { date, onBack, onChange } = props;

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
        <button onClick={handleHourSelection}>10:00</button>
        <button onClick={handleHourSelection}>10:20</button>
        <button onClick={handleHourSelection}>10:40</button>
        <button onClick={handleHourSelection}>11:00</button>
        <button onClick={handleHourSelection}>11:20</button>
        <button onClick={handleHourSelection}>12:00</button>
        <button onClick={handleHourSelection}>12:20</button>
        <button onClick={handleHourSelection}>12:40</button>
      </div>
    </div>
  );
};

export default HoursComponent;
