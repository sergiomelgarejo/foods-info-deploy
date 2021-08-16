import styles from '../static/css/FoodDetails.module.css'
import { useParams } from "react-router-dom";
import { useState, useEffect } from 'react';
import { get } from '../utils/httpClient'
import { Spinner } from '../components/Spinner';

export function FoodDetails() {
  const api_key = "?api_key=6o7M2ay7ihJ6nIcVSUjsVpDc1hi2AqKJv0ix38Mg"
  const { foodId } = useParams()
  const [food, setFood] = useState(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    get(`/food/${foodId}${api_key}`).then(data => {
      setFood(data)
      setIsLoading(false)
    })
  }, [foodId])

  if (isLoading) {
    return ( <Spinner /> )
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{food.description}</h1>
      {/* <p className={styles.category}> 
        <span className={styles.categoryTag}>Category:</span> {food.foodCategory.description}
      </p> */}
      <div className={styles.nutritionalContainer}>
        <h2 className={styles.nutritionalTitle}>Nutritional information</h2>
        <div className={styles.nutrientsBox}>
          <h2 className="portion">Portion: (Per 100g)</h2>
          {food.foodNutrients.map(i => {
            return (
              <div className={styles.nutrients} key={i.nutrient.id}>
                <div className={styles.nutrientName}>{i.nutrient.name}</div>
                <div className={styles.unitName}>{i.amount} {i.nutrient.unitName}</div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}