'use client'

import { memo } from 'react'
import { RichTextNode } from '@/lib/richTextRenderer'
import { richTextRenderer } from '@/lib/richTextRenderer'

interface BlogContentProps {
  content: RichTextNode[]
  strapiUrl: string
}

function RichTextContent({ content, strapiUrl }: BlogContentProps) {
  return (
    <div className='prose prose-lg max-w-none'>
      {richTextRenderer(content, strapiUrl)}
    </div>
  )
}

export default memo(RichTextContent)
