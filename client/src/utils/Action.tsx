import '../styles/calendar.css';
interface ActionProps {
  date: any;
}

const Action = (props: ActionProps) => {
  const { date } = props;
  return (
    <div>
      {date.length > 0 ? (
        <p className="text-center">
          {date[0].toDateString()}
          &nbsp;-&nbsp;
          {date[1].toDateString()}
        </p>
      ) : (
        <p className="text-center mt-3">{date.toDateString()}</p>
      )}
    </div>
  );
};

export default Action;
