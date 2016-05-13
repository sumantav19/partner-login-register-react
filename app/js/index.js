import React from 'react';
import ReactDom from 'react-dom';
import Router from './router/router.js'
import store from './store/Store.js';

const app = document.getElementById('app')
const render = ()=>{
	ReactDom.render(<Router/>,app);	
}
render();

/*store.subscribe(()=>{
	console.log('subscribe')
	render();
})*/
