import { useNavigate } from 'react-router-dom';
import Search from '../components/Search';
import BusinessScreen from './BusinessScreen';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';

const HomeScreen = () => {
  const navigate = useNavigate();

  const userLogin = useSelector((state: any) => state.userLogin);
  const { userInfo } = userLogin;

  useEffect(() => {
    if (userInfo == null) {
      navigate('/');
    }
  }, [userInfo, navigate]);

  return (
    <>
      <div className="homeScreen-container">
        <Search />
        <BusinessScreen />
      </div>
    </>
  );
};

export default HomeScreen;
