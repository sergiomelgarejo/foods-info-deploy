import { useEffect, useState } from "react"
import axios from 'axios'

export function useFoodSearch(query, pageNumber) {
  const API_URL = "https://api.nal.usda.gov/fdc/v1"
  const api_key = "?api_key=6o7M2ay7ihJ6nIcVSUjsVpDc1hi2AqKJv0ix38Mg"
  const [isLoading, setIsLoading] = useState(true)
  const [foods, setFoods] = useState([])
  const [error, setError] = useState(false)
  const [hasMore, setHasMore] = useState(false)

  useEffect(() => {
    setIsLoading(true)
    setError(false)
    let cancel
    axios({
      method: 'GET',
      url: `${API_URL}/foods/search${api_key}`,
      params: {
        query: query, 
        pageNumber: pageNumber
      },
      cancelToken: new axios.CancelToken(c => cancel = c)
    }).then(response => {
      setFoods(prevFoods => {
        return [...new Set([...prevFoods, ...response.data.foods.map(f => f.description)])]
      })
      setHasMore(response.data.foods.length > 0)
      setIsLoading(true)
    }).catch(e => {
      if (axios.isCancel(e)) return
      setError(true)
    })
    return () => cancel()
  }, [query, pageNumber])

  return { isLoading, error, foods, hasMore}
}