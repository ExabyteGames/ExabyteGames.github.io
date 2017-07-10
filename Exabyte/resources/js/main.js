$(document).ready(function() {


	//The notofications
	setInterval(function() {
    var notoifi = Math.floor((Math.random() * 10) + 1);
    if(notoifi === 1) {
      document.getElementById('notification_SECTION').innerHTML = "Someone Is Looking At Your Profile!<br /> <strong>+1 View.</strong>";
    } if (notoifi === 2) {
      document.getElementById('notification_SECTION').innerHTML = "<strong>@James</strong> Sent You a Message:<br /> Done school, what are you up to?";
    } if (notoifi === 3) {
      document.getElementById('notification_SECTION').innerHTML = "<strong>@Chesea</strong> Sent You a Message:<br/> You wanna hang out l8ter?";
    } if (notoifi === 4) {
      document.getElementById('notification_SECTION').innerHTML = "<strong>@Amber</strong> Sent You a Message:<br /> Just got a new Bracelet! Super awesome! Send u a pic l8ter.";
    } if (notoifi === 5) {
      document.getElementById('notification_SECTION').innerHTML = "<strong>@Anna</strong> Sent You a Message: <br />GOT A NEW FIDGET SPINNER!! xD";
    } if (notoifi === 6) {
      document.getElementById('notification_SECTION').innerHTML = "<strong>@Holden</strong> Liked Your Post";
    } if (notoifi === 7) {
      document.getElementById('notification_SECTION').innerHTML = "<strong>@Dave</strong> Commented On Your Post";
    } if (notoifi === 8) {
      document.getElementById('notification_SECTION').innerHTML = "<strong>@Jamie</strong> Liked Your Post";
    } if (notoifi === 9) {
      document.getElementById('notification_SECTION').innerHTML = "<strong>@Ollie</strong> Sent You A Picture";
    } if (notoifi === 10) {
      document.getElementById('notification_SECTION').innerHTML = "<strong>@Jake</strong> Sup.";
  }
}, 20000);


	// Get the modal
var modal = document.getElementById('myModal');

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
});


//Store section where you buy things!
function three_ninedynine() {
	if (game_amount_cash >= 3.99) {
			game_amount_cash -= 3.99;
			alert("Bought Sucessfully!");
	} else {
		alert("Sorry You Need More Cash!");
	}
};

function nineteen_nindynine() {
	if (game_amount_cash >= 19.99) {
			game_amount_cash -= 19.99;
			alert("Bought Sucessfully!");

	} else {
		alert("Sorry You Need More Cash!");
	}
};

function two_hundo() {
	if (game_amount_cash >= 200) {
			game_amount_cash -= 200;
			alert("Bought Sucessfully!");
	} else {
		alert("Sorry You Need More Cash!");
	}
};

function one_thousand() {
	if (game_amount_cash >= 1000) {
			game_amount_cash -= 1000;
			alert("Bought Sucessfully!");
	} else {
		alert("Sorry You Need More Cash!");
	}
};

function upgrade_cash_income() {
	if (game_amount_cash >= 200) {
		game_amount_cash -= 200;
		alert("Sucessfully Upgraded!");
		game_per_second += 1;
	} else {
		alert("Sorry You Need More Cash!");
	}
};

function upgrade_post_income() {
	if (game_amount_cash >= 200) {
		game_amount_cash -= 200;
		alert("Sucessfully Upgraded!");
		post_amount_cash += 5;
	} else {
		alert("Sorry You Need More Cash!");
	}
};

function upgrade_job_income() {
	if (game_amount_cash >= 200) {
		game_amount_cash -= 200;
		alert("Sucessfully Upgraded!");
		youtuber_job_level_status += 1;
	} else {
		alert("Sorry You Need More Cash!");
	}
}


//posting a note/letter/whaterver

function post_a_letter() {
  var $post = document.getElementById('post_a_letter').value;
  if ($post.length <= 0) {
    alert("Your Post Must Have at Least 5 Characters!");
  } else {
  	game_amount_cash += post_amount_cash;
	// create a new div element 
	// and give it some content 
	//div
	var newDiv = document.createElement("div"); 
	newDiv.setAttribute("class", "post_container_div w3-container w3-card-2 w3-white w3-round w3-margin");
    var newContent = document.createTextNode($post);
	newDiv.appendChild(newContent); //add the text node to the newly created div. 
	//johnyz!

	// add the newly created element and its content into the DOM
	document.getElementById("posting_area_user").appendChild(newDiv);

	document.getElementById('posted_true_when_posted').innerHTML = "Posted!";
    setTimeout(function() {
      document.getElementById('posted_true_when_posted').innerHTML = " ";
    }, 3000);
}
};

function playGame() {
	var logIn = document.getElementById("loginPage");
	logIn.style.display = "block";
};

function closeGamePLAY() {
	var logIn = document.getElementById("loginPage");
	var username = document.getElementById("username").value;
	var userjob = document.getElementById("userjob").value;
	document.getElementById("user_usr_job").innerHTML = userjob;
	document.getElementById("user_usr_username").innerHTML = username;
	if (username.length <= 2 || userjob <= 2) {
		alert("Please Enter A Longer Username Or Password!");
	} else {
		logIn.style.display = "none";
	}
};