import React from 'react';

const CloseIcon: React.FC<{ className?: string }> = ({
  className = ""
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 32 33"
      fill="none"
      className={className}
    >
      <title>Close icon</title>
      <path xmlns="http://www.w3.org/2000/svg" d="M24 8.5L8 24.5M8 8.5L24 24.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
};

export default CloseIcon;