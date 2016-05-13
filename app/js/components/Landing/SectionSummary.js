import React from 'react'
import RegisterForm from './RegisterForm.js'
import { Jumbotron , Button } from 'react-bootstrap'

const SectionSummary = (
	props
	) => {
		
		return(
			<div class="row landing-summary">
				<img src="../../../images/landing_market_unslplash.jpg" class="img-responsive" alt="Responsive image" />
				<div class="col-sm-3 register-form">
					<div class="panel panel-default">
						<div class="panel-heading">
							<span class="center-block">Register Today</span>
						</div>
						<div class="panel-body">
							<RegisterForm onRegister={props.onRegister}/>
						</div>
					</div>
	  			</div>
	  		</div>
		)
}

export default SectionSummary;