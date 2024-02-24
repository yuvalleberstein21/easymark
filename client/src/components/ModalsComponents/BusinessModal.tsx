import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Loading from '../LoadingError/Loading';
import Message from '../LoadingError/Error';

const BusinessModal = () => {
  const userLogin = useSelector((state: any) => state.userLogin);
  const { loading, error, userInfo } = userLogin;

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userId = userInfo?._id;

  useEffect(() => {
    try {
      if (userInfo === null || userInfo.role === 'user') {
        return;
      } else {
        navigate(`/business/${userId}/editbusiness`);
      }
    } catch (err: any) {
      console.log(err.message);
    }
  }, [dispatch, userId]);

  return (
    <>
      <div className="main-modal">
        {loading && <Loading>Loading...</Loading>}
        {error && <Message variant="ss" children={error} />}
        {userInfo?.role !== 'manager' && (
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              fontWeight: 'bold',
              color: 'rgb(163, 0, 0)',
            }}
          >
            Sorry, Only managers are allowed
          </div>
        )}
      </div>
    </>
  );
};

export default BusinessModal;
