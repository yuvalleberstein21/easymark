import { useEffect, useState } from 'react';
import '../styles/createBusiness.css';
import { useDispatch, useSelector } from 'react-redux';
import { createBusinessAction } from '../Redux/Actions/BusinessActions';
import LoginModal from '../components/ModalsComponents/LoginModal';
import CreateBusinessForm from '../components/BusinessComponents/CreateBusinessForm';
import { useNavigate } from 'react-router-dom';

const CreateBusiness = () => {
  const userLogin = useSelector((state: any) => state.userLogin);
  const { userInfo } = userLogin;
  const [modalLogin, setModalLogin] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    businessName: '',
    city: '',
    streetAddress: '',
    services: [{ serviceName: '', description: '', price: 0, serviceTime: 0 }],
    hoursOfOperation: [{ closeTime: '', dayOfWeek: '', openTime: '' }],
    images: [''],
  });

  useEffect(() => {
    if (userInfo == null) {
      setModalLogin(true);
    }
  }, [userInfo]);

  const handleInputChange = (
    event: { target: { name: any; value: any } },
    index: number
  ) => {
    const { name, value } = event.target;
    let parsedValue = parseInt(value);

    if (name === 'serviceTime') {
      if (parsedValue > 120) {
        parsedValue = 120;
      }
    }

    const updatedServices = [...formData.services];
    updatedServices[index][name] = String(parsedValue);
    setFormData({ ...formData, services: updatedServices });
  };

  const handleInputChangeDays = (
    event: { target: { name: any; value: any } },
    index: number,
    field: string
  ) => {
    const { name, value } = event.target;
    const updatedDays = formData.hoursOfOperation.map((days, i) => {
      if (i === index) {
        return {
          ...days,
          [field]: value,
        };
      }
      return days;
    });
    setFormData({ ...formData, hoursOfOperation: updatedDays });
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleInputChangeImage = (
    event: { target: { name: any; value: any } },
    index: number
  ) => {
    const { name, value } = event.target;
    const updatedImages = formData.images.map((image, i) => {
      if (i === index) {
        return {
          ...image,
          [name]: value,
        };
      }
      return image;
    });
    setFormData({ ...formData, images: updatedImages });
  };

  const addService = () => {
    const services = [
      ...formData.services,
      { serviceName: '', description: '', price: '', serviceTime: '' },
    ];
    setFormData({ ...formData, services });
  };

  const addDay = () => {
    const hoursOfOperation = [
      ...formData.hoursOfOperation,
      { dayOfWeek: '', openTime: '', closeTime: '' },
    ];
    setFormData({ ...formData, hoursOfOperation });
  };
  const addImage = (e) => {
    const files = e.target.files;
    if (files.length + formData.images.length <= 5) {
      const images = [...formData.images];
      for (let i = 0; i < files.length; i++) {
        images.push(files[i]);
      }
      setFormData({ ...formData, images });
    } else {
      alert('You can only choose a maximum of 5 images.');
    }
  };

  const handleSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    try {
      const services = formData.services.map((service) => ({
        serviceName: service.serviceName,
        description: service.description,
        price: parseFloat(service.price),
        serviceTime: parseInt(service.serviceTime),
      }));
      const location = {
        city: formData.city,
        streetAddress: formData.streetAddress,
      };

      const action = createBusinessAction(
        formData.businessName,
        location,
        services,
        formData.hoursOfOperation,
        formData.images
      );
      dispatch<any>(action);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
      {modalLogin ? (
        <div className="container p-5">
          <div className="card">
            <LoginModal />
          </div>
        </div>
      ) : (
        <CreateBusinessForm
          handleSubmit={handleSubmit}
          formData={formData}
          handleChange={handleChange}
          addService={addService}
          addDay={addDay}
          addImage={addImage}
          handleInputChange={handleInputChange}
          handleInputChangeDays={handleInputChangeDays}
          handleInputChangeImage={handleInputChangeImage}
        />
      )}
    </>
  );
};

export default CreateBusiness;
