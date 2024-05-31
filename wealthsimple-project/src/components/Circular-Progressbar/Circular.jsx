import React from 'react';
import './Circular.scss';

const Circular = ({ values, colors,  totalScore}) => {
  const radius = 60;
  const circumference = 2 * Math.PI * radius;

  // Calculate the end position of the last segment and giving it the small circle on top (last circle in svg)
  const lastSegmentOffset = values.reduce((acc, val) => acc + (val / 100) * circumference, 0) - (values[values.length - 1] / 100) * circumference;
  const lastSegmentAngle = (lastSegmentOffset / circumference) * 360 - 90 + (values[values.length - 1] / 100) * 360;
  const endX = 75 + radius * Math.cos((lastSegmentAngle * Math.PI) / 180);
  const endY = 75 + radius * Math.sin((lastSegmentAngle * Math.PI) / 180);

  return (
    <div className="circular">
      <svg width="150" height="150" viewBox="0 0 150 150">
      {values.reduce((acc, val) => acc + val, 0) < 100 && (
          <circle
            cx="75"
            cy="75"
            r={radius}
            fill="none"
            stroke="#fff"
            strokeWidth="15"
            strokeDasharray={`${(100 - values.reduce((acc, val) => acc + val, 0)) / 100 * circumference} ${circumference}`}
            strokeDashoffset={-(values.reduce((acc, val) => acc + val, 0) / 100) * circumference}
            strokeLinecap="butt"
            transform="rotate(-90 75 75)"
          />
        )}
        {values.map((value, index) => {
          const offset = values.slice(0, index).reduce((acc, val) => acc + (val / 100) * circumference, 0);
          const percentage = (value / 100) * circumference;
          return (
            <circle
              key={index}
              cx="75"
              cy="75"
              r={radius}
              fill="none"
              stroke={colors[index % colors.length]}
              strokeWidth="15"
              strokeDasharray={`${percentage} ${circumference}`}
              strokeDashoffset={-offset}
              strokeLinecap="round"
              transform="rotate(-90 75 75)"
            />
          );
        })}
        <text x="75" y="65" textAnchor="middle" fill="#000" fontSize="16px" fontWeight="bold" dy=".3em">Total</text>
        <text x="75" y="95" textAnchor="middle" fill="#000" fontSize="24px" fontWeight="bold">
        {totalScore}
        </text>
        <circle
          cx={endX}
          cy={endY}
          r="5"
          fill="none"
          stroke={colors[(values.length - 1) % colors.length]}
          strokeWidth="3"
        />
        <circle
          cx={endX}
          cy={endY}
          r="4"
          fill="#fff"
        />
      </svg>
    </div>
  );
};

export default Circular;
