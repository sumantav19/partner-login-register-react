import React from 'react'
import store from '../store/Store.js'

import NavbarHeader from '../components/Header/NavbarHeader.js'

export default class Header extends React.Component{
	render(){
		const userAuthenticationData = (store.getState());
		return(
			<NavbarHeader {...userAuthenticationData}
				onClickLogout = { (access_token) => {
					store.dispatch({
						type : 'LOGOUT',
						access_token
					})
				}}
				onLogin = { (email,password) => {
					store.dispatch({
						type : 'LOGIN',
						email,
						password
					})
				}}
			/>
		)
	}
}