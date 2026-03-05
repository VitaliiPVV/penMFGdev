import StandardsClient from "./components/StandardsClient";
import { ClockIcon, DistanceIcon, PhoneIcon } from "@/components/icons";
import { PHONE_NUMBERS } from "@/constants";
import { JSX } from "react";

export type AboutUsPages = {
  id: string;
  label: string;
  content: {
    component?: JSX.Element;
    title?: string;
    subtitle?: string;
    text?: string[];
    video?: {
      videoType?: 'embedded' | 'youtube' | 'linkedin';
      imgLink: string;
      videoLink: string;
      videoTitle: string;
      className?: string;
    };
    image?: string;
    countItems?: {
      number: number;
      title: string;
      text: string;
    }[];
    contactItems?: {
      title: string;
      icon: JSX.Element;
      children: JSX.Element;
    }[];
    contactTitle?: string;
  }[]
}

export const aboutUsPages: AboutUsPages[] = [
  {
    id: 'pen-tour-video',
    label: 'Pen Tour Video',
    content: [
      {
        title: 'Pen Manufacturing Video Tour',
        text: [
          'Welcome to the Pen video page. Here you will find videos demonstrating Pen\'s capabilities in CNC machining, fabrication, and welding. Please take a moment to watch the Pen Facility Tour video. More videos will be coming soon!'
        ],
        video: {
          imgLink: '/images/about_img.webp',
          videoLink: 'https://www.youtube.com/embed/09sVQw7f3xc',
          videoTitle: 'About Us',
          className: 'max-h-[245px] md:max-h-[416px] md:h-[416px]',
        }
      }
    ]
  },
  {
    id: 'new-ownership-and-rebrand',
    label: 'New Ownership And Rebrand',
    content: [
      {
        title: 'PEN Manufacturing Unveils New Ownership and Rebrand',
        text: [
          '[Anaheim, CA 12/13/23] — Pendarvis Manufacturing proudly announces its rebranding to PEN Manufacturing, marking a significant evolution in its identity and a testament to its commitment to innovation, growth, and customer satisfaction.',
          'The initiative is driven by a desire to reflect the company\'s relentless pursuit of excellence in manufacturing solutions. With the rebrand, the company now includes sheet metal services in its portfolio.',
          'Under the leadership of its founder, Brian Pendarvis, Pendarvis Manufacturing has been an industry stalwart. In a poignant shift, he has made the decision to pass the torch and entrust the business to a new generation of leaders who are poised to carry forward the company\'s traditions while introducing fresh perspectives.',
          'The change of ownership is not merely a passing of the baton; it symbolizes a commitment to the future and an investment in the continued success of PEN Manufacturing. The new leadership team brings a wealth of experience, strategic insight, and a dedication to advancing the company\'s standing as an industry leader.'
        ],
      },
      {
        subtitle: 'New Additions to the PEN Manufacturing Team',
        text: [
          'In tandem with the change of ownership, PEN Manufacturing proudly welcomes a wave of new professionals to its team. Their presence marks a significant addition to our collective strength, expertise, and synergy. We are confident that each one brings a wealth of experience and a passion for excellence.',
          'PEN Manufacturing remains dedicated to delivering high-quality, precision-engineered products and services to its clients across diverse industries. The company will continue to leverage its expertise, state-of-the-art technology, and a skilled workforce to exceed customer expectations and contribute to the success of its partners.'
        ],
      },
      {
        contactTitle: 'For media inquiries, please contact:',
        text: [
          'PEN Manufacturing',
          '714-992-0950'
        ],
      },
    ],
  },
  {
    id: 'view-our-facility',
    label: 'View Our Facility',
    content: [
      {
        title: 'View Our Facility',
        video: {
          videoType: 'linkedin',
          imgLink: '/images/view_our_facilities.webp',
          videoLink: 'https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7363527889146793984?compact=1',
          videoTitle: 'View Our Facility',
        },
      }
    ]
  },
  {
    id: 'quality',
    label: 'Quality',
    content: [
      {
        title: 'The Quality Assurance Process',
        image: '/images/quality_img.avif',
        countItems: [
          {
            number: 1,
            title: "Front-End Engineering Preparation",
            text: "Our engineers extract critical dimensions, define key quality metrics, and use prototypes with 3D modeling.",
          },
          {
            number: 2,
            title: "Certified High-quality Fabrication",
            text: "We hold AS9100 and ISO9001 certifications ensuring every product meets strict quality standards.",
          },
          {
            number: 3,
            title: "In process inspection",
            text: "Operators follow an improved inspection process, with verified checks.",
          },
          {
            number: 4,
            title: "End-of-Cycle Quality Verification",
            text: "Every product is validated by Keyence CMM and calibrated metrology.",
          },
        ],
      },
      {
        component: <StandardsClient />
      },
    ]
  },
  {
    id: 'contact-us',
    label: 'Contact Us',
    content: [
      {
        contactItems: [
          {
            title: "Phone number",
            icon: <PhoneIcon className="size-6 text-brand-primary" />,
            children: (
              <div className="flex flex-col gap-y-2 pl-[30px] text-sm/[125%] font-medium text-neutral">
                <span>Toll free: {PHONE_NUMBERS.mainLocal}</span>
                <span>Phone: {PHONE_NUMBERS.local}</span>
                <span>Fax: {PHONE_NUMBERS.fax}</span>
              </div>
            ),
          },
          {
            title: "Office hours",
            icon: <ClockIcon className="size-6 text-brand-primary" />,
            children: (
              <div className="flex flex-col gap-y-2 pl-[30px] text-sm/[125%] font-medium text-neutral">
                <span>Monday - Friday:</span>
                <span>7AM to 4PM</span>
              </div>
            ),
          },
          {
            title: "Address",
            icon: <DistanceIcon className="size-6 text-brand-primary" />,
            children: (
              <div className="flex flex-col md:flex-row 2xl:flex-col gap-2 pl-[30px] md:pb-[7px] 2xl:pb-0 text-sm/[125%] font-medium text-neutral">
                <div className="h-14 flex flex-col gap-y-1 md:w-[297px] 2xl:w-full">
                  <span className="text-xs/4 text-muted">
                    Main HQ (customers & vendors)
                  </span>
                  <span>1802 N American St</span>
                  <span>Anaheim, California 92801</span>
                </div>
                <div className="h-14 flex flex-col gap-y-1 md:w-[297px]">
                  <span className="text-xs/4 text-muted">Interviews</span>
                  <span>1802 N American St</span>
                  <span>Anaheim, California 92801</span>
                </div>
              </div>
            ),
          },
        ]
      }
    ]
  },
];
