import { useEffect, useState } from 'react';
import '../../styles/businessEditCard.css';
import { useDispatch, useSelector } from 'react-redux';
import {
  getSingleBusinessAction,
  updateBusinessAction,
} from '../../Redux/Actions/BusinessActions';
import Loading from '../LoadingError/Loading';
import BusinessEditStep1 from './BusinessEditStep1';
import BusinessEditStep2 from './BusinessEditStep2';
import BusinessEditStep3 from './BusinessEditStep3';
import { useParams } from 'react-router-dom';

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
  const { loadingAllBusiness, userBusiness } = props;
  const getSingleBusiness = useSelector(
    (state: any) => state.getSingleBusiness
  );
  const { loading, error, business } = getSingleBusiness;

  const [step, setStep] = useState(1);
  const dispatch = useDispatch();
  const { id } = useParams<{ id: string }>();

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
        id,
        business.businessName,
        business.location.streetAddress,
        business.location.city,
        business.hoursOfOperation,
        business?.images.imageUrl,
        business?.services
      );
      dispatch<any>(action);
      console.log(
        id,
        business.businessName,
        business.location.streetAddress,
        business.location.city,
        business?.hoursOfOperation,
        business?.images.imageUrl,
        business?.services
      );
    } catch (err: any) {
      console.log(err.message);
    }
  };

  const handleBackClick = () => {
    setStep(step - 1);
  };
  useEffect(() => {
    const action = getSingleBusinessAction(id);
    dispatch<any>(action);
  }, [dispatch, id]);

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <>
            <BusinessEditStep1 userBusiness={business} />
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
            <BusinessEditStep2 userBusiness={business} />
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
            <BusinessEditStep3 userBusiness={business} />
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
