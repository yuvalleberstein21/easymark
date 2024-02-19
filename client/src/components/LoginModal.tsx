import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../Redux/Actions/UserAction';
import Message from './LoadingError/Error';
import Loading from './LoadingError/Loading';
import { useNavigate } from 'react-router-dom';

const LoginModal = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [errorValidaiton, setErrorValidation] = useState('');

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const userLogin = useSelector((state: any) => state.userLogin);
  const { error, loading, userInfo } = userLogin;

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      const action = login(phoneNumber, password);
      await dispatch<any>(action);
    } catch (error) {
      setErrorValidation('Error logging in');
    }
  };

  return (
    <>
      <div>
        <div>
          <div>
            {loading && <Loading>Loading...</Loading>}
            {error && <Message variant="alert" children={error} />}
            <div className="modal-body">
              Hi to continue, What is your phone number ?
            </div>
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
                    type="text"
                    required
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <label htmlFor="password">Password</label>
                </div>
                <button type="submit" className="btn btn-dark">
                  Continue
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginModal;
