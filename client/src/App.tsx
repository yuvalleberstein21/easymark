import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/HomeComponents/Header';
// import Navbar from './components/Navbar';
import HomeScreen from './screens/HomeScreen';
import SingleBusiness from './screens/SingleBusinessScreen';
import LoginScreen from './screens/LoginScreen';
import BusinessEditScreen from './screens/BusinessEditScreen';
import CreateBusiness from './screens/CreateBusiness';
import AdminHomeScreen from './screens/Admin/AdminHomeScreen';

function App() {
  return (
    <>
      <Router>
        <div className="app">
          <Header />
          <Routes>
            <Route path="/" element={<LoginScreen />} />
            <Route path="/homepage" element={<HomeScreen />} />
            <Route path="/business/:id" element={<SingleBusiness />} />
            <Route
              path="/business/:id/editbusiness"
              element={<BusinessEditScreen />}
            />
            <Route path="/createbusiness" element={<CreateBusiness />} />
            <Route path="/manager" element={<AdminHomeScreen />} />
          </Routes>

          {/* <Navbar /> */}
        </div>
      </Router>
    </>
  );
}

export default App;
