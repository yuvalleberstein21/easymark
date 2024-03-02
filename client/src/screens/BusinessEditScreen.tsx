import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { getAllUserBusinessAction } from '../Redux/Actions/BusinessActions';
import '../styles/businessEditCard.css';
import BusinessEditCard from '../components/BusinessComponents/BusinessEditCard';

const BusinessEditScreen = () => {
  const userLogin = useSelector((state: any) => state.userLogin);
  const { userInfo } = userLogin;
  const getAllUserBusiness = useSelector(
    (state: any) => state.getAllUserBusiness
  );
  const { loading, error, business } = getAllUserBusiness;

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const userId = userInfo?._id;

  useEffect(() => {
    if (userInfo == null || userInfo?.role === 'user') {
      navigate('/');
    } else {
      const action = getAllUserBusinessAction(userId);
      dispatch<any>(action);
    }
  }, [userInfo, navigate, userId]);

  return (
    <div className="container">
      <div className="row">
        <h1
          className="mt-5"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          Choose Your Business
        </h1>
        {business?.map((business: any, index: number) => (
          <div key={index} className="col-md-4 mt-5">
            <Link
              to={`/business/${business._id}/editbusiness`}
              style={{ textDecoration: 'none', color: 'black' }}
            >
              <div className="card" style={{ cursor: 'pointer' }}>
                <div className="card-body">
                  <div className="card-title">
                    <h4>{business.businessName}</h4>
                  </div>
                  <div className="image mt-2">
                    <img
                      src={business.images[0]?.imageUrl}
                      alt={business.businessName}
                    />
                  </div>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
      <BusinessEditCard />
    </div>
  );
};

export default BusinessEditScreen;
