import { socialMediaLinks } from "../../constants";

const FooterBase = () => (
  <div className="bg-neutral">
    <div className="max-w-[1440px] mx-auto flex flex-col-reverse 2xl:flex-row 2xl:justify-between gap-y-4 2xl:items-center py-5 2xl:py-3 px-4 2xl:px-30">
      <p className="text-[14px] font-medium leading-[125%]">
        ©2025. All right reserved
      </p>

      <ul className="flex items-center gap-x-8">
        {socialMediaLinks.map(({ href, icon }) => (
          <li key={href}>
            <a href={href} target="_blank" rel="noopener noreferrer">
              {icon}
            </a>
          </li>
        ))}
      </ul>
    </div>
  </div>
);

export default FooterBase;
