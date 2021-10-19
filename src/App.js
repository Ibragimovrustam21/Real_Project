import './App.css'
import { BrowserRouter } from 'react-router-dom'
import { Switch, Route, Redirect } from 'react-router'
import { Home } from './pages/Home'
import { Footer } from './components/Footer'
import { AboutUser } from './pages/AboutUser'
import { AdminPage } from './pages/AdminPage'

export const App = () => {
  return (
    <div className='home_page'>
      <BrowserRouter>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path="/about-user" component={AboutUser} />
          <Route path="/admin" component={AdminPage} />
          <Redirect to='/' />
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>

  )
}
