import { useState } from 'react';
import LoginModal from '../components/LoginModal';
import Search from '../components/Search';

const LoginScreen = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="container p-3">
      <Search />
      <div className="buttons_connection">
        <button className="btn btn-dark">
          Create A business
          <i className="fa-solid fa-plus fa-lg m-2"></i>
        </button>
        <button className="btn btn-light">
          Managing an existing business
          <i className="fa-solid fa-arrow-right-to-bracket fa-lg m-2"></i>
        </button>
        <button
          type="button"
          className="btn btn-light"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
          onClick={() => setShowModal(true)}
        >
          Login
          <i className="fa-solid fa-arrow-right-to-bracket fa-lg m-2"></i>
        </button>

        {showModal && <LoginModal />}
      </div>
    </div>
  );
};

export default LoginScreen;
