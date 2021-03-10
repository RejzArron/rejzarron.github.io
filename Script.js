//function multiply(a, b) {
//    return a * b;
//}

//alert(multiply(5, 10));

var database = [
    {
        username: "andrei",
        password: "supersecret"
    },

    {
        username: "sally",
        password: "123"
    },

    {
        username: "ingrid",
        password: "456"
    }
];

var newsFeed = [
    {
        username: "Bobby",
        timeline: "So tired from all that learning!"
    },
    {
        username: "Sally",
        timeline: "Javascript is sooooo cooool!"
    }
];



var userNamePrompt = prompt("What's your username?");
var passwordPrompt = prompt("What's your password?");

signIn(userNamePrompt, passwordPrompt);

function isUserValid(username, password) {
    for (var i=0; i<database.length; i++) {
        if (database[i].username === username && database[i].password === password) {
            return true;
        }
    }
    return false;
}

function signIn(username, password) {
    if (isUserValid(username, password)) {
        console.log(newsFeed);
    }
    else {
        alert("Sorry, wrong username and password");
    }
}






