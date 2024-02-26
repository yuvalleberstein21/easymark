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

  const handleChangeDayOfWeek = (e: any, index: number) => {
    const newServices = [...userBusiness.hoursOfOperation];
    newServices[index].dayOfWeek = e.target.value;
    setUserBusinessState({
      ...userBusinessState,
      hoursOfOperation: newServices,
    });
  };

  const handleChangeOpenTime = (e: any, index: number) => {
    const newServices = [...userBusiness.hoursOfOperation];
    newServices[index].openTime = e.target.value;
    setUserBusinessState({
      ...userBusinessState,
      hoursOfOperation: newServices,
    });
  };

  const handleChangeCloseTime = (e: any, index: number) => {
    const newServices = [...userBusiness.hoursOfOperation];
    newServices[index].closeTime = e.target.value;
    setUserBusinessState({
      ...userBusinessState,
      hoursOfOperation: newServices,
    });
  };

  useEffect(() => {
    if (userBusiness) {
      setUserBusinessState(userBusiness);
    }
  }, [userBusiness]);

  return (
    <div>
      <p className="text-center mb-4">Hours of operation</p>
      {userBusiness.hoursOfOperation?.map((operation, index) => (
        <div className="mb-3" key={operation._id}>
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
      ))}
    </div>
  );
};

export default BusinessEditStep2;
