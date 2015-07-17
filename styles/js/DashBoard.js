var globalCampaignId;
$(document).ready(function() {
	$('#campaign-details').modal({
		keyboard: true,
		backdrop: "static",
		show: false,
	});
	
	$('#dashboard-campaigns').on('click','td:first-child',function(event) {

		var tr = $(this).closest('tr');    
 		id = $('#dashboard-campaigns').dataTable().fnGetPosition(tr[0]);
 		
		globalCampaignId = $('#dashboard-campaigns').dataTable().fnGetData(id)[0];
		CampaignStatus = $('#dashboard-campaigns').dataTable().fnGetData(id)[5];
		$('#campaign-details-title').html('<h2>'+$('#dashboard-campaigns').dataTable().fnGetData(id)[1]+'</h2>');
		
		if (CampaignStatus == "Running")
			document.getElementById("changeStatus").innerHTML = "Pause Campaign";
		else
			document.getElementById("changeStatus").innerHTML = "Resume Campaign";
		
		//Show modal
		$('#campaign-details').modal({show:true});
		
		//Request contacts for campaign
		$.post("DashBoard/getCampaignDetails", {CampaignId: globalCampaignId}, function( result ){
			objects = $.parseJSON(result);
			array = new Array();
			
			for (i=0;i<objects.length;++i){
                array.push([objects[i].DestinationNumber,objects[i].ContactName,objects[i].CompanyName,objects[i].SentStatus,objects[i].FaxPages,objects[i].Duration]);
			}
			if ( $.fn.dataTable.isDataTable( '#campaign-details-table' ) ) {
				$('#campaign-details-table').dataTable().fnDestroy();
			}
			$('#campaign-details-table').dataTable(
				{	"bProcessing": true,
					"aaData": array,
					"columns": [
							{ "title": "Destination Number" },
							{ "title": "Contact Name" },
							{ "title": "Company Name", "class": "center" },
							{ "title": "Sent Status", "class": "center" },
							{ "title": "Fax Pages", "class": "center" },
							{ "title": "Duration", "class": "center" }
						]
				});
		});
	});		
	
	//Campaings datatable
	objects = $.parseJSON(document.getElementById("campaigns-json").innerText);
	array = new Array();
			
	for (i=0;i<objects.length;++i){
                array.push([objects[i].CampaignId,objects[i].CampaignName,objects[i].StartDate,objects[i].CallerName,objects[i].CallerId,objects[i].CampaignStatus]);
			}

	$('#dashboard-campaigns').dataTable(
	{	"bFilter": false,
		"bLengthChange": false,
		"aaData": array,
		"iDisplayLength": 10,
		"columns": [{ "title": "CampaignId", "class": "center"},
				    { "title": "CampaignName", "class": "center"},
					{ "title": "StartDate", "class": "center"},
					{ "title": "CallerName", "class": "center"},
					{ "title": "CallerId", "class": "center"},
					{ "title": "CampaignStatus", "class": "center"},
					],
		"columnDefs": [{ "targets": [ 0 ],
            			 "visible": false,
          			   }],
        "order": [[ 0, "desc" ]]
	});	
});

function changeStatus(){
	status = document.getElementById("changeStatus").innerText;
	if (status == "Pause Campaign")
		status = 2;
	else
		status = 1;
	
	$.post("/DashBoard/ChangeStatus",{CampaignStatus: status,CampaignId: globalCampaignId},function(message){
		alert(message);
		location.reload();	
	});
}	