import ReactCardSlider from 'react-card-slider-component';
// a slide object contains the image link, title and function/click event for when a user clicks on a card

const sliderClick = (slider: any) => {
  alert('hello world');
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

const MyBusiness = () => {
  return <ReactCardSlider slides={slides} />;
};

export default MyBusiness;
