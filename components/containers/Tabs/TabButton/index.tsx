import { TabGroup } from "@/types/Tabs";
import { twMerge } from "tailwind-merge";

interface TabButtonProps extends React.HTMLAttributes<HTMLLIElement> {
  data: TabGroup;
  isActive: boolean;
  onClick: () => void;
}

const TabButton = ({
  className,
  onClick,
  isActive = false,
  ...props
}: TabButtonProps) => {
  const {
    data: { id, label },
  } = props;

  return (
    <li
      className={twMerge(
        "rounded-[17px] flex",
        isActive
          ? "bg-brand-elevated text-brand-pressed"
          : "text-muted hover:bg-brand-subtle hover:text-brand-primary animation-colors duration-100",
        className
      )}
    >
      <button
        role="tab"
        aria-selected={isActive}
        aria-controls={`${id}-panel`}
        id={`${id}-tab`}
        onClick={onClick}
        className="cursor-pointer block px-4 py-2 font-medium text-sm leading-4.5 w-full h-full whitespace-nowrap text-left"
      >
        {label}
      </button>
    </li>
  );
};

export default TabButton;
