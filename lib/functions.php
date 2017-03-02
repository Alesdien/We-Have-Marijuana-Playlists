<?php
function open_mysql_connection() {
//apre una connessione con il DBMS Mysql le cui coordinate sono definite in conf.php
    include_once('conf/conf.php');
    return mysqli_connect(myhost, myuser, mypsw, mydb);
}
?>
