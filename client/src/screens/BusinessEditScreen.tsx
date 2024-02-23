import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getAllBusinessAction } from '../Redux/Actions/BusinessActions';

const BusinessEditScreen = () => {
  const userLogin = useSelector((state: any) => state.userLogin);
  const { userInfo } = userLogin;

  const getAllBusiness = useSelector((state: any) => state.getAllBusiness);
  const { business: allBusiness } = getAllBusiness;

  const updateBusiness = useSelector((state: any) => state.updateBusiness);
  const { business } = updateBusiness;

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const userId = userInfo?._id;
  const userBusiness = allBusiness?.find(
    (business: any) => business.user === userId
  );

  console.log(userBusiness);

  useEffect(() => {
    if (userInfo == null || userInfo?.role === 'user') {
      navigate('/');
    } else {
      const action = getAllBusinessAction();
      dispatch<any>(action);
    }
  }, [userInfo, navigate, userId]);

  return <div>BusinessEditScreen</div>;
};

export default BusinessEditScreen;
