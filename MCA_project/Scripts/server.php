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
        $x=$_POST['name'];
        $y=$_POST['email'];
        $z=$_POST['password'];
        $hashed_pass = password_hash($z,PASSWORD_DEFAULT);

        // echo $x." ".$y." ".$hashed_pass;
        $sql3 = "SELECT * FROM employees WHERE email = '$y'";
        $result = mysqli_query($conn,$sql3);

        if(mysqli_num_rows($result)>0){
            // echo "User exist";
            echo "<script>alert('User already exist');</script>";
            header("Refresh:1;url=../login.html");
        }
        else{
            $sql = "INSERT INTO employees(sno, name, email, password) VALUES (NULL, '$x','$y','$hashed_pass')";
            if(mysqli_query($conn,$sql)){
                header("Location:../login.html");
            }
            else{
                echo "<script>alert('Try again');</script>";
            }
        }
    }

    mysqli_close($conn);
?>