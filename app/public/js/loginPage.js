var name; //name used to identify current user
var id; //Id used to identify current user
var login; //Object used to hold put data
var password;//password for authentication
$(document).on("click", ".signInBut", function(){
    event.preventDefault();
    var email = $("#emailInput").val().trim();
    var passwordC = $("#passwordInput").val().trim();
    $.get("/api/users/"+email,{
        where:{
            password: passwordC
        }
    }  
    ).then(function(res){
        console.log(res);

        if (res === null){
            $(".loginPageText").text("Email not in our system");
        }
        else{
        
        if (res.password == passwordC){
            console.log("well technically you logged in");
            $(".loginPageText").text("YOU LOGGED IN!");

            login = {
                first_name: res.first_name,
                last_name: res.last_name,
                email: res.email,
                password: res.password,
                isLoggedIn: 1
            }
            
            $.ajax({
                url: '/api/users/'+res.id,
                method: 'PUT',
                data: login

            }).then(function(result){
                console.log(result);
                
            })

            console.log(id);
            window.location.replace("./");
            name = res.email;
        }
        else{
            console.log("wrong password");
            $(".loginPageText").text("Password/Email incorrect");
        }
        }

    })

});


var userId;
var firstName;
var lastName;
var email;
var password; 

if(name){
    

    $.get("/api/users/"+name,
    ).then(function(res){
        console.log(res);

        userId = res.id;
        firstName = res.first_name;
        
        
        checkLogin(userId);
        
    });

}
else{
    console.log("not logged in yet");
}




function checkLogin(id){

    console.log("getting id? " +id);
    $.get("/api/users/",{
        where: 
        {id : id}
    }).then(function(res){
      
        var num = parseInt(id-1);

        console.log(res[num].isLoggedIn);
        if (res[num].isLoggedIn){
        
        console.log(id);
        
        console.log(res[num]);


        loggedIn(firstName);
        }
        else{
            console.log("detected not logged in");
        }
})
}



function loggedIn(name){
    $(".signBut").text("Logout");
    $(".signBut").addClass("logout");
    $("#loginRedir").removeAttr("href");
    $(".regBut").text("Account Page");
    $("#regLink").removeAttr("href").attr("href", "/user");

    $("#username").text("Welcome, " + name);
    console.log(name);
}

$(document).on("click", ".logout", function(){
    
    $.get("/api/users/"+name,
    ).then(function(res){
        console.log(res);

        userId = res.id;
        firstName = res.first_name;
        
        login = {
            first_name: res.first_name,
            last_name: res.last_name,
            email: res.email,
            password: res.password,
            isLoggedIn: 0
        }

        $.ajax({
            url: '/api/users/'+userId,
            method: 'PUT',
            data: login
    
        }).then(function(results){
         
        location.reload();
        console.log("You signed out");
    });
    
        
       
    });
})

