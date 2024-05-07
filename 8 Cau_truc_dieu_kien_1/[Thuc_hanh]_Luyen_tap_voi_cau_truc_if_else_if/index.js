let userName = prompt("Who's there?", "");
if (userName == "Admin"){
    let pass = prompt("Password?","");
    if (pass == "Khongbiet123"){
        output = "Welcome!"
    }else if (pass == null){
        output = "Canceled.";
    } else {
        output = "Wrong password";
    }
}else if ( userName = null){
    output ="Canceled.";
} else {
    output = "I don't know you!";
}
alert(output)