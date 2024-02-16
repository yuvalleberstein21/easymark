import { useState } from 'react';
import '../styles/createQueues.css';
import '../styles/calendar.css';
import MainCalender from './MainCalender';

const CreateQueues = () => {
  const [showButtonContinue, setShowButtonContinue] = useState(false);
  const [showCalendar, setShowCalendar] = useState(false);
  const [date, setDate] = useState<any>(new Date());

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
                <div
                  style={{
                    display: 'grid',
                    placeItems: 'center',
                    width: '100%',
                  }}
                >
                  <MainCalender
                    date={date}
                    setDate={setDate}
                    selectRange={false}
                    setSelectRange={undefined}
                  />
                </div>
              </>
            )}
            {!showCalendar && (
              <>
                <h4>Choise of services</h4>
                <div className="buttons_choise_services">
                  <button
                    onClick={() => setShowButtonContinue(!showButtonContinue)}
                  >
                    Man Haircut
                    <br />
                    <span>10$</span>
                  </button>
                  <button
                    onClick={() => setShowButtonContinue(!showButtonContinue)}
                  >
                    Man Haircut + Beard
                    <br />
                    <span>15$</span>
                  </button>
                  <button
                    onClick={() => setShowButtonContinue(!showButtonContinue)}
                  >
                    Wax
                    <br />
                    <span>5$</span>
                  </button>
                  {showButtonContinue && (
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
