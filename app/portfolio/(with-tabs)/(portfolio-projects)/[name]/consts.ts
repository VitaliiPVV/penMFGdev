export type ProjectData = {
  id: string;
  label: string;
  content: {
    title?: string;
    subtitle?: string[];
    text: string[];
    video?: {
      videoLink: string;
      videoImg: string;
    };
    images?: string[];
  }[]
};

export const projectsData: ProjectData[] = [
  {
    id: 'hyperloop-test-sled',
    label: 'Hyperloop Test Sled',
    content: [
      {
        title: 'Hyperloop Test Sled',
        text: [
          'Back in 2016, we were tasked by one of the Hyperloop teams to build their initial test sled. They used the sled we built to prove out their propulsion technology... and it worked! The picture below is the metal sleds we made sitting on display in a museum in Venice, Italy that was recently shared with the team.',
        ],
      },
      {
        subtitle: [
          'Hyperloop Propulsion', 'Test Sled Video'
        ],
        text: [
          'The video below is from the Hyperloop propulsion test our manufactured metal sleds were used.',
        ],
        video: {
          videoLink: 'https://www.youtube.com/embed/0IOVyueqiRc',
          videoImg: '/images/hyperloop_test_sled_video.avif',
        }
      }
    ]
  },
  {
    id: '1000-holes',
    label: '1000 Holes',
    content: [
      {
        title: 'Custom Fabrication for Food Industry',
        text: [
          'A specialty foods company had challenges with a specific product they were trying to make. We discovered a way to make a special "Extruder" head for one of their processes. We drilled 1000 holes at .017 diameter through a 1/4" thick stainless steel housing. This upgrade in tooling exceeded their expectations and we also made some identical items for a plant they own is South America.',
        ],
        images: [
          '/images/portfolio/1000_holes.webp'
        ],
      }
    ]
  },
  {
    id: 'angel-stadium-of-anaheim',
    label: 'Angel Stadium of Anaheim',
    content: [
      {
        title: 'Custom Steel Installation',
        text: [
          'In March 2018, we recieved a call from the company that was hired to install the new state-of-the-art sound system at Angel Stadium of Anaheim, home of Major League Baseball\'s Los Angeles Angels. As the company approached the last set of speakers to install over the new LED light walls, they needed some custom steel work for a special speaker mount design. The pictures below are of the custom speaker arrays at the right-field light wall.',
          'Our team redesigned the system for ease of installation and in less than 2 weeks it was ready to deliver. We even had time to paint it "Angel Stadium" green!'
        ],
        images: [
          '/images/portfolio/angel_stadium_of_anaheim_1.webp',
          '/images/portfolio/angel_stadium_of_anaheim_2.webp',
          '/images/portfolio/angel_stadium_of_anaheim_3.webp',
        ],
      }
    ]
  },
  {
    id: 'bio-boxes-and-clarifiers',
    label: 'Bio Boxes & Clarifiers',
    content: [
      {
        title: 'Custom Designed Process Equipment',
        text: [
          'A Local Chemical Engineering Company utilizes our manufacturing services to build custom designed process equipment. We provide all of the materials, fabrication services, sandblast and paint for them. When the projects leave our plant they are ready to install.',
        ],
        images: [
          '/images/portfolio/bio_boxes_and_clarifiers.webp'
        ],
      }
    ]
  },
  {
    id: 'biomixers',
    label: 'Biomixers',
    content: [
      {
        title: 'Fabricated Pond Aeration Equipment',
        text: [
          'Biomixer used to build "Floating" pond aeration equipment. Over the years we were contracted by Biomixer to build their units complete. We were responsible for the machining, welding and fabrication of various components. After all the components were built we assembled then painted the completed systems.',
        ],
        images: [
          '/images/portfolio/biomixers.webp'
        ],
      }
    ]
  },
  {
    id: 'caltech',
    label: 'Caltech',
    content: [
      {
        title: 'Fabricated Aluminum Pieces for Caltech',
        text: [
          'Through the years we have provided a group of engineers/scientists at Caltech various Fabricated pieces. This particular project is made of aluminum, where we provided all the materials. Some waterjet cutting, rolling, machining, and welding and when completed we had it anodized black.',
        ],
        images: [
          '/images/portfolio/caltech.webp'
        ],
      }
    ]
  },
  {
    id: 'grating-project',
    label: 'Grating Project',
    content: [
      {
        title: 'Custom Stainless Steel Grating',
        text: [
          'A local "specialty bread" company had a "chiller room" that required maintenance platforms. We were contracted to design the 2 internal layers of decking and provide all of the component pieces. Another company installed all of the items we supplied. Over 1,200 square feet of stainless steel decking was provided by us for this project. We supplied the grating, some posts ladders and various angle pieces to complete this project.',
        ],
        images: [
          '/images/portfolio/grating_project_1.webp',
          '/images/portfolio/grating_project_2.webp',
        ],
      }
    ]
  },
  {
    id: 'plastic-welder',
    label: 'Plastic Welder',
    content: [
      {
        title: '4 Station Plastic Welding Machine',
        text: [
          'Working with an engineer at one of our long-time customers we first built a prototype of a plastics welding station. Once the concept was proved out we, under their guidance, designed a complete 4-station welding machine. They provided the electrical components and we provide the design assistance, machining, welding, fabrication and assembly of the complete machine.',
        ],
        images: [
          '/images/portfolio/plastic_welder.webp'
        ],
      }
    ]
  },
  {
    id: 'rodder',
    label: 'Rodder',
    content: [
      {
        title: 'Truck Mounted Sewer Rodders',
        text: [
          'We were contracted to build a complete truck-mounted sewer-rodder machine. The initial contract is for 10 machines and the customer provides all engineering for the project. The services we provided include; machining, welding, fabrication, assembly of various manufactured components, hydraulic component installation, and electrical component installation, mounting to the truck and final testing and troubleshooting.',
        ],
        images: [
          '/images/portfolio/rodder_1.webp',
          '/images/portfolio/rodder_2.webp',
          '/images/portfolio/rodder_3.webp',
        ],
      }
    ]
  },
  {
    id: 'ss-other',
    label: 'SS Other',
    content: [
      {
        title: 'Stainless Steel Projects',
        text: [
          'Several customers like to use our services because we can provide machining and welding all in-house allowing us to produce products such as these custom stainless steel threads. These parts are a perfect example. We started with a piece of pipe and a piece of sheet metal. The pipe was cut to length and prepped on the CNC lathe. The sheet metal was cut into a circle on a laser. We then welded the 2 items together per the customer\'s requirements. After welding we performed two operations on the CNC lathe and the last operation was done on the CNC mill. The customer provided the thread gage to verify the external thread on one end of the part.',
        ],
        images: [
          '/images/portfolio/ss_other_1.webp',
          '/images/portfolio/ss_other_2.webp',
        ],
      }
    ]
  },
  {
    id: 'ss-piping-and-troughs',
    label: 'SS Piping & Troughs',
    content: [
      {
        title: 'Stainless Steel Piping And Troughs',
        text: [
          'This set of parts for stainless steel piping and troughs represents the skills we have in-house to build complex pieces per our customer\'s requirements. Services we provided include; 5-axis laser cutting, forming, machining and welding. When items are complete we typically bead-blast then passivate to insure a nice durable, uniform finish.',
        ],
        images: [
          '/images/portfolio/ss_piping_and_troughs_1.webp',
          '/images/portfolio/ss_piping_and_troughs_2.webp',
        ],
      }
    ]
  },
  {
    id: 'ss-products',
    label: 'SS Products',
    content: [
      {
        title: 'Stainless Steel Machining Parts',
        text: [
          'We provide stainless steel machining services to various companies throughout the area. Our CNC mills and lathes are laid out on the shop floor for ease of use. A typical work week includes small to large lot sizes in materials such as stainless steel, carbon steel, aluminum and plastics.',
        ],
        images: [
          '/images/portfolio/ss_products_1.webp',
          '/images/portfolio/ss_products_2.webp',
        ],
      }
    ]
  },
  {
    id: 'ss-tanks',
    label: 'SS Tanks',
    content: [
      {
        title: 'Stainless Steel Tank For Water Engineering',
        text: [
          'A local clean-water engineering company has developed a proprietary process for cleaning up various streams of dirty water. They utilized our manufacturing services to assist them in achieving their goals of becoming a leader in their market with high quality products such as stainless steel tanks. We provide precision welding services on the various stainless steel components that they provide.',
        ],
        images: [
          '/images/portfolio/ss_tanks_1.webp'
        ],
      },
      {
        subtitle: [
          'SS Laser Cutting & Certified', 'Welding Services'
        ],
        text: [
          'A local company that has a large array of equipment they sell, utilizes our manufacturing services to build various projects that do not fit well within their in-house capabilities. We provided stainless steel laser cutting, shearing, forming and certified welding services to fulfill their needs. When projects leave our plant they are ready to be fitted into the rest of the component pieces that the client makes in-house to complete their process.',
        ],
        images: [
          '/images/portfolio/ss_tanks_2.webp',
        ]
      }
    ]
  },
  {
    id: 'ss-tracks',
    label: 'SS Tracks',
    content: [
      {
        title: 'Stainless Steel Track Welding',
        text: [
          'A Local company was rebuilding a water feature that required us to build over 120\' of stainless steel tracks. We provided waterjet cutting, machining, punching, welding and passivation processes for this project. Over 20,000lbs of stainless steel was used for this project. Welding for the "W-beams", plates, angles and bars was performed by certified welders per AWS D1.6 with an inspector at our location during the time the project was being built.',
        ],
        images: [
          '/images/portfolio/ss_tracks.webp'
        ],
      }
    ]
  },
  {
    id: 'stonemills',
    label: 'Stonemills',
    content: [
      {
        title: 'Stainless Steel Stonemills',
        text: [
          'We provided all of the various stainless steel components for the requested stonemills, pre-machined some of the pieces, welded the units complete, machined the complete assemblies and had the internal surfaces polished to a mirror finish. After final polish we bead-blasted the exterior surfaces to obtain a uniform finish.',
        ],
        images: [
          '/images/portfolio/stonemills_1.webp',
          '/images/portfolio/stonemills_2.webp',
        ],
      }
    ]
  },
  {
    id: 'trac-projects',
    label: 'Trac Projects',
    content: [
      {
        title: 'Plate Fabrication For Trac Projects',
        text: [
          'A company based on the East Coast contracted with us to provide over 50,000 lbs of various structural steel components for a project they were building in the area. We provided hundreds of feet of beam, dozens of steel column assemblies, and various steel plate items required to finish the project. Services we provided include cutting, forming, drilling, welding and upon completion all of the steel pieces were hot-dip galvanized. All welds were completed by per AWS D1.1-90 standards.',
        ],
        images: [
          '/images/portfolio/trac_projects.webp'
        ],
      }
    ]
  },
];
