import React from 'react';

const CheckIcon: React.FC<{ className?: string }> = ({
  className = ""
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 14"
      fill="none"
      className={className}
    >
      <title>Check icon</title>
      <path xmlns="http://www.w3.org/2000/svg" d="M13.3337 4L6.00033 11.3333L2.66699 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
};

export default CheckIcon;