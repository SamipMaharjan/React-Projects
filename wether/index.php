<?php

 $host = "localhost";
 $username = "root";
 $password = "";
 $dbname = "php";
 $connection = mysqli_connect( $host, $username, $password, $dbname );

 if ($connection -> connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

 $url = 'http://api.openweathermap.org/geo/1.0/direct?q=windsor&appid=9964006f86896128a73526b1d2b01786';

 $API_data = file_get_contents( $url );

 $array = json_decode( $API_data, true );

 $name = $array[0]['name'];
 $lat = $array[0]['lat'];
 $lon = $array[0]['lon'];
 $country = $array[0]['country'];
 $state = $array[0]['state'];

 $sql = "INSERT INTO testing(name, longitude, latitude, country, state) VALUES('".$name."', '".$lat."', '".$lon."', '".$country."', '".$state."' )";

 mysqli_query( $connection, $sql );

 echo "Employee Data Inserted";

//  echo $array[0]['name'];      // output: Windsor
//  echo $array[0]['lat'];       // output: 51.4800285
//  echo $array[0]['lon'];       // output: -0.6125716
//  echo $array[0]['country'];   // output: GB
//  echo $array[0]['state'];     // output: England
 

?>