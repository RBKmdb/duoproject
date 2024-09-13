console.log("hello");


var x=$("#login")
var y=$("#register")

console.log(localStorage);
function strongPassword(password) {       
    return    password.length >= 8 &&   /[A-Z]/.test(password) && /[a-z]/.test(password) && /[$!;?§]/.test(password)
        
    }
function login(){
    x.css({'left':'4px','opacity':'1'})
    y.css({'right':'-520px','opacity':'0'})

}


function register(){
    x.css({'left':'-510px','opacity':'0'})
    y.css({'right':'5px','opacity':'1'})
}
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const nameregex = /^[A-Za-z]+$/;

function checklogin(){
    var email = $('#email').val(); 
    var password = $('#password').val();
    var x=$('#Role').val()
   console.log(email,password);
   
    if (!emailRegex.test(email)) {        
        alert("Please enter a valid email.");
        return false;
    }
    if (!strongPassword(password)) {
        
        alert("Password should be strong enough, try again!.");
        return false;
    }
    if(x==="User"){
        window.location.href="index.html"
    }
    if(x==="Admin"){
        window.location.href="index.html"
    }
    
    return true
}



function checkregister(){
    var x=$('#Role').val()
    var email = $('#email'); 
     var password = $('#password');
    var firstname=$('#first')
    var lastname=$('#last')
   
    if (!emailRegex.test(email.val())) {
        alert("Please enter a valid email.");
        return false;
    }
    if (!strongPassword(password)) {
        alert("Password should be strong enough, try again!.")

        return false;
    }
    if(nameregex.test(firstname.val()) === false){
        alert("Your name must only contains characters.");
        return false;
    }
    if(nameregex.test(lastname.val())===false){
        alert("Your lastname must only contains characters.");
        return false;
    }
    if(x==="User"){
        window.location.href="index.html"
    }
    if(x==="Admin"){
        window.location.href="index.html"
    }
    
    
    return true
    
}

$("#log").on("click", function () {
    checklogin();
    ;
    
    
  });
  
  $("#reg").on("click", function () {
      checkregister();
    });
    let i = 0;



  