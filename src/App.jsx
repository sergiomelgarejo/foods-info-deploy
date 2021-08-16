import './static/css/App.css'
import { LandingPage } from './pages/LandingPage'
import { FoodDetails } from './pages/FoodDetails'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'

export default function App() {
  return (
    <Router className="App">
      <header>
        <Link to="/">
          <h1 className="app-title">Food's Info</h1>
        </Link>
      </header>
      <main className="container">
        <Switch>
          <Route exact path="/"> <LandingPage /> </Route>
          <Route exact path="/food/:foodId"> <FoodDetails /> </Route>
        </Switch>
      </main>
    </Router>
  );
}
