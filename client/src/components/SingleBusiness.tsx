import '../styles/singleBusiness.css';
import CreateQueues from './CreateQueues';
const SingleBusiness = () => {
  return (
    <div className="container mt-3 p-4">
      <div className="row">
        <div className="col-md-6">
          <div className="h-100 card_single_business">
            <div className="text-center">
              <div className="img-hover-zoom img-hover-zoom--colorize">
                <img
                  className="shadow"
                  src="https://marketplace.canva.com/EAFowsrK6x8/1/0/800w/canva-red-and-yellow-catering-flat-illustrative-food-place-logo-vSIfGMbT6qI.jpg"
                  alt="Another Image zoom-on-hover effect"
                />
              </div>
            </div>
            <div className="card-body">
              <div className="clearfix mb-3"></div>
              <div className="my-2 text-center">
                <h1>BORCELEE -CREATING-</h1>
              </div>
              <div className="mb-3">
                <h2 className="text-uppercase h2_single_business text-center role">
                  Migdal Ha Emek{' '}
                  <i className="fa-solid fa-location-dot m-1"></i>
                </h2>
              </div>
              <div className="box">
                <div>
                  <ul className="list-inline m-2">
                    <li className="list-inline-item">
                      <i className="fa-brands fa-waze fa-xl"></i>
                    </li>
                    <li className="list-inline-item">
                      <i className="fa-brands fa-whatsapp fa-xl"></i>
                    </li>
                    <li className="list-inline-item">
                      <i className="fa-brands fa-instagram fa-xl"></i>
                    </li>
                    <li className="list-inline-item">
                      <i className="fa-solid fa-phone fa-xl"></i>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card card_single_images">
            <div className="card-body">
              <div className="row row-cols-2">
                <div className="col col_single_images">
                  <img
                    src="https://marketplace.canva.com/EAFowsrK6x8/1/0/800w/canva-red-and-yellow-catering-flat-illustrative-food-place-logo-vSIfGMbT6qI.jpg"
                    alt="image"
                    height="150"
                  />
                </div>
                <div className="col col_single_images">
                  <img
                    src="https://marketplace.canva.com/EAFowsrK6x8/1/0/800w/canva-red-and-yellow-catering-flat-illustrative-food-place-logo-vSIfGMbT6qI.jpg"
                    alt="image"
                    height="150"
                  />
                </div>
                <div className="col col_single_images">
                  <img
                    src="https://marketplace.canva.com/EAFowsrK6x8/1/0/800w/canva-red-and-yellow-catering-flat-illustrative-food-place-logo-vSIfGMbT6qI.jpg"
                    alt="image"
                    height="150"
                  />
                </div>
                <div className="col col_single_images">
                  <img
                    src="https://marketplace.canva.com/EAFowsrK6x8/1/0/800w/canva-red-and-yellow-catering-flat-illustrative-food-place-logo-vSIfGMbT6qI.jpg"
                    alt="image"
                    height="150"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-3">
          <CreateQueues />
        </div>
      </div>
    </div>
  );
};

export default SingleBusiness;
