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
	
	html+=Name:'+name+'<br>;
	html+=Level:'+level+'<br>;
    
});
		 gadgets.window.adjustHeight();
}	
		

gadgets.util.registerOnLoadHandler(init);