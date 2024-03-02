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
      <p className="text-center mb-4">Images</p>
      {userBusiness.images?.map((image, index) => (
        <div className="mb-3" key={image._id}>
          <input type="text" />
          <img
            src={image.imageUrl}
            alt="image"
            width={80}
            height={80}
            className="mt-3"
            style={{ borderRadius: '10px' }}
          />
        </div>
      ))}
    </div>
  );
};

export default BusinessEditStep3;
