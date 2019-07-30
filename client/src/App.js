import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

import { connect } from 'react-redux'

import Home from './pages/Home/home.component'
import Login from './pages/Login/login.component'
import SignUp from './pages/SignUp/sign-up.component'

export const App = ({ currentUser }) => {

  return (
    <React.Fragment>
      <Switch>
        <Route 
          exact path='/'
          render = {() => currentUser ? <Home /> : <Redirect to='/login' />} 
        />
        <Route 
          path='/login'
          render = {() => currentUser ? <Redirect to='/' /> : <Login />}
        />
        <Route 
          path='/signup' 
          render = {() => currentUser ? <Redirect to='/' /> : <SignUp />}
        />
      </Switch>
    </React.Fragment>
  );
}

const mapStateToProps = ({ userReducer: { currentUser } }) => ({
  currentUser
})

export default connect(mapStateToProps)(App)
