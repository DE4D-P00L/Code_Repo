<?php
    $servername = "localhost";
    $username = "root";
    $password = "";
    $dbname = "amazon";

    $conn = mysqli_connect($servername, $username, $password, $dbname);

    if(!$conn){
        die("Connection failed");
    }

    if($_SERVER['REQUEST_METHOD']==="POST"){
        $a=$_POST['email'];
        $b=$_POST['password'];
        $h = password_hash($b,PASSWORD_DEFAULT);

        // echo $x." ".$y." ".$hashed_pass;

        $sql2 = "SELECT * FROM employees WHERE email = '$a'";

        $res = mysqli_query($conn,$sql2);
        if(mysqli_num_rows($res)>0){
            // echo "User found!";
            while($row = mysqli_fetch_assoc($res)){
                if(password_verify($b,$row['password'])){
                    header("Location:../index.html");
                }
                else{
                    echo "<script>alert('Wrong Password');</script>";
                    header("Refresh:1;url=../login.html");
                }
            }
        }
        else{
            echo "User not found!";
        }

    }

    mysqli_close($conn);
?>