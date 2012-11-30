function init() {
      getProfile();
      gadgets.window.adjustHeight();

}
	  
function getProfile()
{
  osapi.jive.corev3.people.get({id : '@me'}).execute(function(response) {
        console.log("The User is " + JSON.stringify(response));
		
	var name=response.jive.username;
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
	info += '<tr><th>Name:</th></tr>';
	info +='<tr><th>Level:</th></tr>';
	info +='<tr><th>Status:</th></tr>';
	info +='<tr><th>Display name:</th></tr>';
	info +='<tr><th>Email ID:</th></tr>';
	info +='<tr><th>Email Type:</th></tr>';
	info += '<tr><td>'+name+'</td></tr>';
	info += '<tr><td>'+level+'</td></tr>';
	info += '<tr><td>'+status+'</td></tr>';
	info += '<tr>><td>'+dname+'</td></tr>';
	info += '<tr><td>'+emailId+'</td></tr>';
	info += '<tr><td>'+emailType+'</td></tr>';
	info += '</table>';	
	info += '</center>';
	console.log("info is" +info);
	$("#profile").html(info);
	 gadgets.window.adjustHeight();
    
});
		
}	
gadgets.util.registerOnLoadHandler(init);