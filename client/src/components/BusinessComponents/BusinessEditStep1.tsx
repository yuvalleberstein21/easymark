interface BusinessStep1 {
  setUserBusinessState: any;
  userBusiness: {
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
  const { userBusiness, setUserBusinessState } = props;

  if (!userBusiness) {
    return null;
  }

  const handleServiceChange = (
    index: number,
    field: string,
    value: string | number
  ) => {
    setUserBusinessState((prevState: any) => ({
      ...prevState,
      services: prevState.services.map((service: any, i: number) => {
        if (i === index) {
          return {
            ...service,
            [field]: value,
          };
        }
        return service;
      }),
    }));
  };

  return (
    <div className="step1Form">
      <div className="step1div">
        <div className="mb-3">
          <label>Business Name</label>
          <input
            type="text"
            value={userBusiness?.businessName}
            onChange={(e) =>
              setUserBusinessState((prevState: any) => ({
                ...prevState,
                businessName: e.target.value,
              }))
            }
          />
        </div>
        <div className="mb-3">
          <input
            type="text"
            placeholder="City"
            value={userBusiness?.location?.city}
            onChange={(e) =>
              setUserBusinessState((prevState: any) => ({
                ...prevState,
                location: { ...prevState.location, city: e.target.value },
              }))
            }
          />
        </div>
        <div className="mb-3">
          <input
            type="text"
            placeholder="Street Address"
            value={userBusiness?.location?.streetAddress}
            onChange={(e) =>
              setUserBusinessState((prevState: any) => ({
                ...prevState,
                location: {
                  ...prevState.location,
                  streetAddress: e.target.value,
                },
              }))
            }
          />
        </div>
      </div>
      <div className="step1div">
        {userBusiness?.services?.map((service, index) => (
          <div key={index} className="mb-3" style={{ borderRadius: '5px' }}>
            <input
              type="text"
              value={service.serviceName}
              onChange={(e) =>
                handleServiceChange(index, 'serviceName', e.target.value)
              }
            />
            <input
              type="text"
              value={service.description}
              onChange={(e) =>
                handleServiceChange(index, 'description', e.target.value)
              }
            />
            <input
              type="number"
              value={service.price}
              onChange={(e) =>
                handleServiceChange(index, 'price', e.target.value)
              }
            />
            <input
              type="number"
              value={service.serviceTime}
              onChange={(e) =>
                handleServiceChange(index, 'serviceTime', e.target.value)
              }
            />
          </div>
        ))}
      </div>
    </div>
  );
};
export default BusinessEditStep1;
