import Circular from '../../components/Circular-Progressbar/Circular';
import Slider from '../../components/Slider/Slider';
import './Simulator.scss'
const Simulator = () => {
    const values = [10,20,20,30];
return (
  <div>
      <div className='simulator'>
        <Circular values={values}/>
        <Slider/>
    <p>
    Simulator
    </p>
  </div>
  </div>
);
}
export default Simulator