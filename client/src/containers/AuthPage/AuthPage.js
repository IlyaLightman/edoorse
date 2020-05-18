import React from 'react'

const AuthPage = () => {
	return (<div className="App">
		<header className="App-header">
			<h1>Edoorse</h1>
			<button
				onClick={
					async () => {
						await fetch('api/auth/dbtest', {
							method: 'POST',
							headers: {},
							body: null
						})
					}
				}
			>DB Test</button>
		</header>
	</div>)
}

export default AuthPage