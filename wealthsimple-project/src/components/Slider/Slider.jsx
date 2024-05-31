import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import './Slider.scss';

const CustomSlider = ({ values, colors, onChange, labels }) => {
  return (
    <div className="slider__container">
      {values.map((value, index) => (
        <div key={index} className="slider__wrapper">
          <div className="slider__label">{labels[index]}</div>
          <Slider
            value={value}
            onChange={(newValue) => onChange(index, newValue)}
            styles={{
                rail: { backgroundColor: '#e6e6e6', height: 10 },
                track: { backgroundColor: colors[index % colors.length], height: 10  },
                handle: {
                  borderColor: colors[index % colors.length],
                  height: 20,
                  width: 20,
                  marginLeft: -10,
                  marginTop:-5,
                  backgroundColor: colors[index % colors.length],
                },
              }}
              style={{  width: 100}} 
          />
        </div>
      ))}
    </div>
  );
};

export default CustomSlider;
