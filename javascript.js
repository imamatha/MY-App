function init() {
      GetProfile();
      gadgets.window.adjustHeight();

}
	  
function GetProfile()
{
  osapi.jive.corev3.people.get({id : '@me'}).execute(function(response) {
        console.log("The User is " + JSON.stringify(response.data));
		});
		 gadgets.window.adjustHeight();
}	  