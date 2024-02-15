import ReactCardSlider from 'react-card-slider-component';

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
  return (
    <>
      <h3 className="p-4">BUISNESS</h3>
      <ReactCardSlider slides={slides} />
    </>
  );
};

export default BusinessScreen;
