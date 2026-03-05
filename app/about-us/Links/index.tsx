import { LinkCard } from "@/components/containers";
import { linksData } from "./consts";

const Links = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-6">
      {linksData.map((item) => (
        <LinkCard
          key={item.id}
          label={item.title}
          url={item.link}
        />
      ))}
    </section>
  );
};

export default Links;
