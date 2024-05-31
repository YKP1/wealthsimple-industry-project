import './Circular.scss';

const Circular = ({ values }) => {
    const colors = ["#CCA64F", "#7BD0FF", "#0080AA", "#ECC15D"];
    const radius = 50;
    const circumference = 2 * Math.PI * radius;
    const totalValue = values.reduce((acc, val) => acc + val, 0);
  //TODO CHANGE THE MATH SO THAT THE CIRCULAR LINES ARE NEXT TO EACH OTHER
    return (
      <div className="circular">
        <svg width="120" height="120" viewBox="0 0 120 120">
          <circle
            cx="60"
            cy="60"
            r="50"
            fill="none"
            stroke="#fff"
            strokeWidth="10"
          />
          {values.map((value, index) => {
            const percentage = (value / 100) * circumference;
            const offset = circumference - ((values.slice(0, index).reduce((acc, val) => acc + (val / 100) * circumference, 0)) + percentage);
            return (
              <circle
                key={index}
                cx="60"
                cy="60"
                r="50"
                fill="none"
                stroke={colors[index % colors.length]}
                strokeWidth="10"
                strokeDasharray={`${percentage} ${circumference}`}
                strokeDashoffset={offset}
                strokeLinecap="round"
                transform="rotate(-90 60 60)"
              />
            );
          })}
          <text x="60" y="65" textAnchor="middle" fill="#000" fontSize="20px" fontWeight="bold">Total</text>
          <text x="60" y="85" textAnchor="middle" fill="#000" fontSize="16px" fontWeight="bold">
            {totalValue}
          </text>
        </svg>
      </div>
    );
  };
  
  export default Circular;