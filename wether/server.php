<?php
    $localhost = "localhost";
    $username = "root";
    $password = "";
    $dbName = "php";
    $connection = mysqli_connect( $localhost, $username, $password, $dbName );

    if( $connection -> connect_error ){
        echo "Connection error with the database :)";
    }

    $url = "https://api.openweathermap.org/data/2.5/weather?lat=51.4800285&lon=-0.6125716&appid=9964006f86896128a73526b1d2b01786";
    $windsor_data = file_get_contents( $url );

    $associative_format = json_decode( $windsor_data, true );

    $weatherDescription = $associative_format['weather'][0]['description'];
    $temperature = ($associative_format['main']['temp'])-273.15;
    $feels_like = ($associative_format['main']['feels_like'])-273.15;
    $pressure = $associative_format['main']['pressure'];
    $humidity = $associative_format['main']['humidity'];
    $windSpeed = $associative_format['wind']['speed'];
    $weatherState = $associative_format['weather'][0]['main'];
    $cityName = $associative_format['name'];


//
    $sql = "INSERT INTO windsor(cityName, weather_description, temperature, feels_like, pressure, humidity, windSpeed, weatherState) VALUE('".$cityName."','".$weatherDescription."','".$temperature."','".$feels_like."','".$pressure."','".$humidity."','".$windSpeed."','".$weatherState."')";

    $sql2 = "DELETE FROM windsor;";

    echo $weatherDescription,"<br>",$weatherState,"<br>",$temperature,"<br>", $feels_like,"<br>", $pressure,"<br>",$humidity,"<br>",$windSpeed;


    
    mysqli_query( $connection, $sql2 );
    mysqli_query( $connection, $sql );

?>