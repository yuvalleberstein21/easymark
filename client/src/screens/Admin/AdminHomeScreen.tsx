import { useDispatch, useSelector } from 'react-redux';
import AdminTable from '../../components/Admin/AdminTable';
import { useEffect } from 'react';
import { getAllUserBusinessAction } from '../../Redux/Actions/BusinessActions';
import { useNavigate } from 'react-router-dom';
import { getUserAppointmentAction } from '../../Redux/Actions/AppointmentActions';

const AdminHomeScreen = () => {
  const { userInfo } = useSelector((state: any) => state.userLogin);
  const { business } = useSelector((state: any) => state.getAllUserBusiness);
  const { appointment } = useSelector((state: any) => state.getUserAppointment);

  console.log(appointment);

  const dispatch = useDispatch<any>();
  const navigate = useNavigate();
  useEffect(() => {
    if (userInfo) {
      dispatch(getAllUserBusinessAction(userInfo._id));
      dispatch(getUserAppointmentAction(userInfo._id));
    } else {
      navigate('/');
    }
  }, [dispatch, userInfo]);

  return (
    <>
      <AdminTable userInfo={userInfo} business={business} />
    </>
  );
};

export default AdminHomeScreen;
