function changeStatus( newStatus ){
	var id = document.getElementById("modal-CampaignID").innerText;
	$.post("/DashBoard/ChangeStatus", {CampaignStatus: newStatus,CampaignId: id},function(){
																	if (newStatus == 1)
																		window.location = "/DashBoard";
																});
}
$(document).ready(function(){
    $("#popover-textarea").popover({
        placement : 'right',
        html : true,
        trigger: 'hover',
        content : 'Copy data from excel, keep the tabs and spaces as they are.</br>Column order should be : FaxNumber ContactName CompanyName.</br>Fax numbers should start with 1 and contain no spaces,dots or dashes.</br><i>ex:1254234532    John Marc    Voicemailtel Inc.</i>'
    });
});
function validateInput(e){
	
	e = e || window.event;
	$.Event(e).preventDefault();
	var CampaignName = $("#campaignName").val();
	var CallerName= $("#CallerName").val();
	var AddList = $("#Add-List").val();
	var error = false;
	
	
	
	if(CampaignName  == ""){
		error = true;
		document.getElementById('campaignName').style.borderColor = 'red';
		
		if ($('span').hasClass("campaignName-span") == false)
		{	$('#campaignName').after('<span class="campaignName-span error">Complete field.</span>');
		}
	}else{
		document.getElementById('campaignName').style.borderColor = 'green';
		$(".campaignName-span").remove();
	}
	
	if(CallerName  == ""){	
		error = true;
		document.getElementById('CallerName').style.borderColor = 'red';
		
		if ($('span').hasClass("CallerName-span") == false)
		{	$('#CallerName').after('<span class="CallerName-span error">Complete field.</span>');
		}
	}else{
		document.getElementById('CallerName').style.borderColor = 'green';
		$(".CallerName-span").remove();
	}
	
	if(document.getElementById("add-pdf-file").value == ""){
		error = true;
		document.getElementById('add-pdf-file').style.borderColor = 'red';
		
		$(".add-pdf-file-span").remove();
		$('#add-pdf-file').after('<span class="add-pdf-file-span error">Add a pdf file.</span>');
	}else{
		$(".add-pdf-file-span").remove();
		
		if ( document.getElementById('add-pdf-file').files[0].type != 'application/pdf' ){
		    error = true;
			document.getElementById('add-pdf-file').style.borderColor = 'red';
			
			if ($('span').hasClass("add-pdf-file-span") == false)
			{	$('#add-pdf-file').after('<span class="add-pdf-file-span error">Not a pdf file.</span>');
			}
		}else{
			document.getElementById('add-pdf-file').style.borderColor = 'green';
			$(".add-pdf-file-span").remove();
		}
	}
	
	if ( AddList == "" ){
		error = true;
		document.getElementById('Add-List').style.borderColor = 'red';
		
		if ($('span').hasClass("Add-List-span") == false){	
			$('#Add-List').after('<span class="Add-List-span error">Add contacts.</span>');
		}
	}else{
		document.getElementById('Add-List').style.borderColor = 'green';
		$(".Add-List-span").remove();
	}
	
	if(error == false){			
		var formData = new FormData($('#createCampaign-details')[0]);
		//upload
	    $.ajax({
	        type: 'POST',
	        url: '/NewFaxCampaign/add_campaign',
	        data: formData,
	        cache: false,
	        contentType: false,
	        processData: false,
	        success: function(response) {
				response = JSON.parse(response);

				if (response['success'] == true){
					$('#campaign-details').modal('show');
					$('#startCampaign').prop('disabled', true);

					var e = document.getElementById("CallerID");
	  				var CallerID = e.options[e.selectedIndex].value;
					
					$('#modal-CampaignTitle').html('<h3>'+CampaignName+'<h3>');
					$('#modal-CampaignName').html(CampaignName);
					$('#modal-CallerName').html(CallerName);
					$('#modal-CallerId').html(CallerID);
					$('#modal-PDF').html('<span class="glyphicon glyphicon-refresh glyphicon-refresh-animate"></span> <i> Converting to fax..</i>');
					$('#modal-nrContacts').html(response['nrcontacts']);
					$('#modal-CampaignID').html(response['CampaignID']);
					
					//Second ajax for converting pdf
					var formDataPDF = new FormData($('#createCampaign-pdf')[0]);
				    formDataPDF.append("CampaignID",document.getElementById('modal-CampaignID').innerHTML);
				   
				    $.ajax({
				        type: 'POST',
				        url: '/NewFaxCampaign/convert_pdf',
				        data: formDataPDF,
				        cache: false,
				        contentType: false,
				        processData: false,
				        success: function(response) {
							response = JSON.parse(response);
							if (response['success']  == true){
								$('#modal-PDF').html('File converted. <span class="glyphicon glyphicon-ok">');
				   				$('#startCampaign').prop('disabled', false);
				        	}else{
				        		alert("Could not convert file");
				        		 $('#campaign-details').modal('hide');
				        	}
				        },
				        error: function() {
				            alert('Error could not make request.');
				            $('#campaign-details').modal('hide');	
				        },
				    });
	        	}else{
	        		alert(response['error']);
	        	}
	        },
	        error: function() {
	            alert('Error occured.');
	        },
	    });
	}
	return false;
}
