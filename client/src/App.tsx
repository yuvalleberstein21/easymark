import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
// import Navbar from './components/Navbar';
import HomeScreen from './screens/HomeScreen';
import SingleBusiness from './components/SingleBusiness';
import LoginScreen from './screens/LoginScreen';

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
          </Routes>
          {/* <Navbar /> */}
        </div>
      </Router>
      {/* <div className="app">
        <Header />
        <Search />
        <BusinessScreen />

        <Queues />
        <Navbar />
      </div> */}
    </>
  );
}

export default App;
