const LoginModal = () => {
  return (
    <>
      {/* <button
        type="button"
        className="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        Launch demo modal
      </button> */}

      <div
        className="modal fade"
        id="exampleModal"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              Hi to continue, What is your phone number ?
            </div>
            <div className="modal-footer">
              <div className="inputGroup">
                <input type="text" required autoComplete="off" />
                <label htmlFor="phoneNumber">Phone Number</label>
              </div>
              <button type="button" className="btn btn-dark">
                Continue
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginModal;
