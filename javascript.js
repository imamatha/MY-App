function init() {
      $("#Press").click(GetProfile);
      gadgets.window.adjustHeight();

}
	  
function GetProfile()
{
  osapi.jive.corev3.people.get({id : '@me'}).execute(function(response) {
        console.log("The User is " + JSON.stringify(response));
		});
		 gadgets.window.adjustHeight();
}	  