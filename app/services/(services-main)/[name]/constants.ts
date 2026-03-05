export type ServiceGroup = {
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
    textAfter?: string[];
    subtitleImage?: string;
    subtitleImageClass?: string;
    textClass?: string;
    subtitleClass?: string;
    imagesArrClass?: string;
    imageClass?: string;
  }[];
}

export const services: ServiceGroup[] = [
  {
    id: 'metal-fabrication',
    label: 'Metal Fabrication',
    content: [
      {
        title: 'Custom Metal Fabrication',
        text: [
          'Pen Manufacturing provides a complete range of custom metal fabrication projects to the greater Los Angeles and Orange County, CA area including Anaheim and San Diego. Metal fabrication is a value added process that involves the construction of component pieces for machines and structures from various raw materials. As one of the most experienced custom fabricators in California, metal fabrication at Pen Manufacturing includes stainless steel, aluminum, carbon steel, structural steel and custom fabrication. We provide every type of metal fabrication, from sheet metal to heavy metal fabrication.'
        ],
        btn: true,
      },
      {
        images: ['/images/services/custom_metal_fabrication.webp'],
      },
      {
        subtitle: ['Structural', 'Metal Fabrication'],
        text: [
          'Pen Manufacturing is a premier metal fabricator in Southern California. We fabricate projects of all sizes and scopes here in our Anaheim facility, shipping them out ready for assembly or installation. Many of the metal fabrication projects we do involve the construction of structures such as enclosures, platforms, test equipment, structural frames, staircases, or components, such as housings and fairings, or whatever the customer\'s drawing, concept, or CAD file may call for.',
        ],
      },
      {
        subtitle: ['Metal Fabrication', 'Company'],
        text: [
          'Pen Manufacturing possesses metal fabrication capabilities to assist your custom supply chain processes. We are able to handle large quantity jobs without sacrificing quality. Let us contribute our decades of experience to your custom supply chain manufacturing process, utilizing our resources including our Anaheim-based fully-fledged fabrication shop. Combining our staff\'s concepts and skills in precision machining and welding for the metal fabrication industry, Pen Manufacturing is able to help alleviate even the most difficult supply chain challenges.',
          'Steel fabrication and machine shops have overlapping capabilities, but custom metal fabrication shops generally concentrate on the metal preparation, TIG welding, and MIG welding and assembly aspect while the machine shop is more concerned with the precision machining of parts. Metal fabrication at Pen Manufacturing is in a unique position because we have extensive experience in the welding and fabrication field and at the same time have considerable experience making precision machined parts.',
        ],
      },
      {
        subtitle: ['Metal Fabrication', 'Materials'],
        text: [
          'The Pen Manufacturing team has wide-ranging knowledge and experience fabricating the following metals:',
        ],
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
          'The above is a partial list of the metals that we can use to fabricate your products. If you\'re interested in using another metal that is not listed here above for your application, don\'t hesitate to contact us!',
        ],
      },
      {
        videos: [
          {
            videoLink: 'https://www.youtube.com/embed/n9dCpK_48Kg',
            videoTitle: 'Metal fabrication services',
            videoImg: '/images/services/metal_fabrication_services.webp',
            type: 'youtube',
          },
          {
            videoLink: 'https://www.youtube.com/embed/_bqI2P-SBjI',
            videoTitle: 'stainless steel project',
            videoImg: '/images/services/stainless_steel_project.webp',
            type: 'youtube',
          },
          {
            videoLink: 'https://www.youtube.com/embed/F86fS5Krans',
            videoTitle: 'mig structural steel',
            videoImg: '/images/services/mig_structural_steel.webp',
            type: 'youtube',
          },
        ],
      },
      {
        subtitle: ['Metal Fabrication', 'Projects'],
        subtitleImage: '/images/services/metal_fabrication_projects.webp',
        text: [
          'Examples of customer projects, components, and parts for various metal fabrication clients include:',
        ],
        subtitleClass: 'flex 2xl:flex-col',
        textClass: '2xl:w-full',
        subtitleImageClass: '2xl:w-full h-[345px] md:h-[345px] 2xl:h-[345px]',
        infoCards: [
          {
            title: 'Wastewater Treatment Industry',
            text: 'biological wastewater system, fully integrated and packaged; entire metal fabrication and assembly were done at Pen Manufacturing, and ready for operation when the system was delivered to the customer\'s job site; nine tons when finished',
          },
          {
            title: 'Air Pollution Control Industry',
            text: '11-ton chamber constructed of 1/4 inch and 3/16 inch steel plate; steel fabrication done completely and constructed at our facility, sandblasted at a partner\'s site, and then painted by Pen Manufacturing at the customer\'s location',
          },
          {
            title: 'Custom Plastics Industry',
            text: 'hydraulically-actuated clamping device, designed by Pen Manufacturing staff using AutoCAD from customer sketches',
          },
          {
            title: 'Medical Laser Industry',
            text: 'application-specific electrical enclosure; Pen Manufacturing purchased a "stock" enclosure and reworked it for the customer\'s requirements',
          },
          {
            title: 'Plastics Industry',
            text: 'custom material handling cart; completely designed to the customer\'s specifications and built at our facility',
          },
          {
            title: 'Fiberglass Pipe Industry',
            text: 'custom-built mandrel. 24\' long x 6\' round that will be used to make fiberglass pipe.',
          },
        ],
        textAfter: [
          'Since 1982, Pen Manufacturing has been delivering custom metal fabrication assemblies, components, and parts to countless industries and applications across Southern California. No metal fabrication job is too small or too large for us with your specific needs! Contact us for more information on our custom supply chain & metal fabrication in Anaheim.'
        ],
      },
      {
        links: [
          {
            name: 'Aluminium Fabrication',
            url: '/services/metal-fabrication/aluminium-fabrication',
          },
          {
            name: 'Carbon Steel Fabrication',
            url: '/services/metal-fabrication/carbon-steel-fabrication',
          },
          {
            name: 'Stainless Steel Fabrication',
            url: '/services/metal-fabrication/stainless-steel-fabrication',
          },
          {
            name: 'Structural Steel Fabrication',
            url: '/services/metal-fabrication/structural-steel-fabrication',
          },
        ]
      }
    ],
  },
  {
    id: 'welding',
    label: 'Welding',
    content: [
      {
        title: 'Welding Services',
        verticalSpace: 'reverse',
        imageHeight: 'h-[240px] md:h-[350px] 2xl:h-[389px]',
        image: '/images/services/welding_services.webp',
        text: [
          'Pen Manufacturing, operating since 1982, offers the most innovative welding solutions to any challenging applications. Our highly trained welders based here in Anaheim California have 145 years of combined experience and are experts in TIG, MIG, aluminum, and stainless steel welding.',
          'Serving the Southern California area, our 8,000 square foot facility is equipped with six MIG and TIG welding stations. Using only state-of-the-art equipment and materials, Pen Manufacturing continuously researches new concepts and developments in welding technology.',
          'Many years of knowledge and experience allow us to serve a diverse line of industries. We offer short- to medium-runs and our capabilities span from small machined parts to large welded assemblies weighing 20,000 pounds.',
        ],
        btn: true,
      },
      {
        subtitle: ['AWS Certified Welding', 'In Orange County'],
        images: [
          '/images/services/orange_county.webp',
        ],
        textAfter: [
          'Pen Manufacturingis a welding AWS D1.1 Structural Steel, AWS D1.2 Aluminum, and AWS D1.6 Stainless Steel certified facility in the Orange County area. In addition, a stringent in-house quality control is enforced to ensure only the highest quality products are manufactured.',
          'Committed to our customers\' success, the Pen team will support you from concept to completion. We will recommend the most cost-effective materials for any precision welding application.',
          'The staff at Pen Manufacturing is readily available to assist in questions regarding any custom welding applications. Contact us today and learn more about our complete turnkey services.',
        ],
      },
      {
        options: [
          { id: '01', label: 'GTAW' },
          { id: '02', label: 'GMAW' },
          { id: '03', label: 'GMAW Spray' },
          { id: '04', label: 'FCAW' },
          { id: '05', label: 'SMAW' },
          { id: '06', label: 'TIG' },
          { id: '07', label: 'MIG' },
          { id: '08', label: 'Stainless Steel' },
          { id: '09', label: 'Sanitary Grade' },
          { id: '10', label: 'AWS' },
          { id: '11', label: 'NADCAP' },
          { id: '12', label: 'Los Angeles City Certified' },
        ],
      },
      {
        videos: [
          {
            videoLink: 'https://www.youtube.com/embed/eATvrB0s4K8',
            videoTitle: 'Welding services overview',
            videoImg: '/images/services/welding_services_overview.webp',
            type: 'youtube',
          },
          {
            videoLink: 'https://www.youtube.com/embed/TmJZ6zycj7Q',
            videoTitle: 'Watch our live welding work',
            videoImg: '/images/services/watch_our_live_welding_work.webp',
            type: 'youtube',
          },
          {
            videoLink: 'https://www.youtube.com/embed/x18FcET5aO8',
            videoTitle: 'Finished machining & welding project',
            videoImg: '/images/services/finishing_machining_and_welding_project.webp',
            type: 'youtube',
          },
        ],
      },
      {
        links: [
          {
            name: 'Aluminium Welding',
            url: '/services/welding/aluminium-welding',
          },
          {
            name: 'MIG Welding',
            url: '/services/welding/mig-welding',
          },
          {
            name: 'Stainless Steel Welding',
            url: '/services/welding/stainless-steel-welding',
          },
          {
            name: 'TIG Welding',
            url: '/services/welding/tig-welding',
          },
        ]
      }
    ],
  },
  {
    id: 'sheet-metal',
    label: 'Sheet Metal',
    content: [
      {
        title: 'Sheet Metal Fabrication',
        text: [
          'Pen Manufacturing of Southern California maintains a full service job shop to meet nearly any customer\'s machining needs. Our Los Angeles-area shop is housed in an 8,000-square-foot facility, employs over 20 highly skilled workers, and utilizes a wide variety of state-of-the-art equipment. Our experienced job shop employees and high-tech resources make it possible for us to deliver CNC machining, metal fabrication, precision machining, production machining, MIG welding, TIG welding, and many other services. Pen Manufacturing will meet or exceed even the most precise manufacturing requirements for any application.',
        ],
        verticalSpace: 'normal',
        imageHeight: 'h-[244px] md:h-[321px] 2xl:h-[354px]',
        image: '/images/services/sheet_metal.webp',
        btn: true,
      },
      {
        subtitle: ['Sheet Metal', 'Services Provided'],
        infoCards: [
          {
            title: 'Cutting',
            text: 'Sheet metal can be cut to size and shape using a variety of methods, including shearing, laser cutting, and waterjet cutting',
          },
          {
            title: 'Forming',
            text: 'Sheet metal can be formed into complex shapes using a variety of methods, including stamping, drawing, and hydroforming',
          },
          {
            title: 'Bending',
            text: 'Sheet metal can be bent into a variety of shapes using bending brakes and other specialized equipment',
          },
          {
            title: 'Welding',
            text: 'Sheet metal can be welded together using a variety of methods, including arc welding, MIG welding, and TIG welding',
          },
          {
            title: 'Finishing',
            text: 'Sheet metal can be finished using a variety of methods, including painting, powder coating, and plating',
          },
        ],
      },
      {
        subtitle: ['Industries', 'Served'],
        infoItems: [
          'Aerospace', 'Automotive', 'Construction', 'Electronics', 'Medical devices', 'Transportation',
        ],
      },
      {
        images: [
          '/images/services/industries_served_1.webp',
          '/images/services/industries_served_2.webp'
        ],
        imagesArrClass: 'flex-col md:flex-row',
        imageClass: 'h-[269px] md:h-[269px] 2xl:h-[269px]',
      }
    ],
  },
  {
    id: 'machining',
    label: 'Machining',
    content: [
      {
        title: 'Precision Machining Services',
        secondTitle: 'Anaheim\'s Leading Machine Shop',
        text: [
          'Pen Manufacturing offers unparalleled knowledge in complex precision machining, offering high quality machining services from our in-house precision machine shop in the Anaheim / Los Angeles area. We strive to serve a diverse line of industries by taking a proactive approach to new product development.',
        ],
        imageHeight: 'h-[240px] md:h-[389px] order-1',
        image: '/images/services/machining.webp',
        textAfter: [
          'In addition, we are capable of machining components in a broad array of sizes, dimensions and shapes. Our machining experience in our precision machine shop spans across a variety of materials to accommodate your specialized field including aluminum, stainless steel, bronze and brass. Pen Manufacturing is committed to providing superior quality, turnkey prototype components, bringing your design from idea to print to production. Our expertise is tight tolerances and the manufacturing of intricate machined parts.',
          'At Pen Manufacturing, we understand the value of continually re-investing in equipment upgrades to ensure the manufacturing of only the highest quality precision machined products.',
          'As a complete Anaheim precision machining shop, Pen Manufacturing is focused on excellent customer service throughout the Southern California and Orange County area. We are here to serve you. Operating since 1982, our success in this industry has been based upon honesty and integrity.',
          'Let our experts solve your most challenging machining applications. Contact Pen Manufacturing today and learn more about our precision machining services.',
        ],
        btn: true,
      },
      {
        videos: [
          {
            videoLink: 'https://www.youtube.com/embed/XnAK8p6dNu4',
            videoTitle: 'Pen machining capabilities',
            videoImg: '/images/services/pen_machining_capabilities.webp',
            type: 'youtube',
          },
          {
            videoLink: 'https://www.youtube.com/embed/Z8BiWcXDpKc',
            videoTitle: 'Watch our live machining work',
            videoImg: '/images/services/watch_our_live_machining_work.webp',
            type: 'youtube',
          },
          {
            videoLink: 'https://www.youtube.com/embed/Q-3FA41iJzs',
            videoTitle: 'past machining & welding project',
            videoImg: '/images/services/past_machining_and_welding_projects.webp',
            type: 'youtube',
          },
        ],
      },
      {
        links: [
          {
            name: '4-axis machining',
            url: '/services/machining/4-axis-machining',
          },
          {
            name: 'Aluminum Machining',
            url: '/services/machining/aluminum-machining',
          },
          {
            name: 'CNC / Precision Machining',
            url: '/services/machining/cnc-precision-machining',
          },
          {
            name: 'CNC Milling',
            url: '/services/machining/cnc-milling',
          },
          {
            name: 'CNC Turning',
            url: '/services/machining/cnc-turning',
          },
          {
            name: 'Full Service Machine shop',
            url: '/services/machining/full-service-machine-shop',
          },
          {
            name: 'High Speed Machining',
            url: '/services/machining/high-speed-machining',
          },
          {
            name: 'Prototype/Short Run Machining',
            url: '/services/machining/prototype-short-run-machining',
          },
          {
            name: 'Stainless Steel Machining',
            url: '/services/machining/stainless-steel-machining',
          },
        ],
      }
    ],
  },
  {
    id: 'finishing',
    label: 'Finishing',
    content: [
      {
        title: 'Finishing Services',
        image: '/images/services_finishing_assembling.webp',
        imageHeight: 'h-[244px] md:h-[321px]',
        text: [
          'PEN Manufacturing combines innovative techniques with decades of expertise to provide exceptional metal finishing services that elevate your components to the next level. Whether you\'re looking to enhance durability, improve performance, or achieve a polished aesthetic, our comprehensive finishing solutions ensure your parts are ready to excel in any application.',
          'Metal finishing does more than enhance a part\'s appearance — it improves durability, boosts performance, and extends the product\'s lifecycle. That\'s why we offer a comprehensive range of finishing services tailored to meet the diverse needs of our partners across industries.',
          'Our company continuously invests in technology and operational efficiency to provide top-quality finishes while reducing costs and turnaround times.',
        ],
        btn: true,
      },
      {
        subtitle: ['Metal Finishing', 'Services'],
        text: [
          'As a full-service manufacturing company based in Southern California, PEN Manufacturing oversees every step of the fabrication process, including the finishing touches. Explore the variety of metal finishing options we offer below:',
        ],
        infoItems: [
          'Anodizing', 'Powder Coating', 'Galvanizing', 'Heat Treating', 'Military Coatings', 'E-Coating', 'Silk Screening',
        ],
      },
      {
        subtitle: ['Get In Touch With Us'],
        text: [
          'With over 40 years of expertise and a commitment to excellence, PEN Manufacturing supports industries ranging from aerospace to healthcare. Located in Anaheim, California, we’re here to provide solutions that help your business thrive. Contact us today to discuss your next project.',
        ],
      },
      {
        options: [
          { id: '01', label: 'Deburr' },
          { id: '02', label: 'Jitterbug' },
          { id: '03', label: 'Belt Sander' },
          { id: '04', label: 'Passivate in House' },
          { id: '05', label: 'Timesaver' },
          { id: '06', label: 'Bead Blast' },
          { id: '07', label: 'Grinding' },
          { id: '08', label: 'Disk Sand' },
          { id: '09', label: 'Polish-#4' },
          { id: '10', label: 'Polish-2B' },
          { id: '11', label: 'Line Grain' },
          { id: '12', label: 'Polish-FG' },
        ],
      },
    ],
  },
];
