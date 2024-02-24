interface BusinessProps {
  images: any;
  businessName: string;
}

const BusinessImagesCard = (props: BusinessProps) => {
  const { images, businessName } = props;
  return (
    <div className="card card_single_images">
      <div className="card-body">
        <div className="row row-cols-2">
          <div className="col col_single_images">
            <img src={images[1]?.imageUrl} alt={businessName} height="150" />
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
  );
};

export default BusinessImagesCard;
