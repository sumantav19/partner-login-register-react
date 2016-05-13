import React from 'react'
import { Navbar , FormGroup , FormControl , Button } from 'react-bootstrap'

const NavbarHeader = (
	props
	) => {
		let email , password;
		if(props.userAuthenticationData.isLoggedIn && props.userAuthenticationData.isLoggedIn === true){
            return(
                <Navbar> 
                    <Navbar.Header>
                        <Navbar.Toggle />
                        <Navbar.Brand>
                            <a href="#">Temp</a>
                        </Navbar.Brand>
                        
                    </Navbar.Header>                    
                    <Navbar.Collapse>
                        <ul class="nav navbar-nav pull-right">
                            <li class="" >
                                <a href="#/">Home</a>
                            </li>
                            <li class="" >
                                <a href="" onClick={ (e) => {
                                    e.preventDefault();
                                    props.onClickLogout(props.userAuthenticationData.access_token)
                                }}>Logout</a>
                            </li>                            
                        </ul>
                    </Navbar.Collapse>
                </Navbar>
            )
        }
		return(
			<Navbar> 
				<Navbar.Header>
      				<Navbar.Brand>
        				<a href="#">Temp</a>
      				</Navbar.Brand>
      				<Navbar.Toggle />
    			</Navbar.Header> 
    			<Navbar.Collapse>
			      	<Navbar.Form pullRight>
			      		<form onSubmit={(e)=>{
			      			e.preventDefault()
			      			props.onLogin(email.value,password.value)
			      		}}>
				        	<FormGroup>
				          		<input ref={(node)=>{
				          			email = node;
				          		}} class="form-control" required type="email" placeholder="Email" />			          
				        	</FormGroup>
			        		{' '}
				        	<FormGroup>
				          		<input ref={(node)=>{
				          			password = node;
				          		}} class="form-control" required type="password" placeholder="Password" />
				        	</FormGroup>
			        		{' '}
			       			<input class="btn btn-default" type="submit" value="Login"/>
			       		</form>
			      </Navbar.Form>
    			</Navbar.Collapse>
			</Navbar>
		)
}

export default NavbarHeader