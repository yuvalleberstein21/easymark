import { useState } from 'react';
import '../styles/createQueues.css';
import '../styles/calendar.css';
import MainCalender from './MainCalender';

const CreateQueues = () => {
  const [showButtonContinueToCalendar, setShowButtonContinueToCalendar] =
    useState(false);
  const [showButtonContinueToHours, setShowButtonContinueToHours] =
    useState(false);
  const [showCalendar, setShowCalendar] = useState(false);
  const [showHours, setShowHours] = useState(false);
  const [date, setDate] = useState<any>(new Date());
  const [selectedService, setSelectedService] = useState('');

  const handleServiceSelection = (service: string) => {
    setSelectedService(service);
    setShowButtonContinueToCalendar(true);
  };

  const handleCalendarChange = (selectedDate: Date) => {
    setDate(selectedDate);
    setShowButtonContinueToHours(true);
  };

  return (
    <div className="container">
      <div className="card-container">
        <div className="card_create_queues">
          <div className="card-header"></div>
          <div className="card-body">
            {showCalendar && (
              <>
                <span
                  onClick={() => setShowCalendar(false)}
                  className="span_calendar"
                >
                  חזרה →
                </span>
                <p>Selected service: {selectedService}</p>
                <div
                  style={{
                    display: 'grid',
                    placeItems: 'center',
                    width: '100%',
                  }}
                >
                  <MainCalender
                    date={date}
                    onChange={handleCalendarChange}
                    setDate={setDate}
                    selectRange={false}
                    setSelectRange={undefined}
                  />
                </div>
              </>
            )}
            {showButtonContinueToHours && (
              <button
                className="btn-continue"
                onClick={() => setShowCalendar(false)}
              >
                Continue
              </button>
            )}

            {!showCalendar && (
              <>
                <h4>Choise of services</h4>
                <div className="buttons_choise_services">
                  <button onClick={() => handleServiceSelection('manHairCut')}>
                    Man Haircut
                    <br />
                    <span>10$</span>
                  </button>
                  <button
                    onClick={() => handleServiceSelection('manHairCutBeard')}
                  >
                    Man Haircut + Beard
                    <br />
                    <span>15$</span>
                  </button>
                  <button onClick={() => handleServiceSelection('manWax')}>
                    Wax
                    <br />
                    <span>5$</span>
                  </button>
                  {showButtonContinueToCalendar && (
                    <div>
                      <button
                        className="btn-continue"
                        onClick={() => setShowCalendar(true)}
                      >
                        Continue
                      </button>
                    </div>
                  )}
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateQueues;
