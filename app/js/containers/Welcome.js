import React from 'react';
import store from '../store/Store.js';
import { Jumbotron , Button } from 'react-bootstrap';

//import SectionSummary from '../components/Landing/SectionSummary.js';

export default class Landing extends React.Component{
	render(){
		return(
			<div class="container">
			<Jumbotron>
			    <h1>Hello, Welcome!</h1>
			    <p>This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
			    <p><Button bsStyle="primary">Learn more</Button></p>
  			</Jumbotron>
  			</div>
		)
	}
}