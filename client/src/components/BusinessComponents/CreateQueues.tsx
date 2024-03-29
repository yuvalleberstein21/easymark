import { useState } from 'react';
import '../../styles/createQueues.css';
import '../../styles/calendar.css';
import MainCalendar from './MainCalender';
import HoursComponent from './HoursComponent';
import SummaryComponent from './SummaryComponent';

interface Business {
  businessServices: any[];
  businessOperation: any[];
  businessId: any;
}

const dateOptions = {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
  weekday: 'long',
};

const CreateQueues = (props: Business) => {
  const { businessServices, businessOperation, businessId } = props;

  const [date, setDate] = useState<any>(new Date());
  const formattedDate = date.toLocaleDateString('he-IL', dateOptions);
  const [hour, setHour] = useState('');
  const [selectedService, setSelectedService] = useState('');
  const [step, setStep] = useState(1);

  const handleServiceSelection = (service: string) => {
    setSelectedService(service);
    setStep(2);
  };

  const handleCalendarChange = (selectedDate: Date) => {
    setDate(selectedDate);
    setStep(3);
  };
  const handleChooseHourChange = (selectedHour: string) => {
    setHour(selectedHour);
    setStep(4);
  };

  const handleBackClick = () => {
    setStep(step - 1);
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <>
            <h2 style={{ fontWeight: 'bold' }}>בחירת שירותים</h2>
            <div className="buttons_choise_services">
              {businessServices?.map((service, index) => (
                <button
                  className="mt-2"
                  key={index}
                  onClick={() => handleServiceSelection(service.serviceName)}
                >
                  {service.serviceName}
                  <br />
                  <span>{service.price}$</span>
                </button>
              ))}
            </div>
          </>
        );
      case 2:
        return (
          <MainCalendar
            onBack={handleBackClick}
            handlehandleCalendarChange={handleCalendarChange}
          />
        );
      case 3:
        return (
          <HoursComponent
            dateRegular={date}
            date={formattedDate}
            onBack={handleBackClick}
            onChange={handleChooseHourChange}
            businessOperation={businessOperation}
            businessServices={businessServices}
            selectedService={selectedService}
            businessId={businessId}
          />
        );
      case 4:
        return (
          <SummaryComponent
            dateRegular={date}
            date={formattedDate}
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
