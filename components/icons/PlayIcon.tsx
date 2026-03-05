import React from 'react';

const PlayIcon: React.FC<{ className?: string }> = ({
  className = ""
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 19 25"
      fill="currentColor"
      className={className}
    >
      <title>Play icon</title>
      <path d="M2.49696 23.877C1.4218 24.5758 0 23.8042 0 22.5219V2.47806C0 1.19574 1.42179 0.424149 2.49694 1.12299L17.9153 11.1448C18.8958 11.7821 18.8958 13.2176 17.9153 13.8549L2.49696 23.877Z" />
    </svg>
  );
};

export default PlayIcon;