var database = {
    id:"ABCD",
    pass:"1234" 
};

var counter = 1;

while (true){
    var UId = prompt("Enter User Id","ID");
    var UPass = prompt("Enter Password","Password");

    if(UId == database.id && UPass == database.pass){
        document.write("<H1 style = '{text-align:center;}'>Welcome</H1>");
        break;
    }

    else{
        if(counter >= 3){
            alert("You failed 3 times");
            break;
        }
        else{
            if(!confirm("Want to try again?")){
                break;
            }
        }
    }
    counter++;
}
