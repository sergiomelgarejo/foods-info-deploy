import { FoodsList } from '../components/FoodsList'
import { SearchBar } from '../components/SearchBar'

export function LandingPage() {
  return (
    <div className="landing-container">
      <SearchBar />
      <FoodsList />
    </div>
  )
}