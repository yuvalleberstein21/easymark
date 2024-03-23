import { useEffect, useState } from 'react';

interface BusinessStep2 {
  userBusiness: {
    _id: string;
    hoursOfOperation: [
      {
        closeTime: string;
        dayOfWeek: string;
        openTime: string;
        _id: string;
      }
    ];
  };
}

const BusinessEditStep2 = (props: BusinessStep2) => {
  const { userBusiness } = props;

  const [userBusinessState, setUserBusinessState] = useState(userBusiness);

  // Update userBusinessState whenever userBusiness changes
  useEffect(() => {
    setUserBusinessState(userBusiness);
  }, [userBusiness]);

  const handleChangeDayOfWeek = (e: any, index: number) => {
    const newHoursOfOperation = [...userBusinessState.hoursOfOperation];
    newHoursOfOperation[index] = {
      ...newHoursOfOperation[index],
      dayOfWeek: e.target.value,
    };
    setUserBusinessState({
      ...userBusinessState,
      hoursOfOperation: newHoursOfOperation,
    });
  };

  const handleChangeOpenTime = (e: any, index: number) => {
    const newHoursOfOperation = [...userBusinessState.hoursOfOperation];
    newHoursOfOperation[index] = {
      ...newHoursOfOperation[index],
      openTime: e.target.value,
    };
    setUserBusinessState({
      ...userBusinessState,
      hoursOfOperation: newHoursOfOperation,
    });
  };

  const handleChangeCloseTime = (e: any, index: number) => {
    const newHoursOfOperation = [...userBusinessState.hoursOfOperation];
    newHoursOfOperation[index] = {
      ...newHoursOfOperation[index],
      closeTime: e.target.value,
    };
    setUserBusinessState({
      ...userBusinessState,
      hoursOfOperation: newHoursOfOperation,
    });
  };

  return (
    <div className="container">
      <h3 className="text-center mb-4">Hours of operation</h3>
      {userBusinessState.hoursOfOperation?.map((operation, index) => (
        <div className="mb-3 hoursOfOpertaionDiv" key={operation._id}>
          <div className="inputs-hoursOfOperation">
            <input
              type="text"
              value={operation.dayOfWeek}
              onChange={(e) => handleChangeDayOfWeek(e, index)}
            />
            <input
              type="text"
              value={operation.openTime}
              onChange={(e) => handleChangeOpenTime(e, index)}
            />
            <input
              type="text"
              value={operation.closeTime}
              onChange={(e) => handleChangeCloseTime(e, index)}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default BusinessEditStep2;
