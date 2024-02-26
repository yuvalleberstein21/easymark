import { useEffect, useState } from 'react';
import '../../styles/businessEditCard.css';
import { useDispatch, useSelector } from 'react-redux';
import { updateBusinessAction } from '../../Redux/Actions/BusinessActions';
import Loading from '../LoadingError/Loading';
import BusinessEditStep1 from './BusinessEditStep1';
import BusinessEditStep2 from './BusinessEditStep2';
import BusinessEditStep3 from './BusinessEditStep3';

interface IEditBusiness {
  loadingAllBusiness: boolean;
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

  const { loadingAllBusiness, userBusiness } = props;

  const [step, setStep] = useState(1);

  const dispatch = useDispatch();

  const businessId = userBusiness?._id;

  const handleChange = () => {
    setStep(step + 1);
  };
  const handleChangeToImages = () => {
    setStep(3);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    try {
      const action = updateBusinessAction(
        businessId,
        userBusiness.businessName,
        userBusiness.location.streetAddress,
        userBusiness.location.city,
        userBusiness.hoursOfOperation,
        userBusiness.images,
        userBusiness.services
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
            <BusinessEditStep1 userBusiness={userBusiness} />
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
            <BusinessEditStep2 userBusiness={userBusiness} />
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
            <BusinessEditStep3 userBusiness={userBusiness} />
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
    <>
      {loadingAllBusiness ? (
        <Loading />
      ) : (
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
      )}
    </>
  );
};

export default BusinessEditCard;
