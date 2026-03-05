export type ServicePagesGroup = {
  id: string;
  label: string;
  content: {
    title?: string;
    secondTitle?: string;
    verticalSpace?: string;
    subtitle?: string[];
    text?: string[];
    image?: string;
    imageHeight?: string;
    btn?: boolean;
    materials?: {
      name: string;
      image: string;
    }[];
    videos?: {
      videoLink: string;
      videoTitle: string;
      videoImg: string;
      type: string;
    }[];
    infoCards?: {
      title: string;
      text: string;
    }[];
    links?: {
      name: string;
      url: string;
    }[];
    options?: {
      id: string;
      label: string;
    }[];
    infoItems?: string[];
    images?: string[];
    subtitleImage?: string;
    subtitleImageClass?: string;
    textAfter?: string[];
    infoItemsOrder?: string;
    imagesOrder?: string;
    textAfterOrder?: string;
    highlight?: string;
    videoClass?: string;
    videoItemClass?: string;
    infoCardsClass?: string;
    infoCardWhite?: boolean;
    linksClass?: string;
  }[];
}

export const servicesPages: ServicePagesGroup[] = [
  // metal-fabrication pages
  {
    id: 'aluminium-fabrication',
    label: 'Aluminium Fabrication',
    content: [
      {
        title: 'Aluminum Fabrication Shop & Services',
        text: [
          'Pen Manufacturing has decades of experience providing value-added aluminum fabrication services for the Southern California area including San Diego, Anaheim, Los Angeles, and other surrounding cities. We pride ourselves on integrating and expertly executing specialized processes (including aluminum casting, welding, milling, precision machining, and finishing) to prototype or fabricate any aluminum component or structure. Our customers in Southern California and elsewhere bring us a drawing, concept, or CAD file, and our in-house aluminum fabricators have the capability to produce work to exact specifications.'
        ],
        btn: true,
      },
      {
        images: [
          '/images/services/metal-fabrication/aluminium_1.webp',
          '/images/services/metal-fabrication/aluminium_2.webp',
        ]
      },
      {
        subtitle: ['Benefits of', 'Aluminum Fabrication'],
        text: [
          'Because aluminum is difficult to use for fabrication but highly prized as a strong, lightweight, and highly corrosion-resistant material, custom aluminum fabrication requires specialized training and decades of experience to perfect. Aluminum is easy to shape but also strong and sturdy so it holds shape well.',
          'Pen Manufacturing is among the most qualified, knowledgeable custom full-service aluminum fabricators and is uniquely positioned to handle projects requiring almost any form of aluminum, including:',
        ],
        infoItems: [
          '2000 Series Aluminum',
          '6000 Series Aluminum',
          '7000 Series Aluminum',
        ],
      },
      {
        subtitle: ['Aluminum Fabrication','Industries Served'],
        text: [
          'As your trusted aluminum fabrication shop, Pen Manufacturinghas lead projects for numerous industries including, but not limited to:'
        ],
        infoItems: [
          'Engineering',
          'Industrial Projects',
          'Marine',
          'General Construction',
        ],
        infoItemsOrder: '2xl:grid-cols-2',
        textAfter: [
          'Pen Manufacturing is excited to use our industry experience and unparalleled skills to fabricate almost any project, from platforms and enclosures to structural frames and precision parts. Our professionals are ready to meet your aluminum fabrication needs and answer any questions regarding our 2000, 6000, & 7000 series. So contact us today as your Aluminum Fabrication Shop.'
        ]
      },
      {
        videos: [
          {
            videoImg: '/images/about_img.webp',
            videoLink: 'https://www.youtube.com/embed/09sVQw7f3xc',
            videoTitle: '',
            type: 'youtube',
          }
        ],
        videoItemClass: 'h-[240px] md:h-[445px]',
        videoClass: 'md:grid-cols-1 2xl:grid-cols-1',
      }
    ],
  },
  {
    id: 'carbon-steel-fabrication',
    label: 'Carbon Steel Fabrication',
    content: [
      {
        title: 'Carbon Steel Fabrication',
        text: [
          'From design to delivery, Pen Manufacturing is one of the finest carbon steel fabricators anywhere. Our experience allows us to take raw steel and realize our customers’ designs for precise components and large structures. We combine our expertise and old-fashioned common sense with creative troubleshooting for custom projects to provide customers with carbon steel fabrication solutions of every kind.'
        ],
        btn: true,
      },
      {
        images: [
          '/images/services/metal-fabrication/carbon_steel_main.webp'
        ],
      },
      {
        subtitle: ['Carbon Steel', 'Grades & Specifications'],
        text: [
          'We offer our customers the following carbon steel specifications in all shapes and sizes:',
          'Carbon Steel Mild steel, alloy steel, cast steel; in all shapes and sizes',
          'Each project is different, so we take a custom approach to each customer\'s distinct fabrication requirements. With in-house mills, lathes, welding stations, and other state-of-the-art machinery, Pen Manufacturing adheres to the industry’s highest standards, bringing our customers excellent value-added results. Carbon steel is a popular choice for fabricating because it can be punched, welded, rolled, cut, riveted, finished, and painted while still maintaining extreme mechanical strength for a wide range of structures.',
        ],
      },
      {
        subtitle: ['Custom Manufacturing Capabilities', 'For Carbon Steel'],
        text: [
          'We offer our customers a complete range of world-class equipment to help in completing Carbon Steel project requirements:'
        ],
        infoCards: [
          {
            title: 'Hurco VMX50 4-Axis Vertical Mill',
            text: '50" by 26" by 24" work envelope',
          },
          {
            title: 'Hurco VMX42 4-Axis Vertical Mill',
            text: '42" by 24" by 24" work envelope',
          },
          {
            title: 'Hurco VM3 Vertical Mill',
            text: '50" by 18" by 18" work envelope',
          },
          {
            title: 'Hurco TM10 lathe',
            text: '10" chuck',
          },
          {
            title: 'Whacheon lathe',
            text: '12" chuck',
          },
          {
            title: 'FEMCO durga lathe',
            text: '8" chuck',
          },
          {
            title: '6 MIG and TIG welding stations',
            text: '',
          },
          {
            title: 'Cobramatic aluminum "Push-Pull" station',
            text: '',
          },
          {
            title: '15" by 120" lathe',
            text: '',
          },
          {
            title: '12" by 80" lathe',
            text: '',
          },
          {
            title: 'Vertical turret lathe',
            text: '54" round by 24" tall capacity and 50" of swing',
          },
          {
            title: '4 Knee mills',
            text: '',
          },
          {
            title: 'Automatic cut-off/band saw',
            text: '',
          },
          {
            title: '90-ton ironworker',
            text: '',
          },
          {
            title: '1 HYD-MECH miter saw',
            text: '',
          },
          {
            title: '3-ton bridge crane',
            text: '',
          },
          {
            title: 'Support equipment',
            text: 'Including fork lifts and hand grinders',
          },
        ],
        infoCardsClass: '2xl:grid-cols-3',
      },
      {
        images: [
          '/images/services/metal-fabrication/carbon_steel_manufacturing.webp'
        ],
        textAfter: [
          'In combination with many other in-house services and capabilities, Pen Manufacturing takes pride in providing expert custom fabrication to our Southern California customers, including those in Anaheim, Los Angeles, Orange County, and San Diego. Regardless of the scope or complexity of your project, contact one of our trusted professionals to learn more about our metal fabrication in Orange County and how we can meet your needs.'
        ]
      }
    ],
  },
  {
    id: 'stainless-steel-fabrication',
    label: 'Stainless Steel Fabrication',
    content: [
      {
        title: 'Stainless Steel Fabrication',
        text: [
          'Pen Manufacturing\'s home in Southern California makes it an ideal firm to manage any of our customers\' stainless steel fabrication needs. With modern in-house CNC machining capabilities, six welding stations, and hundreds of combined years of experience taking designs and creating custom precision parts and massive engineered structures, Pen Manufacturing is able to miter cut, weld, assemble, and finish any stainless steel fabrication project to precise standards for a wide variety of industries, specializing in custom stainless steel fabication.',
          'Stainless steel is particularly suitable for fabrications requiring great mechanical strength, high corrosion-resistance, low maintenance, and the material\'s natural appearance. As one of the most comprehensive manufacturing firms of its kind, Pen Manufacturing brings value-added experience and resources to projects as small as a hand and as large as one can imagine.',
        ],
        btn: true,
      },
      {
        images: [
          '/images/services/metal-fabrication/stainless_steel_fabrication.webp'
        ]
      },
      {
        subtitle: ['Stainless Steels', 'We Work With'],
        text: [
          'We are capable of building, bending, punching, welding, and configuring several alloys of stainless steel (including 304L, 316L, and 17-4 stainless steels) into a variety of shapes, such as channel, bar, sheet, angle, plate, and tubing.',
        ],
        infoItems: [
          '304L',
          '316L',
          '17-4'
        ]
      },
      {
        subtitle: ['Industries', 'We Serve'],
        text: [
          'Pen Manufacturing has the resources and experience to handle requests of all sizes and quantities. Utilize us in your stainless steel supply chain manufacturing process to simplify and optimize your stainless steel fabrication product or project. We have provided supply chain support to a wide variety of industries. Some previous projects at Pen Manufacturing utilizing stainless steel fabrication include:',
        ],
        infoCards: [
          {
            title: 'Transportation Industry',
            text: 'Various assemblies are used inside of railcars for collecting liquid waste are made using light gauge stainless steel sheet metal'
          },
          {
            title: 'Wastewater Industry',
            text: 'Due to its corrosion-resistant properties, stainless steel assemblies are used throughout the wastewater industry'
          },
          {
            title: 'Clean Water Industry',
            text: 'Process piping components and stainless steel structures are used to hold the components assembled in plants that create clean water'
          },
          {
            title: 'Building Components',
            text: 'Stainless steel base plates are used as foundations for building projects'
          },
        ],
        infoCardWhite: true,
      },
      {
        subtitle: ['Advantages of', 'Stainless Steel Fabrication'],
        text: [
          'Corrosion Resistant and Heat Resistant',
          'With a reputation for quality work of the highest standards, our knowledgeable and efficient staff looks forward to helping you realize your designs. We are here to serve you as your Stainless Steel Supply Chain Fabrication in Los Angeles, contact us today.',
        ],
        videos: [
          {
            videoImg: '/images/services/metal-fabrication/stainless_steel_video_1.webp',
            videoLink: 'https://www.youtube.com/embed/e9fEarHTz3I',
            videoTitle: 'McGurk Jetty Beach Project',
            type: 'youtube',
          },
          {
            videoImg: '/images/services/metal-fabrication/stainless_steel_video_2.webp',
            videoLink: 'https://www.youtube.com/embed/-3hlTa8ecN8',
            videoTitle: 'Stainless Steel Aerospace Project',
            type: 'youtube',
          }
        ]
      }
    ],
  },
  {
    id: 'structural-steel-fabrication',
    label: 'Structural Steel Fabrication',
    content: [
      {
        title: 'California Structural Steel Fabrication',
        image: '/images/services/metal-fabrication/structural_main.webp',
        textAfter: [
          'As a leading structural fabricator of large-scale steel structures in Southern California, Pen Manufacturing has decades of experience and a complete line of in-house equipment to fully accommodate every structural steel fabrication project. From sourcing raw steel in the form of beams, columns, channels, bars, angles, plate, tubing, HSS, and other common steel standards to developing custom Weld Procedure Specifications (WPS), Pen creates corrosion-resistant and high-strength items of any size to rigorous standards.',
        ],
        btn: true,
      },
      {
        subtitle: ['Structural', 'Fabricator Expertise'],
        images: [
          '/images/services/metal-fabrication/structural_expertise_1.webp',
          '/images/services/metal-fabrication/structural_expertise_2.webp',
        ],
        textAfter: [
          'A cost-effective, incredibly strong, and sustainable construction resource, structural steel fabrication is used to prototype and execute structures of lasting value with tight tolerances. Pen Manufacturing\'s expert California structural fabricators, MIG, TIG, and arc/stick welders assess a project\'s needs and efficiently execute each design to provide customers with products they can trust and rely on for years. For over three decades, we have serviced a variety of public and private industries with innovative and complete fabrication solutions for all of their structural steel fabrication service needs.'
        ],
      },
      {
        subtitle: ['Structural Steel Applications &', 'Project Examples'],
        infoCards: [
          {
            title: 'Tractel Group',
            text: 'Fabricated structural steel components',
          },
          {
            title: 'Fluoresco Lighting Company',
            text: 'Structural steel lighting fixtures and frames',
          },
          {
            title: 'Burbank Fire Department',
            text: 'Structural steel components',
          },
          {
            title: 'Tri Alpha Energy',
            text: 'Structural components for advanced energy systems',
          },
          {
            title: 'Amonix',
            text: 'Structural steel components for the solar energy industry',
          },
        ],
        infoCardsClass: '2xl:grid-cols-3',
        textAfter: [
          'Along with our full complement of manufacturing services, our customers can be confident that Pen Manufacturing will professionally implement any design regardless of scale or scope. Contact one of our experienced and highly skilled professionals to discuss how we can help you with our structural steel fabrication services. We are here to serve you as your California structural fabricator.'
        ],
      },
    ],
  },

  // welding pages
  {
    id: 'aluminium-welding',
    label: 'Aluminium Welding',
    content: [
      {
        title: 'Aluminum Welding Services',
        text: [
          'With a staff that has over 125 combined years of experience in welding, Pen Manufacturing is an expert in aluminum welding in the Southern California area inlcuding Anaheim and Los Angeles. Possessing extensive experience in the welding of many types of metals, including aluminum.',
          'Aluminum welding at Pen Manufacturing is performed per AWS D1.2 specifications. Aluminum welding can be easily done using MIG or TIG welding processes depending on the project, aluminum series selected, and environment the component will be used in.',
        ],
        btn: true,
      },
      {
        subtitle: ['Advantages of', 'Aluminum Welding'],
        images: [
          '/images/services/welding/aluminium_welding.webp'
        ],
        text: [
          'Advantages of assemblies, components, and parts constructed using aluminum welding services include:'
        ],
        infoItems: [
          'Excellent Strength, including Impact Strength',
          'Outstanding Durability',
          'Low Maintenance',
          'High-Quality Welds',
        ],
        infoItemsOrder: '2xl:grid-cols-2',
        textAfter: [
          'An example of a component produced at the Pen Manufacturing facility using aluminum welding is an aluminum shipping pallet for an aerospace project. Other aluminum welding applications include aluminum irrigation pipes and aluminum engine components. Pen Manufacturing is one of the few welding machine shops in California that can weld virtually any aluminum shape, including sheet, tubing, channel, bar, plate, and angle.',
          'Pen Manufacturing recently completed an aluminum welding and fabrication project for the California Institute of Technology that was an integral component used in testing a new state-of-the-art land-based radio telescope.',
          'Not only do we have extensive experience in MIG and TIG welding, including aluminum welding services, but Pen Manufacturing can also provide precision welding services using stainless steel, carbon steel, bronze, and many other metals. We invite you to call or email us to learn more about our services for your aluminum welding projects and other custom manufacturing requirements! We are here to assist you as your aluminum welding supply chain services in Los Angeles.',
        ]
      }
    ],
  },
  {
    id: 'mig-welding',
    label: 'MIG Welding',
    content: [
      {
        title: 'MIG Welding Services',
        text: [
          'Over the past 30 years, Pen Manufacturing has been providing a broad range of industries welding services in Southern California, including Anaheim, Los Angeles, Orange County and San Diego. Pen Manufacturing is one of the most experienced MIG and TIG welders in the Southern California area.',
          'With six MIG and TIG welding stations, Pen Manufacturing has one the highest in-house capabilities out of all welders in Southern California area for; aluminum, carbon steel, stainless steel, cast iron, and bronze welding.'
        ],
        btn: true,
      },
      {
        subtitle: ['Welding', 'Certifications & Capabilities'],
        text: [
          'Advantages of assemblies, components, and parts constructed using aluminum welding services include:'
        ],
        infoItems: [
          'AWS D1.1 Structural Steel',
          'AWS D1.2 Aluminum',
          'AWS D1.6 Stainless Steel',
        ],
        infoItemsOrder: 'order-1',
        images: [
          '/images/services/welding/mig_welding_1.webp'
        ],
        imagesOrder: 'order-2',
        textAfter: [
          'Over the last couple of years Pen Manufacturing has worked with customers to develop project specific Weld Procedure Specifications (WPS) and subsequently certified some of the personnel to those WPS\'s.',
          'Pen Manufacturing has the experience and the capabilities to handle stock up to 40\' long, 12\' square, with a minimum thickness of .0030". MIG (Metal Inert Gas) welding is an automatic or semi-automatic welding method that utilizes a wire electrode along with a shielding gas, sometimes referred to as a consumable arc, which is fed through a welding gun. Several power sources can be used for MIG welding, including direct current (DC) - constant voltage, which is the most common, as well as constant current and alternating current power sources. There are four commonly-recognized techniques of metal transfer in MIG welding – pulsed spray, spray, short-circuiting and globular.',
        ],
        textAfterOrder: 'order-3'
      },
      {
        subtitle: ['What is', 'MIG Welding?'],
        subtitleImage: '/images/services/welding/mig_welding_2.webp',
        text: [
          'MIG welding was initially implemented in the 1940s, specifically for welding non-ferrous metals such as aluminum. MIG welding soon became used for steel as well, since it permitted a shorter welding time compared to other traditional welding methods. Steel MIG welding became even more commonplace when the use of semi-inert gases (such as carbon dioxide) was implemented. Additional improvements in the MIG welding process through the 1950s and 1960s resulted in MIG welding becoming one of the most popular, heavily used industrial manufacturing processes.'
        ],
      },
      {
        text: [
          'Advantages of MIG welding include:'
        ],
        infoItems: [
          'Adaptable to robotic automation',
          'Relatively simple to learn',
          'Versatile',
          'Relative ease of use',
          'MIG welds can be completed quickly ',
        ],
        textAfter: [
          'Regardless of how complex your component requirements are, get in touch with the experienced staff at Pen Manufacturing to discuss all your MIG welding and TIG welding specifications! Also see our CNC precision machining abilities or contact us for more information on our custom MIG welding services in California.',
        ]
      },
    ],
  },
  {
    id: 'stainless-steel-welding',
    label: 'Stainless Steel Welding',
    content: [
      {
        title: 'Stainless Steel Welding',
        images: [
          '/images/services/welding/stainless_steel_welding.webp'
        ],
        textAfter: [
          'Pen Manufacturing has the in-house equipment and knowledgeable staff to weld a wide range of materials, including stainless steel. We are capable of welding a variety of shapes, such as channels, bar, sheet, angles, plate, and tubing. As an experienced welder in California, we can perform stainless steel welding on components, parts and assemblies as small as what would fit in the palm of your hand to as large as 10 tons.',
          'Stainless steel grades, such as 304L and 316L, are easy to weld and exhibit very good strength, making them excellent candidates for many stainless steel welding applications. 17-4 stainless has been used in projects that require special heat-treating after the welding has been completed. At Pen Manufacturing, stainless steel is welded using the arc/stick, or TIG welding processes.'
        ],
        btn: true,
      },
      {
        subtitle: ['Applications of', 'Stainless Steel Welding'],
        images: [
          '/images/services/welding/stainless_steel_welding_2.webp'
        ],
        textAfter: [
          'In the last 10 to 20 years, the world has seen an explosion of applications for stainless steel. As markets have grown around the world for uses of stainless so has the availability of stainless steel materials. Currently India and Russia are the largest producers of the raw materials used to create stainless steel.'
        ],
      },
      {
        text: [
          'Some examples of products manufactured at Pen Manufacturing utilizing stainless steel welding are:'
        ],
        infoCards: [
          {
            title: 'Transportation Industry',
            text: 'Various assemblies used inside of railcars for collecting liquid waste are made using light gage stainless steel sheet metal',
          },
          {
            title: 'Wastewater Industry',
            text: 'Due to the corrosion resistance properties, stainless steel assemblies are used throughout the wastewater industry',
          },
          {
            title: 'Clean Water Industry',
            text: 'Process piping components and structures used to hold the components assembled in plants that create clean water',
          },
          {
            title: 'Building Components',
            text: 'Base plates utilized in the foundation of building project',
          },
        ],
        textAfter: [
          'In addition to our MIG welding and TIG welding services, we have other in-house services including glass beading, electrical, painting and plumbing. Stainless Steel Welding Orange County is here to serve you and answer any questions.'
        ]
      }
    ],
  },
  {
    id: 'tig-welding',
    label: 'TIG Welding',
    content: [
      {
        title: 'TIG Welding Services',
        text: [
          'Pen Manufacturing has decades of experience offering expert tungsten inert gas (TIG) welding to a wide variety of industries and is one of the most experienced welding operations in Southern California. Regardless of the scope of our customers\' welding needs, our TIG welders serve clients in Anaheim, Los Angeles, Orange County, Fullerton, and San Diego.'
        ],
        btn: true,
      },
      {
        subtitle: ['AWS Standards For', 'TIG Welding'],
        text: [
          'As a firm specializing in TIG welding in the state of California, Pen Manufacturing maintains industry certifications from the American Welding Society in welding of the following:'
        ],
        infoItems: [
          'AWS D1.1 Structural Steel',
          'AWS D1.2 Aluminum',
          'AWS D1.6 Stainless Steel',
        ],
      },
      {
        subtitle: ['Welding', 'Materials'],
        text: [
          'TIG welding, also known as heliarc welding and gas tungsten arc welding (GTAW), is used to produce incredibly strong, corrosive-resistant, and precision welds on a variety of metals, including aluminum, carbon steel, iron, magnesium, nickel, steel, and stainless steel, with many filler metals. With TIG welding, wleding variables can be precisely controlled and welding services can be carried out with or without fillers.'
        ],
      },
      {
        subtitle: ['Welding Services For', 'Your Custom Projects'],
        subtitleImage: '/images/services/welding/tig_welding.webp',
        subtitleImageClass: '2xl:h-[376px]',
        text: [
          'Projects involving light gauge aluminum are particularly suited for TIG welding, resulting in mechanically strong and lightweight products of outstanding quality. With six welding stations and various sizes and configurations of TIG welding machines, Pen Manufacturing is ready to create high-quality custom parts of any size or complexity.',
          'By maintaining the highest training and safety standards, Pen Manufacturing is able to use this difficult and skilled welding process as required. In consultation with clients, we design and adhere to project-specific Welding Procedure Specifications in order to ensure that customers receive quality work while maintaining codes and standards. Pen Manufacturing has highly skilled professionals who are ready to meet your needs. TIG Welding Services in California is here to help you with your application.',
        ],
      }
    ],
  },

  // machining pages
  {
    id: '4-axis-machining',
    label: '4-axis machining',
    content: [
      {
        title: 'Multi-Axis Machining',
        text: [
          'Pen Manufacturing specializes in 3-axis and 4-axis, or multi-axis, machining for components that require high degrees of precision and repeatability. We add the power of computer numerically controlled (CNC), computer aided manufacturing (CAM), and industry-leading Surfware software tools to our decades of machining experience to produce perfect products based on our customers’ CAD designs. Our CNC machining specialists can program and oversee the production of highly complicated precision parts with the highest standards of quality, reproducibility, and safety in mind.',
          '4-axis machining is an ideal solution for projects requiring tolerances of less than a millimeter and specific surface curvatures.',
        ],
        btn: true,
      },
      {
        subtitle: ['Our', 'Multi-axis Equipment'],
        text: [
          'Pen Manufacturing\'s in-house Hurco multi-axis machines are:',
        ],
        infoCards: [
          {
            title: 'VMX50 Vertical Mill',
            text: '4th Axis capability and 50" by 26" by 24" envelope',
          },
          {
            title: 'VMX42 Vertical Mill',
            text: '4th Axis capability and 42" by 24" by 24" envelope',
          },
          {
            title: 'VM3 Vertical Mill',
            text: '50" x 16" x 18" envelope',
          },
        ],
        infoCardsClass: '2xl:grid-cols-3',
        textAfter: [
          'Along with over 200 combined years of expertly conceptualizing, designing, and creating products for many industries, our ability to quickly and efficiently produce highly specific machined parts in a variety of materials sets Pen Manufacturing apart as a leading Southern California manufacturer. Contact one of our experienced staff to learn how we can meet any of your machining needs.',
        ],
        images: [
          '/images/services/machining/4_axis.webp'
        ],
        imagesOrder: 'order-1'
      }
    ],
  },
  {
    id: 'aluminum-machining',
    label: 'Aluminum Machining',
    content: [
      {
        title: 'California Aluminum Machining',
        text: [
          'For over two and a half decades, Pen Manufacturing has offered a broad range of aluminum machining capabilities and services to a wide variety of industries in Southern California, and Anaheim area. With all of our machining experience, aluminum machining is an area where Pen Manufacturing excels.',
          'We use the latest in CNC software from Surfware to machine aluminum at high speeds. By combining the technologies that Surfware has patented, along with newer CNC machines, we are able to produce precision machined aluminum parts at speeds not even attempted just a few short years ago.'
        ],
        btn: true,
      },
      {
        images: [
          '/images/services/machining/california_aluminium.webp'
        ]
      },
      {
        subtitle: ['Grades of Aluminum', 'We Can Work With'],
        text: [
          'Pen Manufacturing has in-house capabilities to handle all shapes of aluminum stock, including flat bar, angle, channel, sheet, and tubing. We are also able to machine high-quantity orders producing the highest quality machined aluminum parts available. Utilize our aluminum machining capabilities as part of your supply chain processes to improve both your product and manufacturing process. The maximum aluminum stock that we can handle is 15 inches round and 12 feet long.',
          'Pen Manufacturing has experienced staff and a full-service CNC machine shop in Anaheim to perform aluminum machining on many types of aluminum, including:'
        ],
        infoCards: [
          {
            title: 'Aluminum',
            text: '2000 Series, 6000 Series, and 7000 series. All available in angles, channels, bar, tubing, I-Beams, and extrusions'
          }
        ],
      },
      {
        subtitle: ['CNC Machinery Used For', 'Aluminum Parts'],
        text: [
          'The aluminum machining performed at Pen Manufacturing utilizes in-house CNC machinery, including:'
        ],
        infoCards: [
          {
            title: 'Hurco VMX50 Vertical Mill',
            text: '4th Axis capability and 50" by 26" by 24" envelope'
          },
          {
            title: 'Hurco VMX42 Vertical Mill',
            text: '4th Axis capability and 42" by 24" by 24" envelope'
          },
          {
            title: 'Hurco VM3 Vertical Mill',
            text: 'Envelope of 50" by 18" by 18"'
          },
          {
            title: 'Hurco TM10 Lathe',
            text: '10" chuck'
          },
          {
            title: 'EMCO Durga Lathe',
            text: '8" chuck'
          },
        ],
      },
      {
        subtitle: ['Industries', 'Served'],
        text: [
          'Pen Manufacturing has manufactured aluminum-machined components for the electronics, aerospace, electrical, and energy generation industries, to name a few. From large quantity small part orders to one-off large pieces, Pen can help manufacture it all. Integrate us into your supply chain process as your dedicated one-stop metal fabricator here in Los Angeles. Aluminum machining is one of our specialties - use the expertise of Pen Manufacturing team for all your aluminum machined parts requirements!',
          'Learn more about Pen Manufacturing\'s other fabrication services from the menu below:',
        ],
        links: [
          {
            name: 'Precision CNC Machining',
            url: '/services/machining/cnc-precision-machining'
          },
          {
            name: 'High Speed Machining',
            url: '/services/machining/high-speed-machining'
          },
          {
            name: 'Prototype/Short Run Custom Machining',
            url: '/services/machining/prototype-short-run-machining'
          },
        ],
        linksClass: '2xl:grid-cols-3',
        textAfter: [
          'Pencan machine many materials other than aluminum. Also, see our high-speed machining project portfolio.'
        ]
      }
    ],
  },
  {
    id: 'cnc-precision-machining',
    label: 'CNC / Precision Machining',
    content: [
      {
        title: 'CNC Precision Machining',
        text: [
          'Precision CNC machining is one of the many custom manufacturing services offered at our CNC machine shop in Southern California. To provide CNC machined parts with precision and tight tolerances that many industries require, we offer the machining experience from our staff and the best in CNC machines and technology.',
          'With over 200 combined years of experience machining, we offer CNC machining services for a variety of metals and shapes. Our CNC mills are programmed utilizing the latest in numerically controlled programming for Surfware. Surfcam, by Surfware, enables us to machine parts in an extremely efficient manner to each of our customer\'s requirements.',
        ],
        btn: true,
      },
      {
        images: [
          '/images/services/machining/milling_services.webp'
        ]
      },
      {
        subtitle: ['CNC Machinery Utilized in Our CNC Machine Shop'],
        text: [
          'If you\'re looking for a quality precision CNC machine shop in the Southern California area, our precision CNC machining services and 4 axis machining is handled in-house at our Anaheim location. We utilize the following state of the art equipment for our CNC precision machining and milling:'
        ],
        infoCards: [
          {
            title: 'Hurco VMX50 Vertical Mill',
            text: '4th Axis capability and 50" by 26" by 24" envelope',
          },
          {
            title: 'Hurco VMX42 Vertical Mill',
            text: '4th Axis capability and 42" by 24" by 24" envelope',
          },
          {
            title: 'Hurco VM3 Vertical Mill',
            text: 'An envelope of 50" by 18" by 18"',
          },
          {
            title: 'Hurco TM10 Lathe',
            text: '10" chuck',
          },
          {
            title: 'Whacheon Lathe',
            text: '12" chuck',
          },
          {
            title: 'FEMCO Durga',
            text: '10" chuck',
          },
        ],
        infoCardsClass: '2xl:grid-cols-3',
        textAfter: [
          'Additionally, we follow CAD and CAM drawings and specifications, meaning we can fulfill the requirements of our client\'s. Whether a low or high volume order of intricate machined parts, Pen Manufacturing has the tools and experience combined to create accurately machined parts to your needs.'
        ],
      },
      {
        subtitle: ['What is', 'CNC Machining?'],
        text: [
          'Computer Numerically Controlled or precision CNC machining was initially developed over 50 years ago by a group of machine tool builders involving machine work that needed to be completed for the U.S. Air Force. From its early inception, precision CNC machining was designed to consistently replicate and reproduce parts requiring multiple complex machining steps, eliminating the part-to-part variations of the human machinist/operator.',
          'The successful result of a CNC precision machining and 4 axis machining process relies on experienced CNC machining specialists to program the CNC procedure properly, since the entire process, once started, is automated.',
        ],
        images: [
          '/images/services/machining/cnc_machining.webp'
        ]
      },
      {
        subtitle: ['CNC Machining', 'Advantages'],
        text: [
          'CNC machining offers the following advantages:'
        ],
        infoCards: [
          {
            title: 'Low Labor Requirements and Costs',
            text: 'One experienced precision machining specialist, using a CNC machine, can perform the jobs of several people. Fewer errors on the finished component mean lower cost to produce parts.',
          },
          {
            title: 'Safer Production',
            text: 'The precision machining specialist monitors the process, but is not involved in performing the machining steps of the process, leading to a safer manufacturing environment. The precision CNC operator oversees the automated process and can stop the CNC machining, if a correction is required.',
          },
          {
            title: 'Highly Precise Production Parts',
            text: 'Extremely small tolerance variations, with the resulting components being virtually the same in all aspects.',
          },
          {
            title: 'Increased Productivity',
            text: 'Once the initial setup is done, precision CNC machining can literally continue 24 hours a day (limited only by cutter wear if applicable and the on-hand inventory of the raw material being used).',
          },
        ],
        infoCardWhite: true,
        infoCardsClass: 'order-1',
        images: [
          '/images/services/machining/cnc_machining_2.webp'
        ],
        imagesOrder: 'order-2',
        textAfter: [
          'Along with 4 axis machining, precision CNC machining and custom metal fabrications services, additional in-house capabilities at the Pen CNC machine shop in Southern California include but not limited to:'
        ],
        textAfterOrder: 'order-3',
        infoItems: [
          'Plumbing',
          'Hydraulic Assembly',
          'Electrical Wiring',
          'Glass-beading',
          'Painting',
          'Delivery to the Customer\'s site',
        ],
        infoItemsOrder: 'order-4',
      },
      {
        videos: [
          {
            videoImg: '/images/services/machining/cnc_video_1.webp',
            videoLink: 'https://www.youtube.com/embed/1Vv_w5vUia4',
            videoTitle: 'Precision CNC Small Parts',
            type: 'youtube',
          },
          {
            videoImg: '/images/services/machining/cnc_video_2.webp',
            videoLink: 'https://www.youtube.com/embed/KGw404_7KQU',
            videoTitle: 'CNC Machined Components',
            type: 'youtube',
          },
        ],
        videoClass: '2xl:grid-cols-2'
      }
    ],
  },
  {
    id: 'cnc-milling',
    label: 'CNC Milling',
    content: [
      {
        title: 'CNC Milling Services',
        text: [
          'Pen Manufacturing is the leading CNC milling facility in the Greater Los Angeles area offering CNC milling services throughout Orange County and Southern California. Our state-of-the-art CNC milling equipment allows us to meet even the most precise project specifications. With years of CNC milling experience in this highly specialized field, Pen Manufacturing\'s CNC milling team will deliver superior milled components and parts to perfectly match your requirements.'
        ],
        btn: true,
      },
      {
        images: [
          '/images/services/machining/milling_services.webp'
        ]
      },
      {
        subtitle: ['CNC Milled', 'Parts'],
        text: [
          'CNC milling can create parts and components to fit extremely precise dimensions and requirements. Using computer-guided tools, the fabrication process is completed quickly and with supreme accuracy. Pen Manufacturing utilizes several state-of-the-art Hurco 4-axis vertical mills to provide the finest CNC milling services in Southern California. Pen is ready and capable of handling high-quantity orders without sacrificing individual part quality. All of our CNC mills operate on Surfware Surfcam numerical control programming systems, letting us machine parts with extraordinary efficiency. Our CNC machining & milling centers allow the fabrication of parts in sizes as large as 50" by 26" by 24" to meet any customer specifications.',
          'Pen Manufacturing\'s in-house Hurco multi-axis machines are:',
        ],
        infoCards: [
          {
            title: 'VM3 Vertical Mill',
            text: '50" x 16" x 18" envelope',
          },
          {
            title: 'VMX50 Vertical Mill',
            text: '4th Axis capability and 50" by 26" by 24" envelope',
          },
          {
            title: 'VMX42 Vertical Mill',
            text: '4th Axis capability and 42" by 24" by 24" envelope',
          },
        ],
        infoCardsClass: '2xl:grid-cols-3',
        textAfter: [
          'Pen Manufacturing\'s CNC milling California services can be tailored to match the exact needs of even your most precise fabrication project. We offer full-service CNC milling of a variety of materials, as well as CNC prototyping to ensure that the finished product will meet or exceed your expectations.',
          'Pen Manufacturing creates top-quality CNC-milled components and parts and will complete your project quickly, efficiently, and at a low overall cost. Client satisfaction is our number one concern. Take advantage of our skills and resources to improve your supply chain processes with near-finished CNC Milled metal components.',
        ]
      },
      {
        subtitle: ['CNC Milling', 'Materials'],
        text: [
          'Pen Manufacturing has wide-ranging knowledge and experience milling the following materials:'
        ],
        links: [
          {
            name: 'Aluminum',
            url: '/materials/aluminium',
          },
          {
            name: 'Stainless Steel',
            url: '/materials/stainless-steel',
          },
          {
            name: 'Steel',
            url: '/materials/steel',
          },
          {
            name: 'Brass',
            url: '/materials/brass',
          },
          {
            name: 'Bronze',
            url: '/materials/bronze',
          },
          {
            name: 'Plastics',
            url: '/materials/plastics',
          },
        ],
        linksClass: '2xl:grid-cols-3',
        textAfter: [
          'Contact Pen Manufacturing of Southern California today to learn more about our world-class CNC milling and supply chain services in the Greater Los Angeles area.'
        ]
      }
    ],
  },
  {
    id: 'cnc-turning',
    label: 'CNC Turning',
    content: [
      {
        title: 'Precision CNC Turning',
        text: [
          'Pen Manufacturing is an industry leader in CNC turning in the Orange County area. Our superior CNC turning services allow us to fabricate parts and components from a variety of materials, all with unparalleled accuracy and precision. No other facility in the area can match our level of excellence in CNC turning services.'
        ],
        btn: true,
      },
      {
        subtitle: ['Precision', 'Turning'],
        text: [
          'Utilizing computer-automated lathes and machinery, we ensure precise repeatability of fabricated parts and components. Pen Manufacturing uses state-of-the-art Hurco Whacheon, and FEMCO CNC lathes and CNC durgas, run by Surfware\'s Surfcam numerical control programming software.',
          'Using this high quality equipment in our machine shop enables us to meet our customers\' most exact specifications with perfect precision. Our precision CNC turning processes can be uniquely tailored for any application, so no matter what your project requires, Pen Manufacturing will work with you to create the ideal CNC turning process for your needs.',
          'Our CNC turning services are ideal for small- to medium-volume runs for your custom components, and we also offer prototype CNC turning to guarantee that the finished product meets your specifications. Pen Manufacturing\'s CNC turning facility will deliver superior fabricated parts for any application, quickly, efficiently, and at low cost. If you are looking for top quality CNC milling in southern California, look no further than Pen Manufacturing.',
        ],
        images: [
          '/images/services/machining/turning.webp'
        ],
      },
    ],
  },
  {
    id: 'full-service-machine-shop',
    label: 'Full Service Machine shop',
    content: [
      {
        title: 'Sheet Metal Machine Shop',
        text: [
          'Pen Manufacturing of Southern California maintains a full service job shop to meet nearly any customer\'s machining needs. Our Los Angeles-area shop is housed in an 8,000-square-foot facility, employs over 20 highly skilled workers, and utilizes a wide variety of state-of-the-art equipment. Our experienced job shop employees and high-tech resources make it possible for us to deliver CNC machining, metal fabrication, precision machining, production machining, MIG welding, TIG welding, and many other services. Pen Manufacturing will meet or exceed even the most precise manufacturing requirements for any application.'
        ],
        btn: true,
      },
      {
        subtitle: ['Our Machine', 'Shop Equipment'],
        text: [
          'Our full service job shop includes an exceptional array of world-class equipment, including CNC machinery, welding equipment, and a variety of additional machinery to help us complete any unique project. Pen Manufacturing\'s California job shop is equipped with:'
        ],
        infoCards: [
          {
            title: 'Hurco VMX42 4-Axis Vertical Mill',
            text: '42" by 24" by 24" work envelope',
          },
          {
            title: 'Hurco VM3 Vertical Mill',
            text: '50" by 18" by 18" work envelope',
          },
          {
            title: 'Hurco TM10 lathe',
            text: '10" chuck',
          },
          {
            title: 'Whacheon lathe',
            text: '12" chuck',
          },
          {
            title: 'FEMCO durga lathe',
            text: '8" chuck',
          },
          {
            title: '6 MIG and TIG welding stations',
            text: '',
          },
          {
            title: 'Cobramatic aluminum "Push-Pull" station',
            text: '',
          },
          {
            title: 'Automatic cut-off/band saw',
            text: '',
          },
          {
            title: 'Support equipment',
            text: 'Including fork lifts and hand grinders',
          },
          {
            title: 'Vertical turret lathe',
            text: '54" round by 24" tall capacity and 50" of swing',
          },
          {
            title: '15" by 120" lathe',
            text: '',
          },
          {
            title: '12" by 80" lathe',
            text: '',
          },
          {
            title: '4 Knee mills',
            text: '',
          },
          {
            title: '90-ton ironworker',
            text: '',
          },
          {
            title: '1 HYD-MECH miter saw',
            text: '',
          },
          {
            title: '3-ton bridge crane',
            text: '',
          },
        ],
        infoCardsClass: 'order-1 2xl:grid-cols-3',
        images: [
          '/images/services/machining/machine_shop.webp'
        ],
        imagesOrder: 'order-2',
      },
      {
        subtitle: ['Manufacturing', 'Capabilities'],
        text: [
          'Our California job shop gives us superbly flexible capabilities. Pen Manufacturing can complete short production runs or component prototypes in as little as 2-3 days, and production runs up to 5,000 units can easily be handled in-house. In addition to our machining, fabrication, and welding services, our job shop offers a variety of other services as well, including hydraulic assembly, electrical wiring, plumbing, glass-beading, and delivery of your finished product.'
        ],
      },
      {
        secondTitle: 'Materials We Can Fabricate',
        materials: [
          {
            name: 'Aluminium',
            image: '/images/services/aluminium.webp',
          },
          {
            name: 'Stainless Steel',
            image: '/images/services/stainless_steel.webp',
          },
          {
            name: 'Carbon Steel',
            image: '/images/services/carbon_steel.webp',
          },
          {
            name: 'Brass',
            image: '/images/services/brass.webp',
          },
          {
            name: 'Bronze',
            image: '/images/services/bronze.webp',
          },
          {
            name: 'Nickel',
            image: '/images/services/nickel.webp',
          },
          {
            name: 'Cast Steel',
            image: '/images/services/cast_steel.webp',
          },
          {
            name: 'Copper',
            image: '/images/services/cooper.webp',
          },
        ],
        textAfter: [
          'The list above represents a common list of metals that we use regularly to fabricate your products. If there is another metal that you require for your application please do not hesitate to get in touch with us.'
        ],
      },
      {
        links: [
          {
            name: 'Kitting Solutions',
            url: '/services/machining/full-service-machine-shop/kitting-solutions'
          },
        ]
      }
    ],
  },
  {
    id: 'high-speed-machining',
    label: 'High Speed Machining',
    content: [
      {
        title: 'High Speed Machining',
        text: [
          'Since the early 1980s, Pen Manufacturing has been offering extensive capabilities in precision CNC machining, machining, welding and custom fabrication services to the Los Angeles area. One area of precision CNC machining that we have available to all of our Los Angeles area customers is high speed machining, utilizing our CNC vertical mills and support equipment.',
          'Pen Manufacturing has the in-house capability to provide CNC machining in our Los Angeles area machine shop and to perform high speed machining on stainless steel, aluminum and carbon steel. The equipment used for high speed machining includes:',
        ],
        highlight: 'Pen Manufacturing',
        infoCards: [
          {
            title: 'Hurco VMX42 Vertical Mill',
            text: '4th Axis capability and 42" by 24" by 24" envelope',
          },
          {
            title: 'Hurco VMX50 Vertical Mill',
            text: '4th Axis capability and 50" by 26" by 24" envelope',
          },
          {
            title: 'Hurco VM3 Vertical Mill',
            text: 'An envelope of 50" by 18" by 18"',
          }
        ],
        infoCardsClass: '2xl:grid-cols-3',
        btn: true,
      },
      {
        images: [
          '/images/services/machining/high_speed.webp'
        ]
      },
      {
        subtitle: ['About High Speed', 'Machining'],
        text: [
          'High speed machining is a continuously evolving technique of machining. High speed machining calls for a blend of various machining methods, which results in the fast manufacture of high quality machined parts. The key components to successful high speed precision machining are the CNC machine, the cutting tool, a high quality CAM program/system, and the material being machined. As high speed machining has evolved, the available cutting tool technology has advanced. Specialized cutting tools for high speed machining have a completely different set of cutting characteristics when compared to traditional cutting tools. Other factors include efficient area clearance, keeping the load on the CNC cutting tool as consistent as possible while minimizing any sudden changes in the cutting direction. Pen Manufacturing utilizes the latest version of Surfcam Velocity, from Surfware, for its high speed precision machining.',
          'The manufacturing staff at Pen Manufacturing has over 210 combined years of experience in all facets of precision CNC machining, including high speed machining. We are leaders in CNC machining in Los Angeles and have the necessary in-house equipment at our Los Angeles CNC Machining jobshop and team members skilled in high speed machining technology, allow us here at Pen Manufacturing to quote on your high speed machining requirements!',
          'Learn more about Pen Manufacturing\'s other fabrication services from the menu below:',
        ],
        highlight: 'Pen Manufacturing',
        links: [
          {
            name: 'Precision CNC Machining',
            url: '/services/machining/cnc-precision-machining',
          },
          {
            name: 'Aluminum Machining',
            url: '/services/machining/aluminum-machining',
          },
          {
            name: 'Prototype & Short Run Machining',
            url: '/services/machining/prototype-short-run-machining',
          },
        ],
        linksClass: '2xl:grid-cols-3'
      }
    ],
  },
  {
    id: 'prototype-short-run-machining',
    label: 'Prototype/Short Run Machining',
    content: [
      {
        title: 'Prototype / Short Run Machining',
        text: [
          'One of the many in-house capabilities that Pen Manufacturing has available to our customers is the ability to prototype your complex parts and produce it in short run (small volume) quantities. Using the same equipment that is utilized for our precision CNC machining production processes, Pen Manufacturing can accurately deliver a prototype or a small volume run of your machined component. Are you looking for a supply chain partner in manufacturing a product that requires CNC machining? Look no further than Pen Manufacturing to assist your supply chain needs. We are here to support your processes from initial design to near-finish part delivery.'
        ],
        highlight: 'Pen Manufacturing',
        btn: true,
      },
      {
        images: [
          '/images/services/machining/prototype_1.webp'
        ]
      },
      {
        subtitle: ['Prototype Machine', 'Shop'],
        text: [
          'Prototyping can be handled in a variety of ways. If you have an existing CAD/CAM file or CNC program, we obviously have the experienced staff and in-house equipment to create your prototype. On the other hand, if all you have is a rough idea of the part, we can take your hand-drawn sketch and run with that as well.',
          'Pen Manufacturing can provide design assistance, engineering assistance, determine the manufacturability of the component, and recommend the best material for your part. Our knowledgeable staff has years of experience with CNC machining in southern California using AutoCAD to design and SURFCAM to program the CNC machines. You can be confident that, with over a quarter of a century of combined machining and prototyping experience, the prototype we deliver will meet and exceed your expectations. Once the prototype piece is approved, a short run can be handled quickly and efficiently.'
        ],
        highlight: 'Pen Manufacturing',
        images: [
          '/images/services/machining/prototype_2.webp'
        ],
      },
      {
        text: [
          'From a rough idea to a CAD file, take advantage of Pen Manufacturing\'s years of experience in precision machining in southern California and let us develop and produce your unique prototyping/short run product! Just call or email us today.'
        ],
        highlight: "Pen Manufacturing's years of experience",
        links: [
          {
            name: 'Precision CNC Machining',
            url: '/services/machining/cnc-precision-machining',
          },
          {
            name: 'High Speed Machining',
            url: '/services/machining/high-speed-machining'
          },
          {
            name: 'Aluminum Machining',
            url: '/services/machining/aluminum-machining'
          },
        ],
        linksClass: '2xl:grid-cols-3'
      }
    ],
  },
  {
    id: 'stainless-steel-machining',
    label: 'Stainless Steel Machining',
    content: [
      {
        title: 'Stainless Steel Machining',
        text: [
          'Pen Manufacturing is an experienced full service stainless steel machine shop in Southern California. A popular metal for manufacturing projects, stainless steel offers the strength of carbon steel, high corrosion-resistance, and high threshold for wear that many customers demand for their projects. Stainless steel provides great benefits to customers, but it presents unique machining difficulties. Pen Manufacturing\'s over 200 combined years of machining experience are capable of meeting these and other challenges.'
        ],
        btn: true,
      },
      {
        images: [
          '/images/services/machining/stainless_steel_machining.webp'
        ]
      },
      {
        subtitle: ['Stainless Steel Grades', 'We Work With'],
        text: [
          'Our stainless steel machining specialists are experts in machining precisely while carefully maintaining strict tolerances, monitoring and adapting to the demands of each stainless steel type (including 304L, 316L, and other alloys), and providing customers with finished stainless machined parts of exceeding quality. Pen Manufacturing excels at machining stainless steel using a number of industry-leading tools, including:'
        ],
        infoCards: [
          {
            title: 'Stainless Steel',
            text: '300 Series, including (but not limited to) 304, 316, 321, 310, 301, 347, 317; 17 Series, such as 17-7 PH, 17-5 PH, and 17-4 PH; in all shapes'
          }
        ],
      },
      {
        subtitle: ['Machinery Used For', 'Stainless Machined Parts'],
        infoCards: [
          {
            title: 'Hurco VMX50 Vertical Mill',
            text: '4th Axis capability and 50" by 26" by 24" envelope',
          },
          {
            title: 'Hurco VMX42 Vertical Mill',
            text: '4th Axis capability and 42" by 24" by 24" envelope',
          },
          {
            title: 'Hurco VM3 Vertical Mill',
            text: 'Envelope of 50" by 18" by 18"',
          },
          {
            title: 'Hurco TM10 Lathe',
            text: '10" chuck',
          },
          {
            title: 'EMCO Durga Lathe',
            text: '8" chuck',
          },
        ],
        infoCardsClass: '2xl:grid-cols-3',
      },
      {
        subtitle: ['Industries', 'Served'],
        text: [
          'For decades, Pen Manufacturing has offered solutions for stainless steel machining projects of any scale or scope. Our work for aerospace, electronic, robotic, transportation, and other industries makes us a manufacturing leader in fabricating, milling, welding, and machining. Learn how we can provide these services to you by contacting one of our experienced staff.'
        ]
      }
    ],
  },
];
