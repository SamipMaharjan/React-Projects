<?php
    $localhost = "localhost";
    $username = "root";
    $password = "";
    $dbName = "php";

    $connection = mysqli_connect( $localhost, $username, $password, $dbName );

    if( $connection -> connect_error ){
        echo "Connection error with the database :)";
    }

    //Storing the url of the api in variable
    $url = "https://api.openweathermap.org/data/2.5/weather?lat=51.4800285&lon=-0.6125716&appid=9964006f86896128a73526b1d2b01786";

    //function to store all relevant data in sql database.
    function store_data_in_database( $url, $connection ){

        //fetching data from the api and storing it in a variable
        $windsor_data = file_get_contents( $url );

        //Converting the data from json format to associative format.  
        $associative_format = json_decode( $windsor_data, true );
        
        //Storing relevant data from the associative array in their respective variables 
        $weatherDescription = $associative_format['weather'][0]['description'];
        $temperature = ($associative_format['main']['temp'])-273.15;
        $feels_like = ($associative_format['main']['feels_like'])-273.15;
        $pressure = $associative_format['main']['pressure'];
        $humidity = $associative_format['main']['humidity'];
        $windSpeed = $associative_format['wind']['speed'];
        $weatherState = $associative_format['weather'][0]['main'];
        $cityName = "Windsor";

        //sql code to insert all the required data into the sql database
        $sql = "INSERT INTO windsor(cityName, weather_description, temperature, feels_like, pressure, humidity, windSpeed, weatherState) VALUE('".$cityName."','".$weatherDescription."','".$temperature."','".$feels_like."','".$pressure."','".$humidity."','".$windSpeed."','".$weatherState."')";

        //sql code to delete all data from the sql database
        $sql2 = "DELETE FROM windsor;";

        mysqli_query( $connection, $sql2 );
        mysqli_query( $connection, $sql );

    }
    store_data_in_database( $url, $connection );

    //stores all the data from the sql database in a variable, in associative format. 
    function get_data_from_database( $connection ){    
        $sql3 = "SELECT * FROM windsor";
        $SQL_data = mysqli_query( $connection, $sql3 );

        return mysqli_fetch_assoc( $SQL_data );
    }
    $required_data = get_data_from_database( $connection );

?>