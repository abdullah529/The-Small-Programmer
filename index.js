firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.

    document.getElementById("user_div").style.display = "block";
    document.getElementById("login_div").style.display = "none";

    var user = firebase.auth().currentUser;
    if(user != null){

      var email_id = user.email;
      var email_verified = user.emailVerified;
	  if(email_verified){
		  window.open("Home.html",'_top');
	  }else{
		  SendVerification();
	  }
    }

  } else {
    // No user is signed in.

    document.getElementById("user_div").style.display = "none";
    document.getElementById("login_div").style.display = "block";

  }
});

function Login(){

  var userEmail = document.getElementById("login_email").value;
  var userPass = document.getElementById("login_password").value;
  firebase.auth().signInWithEmailAndPassword(userEmail, userPass).catch(function(error) {
    var errorCode = error.code;
    var errorMessage = error.message;
	window.alert("Error : " + errorMessage);
  });
}
function createAccount(){
	window.open("Register Firebase.html",'_top');
}
function Back(){
	window.open("index.html",'_top');
}
function Register(){
	var userEmail = document.getElementById("register_email").value;
	var userPass = document.getElementById("register_password").value;
	firebase.auth().createUserWithEmailAndPassword(userEmail, userPass).catch(function(error) {
		var errorCode = error.code;
		var errorMessage = error.message;
		window.alert("Error : " + errorMessage);
	});
}
function SendVerification(){
	var user = firebase.auth().currentUser;
	user.sendEmailVerification().then(function() {
		window.alert("Please verify in your account.");
	}).catch(function(error) {
		window.alert("Error : "+error.errorMessage);
	});
}
function logout(){
  firebase.auth().signOut();
  window.open("index.html",'_top');
}
