// import { useNavigate } from 'react-router-dom';
import Search from '../components/HomeComponents/Search';
import BusinessScreen from './BusinessScreen';
// import { useSelector } from 'react-redux';
// import { useEffect } from 'react';

const HomeScreen = () => {
  // const navigate = useNavigate();

  // const userLogin = useSelector((state: any) => state.userLogin);
  // const { userInfo } = userLogin;

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
