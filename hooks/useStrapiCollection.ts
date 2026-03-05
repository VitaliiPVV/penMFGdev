import { ApiFetchOptions, getCollection, StrapiPagination } from '@/lib/strapi/strapi'
import { useEffect, useState } from 'react'

function useStrapiCollection<T>(
  collection: string,
  params?: Record<string, unknown>,
  opts?: Omit<ApiFetchOptions, 'params'>
) {
  const [data, setData] = useState<T[]>([])
  const [pagination, setPagination] = useState<StrapiPagination | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<Error | null>(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true)
        setError(null)

        const response = await getCollection<T>(collection, params, opts)

        setData(response.data)
        setPagination(response.meta.pagination)
      } catch (err) {
        const error = err instanceof Error ? err : new Error('Failed to fetch data')
        setError(error)
        console.error(`Error fetching ${collection}:`, error)
      } finally {
        setIsLoading(false)
      }
    }

    fetchData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [collection, JSON.stringify(params), JSON.stringify(opts)])

  return { data, pagination, isLoading, error }
}

export default useStrapiCollection