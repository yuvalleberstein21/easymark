import { useState } from 'react';
import '../styles/hoursComponent.css';
interface IHoursComponentProps {
  date: any;
  onBack: () => void;
  onChange: (value: string) => void;
  businessOperation: any[];
}

const HoursComponent = (props: IHoursComponentProps) => {
  const { date, onBack, onChange, businessOperation } = props;

  const dayOfWeekHebrew = date.split(',')[0];

  // Convert Hebrew day of the week to English
  const getDayOfWeek = (dayOfWeekHebrew: any) => {
    const dayOfWeekMap = {
      'יום ראשון': 'sunday',
      'יום שני': 'monday',
      'יום שלישי': 'tuesday',
      'יום רביעי': 'wednesday',
      'יום חמישי': 'thursday',
      'יום שישי': 'friday',
      שבת: 'saturday',
    };

    return dayOfWeekMap[dayOfWeekHebrew];
  };

  const dayOfWeek = getDayOfWeek(dayOfWeekHebrew);

  const hoursForDay = businessOperation.find(
    (hours) => hours.dayOfWeek === dayOfWeek
  );

  console.log(hoursForDay);

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
