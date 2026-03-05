import { OrderedListCardInterface } from '@/types'
import React from 'react'
import Image from 'next/image'
import { Heading } from '@/components/ui'
import { OrderedListCard } from '@/components/containers'

interface Props {
	titleFirstPart: string
	titleSecondPart: string
	imageLink: string
	contentList: OrderedListCardInterface[]
	reverse?: boolean
	index?: number
}

const ContentBlock: React.FC<Props> = ({
	titleFirstPart,
	titleSecondPart,
	imageLink,
	contentList,
	reverse,
	index,
}) => {
	const isFirstBlock = index === 0
	const isSecondBlock = index === 1

	return (
		<div className="flex flex-col gap-y-6 2xl:gap-y-8 mx-auto">
			<Heading
				as="h2"
				className="text-[24px] md:text-[32px] leading-8 md:leading-10 font-bold"
			>
				<span className="text-neutral">{titleFirstPart}</span>{' '}
				<span className="text-brand-primary">{titleSecondPart}</span>
				<span className="sr-only">
					{' '}
					- Serving Anaheim, Orange County, Los Angeles, and Southern California
				</span>
			</Heading>

			<div
				className={`flex flex-col 2xl:flex-row gap-6 ${
					reverse && '2xl:flex-row-reverse'
				}`}
			>
				<ol className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
					{contentList.map((listElement) => (
						<li key={listElement.number}>
							<OrderedListCard
								listElement={listElement}
								className="md:h-[236px] 2xl:max-h-[224px] 2xl:max-w-[285px] bg-white"
							/>
						</li>
					))}
				</ol>

				<figure className="h-[224px] md:h-[290px] 2xl:h-[472px] 2xl:w-[582px]">
					<Image
						src={imageLink}
						alt={`${titleFirstPart} ${titleSecondPart}`}
						width={0}
						height={0}
						sizes="(max-width: 768px) 100vw, (max-width: 1440px) 50vw, 582px"
						className={`${
							isSecondBlock && 'sm:object-[center_25%] 2xl:object-[center_50%]'
						} ${
							isFirstBlock && 'sm:object-[center_10%] 2xl:object-[center_50%]'
						} w-full h-full rounded-[24px] object-cover`}
						loading="lazy"
						quality={60}
						unoptimized
					/>
				</figure>
			</div>
		</div>
	)
}

export default ContentBlock
