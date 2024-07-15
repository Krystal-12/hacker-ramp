document.querySelector("button").addEventListener("click",loginfun)

 var userdata =JSON.parse(localStorage.getItem("userarr")) ||[];

function loginfun(){
    var in_mob =document.querySelector("#mob").value;
  
    for(var a=userdata.length-1; a>=0 ;a--)
  {
    if (in_mob ==""){
        alert("enter mobile to login")
        break;
       }
    
     if(in_mob == userdata[a].mob){
           if( checkpass(a)){
             console.log(checkpass(a))
             alert("login successful")
             document.querySelector("#mob").value = ""; 
             document.querySelector("#pass").value = "";

              window.location.href ="D:/pallavi/Hackathon/Myntra_website/myntra_clone/templates/address.html";
              break;
           }else{
             alert("wrong password")
             document.querySelector("#pass").value="";
           }
      }
      else if(a==userdata.length-1){
        
        alert("you dont have account sign up first")
    
        window.location.href="D:/pallavi/Hackathon/Myntra_website/myntra_clone/templates/signup.html"
      }

  }
}

function checkpass(a){

  var in_pass =document.querySelector("#pass").value;

   return ( userdata[a].password == in_pass)
     
}



// HYPERLINKS
document.getElementById('profile').addEventListener('click', function(){
  window.location.href = "D:/pallavi/Hackathon/Myntra_website/myntra_clone/templates/signup.html"
})
document.getElementById('landingPage').addEventListener('click', function(){
  window.location.href = "D:/pallavi/Hackathon/Myntra_website/myntra_clone/templates/index.html"
})
document.getElementById('signUp').addEventListener('click', function(){
  window.location.href = "D:/pallavi/Hackathon/Myntra_website/myntra_clone/templates/signup.html"
})