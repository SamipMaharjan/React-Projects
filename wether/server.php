<?php
    $localhost = "localhost";
    $username = "root";
    $password = "";
    $dbName = "php";

    $connection = mysqli_connect( $localhost, $username, $password, $dbName );

    if( $connection -> connect_error ){
        echo "Connection error with the database :)";
    }

    if ( isset($_GET['search-button']) ) {
        $Searched_City_Name = $_GET['search-button'];

        //so wha tis the next thing I must do then, I probably must make use of this city name that took me a year to fetch so let me do just that. Look You still have a long way to go. 

        header("Location: SamipMaharjan_2329533.php");
        exit();
        // 
      }


    //Storing the url of the api in variable
    $url = "https://api.openweathermap.org/data/2.5/weather?lat=51.4800285&lon=-0.6125716&appid=9964006f86896128a73526b1d2b01786";

    //function to store all relevant data in sql database.
    function store_data_in_database_for_city( $url, $connection ){

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
    store_data_in_database_for_city( $url, $connection );

    //stores all the data from the sql database in a variable, in associative format. 
    function get_data_from_database_for_city( $connection ){    
        $sql3 = "SELECT * FROM windsor";
        $SQL_data = mysqli_query( $connection, $sql3 );

        return mysqli_fetch_assoc( $SQL_data );
    }
    $required_data = get_data_from_database_for_city( $connection );


    function store_data_in_server_for_history( $connection ){
        $end_date = date("Y-m-d"); //Getting the current date
        $start_date = date("Y-m-d", strtotime("-7 days")); // Get the date 7 days before the current date

        $url = "https://api.weatherbit.io/v2.0/history/daily?postal_code=27601&city=windsor&start_date=".$start_date."&end_date=".$end_date."&key=f4c41c4cd95442098fed8f8a81174dcc";

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
    }
    store_data_in_server_for_history( $connection );
    

    //gets the data from the sql server and stores it in stored_data varibale
    function get_data_from_server_for_history( $connection ){
        $sql3 = "SELECT * FROM history;";
        $result = mysqli_query( $connection, $sql3);

        $stored_data = array();

        while( $row = mysqli_fetch_assoc( $result ))
        {
            $stored_data[] = $row; 
        } 
        return $stored_data;
    }
    $stored_data = get_data_from_server_for_history( $connection );

    //Loop for sorting the dates in a descending order. 
    for ( $h = 0; $h < 6; $h++ )
    {
        for( $i = 0; $i < 6; $i++ )
        {      
            $date1 = strtotime( $stored_data[$i]["date"] );
            $date2 = strtotime( $stored_data[$i+1]["date"] );
            if ( $date1 < $date2)
            {
                $swap = $stored_data[$i];
                $stored_data[$i] = $stored_data[$i+1];
                $stored_data[$i+1] = $swap; 
            }
        }
    }
    
?>