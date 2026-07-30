function login(){

    let password = document.getElementById("pass").value;

    if(password === "2829"){

        document.getElementById("login").style.display="none";
        document.getElementById("app").style.display="block";

    }else{

        alert("Wrong Password!");

    }

}

function search(){

    let key = document.getElementById("search").value.toLowerCase();

    let result = document.getElementById("result");

    if(database[key]){

        result.innerHTML =
        "<h2>"+database[key].title+"</h2><p>"+database[key].text+"</p>";

    }else{

        result.innerHTML="<h2>No Result Found</h2>";

    }

}