/*Apps.Js
 A uthor: Hassan Kobeissi;
*
 Web Site Name: AssignmentTwo;
 File Description: To Display Paragraphs, and store user info and output to the console. 
 */
(function () {

	var xhrParagraphContents;
	"use strict"
	//this defines an array of HTML Elements
 //this defines an array of HTML Elements
 //defines your paragraph array
  var paragraphs = [];
  //The data for my pages
    /*Index.html*/
  paragraphs [0] = "";
  /*About.html*/
  paragraphs [2] = "My full  name is Hassan Ghassan Kobeissi. I'm Lebanese but a born Canadian. My favourite sports to play is Soccer, Rugby, Kick Boxing and eating all sorts of fast foods. My current Mission statement? I'd say to learn how to properly use chopsticks and code C#, and Javascript. Long term achievements are to travel for the first timeand win the Muay Thai lightweight championship. My current Mission statement? I'd say to learn how to properly use chopsticks and code C#, and Javascript. Long term achievements are to travel for the first timeand win the Muay Thai lightweight championship.";
  paragraphs [3] = "";
  paragraphs [4] = "A logo is something that well defines you. It's your calling and what best represents your life. I chose SnapChat as my logo because i live life with memorable moments that are worth sharing.";
  /*Contact.html*/
  paragraphs [5] = "Please enter your information here and if one day i learn how to make the submit button work, i'll  get back to you.";  
  /*Projects.html*/ 
  paragraphs [1] = "Assignment One";
  paragraphs [6] = "Index.html - Beggining of HTML5 and CSS";
  paragraphs [7] = "Assignment Two";
  paragraphs [8] = "David Suzuki";
  paragraphs [9] = "Assignment Three";
  paragraphs [10] = "Ford Focus RS 2016";
  paragraphs [11] = "Term Project";
  paragraphs [12] = "Real Estate Agency (ScreenShot)";
  
  //second way to define an array
  //var paragraph = new  array();
  //checks to see if paragraph one exists
  // for (var index = 0; index < Pararray.length; index++)
   //{
     //if (Pararray[index]) {
  //Pararray[index].textContent = paragraphs[index];
  //}
   //}
	function readParagraphData() {

		// data loaded everything is ok

		if ((xhrParagraphContents.readyState === 4) && (xhrParagraphContents.status === 200)) {

			var paragraphContents = JSON.parse(xhrParagraphContents.responseText);

			var paragraphs = paragraphs.about;


			contents.forEach(function (about) {

				var about = paragraphs[2];

				

				console.log(about + " -> " + about);
				//ref to the HTML ELEMENT
				if (documentElements[about]) {

					documentElements[about].innerHTML = about;

				}

			}, this);


		}

	}

	/* 
	
	* This function is to handle the windows load event on which the
	
	* paragraph details will be requested from json file using AJAX call and then process
	
	* the resoponse to use paragraph details.
	
	* 
	
	* @function init
	
	* @returns {void}
	
	*/

	function
init() {


		xhrParagraphContents
			=
			new
				XMLHttpRequest();
		// step 1 - create xhr object

		xhrParagraphContents.open("GET",
			"Scripts/paragraphs.json",
			true);
		// step 2 - open request

		xhrParagraphContents.send(null);
		// step 3 - send request

		xhrParagraphContents.addEventListener("readystatechange",
			readParagraphData);
		// step 4


	}


	// add windows load event handler

	window.addEventListener("load",
		init);


})();