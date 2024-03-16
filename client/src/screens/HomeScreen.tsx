import Search from '../components/HomeComponents/Search';
import BusinessScreen from './BusinessScreen';

const HomeScreen = () => {
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
