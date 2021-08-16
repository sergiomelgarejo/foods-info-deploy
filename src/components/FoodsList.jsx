import { useState, useEffect } from "react";
import { FoodCard } from './FoodCard'
import styles from '../static/css/FoodsList.module.css'
import { get } from '../utils/httpClient'
import { Spinner } from './Spinner'
import { useQuery } from '../hooks/useQuery'

export function FoodsList() {
  const api_key = "?api_key=6o7M2ay7ihJ6nIcVSUjsVpDc1hi2AqKJv0ix38Mg"
  const [foods, setFoods] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const query = useQuery()
  const search = query.get("search")

  const searchURL = search 
    ? `/foods/search${api_key}&query=${search}`
    : `/foods/search${api_key}`;

  useEffect(() => {
    setIsLoading(true)
    get(searchURL)
    .then(data => {
      setFoods(data)
      setIsLoading(false)
    })
  }, [search])

  if (isLoading) {
    return ( <Spinner /> )
  }

  return (
    <div className={styles.container}>
      <div className={styles.results}>Results: {foods.totalHits}</div>
      <ul className={styles.foods_list}>
        {foods.foods.map((food) => (
          <FoodCard key={food.fdcId} food={food} />
        ))}
      </ul>
    </div>
  )
}