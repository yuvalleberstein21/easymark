import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getAllBusinessAction } from '../Redux/Actions/BusinessActions';
import BusinessEditCard from '../components/BusinessComponents/BusinessEditCard';

const BusinessEditScreen = () => {
  const userLogin = useSelector((state: any) => state.userLogin);
  const { userInfo } = userLogin;

  const getAllBusiness = useSelector((state: any) => state.getAllBusiness);
  const { loading, error, business: allBusiness } = getAllBusiness;

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const userId = userInfo?._id;
  const userBusiness = allBusiness?.find(
    (business: any) => business.user === userId
  );

  useEffect(() => {
    if (userInfo == null || userInfo?.role === 'user') {
      navigate('/');
    } else {
      const action = getAllBusinessAction();
      dispatch<any>(action);
    }
  }, [userInfo, navigate, userId]);

  return (
    <div className="container">
      <BusinessEditCard
        userBusiness={userBusiness}
        loadingAllBusiness={loading}
      />
    </div>
  );
};

export default BusinessEditScreen;
