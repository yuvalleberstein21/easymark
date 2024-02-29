import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

interface BusinessStep1 {
  userBusiness: {
    _id: string;
    businessName: string;
    location: {
      city: string;
      streetAddress: string;
    };
    services: [
      {
        serviceName: string;
        description: string;
        price: number;
        serviceTime: number;
      }
    ];
  };
}

const BusinessEditStep1 = (props: BusinessStep1) => {
  const { userBusiness } = props;

  const [userBusinessState, setUserBusinessState] = useState(userBusiness);

  const [businessName, setBusinessName] = useState(
    userBusiness?.businessName ?? ''
  );
  const [city, setCity] = useState(userBusiness?.location?.city ?? '');

  const [streetAddress, setStreetAddress] = useState(
    userBusiness?.location?.streetAddress ?? ''
  );

  const handleChangeServiceName = (e: any, index: number) => {
    const newServices = [...userBusiness.services];
    newServices[index].serviceName = e.target.value;
    setUserBusinessState({ ...userBusinessState, services: newServices });
  };

  const handleChangeDescription = (e: any, index: number) => {
    const newServices = [...userBusiness.services];
    newServices[index].description = e.target.value;
    setUserBusinessState({ ...userBusinessState, services: newServices });
  };

  const handleChangePrice = (e: any, index: number) => {
    const newServices = [...userBusiness.services];
    newServices[index].price = e.target.value;
    setUserBusinessState({ ...userBusinessState, services: newServices });
  };

  const handleChangeServiceTime = (e: any, index: number) => {
    const newServices = [...userBusiness.services];
    newServices[index].serviceTime = e.target.value;
    setUserBusinessState({ ...userBusinessState, services: newServices });
  };

  useEffect(() => {
    if (userBusiness) {
      setUserBusinessState(userBusiness);
      setBusinessName(userBusiness?.businessName ?? '');
      setCity(userBusiness?.location?.city ?? '');
      setStreetAddress(userBusiness?.location?.streetAddress ?? '');
    }
  }, [userBusiness]);

  return (
    <div>
      <div className="mb-3">
        <input
          type="text"
          value={businessName}
          onChange={(e) => setBusinessName(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <input
          type="text"
          placeholder="City"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <input
          type="text"
          placeholder="Street Address"
          value={streetAddress}
          onChange={(e) => setStreetAddress(e.target.value)}
        />
      </div>
      {userBusiness?.services?.map((service, index) => (
        <div
          key={index}
          className="mb-3"
          style={{ border: '1px solid #009688', borderRadius: '5px' }}
        >
          <input
            type="text"
            value={service.serviceName}
            onChange={(e) => handleChangeServiceName(e, index)}
          />
          <input
            type="text"
            value={service.description}
            onChange={(e) => handleChangeDescription(e, index)}
          />
          <input
            type="number"
            value={service.price}
            onChange={(e) => handleChangePrice(e, index)}
          />
          <input
            type="number"
            value={service.serviceTime}
            onChange={(e) => handleChangeServiceTime(e, index)}
          />
        </div>
      ))}
    </div>
  );
};

export default BusinessEditStep1;
