import { Heading } from "@/components/ui";
import Image from "next/image";

interface ServiceCardProps {
  title: string;
  description: string;
  image: string;
  alt: string;
}

const ServiceCard = ({ title, description, image, alt }: ServiceCardProps) => {
  return (
    <figure className="flex flex-col md:flex-row md:gap-x-m 2xl:flex-col bg-white rounded-3xl overflow-hidden p-4">
      <div className="relative w-full aspect-[311/212] md:w-[316px] md:h-[216px] 2xl:size-full 2xl:aspect-[556/224] mb-m">
        <Image
          src={image}
          alt={alt}
          fill
          className="object-cover rounded-2xl"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
        />
      </div>

      <div className="flex flex-col gap-y-2">
        <Heading
          as="h3"
          className="text-lg/[125%] font-bold text-neutral mb-3"
        >
          {title}
        </Heading>
        <figcaption className="text-sm/[125%] text-muted font-medium">
          {description}
        </figcaption>
      </div>
    </figure>
  );
};

export default ServiceCard;
