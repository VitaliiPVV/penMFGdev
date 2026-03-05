import { ReactNode } from 'react'

interface OrderedListCardInterface {
  number: number
  title: string | ReactNode
  text: string | ReactNode
}

export default OrderedListCardInterface