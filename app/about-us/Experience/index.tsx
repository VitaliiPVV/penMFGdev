import { InfoCard } from "@/components/containers"
import { Cards } from "./consts"

const Experience = () => {
  return (
    <section className="flex flex-col gap-4">
      <p className="text-neutral leading-[130%] font-normal">We attribute our success to being grounded in the Christian principles of humility, honesty, integrity, respect, kindness and a sense of social responsibility. We create eternal value by striving to honor God in all we do. This is reflected in how we conduct our business and how we care for our employees - our greatest asset.</p>

      <div className="flex flex-col gap-5">
        <p>We have over:</p>

        <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-4 gap-5">
          {Cards.map((item) => (
            <InfoCard
              key={item.id}
              title={item.title}
              text={item.text}
              className="2xl:last:col-span-2"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
