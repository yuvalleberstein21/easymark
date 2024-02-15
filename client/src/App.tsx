import './App.css';
import Header from './components/Header';
import MyBusiness from './components/MyBusiness';
import Navbar from './components/Navbar';
import Queues from './components/Queues';
import Search from './components/Search';

function App() {
  return (
    <>
      <div className="app">
        <Header />
        <Search />
        <MyBusiness />
        <Queues />
        <Navbar />
      </div>
    </>
  );
}

export default App;
