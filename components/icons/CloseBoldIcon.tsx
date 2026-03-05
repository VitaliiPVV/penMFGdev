import React from 'react';

const CloseBoldIcon: React.FC<{ className?: string }> = ({
  className = ""
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 21"
      fill="currentColor"
      className={className}
    >
      <title>Close icon</title>
      <path xmlns="http://www.w3.org/2000/svg" d="M2.8 20.4998L0 17.6998L7.2 10.4998L0 3.3498L2.8 0.549805L10 7.7498L17.15 0.549805L19.95 3.3498L12.75 10.4998L19.95 17.6998L17.15 20.4998L10 13.2998L2.8 20.4998Z" />
    </svg>
  );
};

export default CloseBoldIcon;