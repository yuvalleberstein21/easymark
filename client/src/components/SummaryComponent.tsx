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
      <div className="summary-container">
        <div className="summary">
          <h2>סיכום</h2>
          <div
            dir="rtl"
            style={{
              fontSize: '16px',
              color: 'gray',
              fontWeight: '500',
            }}
          >
            <p>
              {' '}
              תור ל {selectedService} {''}בתאריך {date} {''}בשעה {hour}
            </p>
          </div>

          {/* <p dir="rtl">
            תור ל :{' '}
            <span>
              {selectedService}{' '}
              <p>
                בתאריך : <span>{date}</span>
                <p>
                  בשעה : <span>{hour}</span>
                </p>
              </p>
            </span> */}
          {/* </p> */}
        </div>
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
