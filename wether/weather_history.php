<!DOCTYPE html>
<html>
<head>
	<title>My PHP Page</title>
</head>
<body>

    <?php
        // $localhost = "localhost";
        // $username = "root";
        // $password = "";
        // $dbName = "php";

        // $connection = mysqli_connect( $localhost, $username, $password, $dbName );

        // if( $connection  -> connect_error ){
        //     echo "Connection error with the database";
        // }

        function store_data_in_server( $connection ){
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
        store_data_in_server( $connection );
        

        //gets the data from the sql server and stores it in stored_data varibale
        function get_data_from_server( $connection ){
            $sql3 = "SELECT * FROM history;";
            $result = mysqli_query( $connection, $sql3);

            $stored_data = array();

            while( $row = mysqli_fetch_assoc( $result ))
            {
                $stored_data[] = $row; 
            } 
            return $stored_data;
        }
        $stored_data = get_data_from_server( $connection );

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
        
        //displaying the hisotry
        echo '<div class="App2">';
            echo "<div class = 'icon'>";
                echo '<i class="fa-solid fa-arrow-left"></i>';
            echo "</div>";
            foreach( $stored_data as $row )
            { 
                echo '<div class="history">'; 

                    echo "<div class = 'date2[-0'>"; 
                        echo $row["date"]."<br>";
                    echo "</div>";

                    echo "<div class = 'weather_details'>";

                        echo "<div class = 'day'>";

                            $timestamp = strtotime( $row["date"] );
                            $day_of_week = date('l', $timestamp);
                            echo "<div>";
                                echo $day_of_week."<br>";
                            echo "</div>";

                        echo "</div>";

                        echo "<div class = 'additional_details'>";

                            echo "<div class = 'upper_section'>"; 

                                echo "<div class = 'max-temp'>"; 
                                    echo "<span style = 'font-size: 0.8rem';>Avg-temp:</span> ";
                                    echo "<span>".(($row["max_temp"]+$row["min_temp"])/2)."°C</span><br>";
                                echo "</div>"; 
                                
                                echo "<div class = 'precipitation'>"; 
                                    echo "<span style = 'font-size: 0.8rem';>Precipitation: </span>".$row["precipitation"]." mm<br>";
                                echo "</div>"; 

                            echo "</div>";

                            echo "<div class = 'lower_section'>";

                                echo "<div class = 'humidity'>"; 
                                    echo "<span style = 'font-size: 0.8rem';>Humidity: </span>".$row["humidity"]." %<br>";
                                echo "</div>"; 
                                
                                echo "<div class = 'wind'>"; 
                                    echo "<span style = 'font-size: 0.8rem';>Wind: </span>";
                                    echo "<span>".$row["wind"]." km/h</span><br>";
                                echo "</div>"; 

                            echo "</div>    ";

                        echo "</div>"; 

                    echo "</div>";

                echo '</div>';
            }
        echo '</div>';
    ?>

    <script defer src="https://use.fontawesome.com/releases/v5.0.6/js/all.js"></script>
    <script src="https://kit.fontawesome.com/65ed642159.js" crossorigin="anonymous"></script>

</body>
</html>
