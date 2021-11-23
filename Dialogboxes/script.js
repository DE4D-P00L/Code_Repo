var database = {
    id:"ABCD",
    pass:"1234" 
};

var counter = 1;

while (true){
    var UId = prompt("Enter User Id","ID");
    var UPass = prompt("Enter Password","Password");

    if(UId == database.id && UPass == database.pass){
        document.write("<H1>Welcome</H1>");
        break;
    }

    else{
        if(counter >= 3){
            alert("You can't login");
            break;
        }
        else{
            if(!confirm("Want to try again?")){
                alert("You pressed Cancel")
                break;
            }
        }
    }
    counter++;
}
