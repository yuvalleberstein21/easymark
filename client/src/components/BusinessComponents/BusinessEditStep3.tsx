import { useEffect, useState } from 'react';
import { updateBusinessAction } from '../../Redux/Actions/BusinessActions';

interface BusinessStep3 {
  userBusiness: {
    _id: string;
    images: [
      {
        imageUrl: string;
        _id: string;
      }
    ];
  };
}

const BusinessEditStep3 = (props: BusinessStep3) => {
  const { userBusiness } = props;

  // console.log(userBusiness);

  // const [imageUrl, setImageUrl] = useState(
  //   userBusiness?.images[0]?.imageUrl ?? ''
  // );

  // const [userBusinessState, setUserBusinessState] = useState(userBusiness);

  // const handleChangeImage = (e: any, index: number) => {
  //   const newServicesImages = [...userBusiness.images];
  //   newServicesImages[index].imageUrl = e.target.value;
  //   setUserBusinessState({ ...userBusinessState, images: newServicesImages });
  // };

  return (
    <div>
      <h3 className="text-center mb-4">Images</h3>
      {userBusiness.images?.map((image, index) => (
        <div className="mb-3 images-card" key={image._id}>
          <div className="inputs-images">
            <input type="text" />
            <img
              src={image.imageUrl}
              alt="image"
              width={100}
              height={100}
              className="mt-3 image"
              style={{ borderRadius: '10px' }}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default BusinessEditStep3;
