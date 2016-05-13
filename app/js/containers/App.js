import React from 'react'
import Header from './Header.js'
import Landing from './Landing.js'
import Footer from './Footer.js'
export default class App extends React.Component {
	render(){
		return (
			<div>
				<Header/>
				{this.props.children}				
				<Footer/>
			</div>
		)
	}
}