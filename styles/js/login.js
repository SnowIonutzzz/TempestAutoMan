function checkPasswordMatch(){
	var password = $("#password1-account").val();
	var confirmPassword = $("#password2-account").val();

	if (confirmPassword != "") {
		if ( password != confirmPassword) {
			document.getElementById('password1-account').style.borderColor = 'red';
			document.getElementById('password2-account').style.borderColor = 'red';
			
			if ($('span').hasClass("password-span") == false)
			{	$('#password2-account').after('<span class="password-span error">Passwords do not match</span>');
			}
		} else {
			document.getElementById('password1-account').style.borderColor = 'green';
			document.getElementById('password2-account').style.borderColor = 'green';
			$(".password-span").remove();
			}
	} 
}

function validateAccount(){

	var company = $("#company-account").val();
	var firstname = $("#first-name-account").val();
	var lastname = $("#last-name-account").val();
	var phone = $("#phone-account").val();
	var fax = $("#fax-account").val();
	var country = $("#country-account").val();
	var address1 = $("#address1-account").val();
	var address2 = $("#address2-account").val();
	var postal = $("#postal-account").val();
	var province = $("#province-account").val();
	var email = $("#email-account").val();
	var password1 = $("#password1-account").val();
	var password2 = $("#password2-account").val();
	var ok = false;
	
	// First name validation
	if (firstname == "")
	{   ok = true;
		document.getElementById('first-name-account').style.borderColor = 'red';				
		
		if ($('span').hasClass("first-span") == false)
		{	$('#first-name-account').after('<span class="first-span error">Complete field.</span>');
		}
	}else{
		document.getElementById('first-name-account').style.borderColor = 'green';
		$(".first-span").remove();
	}
	
	// Last name validation
	if (lastname == "")
	{	ok = true;
		document.getElementById('last-name-account').style.borderColor = 'red';
		
		$(".last-span").remove();
		$('#last-name-account').after('<span class="last-span error">Complete field.</span>');
	}else{
		document.getElementById('last-name-account').style.borderColor = 'green';
		$(".last-span").remove();
	}
	
	// Phone validation
	if(phone == "")
	{	ok = true;
		document.getElementById('phone-account').style.borderColor = 'red';
		
		$(".phone-span").remove();
		$('#phone-account').after('<span class="phone-span error">Complete field.</span>');
	}else{
		document.getElementById('phone-account').style.borderColor = 'green';
		$(".phone-span").remove();
	}
	
	var re1 = /^[0-9\-\+]{9,15}$/;
	if (re1.test(phone) == false)
	{	ok = true;
		document.getElementById('phone-account').style.borderColor = 'red';
		
		if ($('span').hasClass("phone-span") == false)
		{	$('#phone-account').after('<span class="phone-span error">Enter a phone format.</span>');
		}
	}else{
		document.getElementById('phone-account').style.borderColor = 'green';
		$(".phone-span").remove();
	}
	
	// Fax validation
	if(fax == "")
	{	ok = true;
		document.getElementById('fax-account').style.borderColor = 'red';
		
		if ($('span').hasClass("fax-span") == false)
		{	$('#fax-account').after('<span class="fax-span error">Complete field.</span>');
		}
	}else{
		document.getElementById('fax-account').style.borderColor = 'green';
		$(".fax-span").remove();
	}
	
	if (re1.test(fax) == false){
		document.getElementById('fax-account').style.borderColor = 'red';
		
		if ($('span').hasClass("fax-span") == false)
		{	$('#fax-account').after('<span class="fax-span error">Enter a valid fax number.</span>');
		}
	}else{
		document.getElementById('fax-account').style.borderColor = 'green';
		$(".fax-span").remove();
	}
	// Address1 valitation
	if(address1 == "")
	{	ok = true;
		document.getElementById('address1-account').style.borderColor = 'red';
		
		if ($('span').hasClass("address-span") == false)
		{	$('#address1-account').after('<span class="address-span error">Complete field.</span>');
		}
	}else{
		document.getElementById('address1-account').style.borderColor = 'green';
		$(".address-span").remove();
	}
	
	// Postal validation
	if(postal == "")
	{	ok = true;
		document.getElementById('postal-account').style.borderColor = 'red';
		
		if ($('span').hasClass("postal-span") == false)
		{	$('#postal-account').after('<span class="postal-span error">Complete field.</span>');
		}
	}else{
		document.getElementById('postal-account').style.borderColor = 'green';
		$(".postal-span").remove();
	}
	
	// Province validation
	if(province == "")
	{	ok = true;
		document.getElementById('province-account').style.borderColor = 'red';
		
		if ($('span').hasClass("province-span") == false)
		{	$('#province-account').after('<span class="province-span error">Complete field.</span>');
		}
	}else{
		document.getElementById('province-account').style.borderColor = 'green';
		$(".province-span").remove();
	}
	
	// Email validation
	if(email == "")
	{	ok = true;
		document.getElementById('email-account').style.borderColor = 'red';
						
		$(".email-span").remove();
		$('#email-account').after('<span class="email-span error">Complete field</span>');
	}else{
		document.getElementById('email-account').style.borderColor = 'green';
		$(".email-span").remove();
	}
	
	var re2 = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	if (re2.test(email) == false)
	{	ok = true;
		document.getElementById('email-account').style.borderColor = 'red';
		
		if ($('span').hasClass("email-span") == false)
		{	$('#email-account').after('<span class="email-span error">Enter a valid email</span>');
		}
	}
	else
	{	document.getElementById('email-account').style.borderColor = 'green';
		$(".email-span").remove();
	}
	
	// Passwords validation
	if(password1 == "")
	{	ok = true;
		document.getElementById('password1-account').style.borderColor = 'red';
						
		if ($('span').hasClass("password1-span") == false)
		{	$('#password1-account').after('<span class="password1-span error">Complete field.</span>');
		}
	}else{
		document.getElementById('password1-account').style.borderColor = 'green';
		$(".password1-span").remove();
	}
	
	if(password2 == "")
	{	ok = true;
		document.getElementById('password2-account').style.borderColor = 'red';
	}else{
		document.getElementById('password2-account').style.borderColor = 'green';
	}
	
	if(password1 != password2)
	{	ok = true;
		document.getElementById('password1-account').style.borderColor = 'red';
		document.getElementById('password2-account').style.borderColor = 'red';
	}
		
		if(ok == true){	
			return false;
		}else{
			var formData = new FormData($('#account-form')[0]);
		   
		    $.ajax({
		        type: 'POST',
		        url: '/login/create_account',
		        data: formData,
		        cache: false,
		        contentType: false,
		        processData: false,
		        success: function(response) {
		        	response = JSON.parse(response);
		        	if (response['success'] == true){
		        	  	$('#Create-Account').modal('hide');
		        	 	alert("New account has been created.");
		        		window.location = "";
		        	}else{
		        		alert("Email/fax number is already registered.");
		        	}
		        }
		   });
		}
		return true;
}

function check_login(){
	var formData = new FormData($('#login-form')[0]);
   
    $.ajax({
        type: 'POST',
        url: '/login/check_login',
        data: formData,
        cache: false,
        contentType: false,
        processData: false,
        success: function(response) {
        	response = JSON.parse(response);
        	if (response['success'] == false)
        		$('#loginFailed').html(response['error']);
        	else
        		window.location = "";
        }
   });
}