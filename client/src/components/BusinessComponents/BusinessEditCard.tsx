import { useEffect, useState } from 'react';
import '../../styles/businessEditCard.css';
import { useDispatch, useSelector } from 'react-redux';
import { updateBusinessAction } from '../../Redux/Actions/BusinessActions';
interface IEditBusiness {
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
    hoursOfOperation: [
      {
        closeTime: string;
        dayOfWeek: string;
        openTime: string;
        _id: string;
      }
    ];
    images: [
      {
        imageUrl: string;
        _id: string;
      }
    ];
  };
}
const BusinessEditCard = (props: IEditBusiness) => {
  const updateBusiness = useSelector((state: any) => state.updateBusiness);
  const { loading, error, business } = updateBusiness;

  const { userBusiness } = props;

  const [businessName, setBusinessName] = useState(
    userBusiness?.businessName ?? ''
  );
  const [city, setCity] = useState(userBusiness?.location?.city ?? '');
  const [streetAddress, setStreetAddress] = useState(
    userBusiness?.location?.streetAddress ?? ''
  );
  const [serviceName, setServiceName] = useState(
    userBusiness?.services[0]?.serviceName ?? ''
  );
  const [description, setDescription] = useState(
    userBusiness?.services[0]?.description ?? ''
  );
  const [price, setPrice] = useState(userBusiness?.services[0]?.price ?? '');
  const [serviceTime, setServiceTime] = useState(
    userBusiness?.services[0]?.serviceTime ?? ''
  );
  const [closeTime, setCloseTime] = useState(
    userBusiness?.hoursOfOperation[0]?.closeTime ?? ''
  );
  const [dayOfWeek, setDayOfWeek] = useState(
    userBusiness?.hoursOfOperation[0]?.dayOfWeek ?? ''
  );
  const [openTime, setOpenTime] = useState(
    userBusiness?.hoursOfOperation[0]?.openTime ?? ''
  );
  const [imageUrl, setImageUrl] = useState(
    userBusiness?.images[0]?.imageUrl ?? ''
  );

  const [step, setStep] = useState(1);

  const dispatch = useDispatch();

  const businessId = userBusiness?._id;

  const handleChange = () => {
    setStep(step + 1);
  };
  const handleChangeToImages = () => {
    setStep(3);
  };

  useEffect(() => {
    if (userBusiness) {
      setBusinessName(userBusiness?.businessName ?? '');
      setCity(userBusiness?.location.city ?? '');
      setStreetAddress(userBusiness?.location.streetAddress ?? '');
      setServiceName(userBusiness?.services[0].serviceName ?? '');
      setDescription(userBusiness?.services[0].description ?? '');
      setPrice(userBusiness?.services[0].price ?? '');
      setServiceTime(userBusiness?.services[0].serviceTime ?? '');
      setCloseTime(userBusiness?.hoursOfOperation[0].closeTime ?? '');
      setDayOfWeek(userBusiness?.hoursOfOperation[0].dayOfWeek ?? '');
      setOpenTime(userBusiness?.hoursOfOperation[0].openTime ?? '');
      setImageUrl(userBusiness?.images[0].imageUrl ?? '');
    }
  }, [userBusiness]);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    try {
      const action = updateBusinessAction(
        businessId,
        businessName,
        streetAddress,
        city,
        hoursOfOperation,
        images,
        services
      );
      dispatch<any>(action);
    } catch (err: any) {
      console.log(err.message);
    }
  };

  const handleBackClick = () => {
    setStep(step - 1);
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <>
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
            {userBusiness?.services.map((service, index) => (
              <div
                key={index}
                className="mb-3"
                style={{ border: '1px solid #009688', borderRadius: '5px' }}
              >
                <input
                  type="text"
                  value={serviceName}
                  onChange={(e) => setServiceName(e.target.value)}
                />
                <input
                  type="text"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
                <input
                  type="number"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                />
                <input
                  type="number"
                  value={serviceTime}
                  onChange={(e) => setServiceTime(e.target.value)}
                />
              </div>
            ))}
            <div className="form-footer d-flex">
              <button type="button" onClick={handleChange}>
                Next
              </button>
            </div>
          </>
        );
      case 2:
        return (
          <div>
            <p className="text-center mb-4">Hours of operation</p>
            {userBusiness.hoursOfOperation?.map((operation) => (
              <div className="mb-3" key={operation._id}>
                <input
                  type="text"
                  value={dayOfWeek}
                  onChange={(e) => setDayOfWeek(e.target.value)}
                />
                <input
                  type="text"
                  value={openTime}
                  onChange={(e) => setOpenTime(e.target.value)}
                />
                <input
                  type="text"
                  value={closeTime}
                  onChange={(e) => setCloseTime(e.target.value)}
                />
              </div>
            ))}

            <div className="form-footer d-flex">
              <button type="button" onClick={handleBackClick}>
                Previous
              </button>
              <button type="button" onClick={handleChangeToImages}>
                Next
              </button>
            </div>
          </div>
        );
      case 3:
        return (
          <div>
            <p className="text-center mb-4">Images</p>
            {userBusiness.images?.map((image) => (
              <div className="mb-3" key={image._id}>
                <input
                  type="text"
                  value={image.imageUrl}
                  onChange={(e) => setImageUrl(e.target.value)}
                />
                <img
                  src={image.imageUrl}
                  alt="image"
                  width={80}
                  height={80}
                  className="mt-3"
                  style={{ borderRadius: '10px' }}
                />
              </div>
            ))}
            <div className="form-footer d-flex">
              <button type="submit">Submit</button>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="row">
      <h1 className="text-center mt-4">EDIT YOUR BUESINESS</h1>
      <form id="signUpForm" onSubmit={handleSubmit}>
        <div className="form-header d-flex mb-4">
          <span className="stepIndicator">1</span>
          <span className="stepIndicator">2</span>
          <span className="stepIndicator">3</span>
        </div>

        {renderStep()}
      </form>
    </div>
  );
};

export default BusinessEditCard;
