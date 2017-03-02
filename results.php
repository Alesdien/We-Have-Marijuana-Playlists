<?php
if(!isset($_COOKIE['voto'])){
    header("Location: index.html");
}
include_once ('lib/functions.php');
ini_set ("display_errors", "On"); //PHP_INI_ALL
ini_set("error_reporting", E_ALL);

?>

<!DOCTYPE html>
<html>
<head>


    <!-- Bootstrap Core CSS -->
    <link href="vendor/bootstrap/css/bootstrap.css" rel="stylesheet">
    
        <!-- Theme CSS -->
    <link href="css/styleresults.css" rel="stylesheet">


<title>
You voted!
</title>
</head>
  

   
<body>
 <!-- Navigation -->
    <nav id="mainNav" class="navbar navbar-default navbar-custom navbar-fixed-top">
        <div class="container">
            <!-- Brand and toggle get grouped for better mobile display -->
            <div class="navbar-header page-scroll">
                <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                    <span class="sr-only">Toggle navigation</span> Menu <i class="fa fa-bars"></i>
                </button>
                <a class="navbar-brand page-scroll" href="index.html">5</a>
            </div>

            <!-- Collect the nav links, forms, and other content for toggling -->
            <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
  
            </div>
            <!-- /.navbar-collapse -->
        </div>
        <!-- /.container-fluid -->
    </nav>


<section class="tabella">
        <div class="container">
        <div class="row">
                <div class="col-lg-12">
            <h1>Did you get it right?</h1>
            
            </div>
        </div>

    <div class="container">
        <div class="row">
                <div class="col-lg-12 text-left">
           
          
    <?php
        if(isset($_COOKIE['voto'])){
            $db = open_mysql_connection();
            $sql= "update votazioni set contatore = contatore +1 where id_risposta ='".$_COOKIE['voto']."'";
            $result=mysqli_query($db, $sql);

            $sql= "select * from votazioni";
    		$result=mysqli_query($db, $sql);

            mysqli_close($db);
    		$i=0;
    		while($resultRows[$i]=mysqli_fetch_assoc($result)){
    			$i++;
    		}
            print('<table class="tabella"> <tr><th>Genere</th><th>Voti</th></tr>');
            foreach ($resultRows as $row) {
                print('<tr>');
        		print('<td class="generimusicali">');
        		print($row['nome_risposta']);
        		print('</td>');
                print('<td class="numeri">');
        		print($row['contatore']);
        		print('</td>');
                print('</tr>');
            }
            print('</table>');
            setcookie('voto', '', -1);
        }
        if(isset($_POST['azzera'])){
            $db = open_mysql_connection();
            $sql= "update votazioni set contatore = 0";
            $result=mysqli_query($db, $sql);

            $sql= "select * from votazioni";
    		$result=mysqli_query($db, $sql);

            mysqli_close($db);
    		$i=0;
    		while($resultRows[$i]=mysqli_fetch_assoc($result)){
    			$i++;
    		}
            print('<table <tr><th>Genere</th><th>Voti</th></tr>');
            foreach ($resultRows as $row) {
                print('<tr>');
        		print('<td>');
        		print($row['nome_risposta']);
        		print('</td>');
                print('<td>');
        		print($row['contatore']);
        		print('</td>');
                print('</tr>');
            }
            print('</table>');
            $_POST['azzera'] = "";
        }
    ?>
<!--
</section>
 /.navbar-collapse 
    <form action="results.php" method="post">
        <button type=submit name="azzera" value=1> Azzera </input>

    </form> 
</body> -->
