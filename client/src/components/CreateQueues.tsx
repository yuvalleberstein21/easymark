import { useState } from 'react';
import '../styles/createQueues.css';
import '../styles/calendar.css';
import MainCalendar from './MainCalender';
import HoursComponent from './HoursComponent';
import SummaryComponent from './SummaryComponent';

const CreateQueues = () => {
  const [date, setDate] = useState<any>(new Date());
  const [hour, setHour] = useState('');
  const [selectedService, setSelectedService] = useState('');
  const [step, setStep] = useState(1); // Step 1: choose service, Step 2: choose date and time

  const handleServiceSelection = (service: string) => {
    setSelectedService(service);
    setStep(2); // Move to step 2: choose date
  };

  const handleCalendarChange = (selectedDate: Date) => {
    setDate(selectedDate);
    setStep(3); // Move to step 3: choose time
  };
  const handleChooseHourChange = (selectedHour: string) => {
    setHour(selectedHour);
    setStep(4); // Move to step 4: Summary
  };

  const handleBackClick = () => {
    setStep(step - 1); // Go back to the previous step
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <>
            <h4>Choice of services</h4>
            <div className="buttons_choise_services">
              <button onClick={() => handleServiceSelection('manHairCut')}>
                Man Haircut
                <br />
                <span>10$</span>
              </button>
              <button onClick={() => handleServiceSelection('manHairCutBeard')}>
                Man Haircut + Beard
                <br />
                <span>15$</span>
              </button>
              <button onClick={() => handleServiceSelection('manWax')}>
                Wax
                <br />
                <span>5$</span>
              </button>
            </div>
          </>
        );
      case 2:
        return (
          <MainCalendar
            date={date}
            onChange={handleCalendarChange}
            setDate={setDate}
            selectRange={false}
            setSelectRange={undefined}
            onBack={handleBackClick}
          />
        );
      case 3:
        return (
          <HoursComponent
            date={date.toDateString()}
            onBack={handleBackClick}
            onChange={handleChooseHourChange}
          />
        );
      case 4:
        return (
          <SummaryComponent
            date={date.toDateString()}
            selectedService={selectedService}
            hour={hour}
            onBack={handleBackClick}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="container">
      <div className="card-container">
        <div className="card_create_queues">
          <div className="card-header"></div>
          <div className="card-body">{renderStep()}</div>
        </div>
      </div>
    </div>
  );
};

export default CreateQueues;
