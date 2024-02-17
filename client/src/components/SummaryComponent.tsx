import '../styles/summary.css';
interface ISummaryComponentProps {
  date: any;
  selectedService: string;
  hour: string;
  onBack: () => void;
}

const SummaryComponent = (props: ISummaryComponentProps) => {
  const { date, onBack, selectedService, hour } = props;
  return (
    <div className="container">
      <span className="span_calendar" onClick={onBack}>
        חזרה →{' '}
      </span>
      <div className="summary">
        <h2>Summary</h2>
        <p>
          Appointment to: <span>{selectedService}</span>
        </p>
        <p>
          Date: <span>{date}</span>
        </p>
        <p>
          Hour: <span>{hour}</span>
        </p>

        <div className="inputs-container">
          <input type="text" placeholder="Full Name" />
          <input type="text" placeholder="Phone Number" />
          <textarea placeholder="Comments" />
        </div>
      </div>
    </div>
  );
};

export default SummaryComponent;
