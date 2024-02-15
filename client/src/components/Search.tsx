const Search = () => {
  return (
    <>
      <div className="container mt-3 p-5">
        <div className="card">
          <div className="card_header">
            <h2>Hi, Yuval 👋🏼</h2>
          </div>
          <span className="desc">Appointments from anywhere at anytime</span>
          <div className="card-body">
            <div className="p-1 mb-4">
              <div className="input-group">
                <input
                  type="search"
                  placeholder="Find a Business"
                  className="form-control border-0"
                />
                <div className="input-group-append">
                  <button
                    id="button-addon1"
                    type="submit"
                    className="btn btn-link text-primary"
                  >
                    <i className="fa fa-search"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Search;
