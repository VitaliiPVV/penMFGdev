import { Breadcrumbs, Heading } from "@/components/ui";

const breadcrumbs = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Portfolio",
    href: "/portfolio"
  },
  {
    label: "Machinery projects",
  },
];

const Content = () => {
  return (
    <section className="flex flex-col gap-6">
      <Breadcrumbs items={breadcrumbs} />

      <Heading
        as="h1"
        className="text-[24px] md:text-[32px] text-neutral leading-8 md:leading-10 font-bold"
      >
        California Metal Machinery Projects
      </Heading>

      <div className="flex flex-col gap-4 max-w-[793px] text-neutral leading-[130%] 2xl:mb-16">
        <p>Pen Manufacturing is not your typical Southern California & Anaheim Machine Shop. We specialize in bringing ideas from paper to reality. Our clients come from various industries across Southern California and bring to us ideas that vary in design complexity. Some clients come to us with a simple idea scribbled out on scratch paper. The other end of the spectrum has a client bringing over to us fully engineered drawings ready for our team to get started on.</p>
        <p>We pride ourselves on the efficient use of our resources. We consider our resources to be our people, our years of accumulated experience and our wide array of manufacturing equipment. We employ skilled designers, machinists, welders and fabrication specialists with experience in a range of manufacturing disciplines. Our design group consists of a team that has years of practical manufacturing experience. We utilize Solid Works 2009, AutoCAD and Surfcam for design and engineering. In our Southern California machine shop we employ several highly-skilled CNC and manual machinists. Our weld shop consists of a group of AWS certified welders certified to work with aluminum, stainless steel, carbon steel and structural steel. Our weld shop also holds a Los Angeles Fabricators license. Our fabrication and assembly department consists of an awesome group of guys with years of experience in building electrical panels, hydraulically controlled systems, pneumatically operated contraptions and more.</p>
        <p>Pen Manufacturing of Los Angeles has worked on some unique and exciting custom projects.</p>

        <div className="flex flex-col gap-3 text-neutral">
          <p className="font-medium leading-tight">
            We are confident in our ability to build custom projects for any industry. Our years of experience and diversified staff in the Los Angeles area, mean that we can provide machining, welding, fabrications, design, electrical integration, hydraulics and any addition of components that your job requires. The process of custom machinery involves many value-added services:
          </p>

          <ul className="flex flex-col gap-2 list-disc ml-4">
            <li>Expert consulting with our staff of designers, machinists, welders and fabricators</li>
            <li>Quick prototyping/simulation</li>
            <li>Ability to hands-on test your machine</li>
            <li>Precision machining of various materials</li>
            <li>Full scale production</li>
          </ul>
        </div>

        <p>With Pen Manufacturing of Anaheim we recruit all of our resources, experience and high performance machines to complete your ideal custom project. Please contact us about your machine concept or part problem. We look forward to hearing from you!</p>
      </div>
    </section>
  );
};

export default Content;
