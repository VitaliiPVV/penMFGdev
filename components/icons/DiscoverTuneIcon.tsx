import React from 'react';

const DiscoverTuneIcon: React.FC<{ className?: string }> = ({
  className = ""
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 14 14"
      fill="currentColor"
      className={className}
    >
      <title>Discover tune icon</title>
      <path d="M7.9375 4.5625V3.4375H10.1875V0.4375H11.3125V3.4375H13.5625V4.5625H7.9375ZM10.1875 13.5625V6.4375H11.3125V13.5625H10.1875ZM2.6875 13.5625V10.5625H0.4375V9.4375H6.0625V10.5625H3.8125V13.5625H2.6875ZM2.6875 7.5625V0.4375H3.8125V7.5625H2.6875Z" />
    </svg>
  );
};

export default DiscoverTuneIcon;