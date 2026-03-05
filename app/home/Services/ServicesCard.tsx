"use client";

import { ArrowUpIcon } from '@/components/icons'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useRouter } from 'next/navigation'

interface Props {
  image: string
  title: string
  href?: string
  description?: string
}

const ServicesCard: React.FC<Props> = ({ image, title, href, description }) => {
  const [isHovered, setIsHovered] = useState(false);
  const router = useRouter();

  const handleClick = () => {
    if (href) {
      router.push(href);
    }
  };

  return (
    <article
      onClick={handleClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative h-full rounded-[24px] overflow-hidden flex flex-col cursor-pointer"
    >
      <figure className="relative w-full h-[218px] md:h-[273px] 2xl:h-[218px] flex-shrink-0">
        <Image
          src={image}
          alt={`${title} service at Pen Manufacturing`}
          fill
          className="w-full rounded-t-[24px] object-cover"
        />
        <figcaption className="sr-only">{description}</figcaption>
      </figure>

      <div className="2xl:hidden p-6 rounded-b-[24px] bg-white">
        <Link href={href ?? ''} className="flex items-center justify-between">
          <span className="text-lg font-bold text-neutral">{title}</span>
          <ArrowUpIcon className="size-6 text-brand-primary" />
        </Link>
      </div>

      <div className="hidden 2xl:block h-[72px]" />

      <motion.div
        initial={false}
        animate={{
          height: isHovered && description ? "200px" : "72px",
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="hidden 2xl:flex absolute bottom-0 left-0 right-0 flex-col justify-center p-6 rounded-b-[24px] bg-white overflow-hidden"
      >
        <motion.div
          initial={false}
          animate={isHovered ? { opacity: 0 } : { opacity: 1 }}
          transition={{ duration: 0.2, delay: isHovered ? 0 : 0.15 }}
          className="flex items-center justify-between"
        >
          <span className="text-lg font-bold text-neutral">{title}</span>
          <ArrowUpIcon className="size-6 text-brand-primary shrink-0" />
        </motion.div>

        {description && (
          <motion.div
            initial={false}
            animate={isHovered ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.25, delay: isHovered ? 0.1 : 0 }}
            className="absolute inset-0 p-6 flex flex-col justify-center"
          >
            <div className="flex items-center justify-between mb-4">
              <span className="text-lg font-bold text-neutral">{title}</span>
              <ArrowUpIcon className="size-6 text-brand-primary shrink-0" />
            </div>
            <p className="text-sm/[125%] font-medium text-muted">{description}</p>
          </motion.div>
        )}
      </motion.div>
    </article>
  )
}

export default ServicesCard