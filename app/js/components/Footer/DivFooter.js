import React from 'react'
import { Navbar , FormGroup , FormControl , Button } from 'react-bootstrap'

const NavbarFooter = (
	props
	) => {
		return(
			<div class="footer">
				<div class="container">
					<div class="row">
						<div class="col-lg-6">
							<h2>Piklane</h2>
							<p>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam tellus lectus, pellentesque in est vitae, cursus ultrices eros. Vivamus in elit metus. Nullam elementum porta dapibus.
							</p>
						</div>
						<div class="col-lg-offset-2 col-lg-4">
							<h2>Links</h2>
							<ul>
								<li><a href="">Blog</a></li>
								<li><a href="">About Us</a></li>
								<li><a href="">Contact</a></li>
								<li><a href="">Our Story</a></li>
							</ul>
						</div>
					</div>
				</div>
				<div class="social-copyright">
					<div class="container">
						<div class="row">
							<div class="col-lg-6">
		            			<p>© 2016 Copyright Text</p>              
							</div>
							<div class="col-lg-6">
								<div class="pull-right">
									<i class="fa fa-facebook" aria-hidden="true"></i>
									{'    '}
									<i class="fa fa-linkedin" aria-hidden="true"></i>
									{'    '}
									<i class="fa fa-google-plus" aria-hidden="true"></i>
									{'    '}
									<i class="fa fa-twitter" aria-hidden="true"></i>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		)
}

export default NavbarFooter