<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');
	class Login extends CI_Controller
	{	function __construct() 	
		{	parent::__construct();
		    $this->load->helper('url');
			$this->load->helper('form');
			$this->load->library('session');
			$this->load->library('form_validation');
		}
	    
		function index()
		{	if( $this->session->userdata('isLoggedIn') ){
				redirect('DashBoard');
			} else {	
				$this->show_login();
			}
	    }
		
		
		function show_login()
		{	$data['Countries'] = array("Afghanistan", "Albania", "Algeria", "American Samoa", "Andorra", "Angola", "Anguilla", "Antarctica", "Antigua and Barbuda", "Argentina", "Armenia", "Aruba", "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bermuda", "Bhutan", "Bolivia", "Bosnia and Herzegowina", "Botswana", "Bouvet Island", "Brazil", "British Indian Ocean Territory", "Brunei Darussalam", "Bulgaria", "Burkina Faso", "Burundi", "Cambodia", "Cameroon", "Canada", "Cape Verde", "Cayman Islands", "Central African Republic", "Chad", "Chile", "China", "Christmas Island", "Cocos (Keeling) Islands", "Colombia", "Comoros", "Congo", "Congo, the Democratic Republic of the", "Cook Islands", "Costa Rica", "Cote d'Ivoire", "Croatia (Hrvatska)", "Cuba", "Cyprus", "Czech Republic", "Denmark", "Djibouti", "Dominica", "Dominican Republic", "East Timor", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Eritrea", "Estonia", "Ethiopia", "Falkland Islands (Malvinas)", "Faroe Islands", "Fiji", "Finland", "France", "France Metropolitan", "French Guiana", "French Polynesia", "French Southern Territories", "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Gibraltar", "Greece", "Greenland", "Grenada", "Guadeloupe", "Guam", "Guatemala", "Guinea", "Guinea-Bissau", "Guyana", "Haiti", "Heard and Mc Donald Islands", "Holy See (Vatican City State)", "Honduras", "Hong Kong", "Hungary", "Iceland", "India", "Indonesia", "Iran (Islamic Republic of)", "Iraq", "Ireland", "Israel", "Italy", "Jamaica", "Japan", "Jordan", "Kazakhstan", "Kenya", "Kiribati", "Korea, Democratic People's Republic of", "Korea, Republic of", "Kuwait", "Kyrgyzstan", "Lao, People's Democratic Republic", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libyan Arab Jamahiriya", "Liechtenstein", "Lithuania", "Luxembourg", "Macau", "Macedonia, The Former Yugoslav Republic of", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Marshall Islands", "Martinique", "Mauritania", "Mauritius", "Mayotte", "Mexico", "Micronesia, Federated States of", "Moldova, Republic of", "Monaco", "Mongolia", "Montserrat", "Morocco", "Mozambique", "Myanmar", "Namibia", "Nauru", "Nepal", "Netherlands", "Netherlands Antilles", "New Caledonia", "New Zealand", "Nicaragua", "Niger", "Nigeria", "Niue", "Norfolk Island", "Northern Mariana Islands", "Norway", "Oman", "Pakistan", "Palau", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Pitcairn", "Poland", "Portugal", "Puerto Rico", "Qatar", "Reunion", "Romania", "Russian Federation", "Rwanda", "Saint Kitts and Nevis", "Saint Lucia", "Saint Vincent and the Grenadines", "Samoa", "San Marino", "Sao Tome and Principe", "Saudi Arabia", "Senegal", "Seychelles", "Sierra Leone", "Singapore", "Slovakia (Slovak Republic)", "Slovenia", "Solomon Islands", "Somalia", "South Africa", "South Georgia and the South Sandwich Islands", "Spain", "Sri Lanka", "St. Helena", "St. Pierre and Miquelon", "Sudan", "Suriname", "Svalbard and Jan Mayen Islands", "Swaziland", "Sweden", "Switzerland", "Syrian Arab Republic", "Taiwan, Province of China", "Tajikistan", "Tanzania, United Republic of", "Thailand", "Togo", "Tokelau", "Tonga", "Trinidad and Tobago", "Tunisia", "Turkey", "Turkmenistan", "Turks and Caicos Islands", "Tuvalu", "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "United States", "United States Minor Outlying Islands", "Uruguay", "Uzbekistan", "Vanuatu", "Venezuela", "Vietnam", "Virgin Islands (British)", "Virgin Islands (U.S.)", "Wallis and Futuna Islands", "Western Sahara", "Yemen", "Yugoslavia", "Zambia", "Zimbabwe");
			$this->load->view('login',$data);
		}
		
	    public function check_login()
		{	$this->load->model('user_model','user');
			$response = array();
			
			if ($this->form_validation->run('login') == true){
				$email = $this->input->post('email');
				$pass  = md5($this->input->post('password'));
			
				if( $this->user->validate_user($email,$pass) ) 
				{	$response['success'] = true;
				} 
				else 
				{   $response['success'] = false;
					$response['error'] = "Email/password not correct.";
				}
			}
			echo json_encode($response);
		}
		
		function create_account()
		{	$this->load->model('user_model','user');
			$response = array();
			
			if ($this->form_validation->run('account') == false){
				$response['success'] = false;
				$response['error'] = 'Email/fax number are already registered.';
			}
			else{	
				$dateToday = date("d-m-Y");
				$newDate = date("Y-m-d", strtotime($dateToday));
				
				$data=array(	'Company' => $this->input->post('company-account'),
								'First' => $this->input->post('first-name-account'),
								'Last' => $this->input->post('last-name-account'),
								'Phone' => $this->input->post('phone-account'),
								'Fax' => $this->input->post('fax-account'),
								'Country' => $this->input->post('country-account'),
								'Address' => $this->input->post('address1-account').' '.$this->input->post('address2-account'),
								'Province' => $this->input->post('province-account'),
								'Postal' => $this->input->post('postal-account'),
								'Email' => $this->input->post('email-account'),
								'Password' => md5($this->input->post('password1-account')),
								'Invoicing_Date' => $newDate,
							);
						
				$result = $this->user->add_account($data);
				$response['success'] = true;
			}
			echo json_encode($response);
		}
		
		function recover_password()
		{	//Not needed for v1
		}
	}
?>

