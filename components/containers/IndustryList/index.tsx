import React from "react";
import IndustryCard from "./IndustryCard";
import { industries } from "./constants";

interface Props {
  isLinkDisabled?: boolean;
}

const IndustryList: React.FC<Props> = ({ isLinkDisabled = false }) => {
  return (
    <ul className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-m md:gap-xl">
      {industries.map((props) => (
        <li key={props.title}>
          <IndustryCard {...props} isLinkDisabled={isLinkDisabled} />
        </li>
      ))}
    </ul>
  );
};

export default IndustryList;
