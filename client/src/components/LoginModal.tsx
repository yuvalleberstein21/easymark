import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login, register } from '../Redux/Actions/UserAction';
import Message from './LoadingError/Error';
import Loading from './LoadingError/Loading';
import 'react-toastify/dist/ReactToastify.css';

const LoginModal = () => {
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [errorValidaiton, setErrorValidation] = useState('');
  const [step, setStep] = useState(1);

  const dispatch = useDispatch();

  const userLogin = useSelector((state: any) => state.userLogin);
  const { error, loading, userInfo } = userLogin;
  const userRegister = useSelector((state: any) => state.userRegister);
  const { error: errorRegister, loading: loadingRegister } = userRegister;

  const handleLoginChange = () => {
    setStep(2);
  };

  const handleBackClick = () => {
    setStep(step - 1);
  };

  const handleTogglePassword = (e: any) => {
    e.preventDefault();
    setShowPassword((prev) => !prev);
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      const action = login(phoneNumber, password);
      await dispatch<any>(action);
    } catch (error) {
      setErrorValidation('Error logging in');
    }
  };

  const handleRegisterSubmit = async (e: any) => {
    e.preventDefault();
    try {
      const action = register(name, phoneNumber, password);
      await dispatch<any>(action);
    } catch (error) {
      setErrorValidation('Error registering');
    }
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <>
            <div className="modal-body">
              <h4>Hi to continue, Please fill the fields</h4>
            </div>
            {loading && <Loading>Loading...</Loading>}
            {error && <Message variant="ss" children={error} />}
            <div className="modal-footer">
              <form onSubmit={handleSubmit}>
                <div className="inputGroup">
                  <input
                    value={phoneNumber}
                    type="text"
                    required
                    onChange={(e) => setPhoneNumber(e.target.value)}
                  />
                  <label htmlFor="phoneNumber">Phone Number</label>
                </div>
                <div className="inputGroup">
                  <input
                    value={password}
                    type={showPassword ? 'text' : 'password'}
                    required
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <label htmlFor="password">Password</label>
                  <span
                    onClick={handleTogglePassword}
                    style={{
                      position: 'absolute',
                      right: '15px',
                      top: '47%',
                      transform: 'translateY(-50%)',
                      cursor: 'pointer',
                    }}
                  >
                    {showPassword ? (
                      <i className="fa-solid fa-eye-slash"></i>
                    ) : (
                      <i className="fa-solid fa-eye"></i>
                    )}
                  </span>
                </div>
                <button type="submit" className="btn btn-dark">
                  Continue
                </button>
              </form>
              <span
                onClick={handleLoginChange}
                className="mt-3"
                style={{ cursor: 'pointer' }}
              >
                Create an account
              </span>
            </div>
          </>
        );
      case 2:
        return (
          <>
            <span
              onClick={handleBackClick}
              style={{
                cursor: 'pointer',
                display: 'flex',
                justifyContent: 'flex-end',
                padding: '5px',
                marginRight: '7px',
                fontWeight: '500',
              }}
            >
              Back →
            </span>
            <div className="modal-body">
              <h4>Create an Account and continue</h4>
            </div>
            {loadingRegister && <Loading>Loading...</Loading>}
            {errorRegister && (
              <Message variant="alert" children={errorRegister} />
            )}
            <div className="modal-footer">
              <form onSubmit={handleRegisterSubmit}>
                <div className="inputGroup">
                  <input
                    value={name}
                    type="text"
                    required
                    onChange={(e) => setName(e.target.value)}
                  />
                  <label htmlFor="fullname">Full Name</label>
                </div>
                <div className="inputGroup">
                  <input
                    value={phoneNumber}
                    type="text"
                    required
                    onChange={(e) => setPhoneNumber(e.target.value)}
                  />
                  <label htmlFor="phoneNumber">Phone Number</label>
                </div>
                <div className="inputGroup">
                  <input
                    value={password}
                    type={showPassword ? 'text' : 'password'}
                    required
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <label htmlFor="password">Password</label>
                  <span
                    onClick={handleTogglePassword}
                    style={{
                      position: 'absolute',
                      right: '15px',
                      top: '47%',
                      transform: 'translateY(-50%)',
                      cursor: 'pointer',
                    }}
                  >
                    {showPassword ? (
                      <i className="fa-solid fa-eye-slash"></i>
                    ) : (
                      <i className="fa-solid fa-eye"></i>
                    )}
                  </span>
                </div>
                <button type="submit" className="btn btn-dark">
                  Continue
                </button>
              </form>
            </div>
          </>
        );
      default:
        return null;
    }
  };

  return (
    <>
      <div className="main-modal">
        <div>{renderStep()}</div>
      </div>
    </>
  );
};

export default LoginModal;
