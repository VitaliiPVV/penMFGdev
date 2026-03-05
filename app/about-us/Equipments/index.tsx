import { InfoCard } from "@/components/containers";
import { EquipmentData } from "./consts";

const Equipments = () => {
  return (
    <section className="flex flex-col gap-4">
      <p className="text-neutral font-medium">
        As noted above Pen Manufacturing Los Angeles has an extensive array of in-house machining equipment, including:
      </p>

      <div className="flex flex-col gap-16">
        {EquipmentData.map((data) => (
          <div className="flex flex-col gap-5" key={data.id}>
            <p className="font-semibold text-neutral leading-[130%]">{data.title}</p>

            <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-6">
              {data.items.map((item) => (
                <InfoCard
                  key={item.id}
                  title={item.title}
                  text={item.text}
                  className="bg-white border border-[var(--color-eleveted)]"
                />
              ))}
            </div>
          </div>
        ))}
      </div>

      <p className="mt-4 text-neutral">
        Miscellaneous Support Equipment: including forklifts, a 3-ton bridge crane, and hand grinders.
      </p>
    </section>
  );
};

export default Equipments;
