function init() {
      getProfile();
      gadgets.window.adjustHeight();

}
	  
function getProfile()
{
  osapi.jive.corev3.people.get({id : '@me'}).execute(function(response) {
        console.log("The User is " + JSON.stringify(response));

/*	var name=response.jive.username;
	var level=response.jive.level.name;
    var status=response.status;
	var dname=response.displayName;
    var Email=[ ];
	var emailId="";
	var emailType="";
	var html="";
	var info="";
	Email=response.emails;
	$.each(Email, function(index, row) {
		emailId=row.value;
		emailType=row.type;
	});

	console.log("User Name is" +name);
	console.log("User Level is" +level);
	console.log("User Status is" +status);
	console.log("User displayName is" +dname);
	console.log("User email is" +emailId);
	console.log("User type is" +emailType);
	info += '<center>';
	info += '<table border="1">';
	info += '<thead>';
	info += '<tr>';
	info += '<th>Name</th>';
	info += '<th>Level</th>';
	info += '<th>Status</th>';
	info += '<th>Display name</th>';
	info += '<th>Email ID</th>';
	info += '<th>Email Type</th>';
	info += '</tr>';
	info += '</thead>';
	
	info += '<tbody>';
	info += '<tr>';
	info += '<td>'+name+'</td>';
	info += '<td>'+level+'</td>';
	info += '<td>'+status+'</td>';
	info += '<td>'+dname+'</td>';
	info += '<td>'+emailId+'</td>';
	info += '<td>'+emailType+'</td>';
	info += '</tr>';
	info += '</tbody>';

	info += '</table>';	
	info += '</center>';
	console.log("info is" +info);
	$("#profile").html(info);
	 gadgets.window.adjustHeight();*/
    
});
		
}	
gadgets.util.registerOnLoadHandler(init);