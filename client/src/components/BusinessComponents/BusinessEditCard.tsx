import { useState } from 'react';
import '../../styles/businessEditCard.css';
interface IEditBusiness {
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
const BusinessEditCard = (props: IEditBusiness) => {
  const { userBusiness } = props;
  const [step, setStep] = useState(1);

  const handleChange = () => {
    setStep(2); // Move to step 2:
  };

  const handleBackClick = () => {
    setStep(step - 1); // Go back to the previous step
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <>
            <div className="mb-3">
              <input type="text" value={userBusiness?.businessName} />
            </div>
            <div className="mb-3">
              <input
                type="text"
                placeholder="City"
                value={userBusiness?.location.city}
              />
            </div>
            <div className="mb-3">
              <input
                type="text"
                placeholder="Street Address"
                value={userBusiness?.location.streetAddress}
              />
            </div>
            {userBusiness?.services.map((service, index) => (
              <div
                key={index}
                className="mb-3"
                style={{ border: '1px solid #009688', borderRadius: '5px' }}
              >
                <input type="text" value={service.serviceName} />
                <input type="text" value={service.description} />
                <input type="number" value={service.price} />
                <input type="number" value={service.serviceTime} />
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
                <input type="text" value={operation.dayOfWeek} />
                <input type="text" value={operation.openTime} />
                <input type="text" value={operation.closeTime} />
              </div>
            ))}

            <div className="form-footer d-flex">
              <button type="button" onClick={handleBackClick}>
                Previous
              </button>
              <button type="button" onClick={handleChange}>
                Next
              </button>
            </div>
          </div>
        );
      case 3:
        return (
          <div className="step">
            <p className="text-center mb-4">We will never sell it</p>
            <div className="mb-3">
              <input type="text" placeholder="Full name" name="fullname" />
            </div>
            <div className="mb-3">
              <input type="text" placeholder="Mobile" name="mobile" />
            </div>
            <div className="mb-3">
              <input type="text" placeholder="Address" name="address" />
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
      <form id="signUpForm" action="#!">
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
