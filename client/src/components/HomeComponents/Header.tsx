import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../Redux/Actions/UserAction';
import { Link } from 'react-router-dom';

const Header = () => {
  const userLogin = useSelector((state: any) => state.userLogin);
  const { userInfo } = userLogin;

  const dispatch = useDispatch();

  const logoutHandler = () => {
    dispatch<any>(logout());
  };

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
                <Link to="/" className="nav-link active" aria-current="page">
                  Home
                </Link>
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
              {userInfo && (
                <>
                  <div className="text-white m-3">Hello {userInfo?.name}</div>
                  <button
                    className="btn btn-outline-light p-2"
                    type="button"
                    style={{ marginRight: '0.5rem' }}
                    onClick={logoutHandler}
                  >
                    Logout
                  </button>
                </>
              )}
              {userInfo?.role === 'manager' && (
                <>
                  <Link to={'/manager'}>
                    <button
                      className="btn btn-outline-light p-2"
                      type="button"
                      style={{ marginRight: '0.5rem' }}
                    >
                      My Appointments
                    </button>
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
