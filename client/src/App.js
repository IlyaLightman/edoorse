import React from 'react'
import './App.css'
import { Route, Switch, Redirect } from 'react-router-dom'
import { AuthContext } from './context/AuthContext'
import useAuth from './hooks/auth.hook'
import AuthPage from './containers/AuthPage/AuthPage'

function App() {
    const { token, login, logout, userId, ready } = useAuth()
    const isAuthenticated = !!token

	return (
		<AuthContext.Provider value={{
            token, login, logout, userId, isAuthenticated
        }}>
			<Switch>
				<Route path='/auth' component={ AuthPage }/>
				<Route path='/about' component={} />
				<Redirect to='/auth' />
			</Switch>
		</AuthContext.Provider>
	)
}

export default App
