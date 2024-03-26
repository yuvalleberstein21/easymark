const CreateBusinessForm = (props: any) => {
  const {
    handleSubmit,
    formData,
    handleChange,
    addService,
    addDay,
    addImage,
    handleInputChange,
    handleInputChangeDays,
    handleInputChangeImage,
  } = props;

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
                          Service Time in (minutes)
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
                      Business Logo (first image is your logo)
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

export default CreateBusinessForm;
