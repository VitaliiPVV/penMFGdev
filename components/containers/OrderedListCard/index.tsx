import { OrderedListCardInterface } from '@/types'
import { Heading } from '@/components/ui'
import React from 'react'
import { twMerge } from 'tailwind-merge'

interface Props {
  listElement: OrderedListCardInterface
  className?: string
}

const OrderedListCard: React.FC<Props> = ({ listElement, className }) => {
  const { number, title, text } = listElement

  return (
    <article className={twMerge("flex flex-col gap-y-2 h-full p-6 2xl:p-6 bg-inverse-subtle rounded-[24px] h-[208px] md:h-[236px]", className)}>
      <Heading as="h3" className="flex items-center justify-center size-[50px] text-2xl rounded-full font-medium text-brand-primary bg-brand-subtle">
        0{number}
      </Heading>

      <Heading as="h4" className="pt-2 text-lg/6 text-neutral font-bold">
        {title}
      </Heading>

      <p className="text-sm/[125%] font-medium text-muted">
        {text}
      </p>
    </article>
  )
}

export default OrderedListCard