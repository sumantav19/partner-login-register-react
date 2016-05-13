import React from 'react';
import store from '../store/Store.js'
import { browserHistory } from 'react-router';


const json = (response) => {
	return response.json();
}
const Register = (userData) =>{
	console.log(userData);
	fetch('https://localhost:3000/v1/partners',{
		method : 'POST',
		headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: userData.email,
        phone : userData.phoneNumber,
        password: userData.password,
      }),
	})
	.then(response => {
		if(response.status !== 200){
			throw 'Error';
		}
	})
	.then(json)
	.then((data) => {
		console.log(data)		
			store.dispatch({
				email :  userData.email,
				password : userData.password,
				type : 'REGISTER_SUCCESSFUL'
			})
			store.dispatch({
				type : 'LOGIN',
				email : userData.email,
				password : userData.password
			})		
			
	})
	.catch((error) => {
		console.log(error);
		store.dispatch({
				type : 'REGISTER_FAILED'
		})
	})
}

const login = (userData) => {
	fetch('https://localhost:3000/v1/partners/login',{
		method : 'POST',
		headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: userData.email,        
        password: userData.password,
      }),
	})
	.then(response => {
		if(response.status !== 200){
			throw 'Error';
		}
	})
	.then(json)
	.then((data) => {	
		store.dispatch({				
			type : 'LOGIN_SUCCESSFUL',
			accessToken : data.id,
			userId : data.userId
		})
		window.location = ('/#/partner')
		
	})
	.catch( (error) => {
		store.dispatch({
			type : 'LOGIN_FAILED'
		})
	})	
}

const logout = (userData) => {
	fetch('https://localhost:3000/v1/partners/logout',{
		method : 'POST',
		headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization' : userData.access_token        
      },
      body: '',
	})	
	.then((response) => {		
		if (response.status !== 204){
			throw 'Login failed';
		}			
		store.dispatch({				
			type : 'LOGOUT_SUCCESSFUL',				
		})
		window.location = ('#/')
			
	})
	.catch((error) => {
		console.log(error);
		store.dispatch({
			type : 'LOGOUT_FAILED'
		})
		window.location = ('#/')
	})	
}

const Authenticaton = (
	state = {loggedIn:false},
	action) =>{
	switch(action.type){
		case 'LOGIN' :
			login(action)
			return state ;
		case 'LOGOUT' :
			logout(action) 
			return state ;
		case 'LOGIN_SUCCESSFUL' :			 
			return {
				access_token :  action.accessToken,
				userId : action.userId,
				isLoggedIn : true
			};
		case 'LOGIN_FAILED' :			  
			return state ;
		case 'LOGOUT_SUCCESSFUL' :			
			return {
				access_token :  '',
				userId : '',
				isLoggedIn : false
			}; 
		case 'LOGOUT_FAILED' :
			console.log(action);  
			return {
				access_token :  '',
				userId : '',
				isLoggedIn : false
			};
		case 'REGISTER' :
			Register(action)
			return state ;
		case 'REGISTER_SUCCESSFUL' :
			//registerSuccessful(action); 
			return state ;
		case 'REGISTER_FAILED' :			
			return state ;
		default : 
			return state ;
	}

}

export default Authenticaton