import styles from '../static/css/FoodCard.module.css'
import { Link } from 'react-router-dom'

export function FoodCard({food}) {
  return (
    <li className={styles.card}>
      <Link className={styles.cardBox} to={`/food/${food.fdcId}`}>
        <div className={styles.item}>
          {food.description}
        </div>
      </Link>
    </li>
  )
}