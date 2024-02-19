import { useState } from 'react';
import { useSelector } from 'react-redux';
import LoginModal from './LoginModal';

const Header = () => {
  const [showModal, setShowModal] = useState(false);
  const userLogin = useSelector((state: any) => state.userLogin);
  const { userInfo } = userLogin;

  return (
    <>
      <nav
        className="navbar navbar-expand-lg navbar-dark"
        style={{ backgroundColor: '#212a3e' }}
      >
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            EZMark 📍
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="fa-solid fa-gear"></i>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
            </ul>
            <div
              className="d-flex"
              style={{
                paddingRight: '2rem',
                justifyContent: 'center',
                padding: 0,
              }}
            >
              {!userInfo ? (
                <button
                  className="btn btn-outline-light"
                  type="button"
                  style={{ marginRight: '0.5rem' }}
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                  onClick={() => setShowModal(true)}
                >
                  Login
                </button>
              ) : (
                <button
                  className="btn btn-outline-light"
                  type="button"
                  style={{ marginRight: '0.5rem' }}
                >
                  Logout
                </button>
              )}
            </div>
          </div>
        </div>
        {showModal && <LoginModal />}
      </nav>
    </>
  );
};

export default Header;
