<?php
    include_once './db-config.php';
    $recordNewCount     =       $_GET['count'];

    $sql                 =       "SELECT * FROM registration limit $recordNewCount";
    $result              =       mysqli_query($conn, $sql);

        if(mysqli_num_rows($result) > 0) {
           $data   =   mysqli_fetch_all($result,MYSQLI_ASSOC);
           echo json_encode($data);
       }       
 ?>
 
