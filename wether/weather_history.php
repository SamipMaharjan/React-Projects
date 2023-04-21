<?php
    $localhost = "localhost";
    $username = "root";
    $password = "";
    $dbName = "php";

    $connection = mysqli_connect( $localhost, $username, $password, $dbName );

    if( $connection  -> connect_error ){
        echo "Connection error with thte database";
    }

    $url = "https://api.weatherbit.io/v2.0/history/daily?postal_code=27601&city=windsor&start_date=2023-04-13&end_date=2023-4-20&key=f4c41c4cd95442098fed8f8a81174dcc";

    $weather_history = file_get_contents( $url );

    $sql2 = "DELETE FROM history;";
    mysqli_query( $connection, $sql2 );
    
    for( $i = 0; $i <= 6; $i++ )
    {
        $array = json_decode( $weather_history, true );
        $date = $array["data"][$i]["datetime"];
        $city_name = $array["city_name"];
        $pressure = $array["data"][$i]["pres"];
        $humidty = $array["data"][$i]["rh"];
        $wind = $array["data"][$i]["wind_spd"];
        $max_temp = $array["data"][$i]["max_temp"];
        $min_temp = $array["data"][$i]["min_temp"];
        $precipitation = $array["data"][$i]["precip"];

        $sql = "INSERT INTO history( date, City_name, pressure, humidity, wind, max_temp, min_temp, precipitation ) VALUE ( '".$date."', '".$city_name."', '".$pressure."', '".$humidty."' ,'".$wind."' ,'".$max_temp."' ,'".$min_temp."' ,'".$precipitation."' )";

        mysqli_query( $connection, $sql );
    }
    // echo $date,"<br>";
    // echo $city_name,"<br>";
?>