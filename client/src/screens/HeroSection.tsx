import Search from '../components/HomeComponents/Search';
import '../styles/heroSection.css';
const HeroSection = () => {
  return (
    <div className="hero_section_container mt-4">
      <div className="row">
        <div className="col-md-6">
          <div className="hero_section_image">
            <img src="/src/assets/traced-3999010.jpg" alt="image" />
          </div>
        </div>
        <div className="col-md-6 mt-5">
          <div className="hero_section_title" dir="rtl">
            <h3>BOOK YOUR</h3>
            <h1>APPOINTMENT</h1>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia
              architecto rem ducimus laudantium fugiat culpa ex.
            </p>
            <button className="hero_section_button">GET AN APPOINTMENT</button>
            <Search />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
