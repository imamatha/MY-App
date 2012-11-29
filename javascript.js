function init() {
      getProfile();
      gadgets.window.adjustHeight();

}
	  
function getProfile()
{
  osapi.jive.corev3.people.get({id : '@me'}).execute(function(response) {
        console.log("The User is " + JSON.stringify(response));
		
	var Name=response.resources.html.ref;
	var Level=response.jive.level.name;
    var Status=response.status;
    var Email=response.emails;
	console.log("User Name is"+Name);
	console.log("User Level is"+Level);
	console.log("User Status is"+Status);
		console.log("User Email is"+Email);

		});
		 gadgets.window.adjustHeight();
}	
		

gadgets.util.registerOnLoadHandler(init);