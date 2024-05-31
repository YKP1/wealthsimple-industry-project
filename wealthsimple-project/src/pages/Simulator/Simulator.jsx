import Circular from '../../components/Circular-Progressbar/Circular';
import Slider from '../../components/Slider/Slider';
import { useState } from 'react';
import './Simulator.scss'
const Simulator = () => {
    const initialValues = [10, 10, 10, 10];
    const labels = ["Payment History", "Credit Utiisation", "Credit Age", "Total Accounts"];
    const maxContributions = [35, 30, 15, 20];
    const [values, setValues] = useState(initialValues);
    const colors = ["#CCA64F", "#7BD0FF", "#0080AA", "#ECC15D"];

    const handleSliderChange = (index, newValue) => {
        const newValues = [...values];
        newValues[index] = newValue;
        setValues(newValues);
      };
    // so that values can only be represented by their max contributions
    const scaledValues = values.map((value, index) => Math.round((value / 100) * maxContributions[index]));
    // Calculate the total score starting at 400 and max at 900
    const totalContribution = scaledValues.reduce((acc, val) => acc + val, 0);
    const creditScore = Math.round(400 + ((totalContribution / 100) * 500));

return (
  <div>
      <div className='simulator'>
        <Circular values={scaledValues} colors={colors} totalScore={creditScore}/>
        <Slider values={values}  colors={colors}  onChange={handleSliderChange} labels={labels}/>
  </div>
  </div>
);
}
export default Simulator