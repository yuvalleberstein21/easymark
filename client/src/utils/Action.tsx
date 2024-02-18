import '../styles/calendar.css';
interface ActionProps {
  date: any;
}

const Action = (props: ActionProps) => {
  const { date } = props;
  // Check if date is smaller than Date.now() and apply the greyBackground class
  const className = date < Date.now() ? 'greyBackground' : '';
  return (
    <div>
      {date.length > 0 ? (
        <p className="text-center">
          {date[0].toDateString()}
          &nbsp;-&nbsp;
          {date[1].toDateString()}
        </p>
      ) : (
        <p className={`text-center mt-3 ${className}`}>{date.toDateString()}</p>
      )}
    </div>
  );
};

export default Action;
