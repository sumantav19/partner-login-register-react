import React from 'react';
import store from '../store/Store.js'

import SectionSummary from '../components/Landing/SectionSummary.js';

export default class Landing extends React.Component{
	render(){
		return(
			<SectionSummary onRegister={ (email,phoneNumber,password) =>{
				store.dispatch({
					type : 'REGISTER',
					email,
					phoneNumber,
					password
				})
			}}/>
		)
	}
}