import { useState } from 'react';
import '../styles/createBusiness.css';
import { useDispatch } from 'react-redux';
import { createBusinessAction } from '../Redux/Actions/BusinessActions';

const CreateBusiness = () => {
  const [formData, setFormData] = useState({
    businessName: '',
    city: '',
    streetAddress: '',
    services: [{ serviceName: '', description: '', price: 0, serviceTime: 0 }],
    hoursOfOperation: [{ closeTime: '', dayOfWeek: '', openTime: '' }],
    images: [{ imageUrl: '' }],
  });

  const dispatch = useDispatch();

  const handleInputChange = (
    event: { target: { name: any; value: any } },
    index: number
  ) => {
    const { name, value } = event.target;
    const updatedServices = formData.services.map((service, i) => {
      if (i === index) {
        return {
          ...service,
          [name]: value,
        };
      }
      return service;
    });
    setFormData({ ...formData, services: updatedServices });
  };

  const handleInputChangeDays = (
    event: { target: { name: any; value: any } },
    index: number,
    field: string // added a field parameter to indicate which field to update
  ) => {
    const { name, value } = event.target;
    const updatedDays = formData.hoursOfOperation.map((days, i) => {
      if (i === index) {
        return {
          ...days,
          [field]: value, // use the field parameter to update the correct field
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
  const addImage = () => {
    const images = [...formData.images, { imageUrl: '' }];
    setFormData({ ...formData, images });
  };
  const handleSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault();

    try {
      const action = createBusinessAction(
        formData.businessName,
        formData.city,
        formData.streetAddress,
        formData.services,
        formData.hoursOfOperation,
        formData.images
      );
      dispatch<any>(action);
      console.log(formData);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="container-fluid px-1 py-5 mx-auto">
      <div className="row d-flex justify-content-center">
        <div className="col-xl-7 col-lg-8 col-md-9 col-11 text-center">
          <div className="card_create_business">
            <h3 className="text-center mb-4">Create Your Business</h3>
            <form className="form-card" onSubmit={handleSubmit}>
              <div className="row justify-content-between text-left">
                <div className="form-group col-sm-6 flex-column d-flex">
                  <label className="form-control-label px-3">
                    Business Name
                    <span className="text-danger"> *</span>
                  </label>
                  <input
                    type="text"
                    name="businessName"
                    value={formData.businessName}
                    placeholder="Enter your business name"
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group col-sm-6 flex-column d-flex">
                  <label className="form-control-label px-3">
                    City
                    <span className="text-danger"> *</span>
                  </label>
                  <input
                    type="text"
                    name="city"
                    value={formData.city}
                    placeholder="Enter your city"
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="row justify-content-between text-left">
                <div className="form-group col-sm-12 flex-column d-flex">
                  <label className="form-control-label px-3">
                    Street Address
                    <span className="text-danger"> *</span>
                  </label>
                  <input
                    type="text"
                    name="streetAddress"
                    value={formData.streetAddress}
                    placeholder="Enter your street Address"
                    onChange={handleChange}
                  />
                </div>

                <div>
                  {formData.services.map((service, index) => (
                    <div
                      key={index}
                      className="row justify-content-between text-left mb-3 mt-3"
                    >
                      <div className="form-group col-sm-6 flex-column d-flex">
                        <label className="form-control-label px-3">
                          Service Name
                          <span className="text-danger"> *</span>
                        </label>
                        <input
                          type="text"
                          name="serviceName"
                          value={service.serviceName}
                          placeholder="Enter your service name"
                          onChange={(e) => handleInputChange(e, index)}
                        />
                      </div>
                      <div className="form-group col-sm-6 flex-column d-flex">
                        <label className="form-control-label px-3">
                          Description
                          <span className="text-danger"> *</span>
                        </label>
                        <input
                          type="text"
                          name="description"
                          value={service.description}
                          placeholder="Enter description"
                          onChange={(e) => handleInputChange(e, index)}
                        />
                      </div>
                      <div className="form-group col-sm-6 flex-column d-flex">
                        <label className="form-control-label px-3">
                          Price
                          <span className="text-danger"> *</span>
                        </label>
                        <input
                          type="number"
                          name="price"
                          value={service.price}
                          placeholder="Enter price"
                          onChange={(e) => handleInputChange(e, index)}
                        />
                      </div>
                      <div className="form-group col-sm-6 flex-column d-flex">
                        <label className="form-control-label px-3">
                          Service Time
                          <span className="text-danger"> *</span>
                        </label>
                        <input
                          type="number"
                          name="serviceTime"
                          value={service.serviceTime}
                          placeholder="Enter your service time"
                          onChange={(e) => handleInputChange(e, index)}
                        />
                      </div>
                    </div>
                  ))}
                  <button
                    type="button"
                    className="btn-block btn-dark"
                    onClick={addService}
                  >
                    Add Service
                  </button>
                </div>
              </div>

              <div>
                {formData.hoursOfOperation.map((day, index) => (
                  <div
                    key={index}
                    className="row justify-content-between text-left mb-3 mt-3"
                  >
                    <div className="form-group col-sm-6 flex-column d-flex">
                      <label className="form-control-label px-3">
                        Day Of Week
                        <span className="text-danger"> *</span>
                      </label>
                      <select
                        name="dayOfWeek"
                        onChange={(e) =>
                          handleInputChangeDays(e, index, 'dayOfWeek')
                        }
                      >
                        <option value="">--</option>
                        <option value="sunday">Sunday</option>
                        <option value="monday">Monday</option>
                        <option value="tuesday">Tuesday</option>
                        <option value="wednesday">Wednesday</option>
                        <option value="thursday">Thursday</option>
                        <option value="friday">Friday</option>
                      </select>
                    </div>
                    <div className="form-group col-sm-6 flex-column d-flex">
                      <label className="form-control-label px-3">
                        Open Time
                        <span className="text-danger"> *</span>
                      </label>
                      <input
                        type="text"
                        name="openTime"
                        value={day.openTime}
                        placeholder="Enter open time"
                        onChange={(e) =>
                          handleInputChangeDays(e, index, 'openTime')
                        }
                      />
                    </div>
                    <div className="form-group col-sm-6 flex-column d-flex">
                      <label className="form-control-label px-3">
                        Close Time
                        <span className="text-danger"> *</span>
                      </label>
                      <input
                        type="text"
                        name="closeTime"
                        value={day.closeTime}
                        placeholder="Enter close time"
                        onChange={(e) =>
                          handleInputChangeDays(e, index, 'closeTime')
                        }
                      />
                    </div>
                  </div>
                ))}
                <button
                  type="button"
                  className="btn-block btn-dark"
                  onClick={addDay}
                >
                  Add Day
                </button>
              </div>

              {formData.images.map((image, index) => (
                <div
                  key={index}
                  className="row justify-content-between text-left mb-3 mt-3"
                >
                  <div className="form-group col-sm-12 flex-column d-flex">
                    <label className="form-control-label px-3">
                      Business Logo
                      <span className="text-danger"> *</span>
                    </label>
                    <input
                      type="text"
                      name="imageUrl"
                      placeholder="Enter Logo"
                      onChange={(e) => handleInputChangeImage(e, index)}
                    />
                  </div>
                </div>
              ))}
              <button
                type="button"
                className="btn-block btn-dark"
                onClick={addImage}
              >
                Add Image
              </button>

              <div className="row justify-content-end">
                <div className="form-group col-sm-12">
                  {' '}
                  <button type="submit" className="btn-block btn-primary">
                    ADD MY BUSINESS
                  </button>{' '}
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateBusiness;
