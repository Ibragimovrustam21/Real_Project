import './App.css'
import { BrowserRouter } from 'react-router-dom'
import { Switch, Route, Redirect } from 'react-router'
import { Home } from './pages/Home'
import { Footer } from './components/Footer'

export const App = () => {
  return (
    <div className='home_page'>
      <BrowserRouter>
        <Switch>
          <Route path='/' exact component={Home} />
          <Redirect to='/' />
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>

  )
}
