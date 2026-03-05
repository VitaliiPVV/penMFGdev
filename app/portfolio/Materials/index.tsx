import { MaterialsCard } from "@/components/containers";
import { Heading } from "@/components/ui";
import { getCollection } from "@/lib/strapi/strapi";
import { StrapiMaterial } from "@/types";

const Materials = async () => {
  const { data: materials } = await getCollection<StrapiMaterial>("materials", {
    populate: ["image"],
  });

  if (materials.length === 0) {
    return null;
  }

  return (
    <section className="flex flex-col gap-y-xl 2xl:gap-y-2xl">
      <div className="flex flex-col gap-y-m">
        <Heading
          as="h2"
          className="text-[24px] leading-[32px] 2xl:text-[32px] 2xl:leading-normal font-extrabold text-neutral"
        >
          <span className="text-neutral">Materials We</span>{" "}
          <span className="text-brand-primary">Work With</span>
        </Heading>

        <p className="max-w-[793px] font-medium leading-5 text-neutral">
          Pen Manufacturing works exclusively with certified, high-quality
          materials — delivering custom components built to meet strict
          construction and industrial standards.
        </p>
      </div>

      <ul className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 2xl:gap-2.5">
        {materials.map(({ documentId, name, image, description }) => (
            <li key={documentId}>
              <MaterialsCard
                name={name}
                image={image || null}
                description={description}
                imageClassName="mb-xl 2xl:mb-0"
              />
            </li>
          ))}
      </ul>
    </section>
  );
};

export default Materials;
