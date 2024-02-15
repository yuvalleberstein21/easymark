const CardSlider = (props: any) => {
  const slideLeft = () => {
    const slider = document.getElementById('slider');
    if (slider) {
      slider.scrollLeft = slider.scrollLeft - 500;
    }
  };

  const slideRight = () => {
    var slider = document.getElementById('slider');
    if (slider) {
      slider.scrollLeft = slider.scrollLeft + 500;
    }
  };
  return (
    <div className="container">
      <i className="fa-solid fa-arrow-left" onClick={slideLeft}></i>
      <div id="slider">
        {props.slides.map((slide: any, index: number) => {
          return (
            <div
              className="slider-card"
              key={index}
              onClick={() => slide.clickEvent()}
            >
              <div
                className="slider-card-image"
                style={{
                  backgroundImage: `url(${slide.image})`,
                  backgroundSize: 'cover',
                }}
              ></div>
            </div>
          );
        })}
      </div>
      <i className="fa-solid fa-arrow-right" onClick={slideRight}></i>
    </div>
  );
};

export default CardSlider;
