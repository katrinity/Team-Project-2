
$(document).on("click", ".signInBut", function(){
    $("#emailError").empty();
    event.preventDefault() 
    var emailcheck = $("#inputEmail4").val().trim();
    var passwordcheck = $("#inputPassword4").val().trim();    
    if (emailcheck.indexOf('@') == -1){
        console.log("invalid email");
        
        $("#emailError").text("Email must be valid");
    }
    else{
        
        $.get("api/users",{
            where:{
                email: emailcheck
            }
        }).then(function(res){
            console.log(res);
            $("#emailError").text("Email is already in use!");
            
        })

    }
   
    if (passwordcheck.length < 8){
        console.log("invalid password");
        $("#passErr").text("Password must be above 8 characters");
    }
    else{
        $("#passErr").empty();
    }


    var userData = {    
    first_name: $("#inputF").val().trim(),
    last_name: $("#inputL").val().trim(),
    email: emailcheck,
    password: passwordcheck
    }

    upsertUser(userData);
    
    console.log(userData);

   
    
});


function upsertUser(userData){
    
    $.post("/api/users", userData, function(){
        console.log("user inputted");
        
        
        window.location.replace("./login");
        
    });
}

