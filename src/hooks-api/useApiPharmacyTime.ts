import useSWR from 'swr'

import { type Pharmacy } from '../types/pharmacy'
import { clientSWRFetcher } from '../utils/clientSWRFetcher'

export function useApiPharmacyTime (queryString?: string) {
  const key = queryString ? `/pharmacies/open?${queryString}` : null
  const { data, error, isLoading, mutate } = useSWR<Pharmacy[]>(key, clientSWRFetcher)

  return {
    data,
    error,
    isLoading,
    mutate,
  }
}
