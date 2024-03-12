import { useDispatch, useSelector } from 'react-redux';
import AdminTable from '../../components/Admin/AdminTable';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAdminAppointmentAction } from '../../Redux/Actions/AppointmentActions';
import { getAllUserBusinessAction } from '../../Redux/Actions/BusinessActions';

const AdminHomeScreen = () => {
  const { userInfo } = useSelector((state: any) => state.userLogin);
  const { business: allBusinesses } = useSelector(
    (state: any) => state.getAllUserBusiness
  );
  const {
    loading: appointmentLoading,
    error: appointmentError,
    appointments,
  } = useSelector((state: any) => state.getAdminAppointment);

  const [selectedBusinessId, setSelectedBusinessId] = useState<string | null>(
    null
  );

  const dispatch = useDispatch<any>();
  const navigate = useNavigate();

  useEffect(() => {
    if (userInfo) {
      dispatch(getAllUserBusinessAction(userInfo._id));
    } else {
      navigate('/');
    }
  }, [dispatch, userInfo, navigate]);

  useEffect(() => {
    if (selectedBusinessId) {
      dispatch(getAdminAppointmentAction(selectedBusinessId));
    }
  }, [dispatch, selectedBusinessId]);

  const handleBusinessSelect = (businessId: string) => {
    setSelectedBusinessId(businessId);
  };

  useEffect(() => {
    if (allBusinesses && allBusinesses.length > 0) {
      const businessIds = allBusinesses.map((b: any) => b._id);
      const businessId = businessIds[0];
      dispatch(getAdminAppointmentAction(businessId));
    }
  }, [dispatch, allBusinesses]);

  return (
    <>
      <AdminTable
        allBusinesses={allBusinesses}
        selectedBusinessId={selectedBusinessId}
        handleBusinessSelect={handleBusinessSelect}
        appointments={appointments}
        appointmentLoading={appointmentLoading}
        appointmentError={appointmentError}
      />
    </>
  );
};

export default AdminHomeScreen;
