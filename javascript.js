function init() {
      getProfile();
      gadgets.window.adjustHeight();

}
	  
function getProfile()
{
  osapi.jive.corev3.people.get({id : '@me'}).execute(function(response) {
        console.log("The User is " + JSON.stringify(response));
		
	var Name=response.jive.username;
	var Level=response.jive.level.name;
    var Status=response.status;
    var Email=response.emails.value;
	  var type=response.emails.type;
	console.log("User Name is"+Name);
	console.log("User Level is"+Level);
	console.log("User Status is"+Status);
		console.log("User Email is"+Email);
		console.log("User Email is"+type);

		});
		 gadgets.window.adjustHeight();
}	
		

gadgets.util.registerOnLoadHandler(init);