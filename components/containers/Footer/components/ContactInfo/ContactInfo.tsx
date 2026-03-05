import { MapPinIcon, PhoneIcon } from "@/components/icons";
import { PHONE_NUMBERS } from "@/constants";
import { twMerge } from "tailwind-merge";

interface ContactInfoProps {
  className?: string;
}

const ContactInfo = ({ className }: ContactInfoProps) => {
  return (
    <div className={twMerge("grid-cols-1 md:grid-cols-2 gap-4 2xl:gap-5 2xl:flex-col", className)}>
      <div className="flex gap-x-2 max-w-[247px] 2xl:max-w-auto 2xl:mb-5">
        <MapPinIcon className="size-6 text-brand-primary" />
        <p className="font-medium leading-6">
          1808 & 1802 N American St Anaheim, California 92801
        </p>
      </div>

      <div className="flex gap-x-2">
        <PhoneIcon className="size-6 text-brand-primary" />
        <p className="flex flex-col max-w-[215px] font-medium leading-6">
          <span>{PHONE_NUMBERS.mainLocal}</span>
          <span>{PHONE_NUMBERS.local}</span>
        </p>
      </div>
    </div>
  )
}

export default ContactInfo;
