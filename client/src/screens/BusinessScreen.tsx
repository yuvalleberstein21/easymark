import { useEffect } from 'react';
import ReactCardSlider from 'react-card-slider-component';
import { useDispatch, useSelector } from 'react-redux';
import {
  getAppointmentAction,
  getUserAppointmentAction,
} from '../Redux/Actions/AppointmentActions';
import MyAppointments from '../components/AppintmentsComponents/MyAppointments';

const sliderClick = () => {
  console.log('Slider clicked');
};
const slides = [
  {
    image: 'https://picsum.photos/200/300',
    title: 'This is a title',
    clickEvent: sliderClick,
  },
  {
    image: 'https://picsum.photos/600/500',
    title: 'This is a second title',
    clickEvent: sliderClick,
  },
  {
    image: 'https://picsum.photos/700/600',
    title: 'This is a third title',
    clickEvent: sliderClick,
  },
  {
    image: 'https://picsum.photos/500/400',
    title: 'This is a fourth title',
    clickEvent: sliderClick,
  },
  {
    image: 'https://picsum.photos/200/300',
    title: 'This is a fifth title',
    clickEvent: sliderClick,
  },
  {
    image: 'https://picsum.photos/800/700',
    title: 'This is a sixth title',
    clickEvent: sliderClick,
  },
  {
    image: 'https://picsum.photos/300/400',
    title: 'This is a seventh title',
    clickEvent: sliderClick,
  },
];

const BusinessScreen = () => {
  const userLogin = useSelector((state: any) => state.userLogin);
  const { userInfo } = userLogin;
  const getAppointment = useSelector((state: any) => state.getAppointment);
  const { loading, error, appointment } = getAppointment;

  const dispatch = useDispatch();

  useEffect(() => {
    try {
      if (userInfo !== null || userInfo !== undefined) {
        const action = getAppointmentAction(userInfo._id);
        dispatch<any>(action);
      }
    } catch (err) {
      console.log(err);
    }
  }, [dispatch]);

  return (
    <div className="row">
      <div className="col-md-12">
        <h3 className="p-4">BUISNESS</h3>
        <ReactCardSlider slides={slides} />
        <div className="mt-3">
          <h3 className="p-4">MY APPOITMENTS</h3>
          <MyAppointments appointments={appointment} />
        </div>
      </div>
    </div>
  );
};

export default BusinessScreen;
