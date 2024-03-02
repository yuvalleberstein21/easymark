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
import Message from '../LoadingError/Error';

const BusinessEditCard = () => {
  const getSingleBusiness = useSelector(
    (state: any) => state.getSingleBusiness
  );
  const { loading, error, business } = getSingleBusiness;
  const [userBusinessState, setUserBusinessState] = useState<any>(
    business || {}
  );

  const [step, setStep] = useState(1);
  const dispatch = useDispatch();
  const { id } = useParams<{ id: string }>();

  const handleChange = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    setStep(step + 1);
  };
  const handleBackClick = () => {
    setStep(step - 1);
  };

  const handleSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault();

    const action = updateBusinessAction(
      id,
      userBusinessState.businessName,
      {
        streetAddress: userBusinessState.location.streetAddress,
        city: userBusinessState.location.city,
      },
      userBusinessState.services,
      userBusinessState.hoursOfOperation,
      userBusinessState.images
    );
    dispatch<any>(action);

    console.log(
      id,
      userBusinessState.businessName,
      {
        streetAddress: userBusinessState.location.streetAddress,
        city: userBusinessState.location.city,
      },
      userBusinessState.services,
      userBusinessState.hoursOfOperation,
      userBusinessState.images
    );
  };

  useEffect(() => {
    const action = getSingleBusinessAction(id);
    dispatch<any>(action);
  }, [dispatch, id]);

  useEffect(() => {
    setUserBusinessState(business);
  }, [business]);

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <>
            <BusinessEditStep1
              userBusiness={userBusinessState}
              setUserBusinessState={setUserBusinessState}
            />
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
              <button type="button" onClick={handleChange}>
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
              <button type="button" onClick={handleBackClick}>
                Previous
              </button>
              <button type="submit">Submit</button>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="container">
      {loading ? (
        <Loading />
      ) : error ? (
        <Message variant="alert alert-info mt-2">
          Please choose your business
        </Message>
      ) : (
        <div className="row">
          <h1 className="text-center mt-4">EDIT YOUR BUESINESS</h1>
          <form id="editForm" onSubmit={handleSubmit}>
            <div className="form-header d-flex mb-4">
              {step === 1 ? (
                <span className="stepIndicator active">1</span>
              ) : (
                <span className="stepIndicator">1</span>
              )}

              {step === 2 ? (
                <span className="stepIndicator active">2</span>
              ) : (
                <span className="stepIndicator">2</span>
              )}

              {step === 3 ? (
                <span className="stepIndicator active">3</span>
              ) : (
                <span className="stepIndicator">3</span>
              )}
            </div>
            {renderStep()}
          </form>
        </div>
      )}
    </div>
  );
};

export default BusinessEditCard;
