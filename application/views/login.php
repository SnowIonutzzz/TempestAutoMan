<!DOCTYPE html>
<html>
	<head>
		<link href="/Auto/styles/bootstrap/css/bootstrap.min.css" rel="stylesheet">
		<script src="https://code.jquery.com/jquery.js"></script>
		<script src="/Auto/styles/bootstrap/js/bootstrap.min.js"></script>
		<script src="/Auto/styles/js/login.js"></script>
		<title>Login Fax</title>
		<link rel="stylesheet" href="/Auto/styles/css/login.css">
	</head>
 
	<body>
	    <!-- Main Login Page -->
		<div id= "login-container">
			<div id= "image-container">
				<img src="/Auto/styles/images/VoiceMailTel.jpg">
			</div>
		
			<div id="login-container-details">
				<div class="login-title">
					<h1>Login</h1>
				</div>
			    <form method="post" id="login-form">
					<div id="login-details-container">	
						<input type="text" class="form-control" name="email" id="email" placeholder="Enter email">
						</br>
						<input type="password" class="form-control" name="password" id="password" placeholder="Password">
						<div id="loginFailed" class="error"></div>
					</div>
					
								
					<div class="links" align="right">	
						<a href="#Forgot-Password" id="forgot-password" data-toggle="modal">Forgot Password?</a>
					</div>
				
					<div class="col-xs-3">
						<input class="btn btn-info big-button" "id="login" type="button" value="Login" onclick="check_login()"/>
					</div>
				</form>
					<div class="col-xs-5">
						<button class="btn btn-info" data-toggle="modal" data-target="#Create-Account">Create Account</button>
					</div>
			</div>
		</div>
	
	     <!-- Create New Account Modal -->
		<div class="modal fade" id="Create-Account" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" data-backdrop="static">
			<div class="modal-dialog large-modal">
				<div class="modal-content">
					<form id="account-form" class="form-horizontal" role="form">
						<div class="modal-header">
							<h2 class="modal-title">Create New Account</h2>
						</div>
			
						<div class="modal-body">
							<div class="subpart">
								<div class="footer-subpart">
									<div class="subtitle">
										<h3>Personal Details</h3>		
									</div>
									<div class="line-module">
										<hr>
									</div>
								</div>
								
								<div class="form-group">
									<label for="company-account" class="col-sm-3 control-label">Company</label>
									<div class="col-sm-3">
										<input type="text" class="form-control" name="company-account" id="company-account" placeholder="Company">
									</div>
									<div class="registrationAlert" id="error-account"></div>
								</div>
								
								<div class="form-group">
									<label for="first-name-account" class="col-sm-3 control-label">First Name*</label>
									<div class="col-sm-3">
										<input type="text" class="form-control" name="first-name-account" id="first-name-account" placeholder="First Name">
									</div>
								
									<label for="last-name-account" class="col-sm-2 control-label">Last Name*</label>
									<div class="col-sm-3">
											<input type="text" class="form-control" name="last-name-account" id="last-name-account" placeholder="Last Name">
									</div>
								</div>		
									<div class="form-group">
									<label for="phone-account" class="col-sm-3 control-label">Phone Number*</label>
									<div class="col-sm-3">
										<input type="text" class="form-control" name="phone-account" id="phone-account" placeholder="Phone Number">
									</div>				
								</div>
									
								<div class="form-group">
									<label for="fax-account" class="col-sm-3 control-label">Fax Number*</label>
									<div class="col-sm-3">
										<input type="text" class="form-control" name="fax-account" id="fax-account" placeholder="Fax Number">
									</div>
								</div>
							</div>
							
							<div class="subpart">
								<div class="footer-subpart">
									<div class="subtitle">
										<h3>Personal Address</h3>		
									</div>
									<div class="line-module">
										<hr>
									</div>
								</div>
								
								<div class="form-group">
									<label for="country-account" class="col-sm-3 control-label">Country*</label>
									<div class="col-sm-3">

										<select class="form-control" name="country-account" id="country-account">
										<?php 
											for ($i=0;$i<count($Countries);++$i)
												echo '<option>'.$Countries[$i].'</option>';
										?>
										</select>
									</div>
								</div>	
								
								<div class="form-group">
									<label for="address1-account" class="col-sm-3 control-label">Address1*</label>
										<div class="col-sm-3">
									<input type="text" class="form-control" name="address1-account" id="address1-account" placeholder="Address1">
									</div>
								
									<label for="address2-account" class="col-sm-2 control-label">Address2</label>
									<div class="col-sm-3">
										<input type="text" class="form-control" name="address2-account" id="address2-account" placeholder="Address2">
									</div>
								</div>
								
								<div class="form-group">
									<label for="province-account" class="col-sm-3 control-label">Province*</label>
									<div class="col-sm-3">
										<input type="text" class="form-control" name="province-account" id="province-account" placeholder="Province">
									</div>
								</div>
										
								<div class="form-group">
									<label for="postal-account" class="col-sm-3 control-label">Postal Code*</label>
									<div class="col-sm-3">
										<input type="text" class="form-control" name="postal-account" id="postal-account" placeholder="Postal Code">
									</div>
								</div>
							</div>

							<div class="subpart">
								<div class="footer-subpart">
									<div class="subtitle">
										<h3>Account Details</h3>		
									</div>
									<div class="line-module">
										<hr>
									</div>
								</div>
									
								<div class="form-group">
									
									<label for="email-account" class="col-sm-3 control-label">Email*</label>
									<div class="col-sm-3">
										<input type="text" class="form-control" name="email-account" id="email-account" placeholder="Email">
									</div>
								</div>

								<div class="form-group">
									<label for="password1-account" class="col-sm-3 control-label">Password*</label>
									<div class="col-sm-3">
										<input type="password" class="form-control" name="password1-account" id="password1-account" placeholder="Password"  onkeyup="checkPasswordMatch()">
									</div>
								</div>
								 
								<div class="form-group">							
									<label for="password2-account" class="col-sm-3 control-label">Re-Enter Password*</label>
									<div class="col-sm-3">
										<input type="password" class="form-control" name="password2-account" id="password2-account" placeholder="re-enter Password" onkeyup="checkPasswordMatch()">
									</div>
								</div>
							</div>
						</div>
						
						<div class="modal-footer">
							<input type="button" class="btn btn-primary" value="Create Account" onclick="validateAccount()"/>
							<button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
						</div>
					</form>
                </div>
           </div>
        </div>

		
		<!-- Forgot Password Modal --> 	
		<div class="modal fade" id="Forgot-Password" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
			<div class="modal-dialog small-modal">
				<div class="modal-content">
					<form class="form-horizontal" role="form" action="/login/recover_password" method="post">
						<div class="modal-header">
							<h4 class="modal-title">Recover Password</h4>
						</div>
										
						<div class="modal-body">
							<label for="recover-password-input">Enter the email of your account.</label>
							<div class="form-group">
								<div class="col-sm-10">
									<input type="text" class="form-control" id="recover-password-input" placeholder="Enter email">
								</div>
							</div>
							<span class="help-block">An email with your password will be send to you shortly.</span>
						</div>
		
						<div class="modal-footer">
							<input type="submit" class="btn btn-primary disabled" value="Send"/>
							<button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	</body>
</html>